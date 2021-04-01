
module.exports = {

    name: 'code',
    description: 'gives you the link to github',
    async execute(message, args, Discord, client){
              

        let embed = new Discord.MessageEmbed()
        .setColor('#1ed700')
        .setTitle('GitHub Page link')
        .setDescription('\n'
            + `Here is a link to the BubGumBot code\n`
            + `It is free to download. We provide this so that you can help analyze our code and give suggestions. It is also for your personal use\n`
            + `Link here:\n`
            + 'https://github.com/BubbleGumYT/BubGumBotCode');

    let messageEmbed = await message.channel.send(embed);
    }}