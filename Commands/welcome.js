const {Message, TeamMember, GuildMember } = require("discord.js");
module.exports = Client => {
    client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
     
        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get(process.env.WELCOME).send(`Welcome <@${guildMember.user.id}> This is a server dedicated to Bub Gum Bot. The bot is still under development so we want your help. Your suggestions for bot commands, and codes, or even for the server all belong in the suggestion category. Thank you for joining us on this project!`)
    })};
