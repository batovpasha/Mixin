'use strict';

const wrap = (obj, ...funcs) => {
  for (const i in funcs) {
    if (obj.hasOwnProperty(funcs[i].name)) {
      obj[funcs[i].name] = funcs[i];
    }
  }
};

const o = {
  toString() {
    return console.log('hello world!');
  },
  age() {
    return 2017;
  }
};

function toString() {
  return console.log('goodbye world!');
}

function age() {
  return 1917;
}

wrap(o, toString, age);
o.toString();
console.log(o.age());
