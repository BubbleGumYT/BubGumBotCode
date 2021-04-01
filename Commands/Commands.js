  
module.exports = {

    name: 'commands',
    description: 'commands in use',
    async execute(message, Discord, client, args){
              

        let embed = new Discord.MessageEmbed()
        .setColor('#1ed700')
        .setTitle('Commands that we use:')
        .setDescription('\n'
            + `-hi (tells you hello)\n\n`
            + `-info (tells you about the bot)\n\n`
            + `-commands (tells you what commands are in use)\n\n`
            + `-code (gives you link to the Git Hub page)\n`
        .setTitle('Automated code:')
        .setDescription('\n')
            + `Welcome autorole (gives a role automatically when you join)\n\n`
            + `Welcome message (sends a custom message when you a member joins)`);

    let messageEmbed = await message.channel.send(embed);
    }}