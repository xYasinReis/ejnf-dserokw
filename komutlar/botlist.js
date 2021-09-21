const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("835243244925091850")
  message.react("✅")
  message.channel.send("✅・**Rolün Başarıyla Verildi** <#835243288465637387>")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: ["botlist"],
  permLevel: 0
}
exports.help = {
  name: "botlist"
}
