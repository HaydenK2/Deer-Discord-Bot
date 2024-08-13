require("dotenv").config();
const {Client, IntentsBitField} = require('discord.js');
required_words = ["shikanoko", "nokonoko", "koshitantan"];



// Intents = set of permissions to access set of events
//  ex. if have Guilds, will know if guild (aka server) is created, etc.
//  need to turn on priviliged getway intents on bot
const client = new Client({

    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});


//  Confirms bot is online
client.on('ready', (cli) => {
    console.log(`${cli.user.tag} is online.`);
});

//  message listener
client.on('messageCreate', (message) => {
    // console.log(message);
    //  if message has bot property...
    if (message.author.bot) {
        return;
    }
    
    sentWords = message.content.toLowerCase();

    if (message.content === "shikanoko nokonoko koshitantan") {
        
        shikaMsg(message);

    }
})

function shikaMsg(message) {
    //  https://stackoverflow.com/questions/69124819/send-an-image-using-discord-js
    message.channel.send( "Nun.\n");
    message.channel.send({files: [{ attachment: 'static\\images\\NUN.jpg' }]});
    
    console.log("waiting");

    setTimeout(function(){
        console.log("reply message");
        message.channel.send("https://www.youtube.com/watch?v=ZZvIVRQ4E7I");
    }, 1500);
}

client.login(process.env.TOKEN);
