const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
};

const proto = {
  prop11: {
    prop22: null,
  },
};

const res = {
  prop11: {
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
};
