const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("<a:uyari:813052992419921951> **Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Omalısınız!**"))
const Salvo = args.join(` `);
  if(!Salvo) message.channel.send(new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **-sa-as aç & kapat**`)
  .setColor("RED")
  .setFooter("Laury"))
if(Salvo === "aç") {
db.set(`sa-as_${message.guild.id}`, `acik`);
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Sa-As Sistemi Başarılı Bir Şekilde Açıldı <a:onaylandi:817000434374803466>`)
  .setColor("GREEN")
  .setFooter("Laury"))
}
else if(Salvo === "kapat") {
db.set(`sa-as_${message.guild.id}`, `kapali`);
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Sa-As Sistemi Başarılı Bir Şekilde Kapatıldı <a:reddedildi:819888681456369704>`)
  .setColor("RED")
  .setFooter("Laury"))
}
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sa-as","saas"]
  };
  
  exports.help = {
  name: "sa-as",
  description: "Selam Sistemi",
  usage: "sa-as"
  };



