export function getMostRecent(array: any[]) {
  return array.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })[0];
}
