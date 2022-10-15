const { Client, Intents } = require('discord.js');
const command = require('./command');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require('./config.json');

client.on('ready', ()=> {
    console.log('The client is ready!')

    command(client, 'ping', (message) => {
        message.channel.send('Pong!')
    })

    command(client, 'hoe dik is nico', (message) => {
        message.channel.send('zeer dik')
    })

    command(client, 'servers', (message) =>{
        client.guilds.cache.forEach((guild =>{
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`)
        }))
    })
    command(client, 'status', (message) =>{
        const content = message.content.replace('!status ', '')
        client.user.setPresence({
            activity:{
                name: content,
                type: 0
            }
        })
    })
})

client.login(process.env.BOT_TOKEN)