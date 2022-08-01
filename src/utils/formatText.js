export const formatText = (text) =>
  text
    .toString()
    .replace(/(\n|;\s+)/g, ($1) => ($1.includes(';') ? ';' : $1))
    .trim();
