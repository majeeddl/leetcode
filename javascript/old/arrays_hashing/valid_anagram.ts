const reorder = (str: string) =>
  str
    .split("")
    .sort((a: string, b: string) => a.localeCompare(b))
    .join("");

export const isAnagram = (s: string, t: string) => {
  if (s.length !== t.length) return false;

  return reorder(s) === reorder(t);
};
