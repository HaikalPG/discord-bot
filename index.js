// Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

const dotenv = require('dotenv').config();

client.once('ready', () => {
    console.log('Udin Online');
});

client.on('message', (message) => {
    if(message.content == 'hello'){
        message.channel.send('world');
    }
    if(message.content == 'show my avatar'){
        message.reply(message.author.displayAvatarURL());
    }
    if(message.content == 'rip'){
        const attach = new MessageAttachment('https://i.imgur.com/w3duR07.png');
        console.log(message.author.tag)
        message.channel.send('Hello')
        message.channel.send(attach)
    }
    
});

client.login(process.env.DISCORD_TOKEN);