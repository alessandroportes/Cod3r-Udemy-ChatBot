const env = require("../.env");
const Telegraf = require("telegraf");
const Markup = require("telegraf/markup");
const bot = new Telegraf(env.token);

const tecladoCarne = Markup.keyboard([
  ["Porco", "Vaca", "Carneiro"],
  ["Galinha", "Eu como é ovo"],
  ["Peixe", "Frutos do Mar"],
  ["Eu sou vegano"],
])
  .resize()
  .extra();

bot.start(async (ctx) => {
  await ctx.reply(); //Usuário
  await ctx.reply(
    `Qual bebida você prefere?`,
    Markup.keyboard(["Coca", "Pepsi"]).resize().oneTime().extra()
  );
});

bot.hears(["Coca", "Pepsi"], async (ctx) => {
  await ctx.reply(`Nossa! Eu também gosto de ${ctx.match}`);
  await ctx.reply(`Qual a sua carne predileta?`, tecladoCarne);
});

bot.hears("Vaca", (ctx) => ctx.reply("A minha predileta também"));
bot.hears("Eu sou vegano", (ctx) => ctx.reply("Parabéns, eu prefiro carne"));
bot.hears("text", (ctx) => ctx.reply("Legal!"));

bot.startPolling();
