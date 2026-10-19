const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    })
  );
}

const portrait = document.querySelector('.portrait-frame img');
if (portrait) portrait.src = 'assets/images/profile/afif-iftikhar.webp';

const experienceItems = document.querySelectorAll('#experience .timeline-item');
if (experienceItems[0]) {
  const time = experienceItems[0].querySelector('.time');
  if (time) time.textContent = 'Jan 2024–Present';
}
if (experienceItems[1]) {
  const role = experienceItems[1].querySelector('.role-type');
  if (role) role.textContent = 'Research Assistant · Geospatial Research';
}
if (experienceItems[2]) {
  const role = experienceItems[2].querySelector('.role-type');
  const title = experienceItems[2].querySelector('h3');
  if (role) role.textContent = 'Research Assistant · Urban Displacement Research';
  if (title) title.textContent = 'Urban Displacement Study, Satkhira & Bagerhat';
}
if (experienceItems[3]) {
  const time = experienceItems[3].querySelector('.time');
  if (time) time.textContent = 'Feb 2024–Present';
}

const methodCards = document.querySelectorAll('.methods-section .method-card');
if (methodCards[0]) {
  const text = methodCards[0].querySelector('p');
  if (text) text.textContent = 'Multi-temporal Landsat analysis, MNDWI, adaptive thresholding, LULC classification, change detection, channel-geometry reconstruction, riverbank migration, erosion–accretion, spatial overlays, accuracy assessment, ArcGIS 10.8.';
}
if (methodCards[1]) {
  const text = methodCards[1].querySelector('p');
  if (text) text.textContent = 'Hierarchical Bayesian modeling, Monte Carlo uncertainty analysis, multiple linear regression, binary logistic regression, VIF, chi-square, Cramér\'s V, LVI/LVI-IPCC, sensitivity analysis.';
}

document.querySelectorAll('a[href="assets/documents/Afif_Iftikhar_CV.pdf"]').forEach(a => {
  a.href = 'cv.html';
  a.target = '_self';
  if (a.textContent.includes('Download')) a.textContent = 'View CV';
});

function addPublicationFigure(journalName, imageSrc, altText, caption) {
  const journal = [...document.querySelectorAll('.journal')]
    .find(el => el.textContent.trim() === journalName);

  if (!journal) return;

  const pubMain = journal.closest('.pub-main');
  if (!pubMain || pubMain.querySelector('.pub-key-figure')) return;

  const fig = document.createElement('figure');
  fig.className = 'pub-key-figure';
  fig.style.cssText = 'margin:1.25rem 0 .25rem;padding:.75rem;border:1px solid #d7ddd9;background:#fff';
  fig.innerHTML = `<img src="${imageSrc}" alt="${altText}" loading="lazy" style="width:100%;height:auto;display:block"><figcaption style="margin-top:.7rem;color:#66737a;font-family:Georgia,serif;font-size:.9rem;line-height:1.55"><strong>Key finding:</strong> ${caption}</figcaption>`;
  pubMain.appendChild(fig);
}

addPublicationFigure(
  'Environmental Research',
  'assets/images/publications/environmental-research-key-findings.svg',
  'Key findings: residential greenness NDVI odds ratio 0.91 with 95% confidence interval 0.842 to 0.977; ambient temperature odds ratio 1.44 with 95% confidence interval 1.290 to 1.625',
  'A one-standard-deviation increase in residential greenness (NDVI) was associated with 9% lower odds of perinatal depression; higher ambient temperature was associated with higher odds.'
);

addPublicationFigure(
  'Scientific Reports',
  'assets/images/publications/scientific-reports-heat-adaptation.svg',
  'Occupational heat adaptation among construction workers compared with welding workers: taking regular breaks OR 9.49, wearing loose clothing OR 4.26, and using electric fans OR 2.84',
  'Construction workers showed higher odds of several heat-adaptation behaviors, particularly taking regular breaks, wearing loose clothing, and using electric fans.'
);

addPublicationFigure(
  'Frontiers in Climate',
  'assets/images/publications/frontiers-climate-adaptation-scores.svg',
  'Community-led climate adaptation effectiveness scores: early warning systems 4 out of 5, social forestry 4 out of 5, embankment construction 3 out of 5, salt-tolerant crop cultivation 3 out of 5, and rainwater harvesting 3 out of 5',
  'Early warning systems and social forestry received the strongest overall effectiveness scores, while embankments, salt-tolerant crops, and rainwater harvesting were moderately effective but constrained by maintenance, availability, or infrastructure limitations.'
);

addPublicationFigure(
  'Marine Pollution Bulletin',
  'assets/images/publications/marine-pollution-bulletin-risk-drivers.svg',
  'Median potential ecological risk factor values in Sundarbans sediments: mercury 25.34, arsenic 13.12, lead 5.32, cobalt 4.75, copper 3.34, and nickel 3.25',
  'Overall sediment contamination remained relatively low, but mercury and arsenic were the dominant ecological-risk drivers; anthropogenic enrichment was particularly associated with Hg, Pb, and As.'
);

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();