const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
  const nome = ctx.update.message.from.first_name;
  ctx.reply(`Seja bem vindo, ${nome}!\nAvise de precisar de /ajuda`);
})

bot.command('ajuda', ctx => ctx.reply('/ajuda: vou mostrar as opções'
  + '\n/ajuda2: para testar via hears'
  + '\n/op2: Opção generica'
  + '\n/op3: Outra opção generica qualquer'
))

bot.hears('/ajuda2', ctx => ctx.reply('Eu também consigo capturar comandos'
  + ', mas utilize a /ajuda mesmo'))

bot.hears(/\/op/i, ctx => ctx.reply('Resposta padrão para comandos genericos'))

bot.startPolling()