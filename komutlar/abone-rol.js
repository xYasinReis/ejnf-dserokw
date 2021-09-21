let database = require("quick.db")
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`<a:yrnex_uyar:800419824538091610> **Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.**`)
  
  let rol = message.mentions.roles.first()
  if(!rol) return message.channel.send(`<a:laury_no:816556209092034570> **Bir rol etiketlemen gerekmekte örnek: __${ayarlar.prefix}abonerol @rol__**`)
  
  
  database.set(`abonerol.${message.guild.id}`, rol.id)
  message.channel.send(`<a:laury_yes:816556207857991722> **Abone rolü başarıyla "${rol}" olarak ayarlandı.**`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['abone-rol'],
  perm: 0
}
exports.help = {
  name: 'abone-rol'
}

exports.play = {
  kullanım: 'abone-rol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}