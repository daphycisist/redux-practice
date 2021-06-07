const {pipe} = require("lodash/fp");

const getTag = (obj) => obj.tag;

const lowerCase = (str) => str.toLowerCase();

const res = (str) => `(${str}})`;

const ans = pipe(getTag, lowerCase, res);
const output = ans({ tag: "JAVASCRIPT" })

console.log(output);
