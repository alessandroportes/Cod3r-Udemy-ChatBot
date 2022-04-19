const env = require('../../.env');
const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');
const session = require('telegraf/session');
const bot = new Telegraf(env.token);

const botoes = (lista) => Extra.markup(
  
);
