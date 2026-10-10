/* Progressive enhancement: the complete bibliography works without JavaScript. */
(() => {
  const search = document.querySelector('#publication-search');
  if (!search) return;
  const tools = document.querySelector('.publication-tools');
  const papers = [...document.querySelectorAll('.publication')];
  const years = [...document.querySelectorAll('.publication-year')];
  const count = document.querySelector('#publication-count');
  const normalize = value => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const entries = papers.map(paper => ({ paper, text: normalize(paper.textContent) }));
  tools.hidden = false;
  function filter() {
    const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    entries.forEach(({ paper, text }) => {
      paper.hidden = !words.every(word => text.includes(word));
      if (!paper.hidden) visible++;
    });
    years.forEach(year => {
      year.hidden = ![...year.querySelectorAll('.publication')].some(paper => !paper.hidden);
      const link = document.querySelector(`.year-nav a[href="#${year.id}"]`);
      if (link) link.hidden = year.hidden;
    });
    count.textContent = `${visible} of ${papers.length} publications`;
    document.querySelector('#no-results').hidden = visible !== 0;
  }
  search.addEventListener('input', filter);
  filter();
})();
