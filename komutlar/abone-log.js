let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:yrnex_uyar:800419824538091610> **Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.**`)
  
  let log = message.mentions.channels.first()
  if(!log) return message.channel.send(`<a:laury_no:816556209092034570> **Bir kanal etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonelog #kanal__**`)
  
  
  database.set(`abonelog.${message.guild.id}`, log.id)
  message.channel.send(`<a:laury_yes:816556207857991722> **Abone kanalı başarıyla "${log}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-log'],
  perm: 0
}
exports.help = {
  name: 'abone-log'
}

exports.play = {
  kullanım: 'abone-log #kanal',
  açıklama: 'Abone Logunu Ayarlarsınız',
  kategori: 'Abone'
}