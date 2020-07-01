const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {

  if (ctx.update.message.from.id == env.clientID) {
    ctx.reply('Ao seu dispor, mestre!')
  } else {
    console.log(env.clientID)
    ctx.reply('Sinto muito, mas eu só falo com o meu mestre')
  }
})

bot.startPolling()