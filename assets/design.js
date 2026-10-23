// Navigation, reading position and user-controlled media for the portfolio.
const header = document.querySelector('.site-header');
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
header?.classList.add('enhanced');
function closeMenu() {
  toggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
}
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav?.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (toggle?.getAttribute('aria-expanded') === 'true') {closeMenu(); toggle.focus();}
    if (chapterToggle?.getAttribute('aria-expanded') === 'true') {closeChapters(); chapterToggle.focus();}
  }
});
document.addEventListener('click', event => {
  if (header && !header.contains(event.target)) closeMenu();
});
document.querySelectorAll('[data-year]').forEach(node => {node.textContent = new Date().getFullYear();});

const chapterNav = document.querySelector('.chapter-nav');
const chapterToggle = document.querySelector('.chapter-toggle');
const chapterLinks = [...document.querySelectorAll('.chapter-links a')];
chapterNav?.classList.add('enhanced');
function closeChapters() {
  chapterToggle?.setAttribute('aria-expanded', 'false');
  const icon = chapterToggle?.querySelector('span');
  if (icon) icon.textContent = '＋';
}
chapterToggle?.addEventListener('click', () => {
  const open = chapterToggle.getAttribute('aria-expanded') !== 'true';
  chapterToggle.setAttribute('aria-expanded', String(open));
  chapterToggle.querySelector('span').textContent = open ? '−' : '＋';
});
chapterLinks.forEach(link => link.addEventListener('click', closeChapters));
// Reading-position highlighting measures actual section tops, including long chapters.
let queued = false;
function markChapter() {
  const threshold = (chapterNav?.getBoundingClientRect().height || 55) + 65;
  let active = null;
  chapterLinks.forEach(link => {
    const section = document.getElementById(link.hash.slice(1));
    if (section && section.getBoundingClientRect().top <= threshold) active = link;
  });
  chapterLinks.forEach(link => {
    if (link === active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  queued = false;
}
if (chapterLinks.length) {
  window.addEventListener('scroll', () => {if (!queued) {queued = true; requestAnimationFrame(markChapter);}}, {passive:true});
  window.addEventListener('resize', markChapter);
  markChapter();
}

const stateTabs = [...document.querySelectorAll('[data-state-tab]')];
function selectState(tab, focus = false) {
  stateTabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(item.getAttribute('aria-controls'));
    if (panel) {
      panel.hidden = !selected;
      if (!selected) panel.querySelectorAll('video').forEach(video => video.pause());
    }
  });
  if (focus) tab.focus();
}
stateTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectState(tab));
  tab.addEventListener('keydown', event => {
    const next = {ArrowRight:(index+1)%stateTabs.length, ArrowLeft:(index-1+stateTabs.length)%stateTabs.length, Home:0, End:stateTabs.length-1}[event.key];
    if (next !== undefined) {event.preventDefault(); selectState(stateTabs[next], true);}
  });
});
document.querySelectorAll('details').forEach(details => details.addEventListener('toggle', () => {
  if (!details.open) details.querySelectorAll('video').forEach(video => video.pause());
}));
document.querySelectorAll('video').forEach(video => video.addEventListener('play', () => {
  document.querySelectorAll('video').forEach(other => {if (other !== video) other.pause();});
}));
