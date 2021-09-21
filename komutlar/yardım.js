const Discord = require("discord.js");
const moment = require("moment");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();
require("moment-duration-format");    
const prefix = ayarlar.prefix;
exports.run = async (bot, msg, args) => {
  const yardım = new Discord.MessageEmbed()
    .setThumbnail("https://media.discordapp.net/attachments/780048856162238484/786271870990549062/776117172363722756.gif")
    .setColor("BLACK")
    .setFooter('Sunucumuza katılmayı unutmayın: discord.gg/xksdUskx8q !')
    .setAuthor("Laury Bot Yardım Menüsü")   
    .setDescription(
      "*Bu botta bulunan tüm komut kategorileri ! :*",
      false
    )
   .addField(
      "<a:zils:816196039534182410> **__YouTube__**",
      "`-youtube`",
      true
    )
    .addField(
      "<a:yrnex_yetkili:794224205662257153> **__Moderasyon__**",
      "`-moderasyon`",
      true
    )
    .addField(
      "<a:yrnex_krmzvumpus:798604064912965632> **__Bilgi__**",
      "`-bilgiler`",
      true
)
  .addField(
      "<:laury:832173649729421332> **Destek**",
      "[Sunucu](https://discord.gg/xksdUskx8q)",
      true
    )
    .addField(
      "<:onayck:833699236045520948> **Davet Et**",
      "[Davet](https://discord.com/oauth2/authorize?client_id=787328444954050570&scope=bot&permissions=8)",
      true
    )
.addField(
      "<a:botlist:816573242113261568> **Oy Ver**",
      "[Link](https://top.gg/bot/787328444954050570)",
      true
    );

  msg.channel.send(yardım);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yardım", "help"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "yardım"
};
    