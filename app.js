const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '!'; 
require("dotenv").config();
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

//loop through js files
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}!`)
});


//check for new messages
client.on("message", message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();


    // send back a response when the specific command has been written
    if(command === 'hello'){
        client.commands.get('hello').execute(message, args);
    } 

    else if(command.startsWith(`answer`)){
        client.commands.get('8ball').execute(message, args);
    }

    else if(command === `aboutme`){
        client.commands.get('about').execute(message, args);
    }

    else if(command === `fight`){
        client.commands.get('fight').execute(message, args);
    }
});

client.login(process.env.BOTTOKEN);

