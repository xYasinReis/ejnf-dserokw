const laury = require('discord.js')
exports.run = function(client, message, args) {

const embed = new laury.MessageEmbed()
.addField(`**Toplam Komut Sayısı ;**`,`<a:settings:819977511349518356> **${client.commands.size}**`)
  message.channel.send(embed)
  
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["toplam-komut","komut-sayısı","komutsayısı"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'toplam-komut'
  };