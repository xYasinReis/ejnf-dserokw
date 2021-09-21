const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Laury`, client.user.avatarURL)
    .addField(
      `> <:laury:832173649729421332> Neden Laury ?`,
      `**Çünkü İşinize Yarayabilecek Güzel Bir Bot.**`
    )
    .addField(
      `> <a:yrnex_squadab:800738698513481758> Botumuzu Davet Etmek isterseniz`,
      `[Botu Davet Et!](https://discord.com/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)`
    )
    .addField(
      `> <a:yrnex_squadab:800738698513481758> Destek Sunucusuna Katılmak İsterseniz`,
      `[Destek Sunusu](https://discord.com/invite/xksdUskx8q)`
    )
    .addField(
      `> <a:yrnex_squadab:800738698513481758> Botumuzu Oy Vermek İstermisin ?`,
      `[Botu Oyla!](https://botsfordiscord.com/bot/787328444954050570/vote)`
    )
    .setImage(
      "https://media.discordapp.net/attachments/805475073690959882/824348768933117993/standard_4.gif"
    );
  
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};