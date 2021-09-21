const Discord = require('discord.js');
const db = require('quick.db');
const botlist  = require('../bot.js')
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = async(client, message, args) => {

  if(message.channel.id !== client.botlist.başvurukanal) return message.channel.send(`<#${client.botlist.başvurukanal}> sadece bu kanalda kullanabılır.`)


let botid = args[0]
let prefix = args[1]
if(!botid) return message.channel.send(`Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; \`\`${ayarlar.prefix}botekle <bot-id> <bot-prefix>\`\``)
if(!prefix) return message.channel.send(`Lütfen eksik kısımları doldurun.\n**Doğru Kullanım**; \`\`${ayarlar.prefix}botekle <bot-id> <bot-prefix>\`\``)
message.delete()
  
message.reply(`<a:beyazelmass:819562084538122281>  **Botun sıraya eklendi tek yapman gereken beklemek.**`).then(m => m.delete({timeout: 5000}));

  
  client.channels.cache.get(client.botlist.log).send(`<@&${client.botlist.yetkili}>`)
  
  let embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("Başvuru")
  .setDescription(`**Bot Sahibi**:\n${message.author}\n**Bot ID**:\n${botid}\n**Bot Prefix**:\n${prefix}\n**Davet Linkleri**:\n[Perm 0](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0) | [Perm 8](https://discord.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)`)
  client.channels.cache.get(client.botlist.log).send(embed)
  

}
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:["bot-ekle"],
	permlevel: 0
};

exports.help = {
	name: "bot-ekle"
}