const Discord = require('discord.js');

const { User, ClientUser, GuildMember, TeamMember} = require("discord.js");

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "USER", "REACTION"]});

const guild = client.guilds.cache.get("778511556858216448");

module.exports = {

    name: 'report',
    description: "report a naughty person",
    execute(message, args){
        message.channel.send(`<@${guild.guildMember.user.id}> reported`);
    }
}