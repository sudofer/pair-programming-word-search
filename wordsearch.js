const transpose = require("./transpose");
let searchCount = 0;

const wordSearch = (letters, word) => {
  if (searchCount > 2) {
    searchCount = 0;
    return false;
  }
  searchCount++;
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  if (wordSearch(transpose(letters), word)) return true;
  return false;
};

module.exports = wordSearch;
