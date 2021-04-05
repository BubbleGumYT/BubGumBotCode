const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "USER", "REACTION"]});

const prefix = '-'

const fs =require('fs');

const memberCount = require('./Counter/Membercount')


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('BubGum is online!')
    memberCount(client)
});

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hi'){
        client.commands.get('hi').execute(message, args);
    } else if (command === 'reaction'){
        client.commands.get('reaction roles').execute(message, args, Discord);
    } else if (command === 'info'){
        client.commands.get('info').execute(message, args, Discord);
    } else if (command === 'commands'){
        client.commands.get('commands').execute(message, args, Discord);
    } else if (command === 'code'){
        client.commands.get('code').execute(message, args, Discord);
    } else if (command === 'report'){
        client.commands.get('report').execute(message, args, Discord);
    }
});

client.login(process.env.DISCORD_TOKEN);
