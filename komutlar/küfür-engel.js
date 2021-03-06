const Discord = require('discord.js');
const fs = require('fs');

var ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {
  
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**<a:reddedildi:819888681456369704> Bu komutu kullanabilmek için Yönetici iznine sahip olmalısın!**`);

  const db = require('quick.db');
  

	let args = message.content.split(' ').slice(1);
	const secenekler = args.slice(0).join(' ');

	if(secenekler.length < 1) return message.reply(`**<a:reddedildi:819888681456369704> **-küfür-engel aç** veya **-küfür-engel kapat** yazınız.** `);
	//if(secenekler === "aç" || "kapat") return message.channel.send(errembed);

  if (secenekler !== "aç" && secenekler !== "kapat" && secenekler !== "on" && secenekler !== "off") return message.reply(`**-küfür-engel aç** veya **-küfür-engel kapat** yazınz `)
  
	if (secenekler === "aç" || secenekler === "on") {
    
    var i = db.set(`küfürE_${message.guild.id}`, "acik")
    
		  const embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setDescription(`**<a:onaylandi:817000434374803466> Küfür Engeli Başarıyla açıldı\nKüfür engelini kapatmak isterseniz **-küfür-engel kapat** yazmanız yeterlidir.**`)
    message.channel.send(embed)
    let kufurEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));
 if(!kufurEngel[message.guild.id]){
		kufurEngel[message.guild.id] = {
			kufurEngel: "acik"
		  };
  };

		  fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(kufurEngel), (x) => {
        if (x) console.error(x)
      })

	};

	if (secenekler === "kapat" || secenekler === "off") {
    
    //var i = db.set(`küfürE_${message.guild.id}`, "kapali")
    
    db.delete(`küfürE_${message.guild.id}`)
    
		message.channel.send('Küfür engelleyici kapatıldı')
  /*let kufurEngel = JSON.parse(fs.readFileSync("././jsonlar/kufurEngelle.json", "utf8"));
  if(!kufurEngel[message.guild.id]){
		kufurEngel[message.guild.id] = {
			kufurEngel: "kapali"
		  };
  };

		fs.writeFile("././jsonlar/kufurEngelle.json", JSON.stringify(kufurEngel), (x) => {
        if (x) console.error(x)
      })
    
    if (kufurEngel[message.guild.id]) {
    delete kufurEngel[message.guild.id]
    delete kufurEngel[message.guild.id].kufurEngel
    }*/
    
	};
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['küfür-engel'],
		permLevel: 4,
    kategori: "ayarlar",
	};
	  
	exports.help = {
		name: 'küfür-engel',
		description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'küfür-engel <aç/kapat>',
    
	};