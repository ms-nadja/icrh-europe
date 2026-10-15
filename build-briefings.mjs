// Renders the webinar briefings in webinars/briefings/*.md to branded PDFs
// in assets/briefings/, and prints the HTML used on events.html.
// Usage: node build-briefings.mjs            (writes PDFs)
//        node build-briefings.mjs --html     (also prints the on-page HTML for each briefing)
import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(root, 'webinars', 'briefings');
const outDir = path.join(root, 'assets', 'briefings');
fs.mkdirSync(outDir, { recursive: true });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const inline = (s) => esc(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');

// Minimal Markdown → HTML for the briefing format: # title, ## headings, paragraphs, "- " lists, *italic*.
function mdToHtml(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  let title = '';
  const out = [];
  let list = null;
  const flush = () => { if (list) { out.push('<ul>' + list.map((li) => `<li>${inline(li)}</li>`).join('') + '</ul>'); list = null; } };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    if (line.startsWith('# ')) { flush(); title = line.slice(2); continue; }
    if (line.startsWith('## ')) { flush(); out.push(`<h3>${inline(line.slice(3))}</h3>`); continue; }
    if (line.startsWith('- ')) { (list ||= []).push(line.slice(2)); continue; }
    flush();
    if (/^\*[^*]+\*$/.test(line)) out.push(`<p class="source">${inline(line.slice(1, -1))}</p>`);
    else out.push(`<p>${inline(line)}</p>`);
  }
  flush();
  return { title, body: out.join('\n') };
}

const logo = 'data:image/png;base64,' + fs.readFileSync(path.join(root, 'assets/img/icrh-logo.png')).toString('base64');

const pdfPage = (title, body) => `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@600;700&family=Inter:wght@400;600&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 18mm 20mm 20mm; }
  body { font-family: 'Inter', sans-serif; color: #182437; font-size: 10.5pt; line-height: 1.6; margin: 0; }
  header { display: flex; align-items: center; gap: 10px; padding-bottom: 12px; border-bottom: 2px solid #F2B743; margin-bottom: 22px; }
  header img { width: 34px; height: 34px; }
  header span { font-family: 'Space Grotesk', sans-serif; font-weight: 600; color: #173A63; font-size: 12pt; }
  header small { margin-left: auto; font-family: 'IBM Plex Mono', monospace; font-size: 8pt; letter-spacing: 0.06em; text-transform: uppercase; color: #4E5C72; }
  h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 700; color: #173A63; font-size: 22pt; line-height: 1.15; letter-spacing: -0.02em; margin: 0 0 18px; }
  h3 { font-family: 'Space Grotesk', sans-serif; font-weight: 600; color: #225491; font-size: 13pt; margin: 20px 0 8px; }
  p { margin: 0 0 10px; }
  ul { margin: 0 0 12px; padding-left: 18px; }
  li { margin-bottom: 5px; }
  .source { font-family: 'IBM Plex Mono', monospace; font-size: 8pt; color: #4E5C72; margin-top: 18px; padding-top: 10px; border-top: 1px solid #C4CEE2; }
</style></head><body>
<header><img src="${logo}" alt=""><span>ICRH Europe</span><small>Webinar briefing</small></header>
<h1>${esc(title)}</h1>
${body}
</body></html>`;

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.md')).sort();
const browser = await puppeteer.launch();
const page = await browser.newPage();
for (const f of files) {
  const slug = f.replace(/\.md$/, '');
  const { title, body } = mdToHtml(fs.readFileSync(path.join(srcDir, f), 'utf8'));
  await page.setContent(pdfPage(title, body), { waitUntil: 'load', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  const outFile = path.join(outDir, `${slug}.pdf`);
  await page.pdf({ path: outFile, format: 'A4', printBackground: true, preferCSSPageSize: true });
  const pages = (fs.readFileSync(outFile, 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  console.log(`${slug}.pdf – ${pages} page(s)`);
  if (process.argv.includes('--html')) console.log(`<!-- ${slug} -->\n${body}\n`);
}
await browser.close();
