const Discord = require('discord.js');

const { User, ClientUser, GuildMember, TeamMember, Message} = require("discord.js");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "USER", "REACTION"]});

module.exports = {
    name: 'report',
    description: "report a naughty person",

    async execute(message, args, Discord, client){ 

    const guild = message.guild   

    let embed = new Discord.MessageEmbed()
        .setColor('#1ed700')
        .setTitle('Report \n')
        .setDescription(`Person who reported ${message.author} \n`
            + `Channel reported in: ${message.channel}\n`
            + `Person reported: person \n` //The second argument
            + `Reason reported: Reason` ) // The third argument
         

    let messageEmbed = await message.channel.send(embed);
    message.channel.send(`<@&${process.env.DUMMY_ROLE}>`);

    }};