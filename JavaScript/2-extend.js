'use strict';

/*function extend(obj, mixin) {
  for (let key in mixin) {
    if (mixin.hasOwnProperty(key)) {
      obj[key] = mixin[key];
    }
  }
  return obj;
}*/

const extend = (obj, ...objects) => {
  for (const i in objects) {
    Object.keys(objects[i]).map(key => {
      if (!obj.hasOwnProperty(key)) {
        obj[key] = objects[i][key];
      }
    });
  }               // keys from objects will be mixed into obj
};                // only if it doesn't contain those keys

const obj1 = {
  name: 'Marcus Aurelius',
  city: 'Rome',
  born: '121-04-26'
};

const mix1 = {
  toString() {
    return `${this.name} was born in ${this.city} in ${this.born}`;
  },
  age() {
    const year = new Date().getFullYear();
    const born = new Date(this.born).getFullYear();
    return year - born;
  }
};

extend(obj1, mix1);
console.log(obj1);
console.log(obj1.toString());
console.log(`His age is ${obj1.age()} as of today`);
