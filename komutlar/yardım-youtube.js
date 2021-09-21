const Discord = require("discord.js");

exports.run = async (client, message, args) => {//yrnex
  
  let lauryembed = new Discord.MessageEmbed()
  .addField('Abone Sistemi Komutları',`
  \n <a:yrnex_tiks5:807620903412039740> **-abone-yetkili-rol :** Abone Yetkilisini Ayarlar.\n <a:yrnex_tiks5:807620903412039740> **-abone-log :** Abone Log Kanalını Ayarlar.\n <a:yrnex_tiks5:807620903412039740> **-abone-rol :** Abone Rolünü Ayarlar.\n <a:yrnex_tiks5:807620903412039740> **-abone/a :** Abone Rolü Verirsiniz.`)
  .setColor("#0x36393F")
  .setImage("https://media.discordapp.net/attachments/805475073690959882/824348768933117993/standard_4.gif")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();

  
  message.channel.send(lauryembed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["youtube"],
  permLevel: 0
};

exports.help = {
  name: "youtube",
  description: "youtube",
  usage: "youtube"
};