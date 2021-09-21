const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let guild = message.guild;

    guild.fetchBans()
        .then(bans => message.channel.send(` > <a:BanHammer:816607111898857482>  **Sunucunuzda ${bans.size} banlanmış üye bulunmaktadır!**   `))
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    runIn: ["ban-say"],
    aliases: ['ban-say'],
    permLevel: 0
  };

  exports.help = {
    name: "ban-say",
    description: "Sunucudan banlanan kişilerin sayısını gösterir",
    usage: "ban-say"
  }
