export function readPagesAvgMins(read_pages, pages) {
  if (!read_pages) {
    return Math.round(pages * 1.15);
  }

  const sumReadPages = read_pages.reduce((acc, el) => acc + el, 0);
  return Math.round((pages - sumReadPages) * 1.15);
}
