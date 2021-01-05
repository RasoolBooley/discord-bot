module.exports = {
    name: "about",
    description: "Quick description of the User, provides ID, username and code to add friend",

    execute(message, args){
        message.reply(`Here's what I could find
        ${message.author.username}         
        ${message.author.tag}
        ${message.author.id} `)
    }
}