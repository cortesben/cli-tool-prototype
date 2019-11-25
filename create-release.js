#!/usr/bin/env node

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const package = require('./package.json');

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("Build Release", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    ),
    chalk.green(
      `\n\n\n
      We are going to build a release candidate to deploy for ${package.name}.
      The current version is ${package.version}.
      Create a version by using the Semantic Versioning guide for your release tag.
      Choose major, minor, patch as a release tag.
      \n\n\n`
    )
  );
};

const askAboutVersion = () => {
  const questions = [
    {
      name: "VERSION",
      type: "input",
      message: "Is this a patch, minor or major release?"
    },
    {
      name: "MESSAGE",
      type: "input",
      message: "Please write a releae message:"
    }
  ];
  return inquirer.prompt(questions);
};



const run = async () => {
  // show script introduction
  init();

  // ask questions
  const answers = await askAboutVersion();
  const { VERSION, MESSAGE = 'minor' } = answers;
  VERSION.toLowerCase();
  MESSAGE.toLowerCase();

  // run shell script with verions and commit message
  shell.exec(`./bump.sh '${VERSION}' '${MESSAGE}' `, (error, stdout, stderr) => {
    console.error(error);
  });


};

run();
