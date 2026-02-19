/**
 * ═══════════════════════════════════════════════════════
 *  SOCIAL MEDIA OBSERVATORY — js/data.js
 *  ───────────────────────────────────────────────────────
 *  Single source of truth for all dataset values.
 *  Edit numbers here and every chart + bar updates automatically.
 *
 *  SOURCES:
 *  - Meta Transparency Reports (quarterly)
 *  - DataReportal / Kepios Global Digital Reports (2024, 2025)
 *  - Backlinko Social Media Stats Compilation
 *  - McKinsey Global AI Survey (2017–2024)
 *  - Originality.AI Reddit/LinkedIn AI Content Study
 *  - Stan Ventures / Academic analysis of 8,885 Facebook posts
 *  - Ahrefs April 2025 crawl (1M pages)
 *  - Pew Research Center
 *  - Sprout Social Industry Reports
 *  - Statista Consumer Surveys
 * ═══════════════════════════════════════════════════════
 */

/* ── Shared axis labels ─────────────────────────── */
const YEARS_04_25 = [
  2004, 2006, 2008, 2010, 2011, 2012, 2013,
  2014, 2015, 2016, 2017, 2018, 2019, 2020,
  2021, 2022, 2023, 2024, 2025
];

const YEARS_12_25 = [
  2012, 2014, 2016, 2018, 2020, 2021, 2022, 2023, 2024, 2025
];

const YEARS_12_25_FULL = [
  2012, 2014, 2016, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025
];

/* ── Section 1: Platform MAU Growth (millions) ── */
const MAU = {
  facebook:  [1, 12, 100, 500, 800, 1000, 1200, 1400, 1600, 1860, 2100, 2300, 2500, 2700, 2900, 2960, 3030, 3070, 3070],
  instagram: [0,  0,   0,   0,  10,   30,  100,  200,  400,  600,  800, 1000, 1000, 1200, 1500, 1700, 1870, 2000, 2000],
  tiktok:    [0,  0,   0,   0,   0,    0,    0,    0,    0,    0,  100,  500,  800, 1000, 1200, 1500, 1700, 1900, 1990],
  reddit:    [0,  1,  10,  35,  70,  100,  175,  170,  200,  250,  290,  330,  430,  500,  600,  650,  730,  765,  765],
  twitter:   [0,  0,   6,  54, 100,  185,  230,  284,  304,  319,  330,  336,  330,  340,  353,  368,  541,  557,  557],
  totalB:    [0.001, 0.02, 0.13, 0.97, 1.2, 1.5, 1.7, 2.0, 2.08, 2.3, 2.7, 3.2, 3.5, 3.8, 4.2, 4.6, 4.9, 5.17, 5.41],
};

// 2025 standings bar chart
const MAU_2025 = {
  labels: ['Facebook', 'YouTube', 'Instagram', 'TikTok', 'Reddit', 'X/Twitter', 'Snapchat'],
  values: [3070, 2580, 2000, 1990, 765, 557, 432],
};

/* ── Section 2: Daily Time Spent ─────────────── */
const TIME_SPENT = {
  years:   [2012, 2014, 2016, 2018, 2020, 2021, 2022, 2023, 2024, 2025],
  minutes: [90, 105, 118, 136, 144, 147, 150, 143, 141, 144],
};

// Progress bars rendered in HTML
const PLATFORM_MINUTES_2025 = [
  { name: 'TikTok',      minutes: 55, pct: 100, color: 'red'    },
  { name: 'YouTube',     minutes: 45, pct: 81,  color: ''       },
  { name: 'Instagram',   minutes: 33, pct: 60,  color: 'yellow' },
  { name: 'Facebook',    minutes: 31, pct: 56,  color: 'yellow' },
  { name: 'X / Twitter', minutes: 25, pct: 45,  color: 'green'  },
  { name: 'Reddit',      minutes: 20, pct: 36,  color: 'green'  },
  { name: 'Snapchat',    minutes: 20, pct: 36,  color: 'purple' },
];

/* ── Section 3: AI Content Growth ────────────── */
const AI_CONTENT = {
  years:    [2022, 2023, 2024, 2025],
  facebook: [5.34, 12,   41.18, 45],
  linkedin: [5,    30,   54,    60],
  reddit:   [1,    9,    13,    15],
  images:   [10,   40,   71,    75],
  webPages: [5,    25,   60,    74.2],
};

const AI_ADOPT = {
  years:  [2017, 2020, 2022, 2023, 2024, 2025],
  orgPct: [20,   50,   33,   33,   71,   75],
};

/* ── Section 4: Engagement Rate Decline ─────── */
const ENGAGEMENT = {
  years:        YEARS_12_25_FULL,
  facebook:     [16, 6.5, 2.5, 1.5, 0.9, 0.7, 0.5, 0.45, 0.3, 0.25, 0.2],
  instagram:    [0,  10,  6.5, 4,   3,   2.5, 2,   1.5,  1.1, 0.75, 0.5],
  tiktok:       [0,  0,   0,   29,  21,  17.5, 15, 11.5, 7.5, 6,    4.5],
  twitter:      [0,  0,   0,   0.4, 0.3, 0.3,  0.3, 0.3, 0.3, 0.3,  0.25],
};

// Facebook reach bars (for HTML progress bars)
const FB_REACH_BARS = [
  { year: 2012, pct: 16,   width: 100, color: 'green'  },
  { year: 2014, pct: 6.5,  width: 40,  color: 'yellow' },
  { year: 2016, pct: 2.5,  width: 15,  color: 'yellow' },
  { year: 2018, pct: 1.5,  width: 9,   color: 'red'    },
  { year: 2020, pct: 0.7,  width: 4,   color: 'red'    },
  { year: 2022, pct: 0.45, width: 2.8, color: 'red'    },
  { year: 2025, pct: 0.2,  width: 1.25,color: 'red'    },
];

/* ── Section 5: Trust & Authenticity ─────────── */
const TRUST = {
  years:         [2021, 2022, 2023, 2024, 2025],
  trustAI:       [61,   58,   55,   53,   50],
  doubtContent:  [20,   30,   45,   59.9, 65],
  reduceEngage:  [20,   30,   40,   52,   55],
  deepfakeFear:  [40,   50,   70,   72,   75],
};

// Trust progress bars
const TRUST_BARS = [
  { label: 'Doubt authenticity of online content',   val: '59.9%', pct: 59.9, color: 'red'    },
  { label: 'Reduce engagement if AI suspected',       val: '52%',   pct: 52,   color: 'red'    },
  { label: 'Question authenticity of reviews',        val: '52.8%', pct: 52.8, color: 'red'    },
  { label: 'Concerned about deepfakes',               val: '72%',   pct: 72,   color: 'yellow' },
  { label: 'Trust AI influencer content as human',    val: '26%',   pct: 26,   color: 'green'  },
  { label: 'Trust AI companies (2024)',                val: '53%',   pct: 53,   color: ''       },
  { label: 'Support mandatory AI content labelling',  val: '62%',   pct: 62,   color: 'green'  },
];

/* ── Section 6: Ad Economy ───────────────────── */
const ADS = {
  years:   [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
  total:   [51.32, 73.28, 97.5, 110, 154, 173, 194.3, 207, 219.8],
  meta:    [0,     55,    70,   86,  115, 117, 131,   134, 140],
  tiktok:  [0,     0,     0.3,  1,   4,   11,  14,    18,  23],
};

const ADS_PIE = {
  labels: ['Meta (FB + IG)', 'TikTok', 'X/Twitter', 'Pinterest', 'Other'],
  values: [134, 23, 5, 4.2, 53.6],
};

/* ── Section 7: BeReal ───────────────────────── */
const BEREAL = {
  years: [2020, 2021, 2022, 2023, 2024, 2025],
  mau:   [0.1,  0.5,  73,   25,   8,    5],
};

/* ── Section 8: Bots & Fake Accounts ─────────── */
const BOTS = {
  platforms:   ['Facebook', 'Instagram', 'Twitter/X', 'TikTok', 'Reddit'],
  percentages: [4,           7.5,         12,           5,        4],
  absolute:    [122,         150,          67,          99,       30],  // millions
};

/* ── Section 9: Algorithm Timeline (content) ─── */
const ALGO_EVENTS = [
  { year: 2006, cls: '',       title: 'Facebook News Feed launches', body: 'First ML-curated social feed. Massive user backlash within 24 hours — hundreds of thousands protest calling it a privacy violation.' },
  { year: 2009, cls: '',       title: 'Personalised ranking begins', body: 'Facebook moves away from chronological. Relevance scores introduced — posts ranked by predicted engagement.' },
  { year: 2011, cls: '',       title: 'Feed becomes fully algorithmic', body: 'Chronological Facebook effectively ends. Instagram launches hashtags — discovery by interest begins.' },
  { year: 2015, cls: 'red',   title: 'Time-on-platform optimisation', body: 'Facebook shifts from social sharing to maximising passive scroll time. Original personal posting begins a permanent decline.' },
  { year: 2016, cls: 'red',   title: 'Instagram kills chronological feed', body: 'Massive user backlash ignored. TikTok launches with the world\'s first fully AI-native feed — no social graph required.' },
  { year: 2018, cls: 'red',   title: 'Outrage engine: angry emoji = 5× a like', body: 'Facebook\'s algorithm rewards angry reactions disproportionately. Inflammatory content spreads faster than ever before.' },
  { year: 2020, cls: 'red',   title: 'Facebook fixes angry emoji weight (took 2 years)', body: 'Weight eventually reduced to 0 after known harm — but only after years of toxicity amplification.' },
  { year: 2021, cls: 'yellow', title: 'Instagram launches Reels globally', body: 'Photo-first platform becomes video-first. FYP model replaces social graph — anyone can go viral, not just your followers.' },
  { year: 2022, cls: 'red',   title: 'ChatGPT launches (Nov 30)', body: 'AI-generated content becomes mass-accessible overnight. Social media AI post rates begin an explosive upward climb.' },
  { year: 2022, cls: 'yellow', title: 'Instagram restores chronological option', body: '"Following" and "Favourites" feeds launched (March) after years of user demand — but not the default experience.' },
  { year: 2023, cls: '',       title: 'TikTok labels 1.3B+ AI-generated videos', body: 'Platforms begin acknowledging the AI content flood. Mandatory labelling policies discussed across industry.' },
  { year: 2025, cls: 'purple', title: 'Facebook "Andromeda" behavioural surveillance', body: 'New AI system predicts behaviour based on scrolling patterns, pauses, and hesitations — not just explicit engagement.' },
  { year: 2025, cls: 'purple', title: 'X (Twitter) pay-to-amplify era', body: 'Premium subscribers receive 4× visibility boost in For You feed. Reach officially becomes a paid product.' },
  { year: 2026, cls: 'green',  title: 'Shift to satisfaction metrics', body: 'Platforms begin optimising for perceived quality over raw engagement — acknowledging 15 years of optimising the wrong signals.' },
];

// Algo progress bars (years since algo feed)
const ALGO_BARS = [
  { label: 'Facebook (2011)',                  years: '15 years', width: 100, color: 'red'    },
  { label: 'Pinterest (2015)',                  years: '11 years', width: 73,  color: 'yellow' },
  { label: 'Instagram (2016)',                  years: '10 years', width: 66,  color: 'red'    },
  { label: 'X / Twitter (2016)',               years: '10 years', width: 66,  color: 'red'    },
  { label: 'TikTok (2016 — AI from day one)', years: '10 years', width: 66,  color: 'yellow' },
];
/**
 * ═══════════════════════════════════════════════════════
 *  SOCIAL MEDIA OBSERVATORY — js/components.js
 *  ───────────────────────────────────────────────────────
 *  Renders HTML-based components (progress bars, timeline).
 *  Reads from js/data.js — no data lives here.
 *
 *  EXPORTS (global functions used by main.js):
 *    renderAllComponents()
 * ═══════════════════════════════════════════════════════
 */


/* ─────────────────────────────────────────
   HELPER: build a single progress bar item
───────────────────────────────────────── */
function buildBarItem({ name, label, minutes, years, val, pct, width, color }) {
  const displayLabel = name || label;
  const displayVal   = minutes ? `${minutes} min` : (years || val);
  const fillWidth    = (pct !== undefined ? pct : width) + '%';
  const colorClass   = color ? ` ${color}` : '';

  return `
    <div class="bar-item">
      <div class="bar-label">
        <span>${displayLabel}</span>
        <span class="bar-val${colorClass}">${displayVal}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill${colorClass}" style="width:${fillWidth}"></div>
      </div>
    </div>`;
}


/* ─────────────────────────────────────────
   RENDER: Platform daily minutes (Section 2)
───────────────────────────────────────── */
function renderPlatformBars() {
  const el = document.getElementById('platformBars');
  if (!el) return;
  el.innerHTML = PLATFORM_MINUTES_2025.map(item => buildBarItem(item)).join('');
}


/* ─────────────────────────────────────────
   RENDER: Facebook organic reach (Section 4)
───────────────────────────────────────── */
function renderFBReachBars() {
  const el = document.getElementById('fbReachBars');
  if (!el) return;
  el.innerHTML = FB_REACH_BARS.map(({ year, pct, width, color }) =>
    buildBarItem({ name: String(year), val: `${pct}%`, pct: width, color })
  ).join('');
}


/* ─────────────────────────────────────────
   RENDER: Trust sentiment bars (Section 5)
───────────────────────────────────────── */
function renderTrustBars() {
  const el = document.getElementById('trustBars');
  if (!el) return;
  el.innerHTML = TRUST_BARS.map(item => buildBarItem(item)).join('');
}


/* ─────────────────────────────────────────
   RENDER: Algorithm timeline (Section 9)
───────────────────────────────────────── */
function renderAlgoTimeline() {
  const el = document.getElementById('algoTimeline');
  if (!el) return;

  el.innerHTML = ALGO_EVENTS.map(({ year, cls, title, body }) => `
    <div class="tl-item">
      <div class="tl-year ${cls}">${year}</div>
      <div class="tl-content">
        <div class="tl-title">${title}</div>
        ${body}
      </div>
    </div>`).join('');
}


/* ─────────────────────────────────────────
   RENDER: Algorithm years bars (Section 9)
───────────────────────────────────────── */
function renderAlgoBars() {
  const el = document.getElementById('algoBars');
  if (!el) return;
  el.innerHTML = ALGO_BARS.map(item => buildBarItem(item)).join('');
}


/* ─────────────────────────────────────────
   INIT: call all renderers on page load
───────────────────────────────────────── */
function renderAllComponents() {
  renderPlatformBars();
  renderFBReachBars();
  renderTrustBars();
  renderAlgoTimeline();
  renderAlgoBars();
}
/**
 * ═══════════════════════════════════════════════════════
 *  SOCIAL MEDIA OBSERVATORY — js/charts.js
 *  ───────────────────────────────────────────────────────
 *  All Chart.js chart definitions.
 *  Reads from js/data.js — no raw numbers live here.
 *
 *  TO ADD A NEW CHART:
 *    1. Add your data arrays to js/data.js
 *    2. Add a <canvas id="myChart"> in index.html
 *    3. Call buildMyChart() from initAllCharts() at the bottom
 * ═══════════════════════════════════════════════════════
 */


/* ─────────────────────────────────────────
   GLOBAL CHART.JS DEFAULTS
───────────────────────────────────────── */
Chart.defaults.color        = '#4a6080';
Chart.defaults.borderColor  = '#1a2540';
Chart.defaults.font.family  = "'DM Mono', monospace";
Chart.defaults.font.size    = 10;

/* Design token colours (mirrors CSS variables) */
const C = {
  cyan:   '#00e5ff',
  red:    '#ff3c6e',
  green:  '#b8ff57',
  yellow: '#ffaa00',
  orange: '#ff7c2a',
  purple: '#a855f7',
};

/* Reusable axis config */
const gridLine = { color: 'rgba(26,37,64,0.6)' };

function xAxis(opts = {}) {
  return { grid: gridLine, ticks: { maxRotation: 0, autoSkip: true, maxTicksLimit: 10, ...opts.ticks }, ...opts };
}

function yAxis(fmt = v => v, opts = {}) {
  return { grid: gridLine, ticks: { callback: fmt, ...opts.ticks }, ...opts };
}

function legend() {
  return { labels: { color: '#c8d8f0', boxWidth: 10, padding: 12 } };
}


/* ─────────────────────────────────────────
   SECTION 1 — PLATFORM MAU GROWTH
───────────────────────────────────────── */
function buildMauChart() {
  new Chart(document.getElementById('mauChart'), {
    type: 'line',
    data: {
      labels: YEARS_04_25,
      datasets: [
        {
          label: 'Facebook',
          data: MAU.facebook,
          borderColor: C.cyan,
          backgroundColor: 'rgba(0,229,255,0.05)',
          borderWidth: 2, pointRadius: 2, tension: 0.4, fill: true,
        },
        {
          label: 'Instagram',
          data: MAU.instagram,
          borderColor: C.yellow,
          backgroundColor: 'rgba(255,170,0,0.04)',
          borderWidth: 2, pointRadius: 2, tension: 0.4, fill: true,
        },
        {
          label: 'TikTok',
          data: MAU.tiktok,
          borderColor: C.red,
          backgroundColor: 'rgba(255,60,110,0.04)',
          borderWidth: 2, pointRadius: 2, tension: 0.4, fill: true,
        },
        {
          label: 'Reddit',
          data: MAU.reddit,
          borderColor: C.orange,
          backgroundColor: 'transparent',
          borderWidth: 1.5, pointRadius: 2, tension: 0.4, borderDash: [4, 3],
        },
        {
          label: 'X / Twitter',
          data: MAU.twitter,
          borderColor: C.purple,
          backgroundColor: 'transparent',
          borderWidth: 1.5, pointRadius: 2, tension: 0.4, borderDash: [2, 3],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: legend() },
      scales: {
        x: xAxis(),
        y: yAxis(v => v + 'M'),
      },
    },
  });
}

function buildTotalUsersChart() {
  new Chart(document.getElementById('totalChart'), {
    type: 'line',
    data: {
      labels: YEARS_04_25,
      datasets: [{
        label: 'Total Global Users (B)',
        data: MAU.totalB,
        borderColor: C.cyan,
        backgroundColor: 'rgba(0,229,255,0.07)',
        borderWidth: 2.5, pointRadius: 3, tension: 0.4, fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: xAxis(), y: yAxis(v => v + 'B') },
    },
  });
}

function buildMau2025Bar() {
  new Chart(document.getElementById('barMau2025'), {
    type: 'bar',
    data: {
      labels: MAU_2025.labels,
      datasets: [{
        data: MAU_2025.values,
        backgroundColor: MAU_2025.values.map((_, i) =>
          `rgba(0,229,255,${1 - i * 0.12})`
        ),
        borderWidth: 0,
      }],
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: yAxis(v => v + 'M'),   // horizontal axis shows values
        y: { grid: { display: false } },
      },
    },
  });
}


/* ─────────────────────────────────────────
   SECTION 2 — DAILY TIME SPENT
───────────────────────────────────────── */
function buildTimeChart() {
  new Chart(document.getElementById('timeChart'), {
    type: 'line',
    data: {
      labels: TIME_SPENT.years,
      datasets: [{
        label: 'Daily minutes',
        data: TIME_SPENT.minutes,
        borderColor: C.yellow,
        backgroundColor: 'rgba(255,170,0,0.08)',
        borderWidth: 2.5, pointRadius: 4, pointBackgroundColor: C.yellow,
        tension: 0.4, fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: xAxis(),
        y: yAxis(v => v + ' min', { min: 80, max: 160 }),
      },
    },
  });
}


/* ─────────────────────────────────────────
   SECTION 3 — AI TAKEOVER
───────────────────────────────────────── */
function buildAiContentChart() {
  new Chart(document.getElementById('aiChart'), {
    type: 'line',
    data: {
      labels: AI_CONTENT.years,
      datasets: [
        {
          label: 'Facebook AI Posts %',
          data: AI_CONTENT.facebook,
          borderColor: C.red,
          backgroundColor: 'rgba(255,60,110,0.1)',
          borderWidth: 2, pointRadius: 4, tension: 0.4, fill: true,
        },
        {
          label: 'LinkedIn AI Posts %',
          data: AI_CONTENT.linkedin,
          borderColor: C.yellow,
          backgroundColor: 'transparent',
          borderWidth: 2, pointRadius: 4, tension: 0.4,
        },
        {
          label: 'Reddit AI Posts %',
          data: AI_CONTENT.reddit,
          borderColor: C.orange,
          backgroundColor: 'transparent',
          borderWidth: 2, pointRadius: 4, tension: 0.4,
        },
        {
          label: 'AI Images on Social %',
          data: AI_CONTENT.images,
          borderColor: C.purple,
          backgroundColor: 'rgba(168,85,247,0.07)',
          borderWidth: 2, pointRadius: 4, tension: 0.4, fill: true,
        },
        {
          label: 'Web Pages w/ AI Content %',
          data: AI_CONTENT.webPages,
          borderColor: C.cyan,
          backgroundColor: 'transparent',
          borderWidth: 1.5, pointRadius: 3, tension: 0.4, borderDash: [4, 3],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: legend() },
      scales: { x: xAxis(), y: yAxis(v => v + '%', { max: 100 }) },
    },
  });
}

function buildAiAdoptChart() {
  new Chart(document.getElementById('aiAdoptChart'), {
    type: 'bar',
    data: {
      labels: AI_ADOPT.years,
      datasets: [{
        label: 'Orgs Using AI (%)',
        data: AI_ADOPT.orgPct,
        backgroundColor: AI_ADOPT.orgPct.map((v, i) =>
          `rgba(168,85,247,${0.2 + i * 0.16})`
        ),
        borderWidth: 0,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: yAxis(v => v + '%', { max: 100 }),
      },
    },
  });
}


/* ─────────────────────────────────────────
   SECTION 4 — ENGAGEMENT COLLAPSE
───────────────────────────────────────── */
function buildEngagementChart() {
  new Chart(document.getElementById('engageChart'), {
    type: 'line',
    data: {
      labels: ENGAGEMENT.years,
      datasets: [
        {
          label: 'Facebook Organic Reach %',
          data: ENGAGEMENT.facebook,
          borderColor: C.cyan,
          backgroundColor: 'rgba(0,229,255,0.06)',
          borderWidth: 2, pointRadius: 3, tension: 0.4, fill: true,
        },
        {
          label: 'Instagram Engagement %',
          data: ENGAGEMENT.instagram,
          borderColor: C.yellow,
          backgroundColor: 'transparent',
          borderWidth: 2, pointRadius: 3, tension: 0.4,
        },
        {
          label: 'TikTok Engagement % (right axis)',
          data: ENGAGEMENT.tiktok,
          borderColor: C.red,
          backgroundColor: 'rgba(255,60,110,0.06)',
          borderWidth: 2, pointRadius: 3, tension: 0.4,
          yAxisID: 'y2',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: legend() },
      scales: {
        x: xAxis(),
        y:  yAxis(v => v + '%',      { position: 'left' }),
        y2: yAxis(v => v + '% (TT)', { position: 'right', grid: { display: false }, ticks: { color: C.red } }),
      },
    },
  });
}


/* ─────────────────────────────────────────
   SECTION 5 — AUTHENTICITY & TRUST
───────────────────────────────────────── */
function buildTrustChart() {
  new Chart(document.getElementById('trustChart'), {
    type: 'line',
    data: {
      labels: TRUST.years,
      datasets: [
        {
          label: 'Trust AI Companies %',
          data: TRUST.trustAI,
          borderColor: C.cyan,
          backgroundColor: 'transparent',
          borderWidth: 2, pointRadius: 4, tension: 0.4,
        },
        {
          label: 'Doubt Authenticity of Content %',
          data: TRUST.doubtContent,
          borderColor: C.red,
          backgroundColor: 'rgba(255,60,110,0.07)',
          borderWidth: 2, pointRadius: 4, tension: 0.4, fill: true,
        },
        {
          label: 'Reduce Engagement if AI Suspected %',
          data: TRUST.reduceEngage,
          borderColor: C.purple,
          backgroundColor: 'transparent',
          borderWidth: 2, pointRadius: 4, tension: 0.4, borderDash: [4, 3],
        },
        {
          label: 'Concerned About Deepfakes %',
          data: TRUST.deepfakeFear,
          borderColor: C.yellow,
          backgroundColor: 'transparent',
          borderWidth: 1.5, pointRadius: 3, tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: legend() },
      scales: { x: xAxis(), y: yAxis(v => v + '%', { max: 100 }) },
    },
  });
}


/* ─────────────────────────────────────────
   SECTION 6 — AD ECONOMY
───────────────────────────────────────── */
function buildAdSpendChart() {
  new Chart(document.getElementById('adSpendChart'), {
    type: 'bar',
    data: {
      labels: ADS.years,
      datasets: [
        {
          label: 'Total Ad Spend ($B)',
          data: ADS.total,
          backgroundColor: 'rgba(255,170,0,0.3)',
          borderColor: C.yellow,
          borderWidth: 1,
        },
        {
          label: 'Meta Share ($B)',
          data: ADS.meta,
          backgroundColor: 'rgba(0,229,255,0.2)',
          borderColor: C.cyan,
          borderWidth: 1,
        },
        {
          label: 'TikTok Share ($B)',
          data: ADS.tiktok,
          backgroundColor: 'rgba(255,60,110,0.2)',
          borderColor: C.red,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: legend() },
      scales: {
        x: { grid: { display: false } },
        y: yAxis(v => '$' + v + 'B'),
      },
    },
  });
}

function buildAdPieChart() {
  new Chart(document.getElementById('adPieChart'), {
    type: 'doughnut',
    data: {
      labels: ADS_PIE.labels,
      datasets: [{
        data: ADS_PIE.values,
        backgroundColor: [C.cyan, C.red, C.purple, C.yellow, 'rgba(255,255,255,0.1)'],
        borderWidth: 0,
        hoverOffset: 8,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { color: '#c8d8f0', boxWidth: 10, padding: 12 } } },
      cutout: '68%',
    },
  });
}


/* ─────────────────────────────────────────
   SECTION 7 — BEREAL
───────────────────────────────────────── */
function buildBerealChart() {
  new Chart(document.getElementById('berealChart'), {
    type: 'line',
    data: {
      labels: BEREAL.years,
      datasets: [{
        label: 'BeReal MAUs (M)',
        data: BEREAL.mau,
        borderColor: C.red,
        backgroundColor: 'rgba(255,60,110,0.1)',
        borderWidth: 2.5, pointRadius: 5, pointBackgroundColor: C.red,
        tension: 0.4, fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: xAxis(), y: yAxis(v => v + 'M') },
    },
  });
}


/* ─────────────────────────────────────────
   SECTION 8 — BOTS & FAKE ACCOUNTS
───────────────────────────────────────── */
function buildBotsPctChart() {
  new Chart(document.getElementById('botsChart'), {
    type: 'bar',
    data: {
      labels: BOTS.platforms,
      datasets: [{
        data: BOTS.percentages,
        backgroundColor: BOTS.percentages.map((_, i) =>
          `rgba(255,60,110,${0.4 + i * 0.12})`
        ),
        borderWidth: 0,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: yAxis(v => v + '%', { max: 20 }),
      },
    },
  });
}

function buildBotsAbsChart() {
  new Chart(document.getElementById('botsAbsChart'), {
    type: 'bar',
    data: {
      labels: BOTS.platforms,
      datasets: [{
        data: BOTS.absolute,
        backgroundColor: 'rgba(255,60,110,0.25)',
        borderColor: C.red,
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: yAxis(v => v + 'M'),
      },
    },
  });
}


/* ─────────────────────────────────────────
   INIT — build all charts on page load
───────────────────────────────────────── */
function initAllCharts() {
  // Section 1
  buildMauChart();
  buildTotalUsersChart();
  buildMau2025Bar();

  // Section 2
  buildTimeChart();

  // Section 3
  buildAiContentChart();
  buildAiAdoptChart();

  // Section 4
  buildEngagementChart();

  // Section 5
  buildTrustChart();

  // Section 6
  buildAdSpendChart();
  buildAdPieChart();

  // Section 7
  buildBerealChart();

  // Section 8
  buildBotsPctChart();
  buildBotsAbsChart();

  // Section 9 — no charts, only HTML components
}
/**
 * ═══════════════════════════════════════════════════════
 *  SOCIAL MEDIA OBSERVATORY — js/main.js
 *  ───────────────────────────────────────────────────────
 *  Page initialisation, tab navigation.
 *  Runs after data.js, components.js, and charts.js load.
 * ═══════════════════════════════════════════════════════
 */


/* ─────────────────────────────────────────
   TAB NAVIGATION
───────────────────────────────────────── */

/**
 * Show the requested section and update active tab styling.
 * Called by onclick="showSection('mau', this)" in index.html
 *
 * @param {string} id       - Section key (matches 'sec-{id}' element id)
 * @param {Element} btnEl   - The clicked tab button element
 */
function showSection(id, btnEl) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  // Deactivate all tabs
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

  // Show target section
  const target = document.getElementById('sec-' + id);
  if (target) target.classList.add('active');

  // Activate clicked tab
  if (btnEl) btnEl.classList.add('active');
}


/* ─────────────────────────────────────────
   KEYBOARD NAVIGATION (optional a11y)
───────────────────────────────────────── */
document.addEventListener('keydown', (e) => {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const activeIdx = tabs.findIndex(t => t.classList.contains('active'));

  if (e.key === 'ArrowRight' && activeIdx < tabs.length - 1) {
    tabs[activeIdx + 1].click();
    tabs[activeIdx + 1].focus();
  } else if (e.key === 'ArrowLeft' && activeIdx > 0) {
    tabs[activeIdx - 1].click();
    tabs[activeIdx - 1].focus();
  }
});


/* ─────────────────────────────────────────
   PAGE INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render HTML-based components (bars, timeline)
  renderAllComponents();

  // 2. Initialise all Chart.js charts
  initAllCharts();

  // 3. Ensure first section is visible on load
  const firstSection = document.querySelector('.section');
  const firstTab     = document.querySelector('.tab');
  if (firstSection) firstSection.classList.add('active');
  if (firstTab)     firstTab.classList.add('active');
});
