module.exports = async (client) =>{
    const guild = client.guilds.cache.get('778511556858216448');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('817060870957826059');
        channel.setName(`Member Count: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}