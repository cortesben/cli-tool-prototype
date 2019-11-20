#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nameValue;

rl.question('What is your name ? ', name => {
  nameValue = name;
    rl.question('Where do you live ? ', country => {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
    });
});

rl.on('close', function() {
    console.log(`\nBYE BYE ${nameValue}!!!`);
    process.exit(0);
});
