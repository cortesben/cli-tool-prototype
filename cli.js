#!/usr/bin/env node
const [fist, second, ...args] = process.argv;

// console.log(process.argv)
// args.forEach(element => {
//   console.log(element);
// });
console.log(`Good morning ${args.join(' ')}`);
