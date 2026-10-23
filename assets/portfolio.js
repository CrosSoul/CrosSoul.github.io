// Case-study comparisons remain usable with a keyboard and without autoplay.
const stateTabs = [...document.querySelectorAll('[data-state-tab]')];
function selectState(tab, focus = false) {
  stateTabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(item.getAttribute('aria-controls'));
    panel.hidden = !selected;
    if (!selected) panel.querySelectorAll('video').forEach((video) => video.pause());
  });
  if (focus) tab.focus();
}
stateTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectState(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % stateTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + stateTabs.length) % stateTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = stateTabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectState(stateTabs[next], true);
    }
  });
});
document.querySelectorAll('details.context-film').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (!details.open) details.querySelectorAll('video').forEach((video) => video.pause());
  });
});
// One playing film at a time, including clips outside the comparison.
document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach((other) => {
      if (other !== video) other.pause();
    });
  });
});
const chapterLinks = [...document.querySelectorAll('.chapter-nav a')];
if (chapterLinks.length && 'IntersectionObserver' in window) {
  const chapters = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (!visible.length) return;
    const id = visible[0].target.id;
    chapterLinks.forEach((link) => {
      if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-10% 0px -65% 0px' });
  chapterLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) chapters.observe(section);
  });
}
