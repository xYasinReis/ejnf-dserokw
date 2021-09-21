const Discord = require('discord.js');

exports.run = async (client, message, args) => {
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Komutu Kullanmak için Yetkin Yok.")
      if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("Komutu Kullanmak için Yetkin Yok.")
      let channel = message.channel;

    message.channel.send("Trying to nuke this channel.")
   
  
    const cloned = await channel.fetch();
    const channelWebhooks = await channel.fetchWebhooks();
  
  
    await channel.delete();
    const created = await message.guild.channels.create(cloned.name,{
      type:cloned.type,
      parent:cloned.parent,
      nsfw:cloned.nsfw,
      topic:cloned.topic,
      rateLimitPerUser:cloned.rateLimitPerUser,
      permissionOverwrites:cloned.permissionOverwrites.array()
    })
    created.setPosition(cloned.rawPosition);
  for await (const [id, webhook] of channelWebhooks) {
  
  await created.createWebhook(webhook.name, {
  
  avatar:webhook.avatar,
  
  reason:"Nuked this channel." 
  
  })
  }
  message.guild.channels.cache.find(a => a.name === created.name).send("<:kapiss:794115227170897931>  **Nuked this channel.** \nhttps://tenor.com/view/explosion-boom-explode-gif-17383346")
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'nuke'
};
