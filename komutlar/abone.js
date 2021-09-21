let Discord = require("discord.js");
let database = require("quick.db");
let ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  let aboneyetkilisi = await database.fetch(
    `aboneyetkilisi.${message.guild.id}`
  );
  let abonelog = await database.fetch(`abonelog.${message.guild.id}`);
  let abonerol = await database.fetch(`abonerol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `<a:vumpushypee:805848458883760179> **__Abone rolü ayarlanmamış!__**`
    );
  if (!abonelog)
    return message.channel.send(
      `<a:vumpushypee:805848458883760179> **__Abone log kanalı ayarlanmamış!__**`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `<a:vumpushypee:805848458883760179> **__Abone yetkili rolü ayarlanmamış!__**`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`Bir Üye Etiketle!`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`<a:zils:816196039534182410> Abone Rolü Verildi!`)
    .addField(
      `<a:vumpushypee:805848458883760179> Abone Rolünü Veren Kişi:`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      `<a:vumpushypee:805848458883760179> Abone Rolü Verilen Kişi:`,
      `${user}`,
      true
    )
    .addField(
      `<a:vumpushypee:805848458883760179> Mesaj linki`,
      `[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`,
      true
    )
    .setColor(`RANDOM`)
    .setImage(
      "https://media.discordapp.net/attachments/805475073690959882/824348768933117993/standard_4.gif"
    )
    .setFooter(`${client.user.username} Abone Sistemi`);
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone"],
  perm: 0
};
exports.help = {
  name: "abone"
};

exports.play = {
  kullanım: "abone @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};

//CodeWorld Yunus Emre
