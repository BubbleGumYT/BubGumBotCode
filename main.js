const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "USER", "REACTION"]});

const prefix = '-' //Put whatever symbol you want to be used for commands. So like "-kick" vs. "/kick" chose what symbol goes.

const fs =require('fs');

const memberCount = require('./Counter/Membercount')


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('BubGum is online!') // put whatever you want in the parantheses. Make sure to save or press "Ctrl + S" to save your work. Make sure to save every file. And then from there open a new terminal and type "node ." to have the bot to work
    memberCount(client)
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member'); //Put whatever role you want for every member
     
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get(process.env.WELCOME).send(`Welcome <@${guildMember.user.id}> This is a server dedicated to Bub Gum Bot. The bot is still under development so we want your help. Your suggestions for bot commands, and codes, or even for the server all belong in the suggestion category. Thank you for joining us on this project!`)
    //For the message (second paranthesses) put whatever you want for the welcome message
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
