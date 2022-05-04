const a = [12, 13, 14, 15, 16, 17];
const b = [22, 12, 13, 14, 24, 66];
const c = [44, 33, 17, 22, 46, 25];

const all = [...a, ...b, ...c];

Object.defineProperties(Array.prototype, {
  count: {
    value: function (value) {
      return this.filter((x) => x == value).length;
    },
  },
});

all.map((el) => {
  return console.log("son " + el + ", takrorlandi: " + all.count(el));
});
