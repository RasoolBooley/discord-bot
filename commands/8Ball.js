module.exports = {
    name: "8ball",
    description: "A magic 8 ball game that answers your questions",

    execute(message, args){
            const replies = [
            'As I see it, yes.',
            'Ask again later.',
            'Better not tell you now.',
            `Concentrate and ask again.`,
            `Don't count on it.`,
            `It is certain.`,
            `Very doubtful.`,
            `My sources say no.`,
            `Outlook good.`
        ]
    
        const r = Math.floor(Math.random() * replies.length);
        message.reply(replies[r]);
    }
}