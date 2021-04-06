module.exports = async (client) =>{
    const guild = client.guilds.cache.get(process.env.DISCORD_SERVER_ID);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(process.env.WELCOME_CHANNEL);
        channel.setName(`Member Count: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}