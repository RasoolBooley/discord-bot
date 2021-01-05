module.exports = {
    name: "about",
    description: "Quick description of the User, provides ID, username and code to add friend",

    execute(message, args){
        message.reply(`Here's what I could find
        Your Username: ${message.author.username}         
        Your Discord Tag: ${message.author.tag}
        Your ID: ${message.author.id} `)
    }
}