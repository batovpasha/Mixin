'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const logable = (obj, data) => {
  obj['data'] = data;
  obj['date'] = new Date();
};

const o1 = {
  data: 0
};

const o2 = {
  data: 0
};

const o3 = {
  data: 0
};

rl.question('please enter the data: ', (data) => {
  logable(o1, data);
  console.log(o1);
  setTimeout(logable, 3000, o2, data);
  setTimeout((obj) => (console.log(obj)), 3000, o2);
  setTimeout(logable, 6000, o3, data);
  setTimeout((obj) => (console.log(obj)), 6000, o3);
  rl.close();
});
