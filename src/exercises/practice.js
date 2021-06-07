const { compose, pipe } = require("lodash/fp");
// import { compose, pipe } from "lodash/fp";

const input = "   Javascript   ";

const trim = (str) => str.trim();

const toLowerCase = (str) => str.toLowerCase();

const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

const transform = pipe(trim, toLowerCase, wrap("div"));

const result = transform(input);

console.log(result);
