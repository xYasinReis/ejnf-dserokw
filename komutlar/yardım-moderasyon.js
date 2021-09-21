const Discord = require("discord.js");

exports.run = async (client, message, args) => {//yrnex
  
  let lauryembed = new Discord.MessageEmbed()
  .addField('Moderasyon Komutları',`
  \n <a:yrnex_tiks3:807620757914910720> **-nuke :** Kanalı Siler ve Aynı İzinlerle Tekrar Açar. \n <a:yrnex_tiks3:807620757914910720> **-ban :** Birisini Banlar.\n <a:yrnex_tiks3:807620757914910720> **-unban :** Atılan Banı Açar.\n <a:yrnex_tiks3:807620757914910720> **-kick :** Birisini Atar.\n <a:yrnex_tiks3:807620757914910720> **-capsengel aç/kapat :** Caps Engeli Aç/Kapat. \n <a:yrnex_tiks3:807620757914910720> **-küfür-engel aç/kapat :** Küfür Engeli Aç/Kapat.\n <a:yrnex_tiks3:807620757914910720> **-reklam-engel aç/kapat :** Reklam Engeli Aç/Kapat.\n <a:yrnex_tiks3:807620757914910720> **-sa-as aç/kapat :** Sa-As'ı Aç/Kapat.\n <a:yrnex_tiks3:807620757914910720> **-sil:** Mesaj Siler. \n <a:yrnex_tiks3:807620757914910720> **-oylama:** Oylama Yaparsınız.`)
  .setColor("#0x36393F")
  .setImage("https://media.discordapp.net/attachments/805475073690959882/824348768933117993/standard_4.gif")
  .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL({dynamic:true}))
  .setTimestamp();

  
  message.channel.send(lauryembed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["moderasyon"],
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: "moderasyon",
  usage: "moderasyon"
};