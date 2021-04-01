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

client.on('guildMemberAdd', guildmember =>{
    let welcomerole = guildmember.guild.roles.cache.find(role => role.name === 'Member');

    guildmember.roles.add(welcomerole);
    guildmember.guild.channels.cache.get('816949158056820746').send(`Welcome <@${guildmember.user.id}>, \n We are a server dedicated to the Bub Gum bot and we just ask for a helping hand! Any suggestions on code help, bot command suggestions, or even suggestions for the server go in the suggestion category. Thank you for joining us on this project!`)
});

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'hi'){
        client.commands.get('hi').execute(message, args);
    } else if (command === 'reactions'){
        client.commands.get('reaction roles').execute(message, args, Discord);
    } else if (command === 'info'){
        client.commands.get('info').execute(message, args, Discord);
    } else if (command === 'commands'){
        client.commands.get('commands').execute(message, args, Discord);
    } else if (command === 'github'){
        client.commands.get('github').execute(message, args, Discord);
    }
});

client.login(process.env.DISCORD_TOKEN);
