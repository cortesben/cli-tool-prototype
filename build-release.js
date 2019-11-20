#!/usr/bin/env node
const prompt = require('prompt');
const package = require('./package.json');

const properties = [
  {
    description: `
    You are creating a release for ${package.name}
    The current version is ${package.version}
    Is this a patch, minor or major release:
    `,
    name: 'semver'
  }
  // ,
  // {
  //   name: 'password',
  //   hidden: true
  // }
];

prompt.start();

prompt.get(properties, function (err, result) {
  if (err) { return onErr(err); }
  console.log('Building release candidate:');
  console.log('  we are going to run a ' + result.semver);
});

function onErr(err) {
  console.log(err);
  return 1;
}
