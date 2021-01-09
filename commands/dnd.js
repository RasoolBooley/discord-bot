module.exports = {
    name: "dnd",
    description: `Starts a short prewritten d&d game`,

    execute(message, args){
        const optionA = 'a';
        const optionB = 's';

        message.channel.send(`You're in a forest
            ${optionA}: Go North
            ${optionB}: Go South`)
            
                .then(() => {
                    const filter = m => message.author.id === m.author.id;

                    message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
                    .then(messages => {

                        // going north
                        if(messages.first().content === optionA){
                            message.channel.send(`You've encountered a dungeon. Do you...
                            ${optionA}: Charge in with your axe at the ready!
                            ${optionB}: Sneak in with your dagger drawn.`);

                            message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
                                .then(messages =>{
                                    if(messages.first().content === optionA){
                                        message.channel.send(`You sprint in and immediately trip and hit your head. You're knocked out and killed by a bandit in your unconscious state. You should have been a bit more cautious. 
                                        Fin.`)
                                    } else if (messages.first().content === optionB){
                                        message.channel.send(`You sneak into the dungeon and see a prisoner with two bandits beating them, you also see a treasure chest on the other side of the room. Do you...
                                        ${optionA}: Attempt to open the chest while the bandits are distracted
                                        ${optionB}: Try to save the prisoner by sneak attacking the bandits`);

                                        message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
                                            .then(messages =>{
                                                if(messages.first().content === optionA){
                                                    message.channel.send(`You manage to pick open the chest and steal all some of its contents. About 20 gold and a jeweled necklace. You left dungeon richer, and you left the poor prisoner to die. You're a horrible person.
                                                    Fin.`)
                                                } else if(messages.first().content === optionB){
                                                    message.channel.send(`You stab and kill one of the bandits and after a short struggle the other bandit overpowers you and hits you with his axe and you fall to the ground. As you lay bleeding, you see the prisoner escaping. Knowing you saved him puts ease in your heart, right before an axe is slammed into your skull.
                                                    Fin.`)
                                                } else {
                                                    message.channel.send(`Oops, that's not an input. Sorry, you have to start from the beginning.`)
                                                }
                                            })
                                            .catch(() => {
                                                message.channel.send('You did not enter any input!');
                                            });
                                    } else{
                                        message.channel.send(`Oops, that's not an input. Sorry, you have to start from the beginning.`)
                                    }
                                })
                                .catch(() => {
                                    message.channel.send('You did not enter any input!');
                                });



                        // going south
                        } else if(messages.first().content === optionB){
                            message.channel.send(`You've encountered a Troll and notice an unconscious person and a warhammer next to them on the ground. Do you...
                            ${optionA}: Run away!
                            ${optionB}: Try to get the warhammer and attack the Troll!`);
                            message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })
                                .then(messages =>{
                                    if(messages.first().content === optionA){
                                        message.channel.send(`As you attempt to escape you look back and see a boulder being hurled at you, you're not quick enough to dodge it and it crushes you under its immense weight. I thought you were a warrior?
                                        Fin.`);
                                    } else if(messages.first().content === optionB){
                                        message.channel.send(`You scramble to grab the Hammer and manage to grab it before the troll can get to you. You make a mighty swing and bash the troll in the chest. It runs away in fear. You find the unconscious person beginning to wake and see it is a beautiful woman in full steel armour. Do you...
                                        ${optionA}: Ask for a reward
                                        ${optionB}: Ask the woman if she's okay`);
                                        message.channel.awaitMessages(filter, { time: 60000, max: 1, errors: ['time'] })

                                            .then(messages =>{
                                                if(messages.first().content === optionA){
                                                    message.channel.send(`The woman grabs the hammer from you and drops a pouch of about 5 silver at your feet. At least you made a little bit of money.
                                                    Fin.`);
                                                } else if(messages.first().content === optionB){
                                                    message.channel.send(`The woman explains she is royalty and takes you back to her castle where you are knighted and given a hefty sum of gold for your troubles. Sometimes it pays to be nice.
                                                    Fin.`)
                                                } else{
                                                    message.channel.send(`Oops, that's not an input. Sorry, you have to start from the beginning.`)
                                                }
                                            })
                                            .catch(() => {
                                                message.channel.send('You did not enter any input!');
                                            });
                                    } else {
                                        message.channel.send(`Oops, that's not an input. Sorry, you have to start from the beginning.`)
                                    }
                                })
                                .catch(() => {
                                    message.channel.send('You did not enter any input!');
                                }); 
                        } else {
                            message.channel.send(`Oops, that's not an input. Sorry, you have to start from the beginning.`)
                        }           
                    })
                    .catch(() => {
                        message.channel.send('You did not enter any input!');
                    });
            
                });

    },

}