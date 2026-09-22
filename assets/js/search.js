const SEARCH_INDEX = [
  { title: 'Home', meta: 'A cross-border network for internal communication research', badge: 'Page', url: 'index.html' },
  { title: 'Publications', meta: 'Books, industry reports and academic journal articles', badge: 'Page', url: 'publications.html' },
  { title: 'Research', meta: 'Two active research programmes – Global Excellence Study and Organisational Resilience', badge: 'Page', url: 'research.html' },
  { title: 'About', meta: 'The Internal Communication Research Hub, its leadership and the ICRH-Europe volunteers', badge: 'Page', url: 'about.html' },

  { title: 'Who we are', meta: 'Academics and practitioners working on internal communication', badge: 'About', url: 'index.html#who-we-are' },
  { title: 'Publications', meta: 'Books, journal articles and industry reports from across the network', badge: 'What we do', url: 'index.html#publications' },
  { title: 'Events', meta: 'Live and recorded webinars, and a growing archive of past talks', badge: 'What we do', url: 'index.html#events' },
  { title: 'Research', meta: 'Global Excellence Study and Organisational Resilience programmes', badge: 'What we do', url: 'research.html' },
  { title: 'ICRH Global Excellence Study', meta: 'A mixed-method study of excellence in internal communication across five regions', badge: 'Research', url: 'research-global-excellence-study.html' },
  { title: 'ICRH-Europe research project', meta: 'Internal Communication and Organisational Resilience – interviews and focus groups across 12 European countries', badge: 'Research', url: 'research-icrh-europe-project.html' },
  { title: 'Wider ICRH community', meta: 'The global ICRH network beyond Europe', badge: 'About', url: 'index.html#community' },
  { title: 'Supporters', meta: 'PR Academy and allthingsIC', badge: 'About', url: 'index.html#supporters' },
  { title: 'Valuing Internal Communication', meta: 'Featured report, free to download', badge: 'Featured report', url: 'index.html#report' },
  { title: 'Join the network', meta: 'Get publications, event invitations and research updates by email', badge: 'Newsletter', url: 'index.html#join' },

  { title: 'Dr Kevin Ruck', meta: 'Lead, ICRH-Europe · UK', badge: 'Leadership', url: 'about.html#kevin-ruck' },
  { title: 'Linjuan Rita Men', meta: 'Public Relations Professor, ICRH · University of Florida, USA', badge: 'Leadership', url: 'about.html#linjuan-rita-men' },

  { title: 'Edyta Blachowska', meta: 'Director of Internal Communication, Bank Gospodarstwa Krajowego · Warsaw, Poland', badge: 'Team', url: 'about.html#edyta-blachowska' },
  { title: 'Ada Borucka', meta: 'Founder & Managing Partner, iComms/PinPoint · Poznań, Poland', badge: 'Team', url: 'about.html#ada-borucka' },
  { title: 'Nora Denner', meta: 'Interim Professor for Strategic Communication, LMU München · München, Germany', badge: 'Team', url: 'about.html#nora-denner' },
  { title: 'Sabine Einwiller', meta: 'Professor of Public Relations Research, University of Vienna · Vienna, Austria', badge: 'Team', url: 'about.html#sabine-einwiller' },
  { title: 'Elisenda Estanyol i Casals', meta: 'Academic Director, UOC · Barcelona, Spain', badge: 'Team', url: 'about.html#elisenda-estanyol-i-casals' },
  { title: 'Jenni Field', meta: 'Founder and CEO, Redefining Communications · UK', badge: 'Team', url: 'about.html#jenni-field' },
  { title: 'Joan Cuenca Fontbona', meta: 'Professor and Researcher, Ramon Llull University · Barcelona, Spain', badge: 'Team', url: 'about.html#joan-cuenca-fontbona' },
  { title: 'Mats Heide', meta: 'Professor, Department of Strategic Communication, Lund University · Lund, Sweden', badge: 'Team', url: 'about.html#mats-heide' },
  { title: 'Jeanne Link', meta: 'Research Associate, Universität Leipzig · Leipzig, Germany', badge: 'Team', url: 'about.html#jeanne-link' },
  { title: 'Vibeke Thøis Madsen', meta: 'Senior Associate Professor, DMJX · Aarhus, Denmark', badge: 'Team', url: 'about.html#vibeke-thois-madsen' },
  { title: 'Rachel Miller', meta: 'Founder, All Things IC · UK', badge: 'Team', url: 'about.html#rachel-miller' },
  { title: 'Begoña Echaburu Mulet', meta: 'Research Team Manager, MIK Research Center-Mondragon University · Basque Country, Spain', badge: 'Team', url: 'about.html#begona-echaburu-mulet' },
  { title: 'Louis de Schorlemer', meta: 'Managing Partner, Corporate Diplomat & Lecturer, Luxembourg School of Business · Luxembourg', badge: 'Team', url: 'about.html#louis-de-schorlemer' },
  { title: 'Holger Sievert', meta: 'Study Dean and Professor, Macromedia University · Cologne, Germany', badge: 'Team', url: 'about.html#holger-sievert' },
  { title: 'Charlotte Simonsson', meta: 'Associate Professor, Lund University · Lund, Sweden', badge: 'Team', url: 'about.html#charlotte-simonsson' },
  { title: 'Elena Sinitsyna', meta: 'PhD Candidate, HSE University · Moscow, Russia', badge: 'Team', url: 'about.html#elena-sinitsyna' },
  { title: 'Julia Stranzl', meta: 'Assistant Professor, University of Vienna · Vienna, Austria', badge: 'Team', url: 'about.html#julia-stranzl' },
  { title: 'Ana Tkalac Verčič', meta: 'Professor, University of Zagreb · Zagreb, Croatia', badge: 'Team', url: 'about.html#ana-tkalac-vercic' },
  { title: 'Christopher Wade', meta: 'VP Internal & Employee Engagement Communications, Fresenius Medical Care · Berlin, Germany', badge: 'Team', url: 'about.html#christopher-wade' },
  { title: 'Ingrid Wahl', meta: 'Senior Researcher, University of Vienna · Vienna, Austria', badge: 'Team', url: 'about.html#ingrid-wahl' },

  { title: 'Books', meta: '4 books from across the network', badge: 'Publications', url: 'publications.html#books' },
  { title: 'Reports', meta: 'Freely available industry reports', badge: 'Publications', url: 'publications.html#reports' },
  { title: 'Journal articles', meta: 'Academic journal articles on internal communication', badge: 'Publications', url: 'publications.html#journal-articles' },

  { title: 'Communicative organizations: how to create better relationships and trust', meta: 'Heide, M., Simonsson, C., and Andersson, R. – 2026 · Liber', badge: 'Book', url: 'publications.html#books-1' },
  { title: 'Successful Change Communication: How to Inform, Involve and Inspire Employees', meta: 'Miller, R. – 2026 · Kogan Page', badge: 'Book', url: 'publications.html#books-2' },
  { title: 'Digital Communications at Work: Designing Channels for Employee Engagement and Experience', meta: "O'Dea, S. and Philips, J. – 2026 · Kogan Page", badge: 'Book', url: 'publications.html#books-3' },
  { title: 'Exploring Internal Communication: Towards Dialogue in the Workplace', meta: 'Ruck, K. and Flegg, M. – 2026 · 5th Edition, Routledge', badge: 'Book', url: 'publications.html#books-4' },
  { title: 'Accessible Communications: Create Impact, Avoid Missteps and Build Trust', meta: 'Riemers, L. and Hamel-Nelis, M. – 2025 · Kogan Page', badge: 'Book', url: 'publications.html#books-5' },
  { title: 'Employees and Internal Social Media: The Voice of Coworkers in an Organization', meta: 'Madsen, V. T. – 2025 · Routledge', badge: 'Book', url: 'publications.html#books-6' },
  { title: 'Internal Communication in Times of Crisis: How to Secure Employee Trust, Support and Advocacy in Crisis Situations', meta: 'Arnot, A. – 2025 · Kogan Page', badge: 'Book', url: 'publications.html#books-7' },
  { title: 'People-Centric Internal Communication: Improving Engagement and Retention in the Workforce', meta: 'Smith, L. and Bridger, E. – 2025 · Kogan Page', badge: 'Book', url: 'publications.html#books-8' },
  { title: 'The Routledge Handbook of Employee Communication and Organizational Processes', meta: 'Kim, S., Buzzanell, P. M., Mazzei, A. and Kim, J-N. (eds.) – 2025 · Routledge', badge: 'Book', url: 'publications.html#books-9' },

  { title: 'The Definitive Annual Report on Employee Experience and Internal Comms Trends', meta: 'Gallagher – 2026', badge: 'Report', url: 'publications.html#reports-1' },
  { title: 'IC Index 2026: The reality check', meta: 'IoIC – 2026', badge: 'Report', url: 'publications.html#reports-2' },
  { title: 'The future of Internal Communication: Opportunity for internal communicators in the future of work', meta: 'IoIC – 2026', badge: 'Report', url: 'publications.html#reports-3' },
  { title: 'Internal Communication in Denmark – where does the profession stand today, and where is it heading?', meta: 'Resonans Partners – 2026', badge: 'Report', url: 'publications.html#reports-4' },
  { title: 'Credibility Gap', meta: 'OAK Engage – 2026', badge: 'Report', url: 'publications.html#reports-5' },
  { title: 'Employee Communications Report: Featuring findings and insights from the State of the Sector 2024-25 survey. Global edition', meta: 'Gallagher – 2025', badge: 'Report', url: 'publications.html#reports-6' },
  { title: 'IC Index 2025: Leading with care and connection', meta: 'Ipsos Karian and Box and IoIC – 2025', badge: 'Report', url: 'publications.html#reports-7' },

  { title: 'Does more say more? Organizational heritage storytelling and the amount of historic information', meta: 'Brugman, B. C. and Groten, M. – 2026 · Corporate Communications: An International Journal', badge: 'Article', url: 'publications.html#articles-1' },
  { title: 'Perspectives and Challenges of Internal Communication: Insights from Senior Management', meta: 'Cuenca-Fontbona, J., Estanyol, E. and Echaburu-Mulet, B. – 2026 · International Journal of Strategic Communication', badge: 'Article', url: 'publications.html#articles-2' },
  { title: 'The development of internal communication in Norway, 1960–1990: from organised to extended liberal (late) modernity', meta: 'Dahlen, O. P. – 2026 · Corporate Communications: An International Journal', badge: 'Article', url: 'publications.html#articles-3' },
  { title: 'Feeling connected and informed through informal communication: a quantitative survey on the perceived functions of informal communication in organizations', meta: 'Denner, N., Koch, T., Viererbl, B. and Ernst, A. – 2025 · Journal of Communication Management, Vol. 29 No. 1, pp. 71-93', badge: 'Article', url: 'publications.html#articles-4' },
  { title: "Communication managers' perspective on informal communication: risks, opportunities and challenges of remote work environments", meta: 'Denner, N., Liebold, C., Viererbl, B and Koch, T. – 2026 · Corporate Communications: An International Journal', badge: 'Article', url: 'publications.html#articles-5' },
  { title: 'Puzzlements, Proposals, and Questions: Constructing Communicative Coworkership on Internal Social Media', meta: 'Gode, H. E. and Madsen, V. T. – 2026 · International Journal of Business Communication', badge: 'Article', url: 'publications.html#articles-6' },
  { title: 'Communicating appreciation in the workplace: importance and perception of appreciation from managers and co-workers and its effects on organisational citizenship behaviour', meta: 'Hagelstein, J., Wahl, I., Stranzl, J., Einwiller, S. and Ruppel, C. – 2026 · Journal of Communication Management', badge: 'Article', url: 'publications.html#articles-7' },
  { title: 'Informal communication in hybrid working life: a blind spot in internal communication', meta: 'Heide, M. and Simonsson, C. – 2026 · Corporate Communications: An International Journal', badge: 'Article', url: 'publications.html#articles-8' },
  { title: '"Shouting straight into space": enablers and barriers of voicing in digital meetings', meta: 'Holster, E., Nikolic, M. and Heide, M. – 2026 · Corporate Communications: An International Journal', badge: 'Article', url: 'publications.html#articles-9' },
  { title: 'Perceptions of informal communication in the workplace: why chatty colleagues seem friendly but less competent', meta: 'Koch, T., Haber, S., Denner, N. and Viererbl, B. – 2026 · Journal of Communication Management', badge: 'Article', url: 'publications.html#articles-10' },
  { title: 'Nordic Values in Organizational Communication Maturity: Conceptualization and Measurement', meta: 'Miller, V. D., Shank, S. E., Jr, Johansson, C. and Grandien, C. – 2026 · International Journal of Strategic Communication', badge: 'Article', url: 'publications.html#articles-11' },
  { title: 'Employee activism: A situational and communicative perspective', meta: 'Ned, N-S., Wahl, I. and Einwiller, S. A. – 2026 · Journal Of Marketing Communications', badge: 'Article', url: 'publications.html#articles-12' },
  { title: 'Seeking social change from the inside out: a cross-country study on employee activism', meta: 'Ravazzani, S., Jin, Y., Conti, S., Rachwalski, A. and Robinson, S. G. – 2026 · Journal of Communication Management', badge: 'Article', url: 'publications.html#articles-13' },
  { title: 'Bouncing Along: Exploring dynamic internal narratives and interactions that enhance organisational resilience in a permacrisis world', meta: 'Ruck, K., Madsen, V. and Borucka, A. – 2026 · EUPREA Congress Short-Length Paper', badge: 'Article', url: 'publications.html#articles-14' },
  { title: 'From process to outcomes: rethinking the effectiveness of internal communication', meta: 'Sinitsyna, E. and Argade, P. – 2026 · International Journal of Organization Theory & Behavior', badge: 'Article', url: 'publications.html#articles-15' },
  { title: '"It leaves a bitter aftertaste": uncovering the tensions of employees\' communication engagement and impression vulnerability on social media', meta: 'Sossini, A. – 2026 · Journal of Communication Management', badge: 'Article', url: 'publications.html#articles-16' },
  { title: 'Appreciation From a Management Perspective: Exploring the Complexity of Managers Communication Responsibility Through a Diary Study', meta: 'Stranzl, J., Mazzei, A., Simonsson, C. and Verčič, A. T. – 2026', badge: 'Article', url: 'publications.html#articles-17' },
  { title: 'Co-creating an appreciative working climate: discussing reasons for appreciation, forms and roles from a communication perspective', meta: 'Stranzl, J. and Ruppel, C. – 2025 · Journal of Communication Management, Vol. 29 No. 2, pp. 274-296', badge: 'Article', url: 'publications.html#articles-28' },
  { title: 'Service logic – the key to strategic listening: introducing the framework of strategic listening for value creation', meta: 'Svingstedt, A. and Heide, M. – 2025 · Journal of Communication Management, Vol. 29 No. 5, pp. 18-38', badge: 'Article', url: 'publications.html#articles-29' },
  { title: 'Developing the Digital Communication Acceptance Scale (DICAS) for Measuring Employee Acceptance of Digital Communication Technologies in the Workplace', meta: 'Tkalac Verčič, A., Einwiller, S., Tench, R. and Verčič, D. – 2025 · International Journal of Business Communication', badge: 'Article', url: 'publications.html#articles-30' },
  { title: 'The internal communication paradox: Balancing digital convenience with face-to-face satisfaction', meta: 'Tkalac Verčič, A. and Verčič, D. – 2025 · Public Relations Review, Vol. 51, Issue 3, 102587', badge: 'Article', url: 'publications.html#articles-31' },
  { title: 'Situational dependence of internal communication channels', meta: 'Tkalac Verčič, A., Verčič, D. and Gerdina, S. – 2025 · Public Relations Review, 51(4)', badge: 'Article', url: 'publications.html#articles-32' },
  { title: 'Internal communication satisfaction: Introducing the ICSQ short-form scale (ICSQ-S)', meta: 'Verčič, A. T. and Vokić, N. P. – 2026 · Public Relations Review', badge: 'Article', url: 'publications.html#articles-18' },
  { title: 'How Do Digital Tools Change the Way Employees Communicate at Work?', meta: 'Verčič, A. T. and Verčič, D. – 2026 · Institute for Public Relations (IPR)', badge: 'Article', url: 'publications.html#articles-19' },
  { title: 'Internal Communication Satisfaction, Engagement, and Life Satisfaction: A Process Model', meta: 'Verčič, A. T. and Verčič, D. – 2026 · Journal of Public Relations Research', badge: 'Article', url: 'publications.html#articles-20' },
  { title: 'DEI communication and climate for inclusion in Germany and the U.S.: The mediating role of managerial integrity', meta: 'Wahl, I. and Einwiller, S. A. – 2026 · Public Relations Review', badge: 'Article', url: 'publications.html#articles-21' },
  { title: 'Comparing employee appreciation in Germany and the US', meta: 'Wahl, I. and Einwiller, S. A. – 2026 · Journal of Communication Management', badge: 'Article', url: 'publications.html#articles-22' },
  { title: "Fostering Employees' Organizational Identification and Organizational Citizenship Behavior Through Diversity Communication", meta: 'Wahl, I., Einwiller, S. A. and Bartels, J. – 2026 · Management Communication Quarterly', badge: 'Article', url: 'publications.html#articles-23' },
  { title: 'How to Measure the Appreciation Climate in an Organization: Development and Validation of the Organizational Appreciation Climate Scale (OACS)', meta: 'Wahl, I., Einwiller, S. A. and Johansen, W. – 2026 · International Journal of Business Communication', badge: 'Article', url: 'publications.html#articles-24' },
  { title: 'Blind Spots in Employee Communication Research Regarding LGBT+ and Guidance for Future Research: A Scoping Review of Quantitative Research', meta: 'Wahl, I., Siegel, M. and Einwiller, S. – 2026 · International Journal of Business Communication', badge: 'Article', url: 'publications.html#articles-25' },
  { title: 'Generative AI risks: are European communication professionals ready? A study on individual and organizational readiness', meta: 'Wang, Y., Ravazzani, S. and Anton, A. – 2026 · Journal of Communication Management', badge: 'Article', url: 'publications.html#articles-26' },
  { title: 'A matrix approach to developing a digital internal communication strategy', meta: 'Wuersch, L., Neher, A., Peter, M.K., Maley, J.F. and Wong, A. – 2026 · International Journal of Business Communication', badge: 'Article', url: 'publications.html#articles-27' },
];

(function () {
  function norm(s) {
    return (s || '').toLowerCase();
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function scoreEntry(entry, terms) {
    const titleHay = norm(entry.title);
    const fullHay = norm(entry.title + ' ' + entry.meta + ' ' + entry.badge);
    let score = 0;
    for (const t of terms) {
      if (titleHay.includes(t)) score += 2;
      else if (fullHay.includes(t)) score += 1;
      else return -1;
    }
    return score;
  }

  function runSearch(query) {
    const q = norm(query).trim();
    if (!q) return [];
    const terms = q.split(/\s+/).filter(Boolean);
    return SEARCH_INDEX
      .map((entry) => ({ entry, score: scoreEntry(entry, terms) }))
      .filter((r) => r.score >= 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.entry);
  }

  function renderResults(container, query) {
    const q = query.trim();
    container.innerHTML = '';
    if (!q) {
      container.setAttribute('data-open', 'false');
      return;
    }
    const results = runSearch(q);
    if (results.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'search-empty';
      empty.textContent = `No results for “${q}”`;
      container.appendChild(empty);
    } else {
      results.forEach((entry) => {
        const a = document.createElement('a');
        a.href = entry.url;
        a.className = 'search-result';
        a.innerHTML =
          '<span class="search-result-title">' + escapeHtml(entry.title) + '</span>' +
          '<span class="search-result-meta">' + escapeHtml(entry.badge) + (entry.meta ? ' · ' + escapeHtml(entry.meta) : '') + '</span>';
        container.appendChild(a);
      });
    }
    container.setAttribute('data-open', 'true');
  }

  function initDesktopSearch() {
    const wrap = document.getElementById('searchWrap');
    const toggle = document.getElementById('searchToggle');
    const box = document.getElementById('searchBox');
    const input = document.getElementById('searchInput');
    const closeBtn = document.getElementById('searchClose');
    const results = document.getElementById('searchResults');
    if (!wrap || !toggle || !box || !input || !closeBtn || !results) return;

    function open() {
      box.setAttribute('data-open', 'true');
      toggle.setAttribute('aria-expanded', 'true');
      window.requestAnimationFrame(() => input.focus());
    }
    function close() {
      box.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
      results.setAttribute('data-open', 'false');
      input.value = '';
      results.innerHTML = '';
    }

    toggle.addEventListener('click', () => {
      const isOpen = box.getAttribute('data-open') === 'true';
      if (isOpen) close();
      else open();
    });
    closeBtn.addEventListener('click', close);
    input.addEventListener('input', () => renderResults(results, input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) close();
    });
  }

  function initMobileSearch() {
    const input = document.getElementById('mobileSearchInput');
    const results = document.getElementById('mobileSearchResults');
    if (!input || !results) return;
    input.addEventListener('input', () => renderResults(results, input.value));
  }

  function highlightHashTarget() {
    if (!location.hash) return;
    let el;
    try {
      el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    } catch (e) {
      return;
    }
    if (!el) return;

    window.requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    if (el.classList.contains('card') || el.classList.contains('pub-entry')) {
      el.classList.remove('search-target-highlight');
      void el.offsetWidth;
      el.classList.add('search-target-highlight');
      el.addEventListener('animationend', () => el.classList.remove('search-target-highlight'), { once: true });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initDesktopSearch();
    initMobileSearch();
    highlightHashTarget();
  });
  window.addEventListener('hashchange', highlightHashTarget);
})();
