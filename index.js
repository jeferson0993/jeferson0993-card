#!/usr/bin/env node
const boxen = require("boxen");
const chalk = require("chalk");

const y = chalk.yellow;
const g = chalk.grey;
const c = chalk.cyan;
const b = chalk.bold;

const cardOptions = {
  padding: 1,
  margin: 1,
  borderColor: 'cyan'
};

const content = `${b('Jeferson Ferreira')}   Web Developer
               
      ${g('Web')}   ${y('https://jeferson0993.github.io')}
   ${g('GitHub')}   ${y('https://github.com/jeferson0993')}
 ${g('LinkedIn')}   ${y('https://linkedin.com/in/jeferson0993')}
    ${g('Email')}   ${y('jeferson0993@gmail.com')}
 ${g('Whatsapp')}   +55 (63) 9 9234 9996

     ${g('Card')}   ${c('npx jeferson0993')}`;

const card = boxen(content, cardOptions);

console.log(card);
