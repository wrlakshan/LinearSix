Date.prototype.daysTo = function (otherDate) {
  if (!(otherDate instanceof Date)) {
    throw new TypeError("Argument should be a Date");
  }
  const diffTime = Math.abs(otherDate - this);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

const date1 = new Date("2024-01-01");
const date2 = new Date("2024-01-10");
console.log(date1.daysTo(date2));
