require("dotenv").config()

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log("bot is running");
});

client.on('message', msg => {
    if(msg.content === 'ping'){
        console.log("ping")
        msg.channel.send('Pong!')
    }
})

client.login(process.env.BOT_TOKEN)