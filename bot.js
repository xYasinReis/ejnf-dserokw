const Discord = require("discord.js");
const db = require("quick.db");
const jimp = require("jimp");
const client = new Discord.Client();
const express = require("express");
const moment = require("moment");
const app = express();
const ayarlar = require("./ayarlar.json");
let prefix = ayarlar.prefix;
const fs = require("fs");

//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("Bot Başarıyla Uptime Ediliyor . . .");
});
app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});

//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`${client.user.tag}! Aktif!`);
});

client.login(ayarlar.token);
//////////////CASP LOCK//////////////////////////////////
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(
                `Bu sunucuda **QUİCK** Caps Lock Engelleme sistemi kullanılıyor.Bu yüzden mesajını sildim!`
              )
              .then(m => m.delete(5000));
          }
        }
      }
    }
  }
});
//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\
//-----------------------Sa-As-----------------------\\

client.on("message", async message => {
  const laurysas = message.content.toLocaleLowerCase();

  if (
    laurysas === "selam" ||
    laurysas === "sa" ||
    laurysas === "selamün aleyküm" ||
    laurysas === "selamun aleyküm" ||
    laurysas === "slm" ||
    laurysas === "sea"
  ) {
    let e = await db.fetch(`sa-as_${message.guild.id}`);
    if (e === "acik") {
      const laurysaas = new Discord.MessageEmbed()
     .setDescription(`**Aleyküm Selam,Hoş Geldin Dostum** <a:merhabaa:816923880606007316>`)
     .setColor("RANDOM")
      
    return message.channel.send(laurysaas)
    }
  }
});

//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\
//-----------------------Sa-As Son-----------------------\\

//////////////////////hawli//////////////////////
client.on("message", async message => {
  const ms = require("parse-ms");

  let cooldown = 3600000; /// Cooldown MS olarak kendinize göre ayarlayabilirsiniz.

  let sure = await db.fetch(`sahipsure_${message.author.id}`);

  let kisi = "768080464984014918"; //sahip id

  if (message.author.id === kisi) {
    if (sure !== null && cooldown - (Date.now() - sure) > 0) {
      let time = ms(cooldown - (Date.now() - sure));
    } else {
      if (message.content.length > 1) {
        db.set(`sahipsure_${message.author.id}`, Date.now());

        const embed = new Discord.MessageEmbed()

          .setDescription(
            `<@${message.author.id}> **İşte Havalı Sahibim.** <a:kral:813051738406780928> `
          )

          .setColor(0x36393F);

        message.channel.send(embed);
      }
    }
  }

  if (message.author.id !== kisi) return;
});


//-----------------------Reklam Engel Link Engel-----------------------\\
//-----------------------Reklam Engel Link Engel-----------------------\\
//-----------------------Reklam Engel Link Engell-----------------------\\
//---------------------------------|Link engel Sistemi başlangıç|---------------------------------\\
client.on('message', message => {

  // Datadaki "Reklam Engel" Kısmını Çağıralım
  let codemarefireklamengel = db.fetch(`linkcodemarefi_${message.guild.id}`)

  // Komutlarımıza Geçelim, Eğer Reklam Engel Sistemi Aktif İse Reklam Yapan Kullanıcıya Uyarı Verelim
  if(codemarefireklamengel === 'codemarefiaktif'){
    // Reklam Ayarlamaları
    const codemarefireklamliste = ['.org','.tr','discord.gg','.space','.funy','.fun','.com','.xyz','.glitch-me','.eueo.org','free.biz','.biz','.free','.blogspot-com','.alan','.com.tr','.sexs','.hub','.dance','.in','.net','.shop','.store','.click','.tech','.best','.college','.me','.site','.online','.art','.host','.baby','.website','.blog','.link','.top','.info','.press','.monster','.services']
    if(codemarefireklamliste.some(codemarefi => message.content.includes(codemarefi))){
      // Kullanıcının Mesajını Silelim
      message.delete();

      // Reklam yapan terbiyesize uyarı mesajı atalım ve bu 5 saniye sonra chati kirletmemek açısından silinsin.
      const reklamyasak = new Discord.MessageEmbed()
      .setDescription(`${message.author} - **Hey Dostum!. Bu Sunucuda Reklam Yapmana İzin Vermem.**`) 
      .setColor('#36393F')
      message.channel.send(reklamyasak).then(codemarefisil => {
        codemarefisil.delete({timeout: 5000})
      })
    }
  } else {
    return
  }
})
//---------------------------------|Link engel Sistemi son|----------
//-----------------------Reklam Engel Son-----------------------\\
//-----------------------Reklam Engel Son-----------------------\\
//-----------------------Reklam Engel Son-----------------------\\
client.on("message", async msg => {
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(" ");
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  const kufur = [
    "mk",
    "göt",
    "amk",
    "amq",
    "aq",
    "orospu",
    "oruspu",
    "yavşak",
    "oç",
    "sikerim",
    "yarrak",
    "piç",
    "amq",
    "sik",
    "amcık",
    "çocu",
    "oç",
    "sex",
    "seks",
    "amına",
    "orospu çocuğu",
    "sg",
    "siktir git"
  ];

  const reklam = [
    ".ml",
    "discord.gg",
    "invite",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".party",
    ".rf.gd",
    ".az",
    "glitch.me",
    "glitch.com"
  ];

  let kufures = await db.fetch(`kuyarr_${msg.author.id}`);
  let linkes = await db.fetch(`luyarr_${msg.author.id}`);
  let ads = msg.author.id;
  if (fAK == "açık") {
    const fltr = filtre;
    if (fltr.some(word => msg.content.includes(word))) {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
        msg.delete();

        var k = new Discord.MessageEmbed()
          .setColor("#01CFFE")
          .setAuthor("Filtre Sistemi")
          .setDescription(
            `Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`
          );
        msg.channel.send(k).then(message => message.delete(5000));

        return;
      }
    }
  }

  if (!msg.guild) return;

  if (db.has(`küfürE_${msg.guild.id}`) === true) {
    if (kufur.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();

        var k = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setAuthor("Küfür Engeli!")
          .setDescription(
            `Hey <@${msg.author.id}>, **Bu sunucuda küfürler **${client.user.username}** tarafından engellenmektedir! Küfür etmene izin vermeyeceğim! <a:unlem:814527254029402193>**`
          );
        db.add(`kuyarr_${msg.author.id}`, 1);
        msg.channel.send;
      }
    }
  }
});

//-------------------KÜFÜR ENGEL SON-----------------------\\

client.on("guildDelete", guild => {
  let plasmic = new Discord.MessageEmbed()

    .setColor("RED")
    .setTitle(" Bot Atıldı ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("805475073690959882").send(plasmic);
});

//--------------------------------------------------------//

client.on("guildCreate", guild => {
  let plasmicc = new Discord.MessageEmbed()

    .setColor("GREEN")
    .setTitle(" Bot Eklendi ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.cache.get("805475073690959882").send(plasmicc);
});

//////////////////////////////////////////////////

client.on("ready", async () => {
  let botVoiceChannel = client.channels.cache.get("812785151427608696");
  console.log("Bot Ses Kanalına bağlandı!");
  if (botVoiceChannel)
    botVoiceChannel
      .join()
      .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

///////////////////////////////
//kayıt kanal son //

client.on("guildMemberAdd", async member => {
  let user = member.user;
  require("moment-duration-format");
  let channel = member.guild.channels.cache.get("835243265716125699");
      let aylartoplam = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    };
    let aylar = aylartoplam;

    require("moment-duration-format");

    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const ayyy = moment.duration(kurulus).format("M");
    var kontrol = [];

    if (ayyy < 1) {
      kontrol = "<a:laury_no:816556209092034570> **Şüpheli** ";
    }
    if (ayyy > 1) {
      kontrol = "<a:laury_yes:816556207857991722> **Güvenilir** ";
    }

    if (!channel) return;
  channel.send(`${member} <@&835243219603816468>`);
  moment.locale("tr");
  let embed = new Discord.MessageEmbed()
    .setImage("https://cdn.discordapp.com/attachments/830013823511298048/835482268906160138/afis.png")
    .setDescription(`<a:hg_krdsm:835965882617954334> **Sunucumuza Hoşgeldin** ${member.user}
    
<a:laury_yes:816556207857991722> Seninle beraber **${
    member.guild.memberCount
  }** kişi olduk!
  
<:jopu_yersin:827580718312849408> Kayıt Olmak İçin İsmini Belirt 
  
<a:beyazelmass:819562084538122281> Hesabın kuruluş zamanı **${moment(
    user.createdAt
  ).format("D MMMM YYYY HH:mm:ss")}**
  
Bu Vatandaş: ${kontrol} 

<@&835243219603816468> rolündeki yetkililer sizinle ilgilenecektir.
`);
  channel.send(embed);
});

//////////////
//////////////////////////////////////////////////

client.on("ready", async () => {
  let botVoiceChannel = client.channels.cache.get("812785151427608696");
  console.log("Bot Ses Kanalına bağlandı!");
  if (botVoiceChannel)
    botVoiceChannel
      .join()
      .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

///////////////////////////////


//-----------------------TAG-ROL----------------------\\     STG
client.botlist = {
    "log": "835243290999128124",
    "kanalyetkili": "812785065519218768", 
    "yetkili": "812785065519218768",
    "geliştirici": "835243244925091850",
    "botrol": "835251234129707060",
    "başvurukanal": "835243288465637387"
}  

