export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function daysBetween(a, b) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  return Math.floor((b.getTime() - a.getTime()) / MS_PER_DAY);
}

export function isPastDue(dueDate, now = new Date()) {
  return now.getTime() > dueDate.getTime();
}
