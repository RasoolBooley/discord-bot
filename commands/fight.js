module.exports = {
    name: "fight",
    description: `Input lets the user "fight" the bot (basically flips a coin and chooses and winner)`,

    execute(message, args){
        let odds = Math.random();
        message.channel.send("The two champions jump into the arena, the clash is intense");
        if(odds > 0.5){
            message.channel.send(`Sorry ${message.author.username}, you lost. Better luck next time!`);
        } else {
            message.channel.send(`Congratulations ${message.author.username}! You are the Apex Champion!`);
        } 
    }
}