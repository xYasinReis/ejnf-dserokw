const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 let güvenlik = message.guild.verificationLevel
  if(güvenlik === "NONE") güvenlik = "Yok"
    if(güvenlik === "LOW") güvenlik = "Düşük"
      if(güvenlik === "MEDIUM") güvenlik = "Orta"
   if(güvenlik === "HIGH") güvenlik = "Yüksek"
     if(güvenlik === "VERY_HIGH") güvenlik = " En Yüksek"
     const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
  let guild = message.guild;
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(`https://media.discordapp.net/attachments/761099716993613824/771419350828843059/gif_3.gif?width=115&height=115`)
    
        .addField(`<a:yrnex_mor:798254164776976425> **__Sunucudaki Toplam Üye Sayısı__**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
    
        .addField(`<a:yrnex_mics:808013744533274635> **__Seslideki Üye Sayısı__**`,`**\`\`\`${count}\`\`\`**`)
    
        .addField(`<a:ayarlar:819977727745851472> **__Güvenlik Seviyesi__**`,`**\`\`\`${güvenlik}\`\`\`**`)
    
        .addField(`<:kanal:817018773411725334> **__Yazı Kanalları__**`, `» **${textChannels}**`)
    
        .addField(`<:ses:817018707594444830> **__Ses Kanalları__**`, `» **${voiceChannels.size}**`)
    
        .addField(`<a:yrnex_hypes:794222389584068618>  **__Roller__**`,`»  **${message.guild.roles.cache.size}**`)
    
        .addField(`<a:emojiler:817019430257164308>  **__Emojiler__**`,`»  **${message.guild.emojis.cache.size}**`)
    
        .addField(`<:istatistik:817020128771833901> **__Boost Seviyesi__**`,`»  **${message.guild.premiumTier}/3**`)
    
        .addField(`<a:boosts:817020170324148234> **__Boost Sayısı__**`,`»  **${message.guild.premiumSubscriptionCount}**`)
   
        .setTitle(`<a:small_orange_diamond:771414619776352277> ${message.author.tag} - Tarafından istendi.`)
        .setImage("https://images-ext-2.discordapp.net/external/O5P_OG5rwi1HSnghZhbTtyAJDrynvpc7QA7pc1pLnIM/%3Fwidth%3D360%26height%3D2/https/media.discordapp.net/attachments/817943888937222174/817944069355339786/divider.gif?width=324&height=2")
        .setFooter(`© 2021 Laury BOT Tüm Hakları Saklıdır.`, client.user.avatarURL)
    message.channel.send(embed);

} 


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}