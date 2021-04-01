module.exports = {

    name: 'info',
    description: 'about the bot',
    async execute(message, args, Discord, client){
              

        let embed = new Discord.MessageEmbed()
        .setColor('#1ed700')
        .setTitle('About Bub Gum!')
        .setDescription('\n'
            + `This bot is currently under progress. We plan to make this a more public bot for use. But if we are going to make this bot public we are going to need the help we can get. (hey I am not a proffessional). So please do join us and help us make this bot!\n\n`
            + `Server link:https://discord.gg/znPGYd7YKW`);

    let messageEmbed = await message.channel.send(embed);
    }}