const fs = require("fs");
const parseSJDF = require("./parser");

const input = fs.readFileSync("../examples/nested.sjdf", "utf-8");
const output = parseSJDF(input);

console.log(JSON.stringify(output, null, 2));
