// One page of `items` (1-based, clamped to the valid range) plus the page count
export const paginate = (items, page, pageSize) => {
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const current = Math.min(Math.max(page, 1), pageCount);
  const start = (current - 1) * pageSize;

  return { items: items.slice(start, start + pageSize), page: current, pageCount };
};
