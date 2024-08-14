require("dotenv").config();
const {Client, IntentsBitField} = require('discord.js');
const emotes = (str) => str.match(/<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu);
requiredWords = ["shikanoko", "nokonoko", "koshitantan"];
requiredWordsJp = ["しかのこ", "のこのこ", "こしたんたん"];
JPFlag = false;
ENFlag = false;
counter = 0;
canClap = false;

totalCounter = 0;   //  must say four times
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



//  Confirms if bot enters server for first time
client.on('guildCreate', (guild) => {
    guild.systemChannel.send( "Nun!\n");
    guild.systemChannel.send({files: [{ attachment: 'static\\images\\Enter_Noko.gif' }]});
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
    if (message.content === "👏") {
        
        if (canClap && totalCounter >= 3) {
            shikaMsg(message);
            totalCounter = 0;
        }  else if (canClap) {
            totalCounter++;
        }  else {
            resetCounters();
        }
    }
    else if (message.content === "shikanoko nokonoko koshitantan" || message.content === "しかのこのこのここしたんたん") { 
        //  phrase must be said 4 times
        canClap = true;
        console.log("can now clap");
        
    }   else if (message.content === requiredWords[counter]) {
        

        //  if JPFlag is on then must reset
        if (JPFlag) {
            console.log("original Sequence started in JP! RESTART");
            resetCounters();
            return;
        }

        if (counter >= requiredWords.length - 1) {
            canClap = true;
            console.log("can now clap");
            counter = 0;
        }   else {
            counter++;
            console.log("increment counter: " + counter);
            ENFlag = true;
            console.log("Must continue sequence in jp!");
        }
    }   else if (message.content === requiredWordsJp[counter]){
        
        //  if ENFlag is on then must reset
        if (ENFlag) {
            console.log("original Sequence started in EN! RESTART");
            resetCounters();
            return;
        }

        if (counter >= requiredWords.length - 1) {
            canClap = true;
            console.log("can now clap");
            counter = 0;
        }   else {

            counter++;
            console.log("increment counter: " + counter);
            JPFlag = true;
            console.log("Must continue sequence in jp!");
        } 
        
    } else {
        //  If these aren't consecutive, then we reset all counters
        console.log("ERROR: WRONG SEQUENCE! RESTART!");
        resetCounters();
    }
})


/**
 * Resets all global vars
 */
function resetCounters() {
    counter = 0;
    totalCounter = 0;
    JPFlag = false;
    ENFlag = false;
    canClap = false;
}

/**
 * check if the totalCounter is at least 3
 * 
 * @param {*} message discord message
 */
function checkTotalCounter(message) {
    //  totalCounter Must be called four times
    if (totalCounter >= 3) {
        shikaMsg(message);
        totalCounter = 0;
    }  else {
        totalCounter++;
        console.log("increment total counter; it's now " + totalCounter);
    }   
}

function shikaMsg(message) {
    //  https://stackoverflow.com/questions/69124819/send-an-image-using-discord-js
    message.channel.send( "Nun\n");
    message.channel.send({files: [{ attachment: 'static\\images\\NUN.jpg' }]});
    
    console.log("waiting");

    setTimeout(function(){
        console.log("reply message");
        //  maybe send a audio mp3? https://stackoverflow.com/questions/66037860/how-can-i-get-my-discord-bot-to-send-mp3-files-discord-py
        message.channel.send("https://www.youtube.com/watch?v=ZZvIVRQ4E7I");
        // message.channel.send({files: [{attachment: 'static\\audio\\ShikairoDays.mp3'}]});
    }, 1500);
}

client.login(process.env.TOKEN);
