const Discord = require('discord.js');

const { User, ClientUser, GuildMember, TeamMember, Message} = require("discord.js");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "USER", "REACTION"]});

const guild = client.guilds.cache.get(process.env.DISCORD_SERVER_ID);

module.exports = {

    name: 'report',
    description: "report a naughty person",
    async execute(message, args, Discord, client){
              

        let embed = new Discord.MessageEmbed()
        .setColor('#1ed700')
        .setTitle('Report \n')
        .setDescription(`Person who reported ${message.author} \n`
            + `Channel reported in: channel\n`
            + `Person reported: person \n`
            + `Reason reported: Reason` )
         

    let messageEmbed = await message.channel.send(embed);
    message.channel.send('Hello!');

    }}