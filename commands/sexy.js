module.exports = {
    name: "dm",
    description: `sends a risky DM`,

    execute(message, args){
        if (!args.length) {
            message.author.send("How you doing cutie")
                .then(() =>{
                    if (message.channel.type === 'dm') return;
                    message.reply("pls read dms")
                })
        }
    }
}