module.exports.execute = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, Discord, client, args) {
        const channel = '816700662414049292';
        const Announcement = message.guild.roles.cache.find(role => role.name === "Announcement");
        const commandhelper = message.guild.roles.cache.find(role => role.name === "Command Helper");
 
        const AnnouncementEmoji = '🎤';
        const CommandhelperEmoji = '🔧';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#1ed700')
            .setTitle('Choose ping roles!')
            .setDescription('These will allow to stay up to date!\n'
                + `${AnnouncementEmoji} for announcments\n`
                + `${CommandhelperEmoji} for when we need help with code`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(AnnouncementEmoji);
        messageEmbed.react(CommandhelperEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === AnnouncementEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Announcement);
                }
                if (reaction.emoji.name === CommandhelperEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(commandhelper);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove',async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === AnnouncementEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Announcement);
                }
                if (reaction.emoji.name === CommandhelperEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(commandhelper);
                }
            } else {
                return;
            }
        });
    }
 
}   