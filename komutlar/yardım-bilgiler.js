const Discord = require("discord.js");

exports.run = async (client, message, args) => {//yrnex
  
  let lauryembed = new Discord.MessageEmbed()
  .addField('Eğlence Komutları',`
  \n <a:yrnex_tiks8:807621060551770133> **-kullanıcı-bilgi :** Profilinizi Görürsünüz.\n <a:yrnex_tiks8:807621060551770133> **-sunucu-bilgi :** Sunucu Hakkındaki Bilgiler.\n<a:yrnex_tiks8:807621060551770133> **-say :** Sunucudaki Kişi Sayısını Söyler.\n <a:yrnex_tiks8:807621060551770133> **-davet :** Botu Davet Edersin.\n <a:yrnex_tiks8:807621060551770133> **-bot-bilgi :** Bot Hakkında Bilgi Verir.\n <a:yrnex_tiks8:807621060551770133> **-ping :** Gecikmeyi Görürsünüz.`)
  .setColor("#0x36393F")
  .setImage("https://media.discordapp.net/attachments/805475073690959882/824348768933117993/standard_4.gif")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();

  
  message.channel.send(lauryembed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bilgiler"],
  permLevel: 0
};

exports.help = {
  name: "bilgiler",
  description: "bilgiler",
  usage: "bilgiler"
};