export const logger = (message, cssCode) => {
  console.log(`%c${message}`, cssCode);
};

export const formatText = (text) =>
  text
    .toString()
    .replace(/(\n|;\s+)/g, ($1) => ($1.includes(';') ? ';' : $1))
    .trim();
