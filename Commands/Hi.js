  
module.exports = {
    name: 'hi',
    description: "this command tells you hello",
    execute(message, args){
        message.channel.send('Hello!');
    }
}