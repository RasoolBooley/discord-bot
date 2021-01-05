module.exports = {
    name: "hello",
    description: "Simple responses from the bot when it's greet with hello",

    execute(message, args){
        message.reply(`Hello, ${message.author.username}. Welcome to the Server! I hope you enjoy your stay.`);
    }
}