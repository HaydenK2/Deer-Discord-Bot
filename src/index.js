const {Client, IntentsBitField} = require('discord.js');

// Intents = set of permissions to access set of events
//  ex. if have Guilds, will know if guild (aka server) is created, etc.
const client = new Client({

    intents: [IntentsBitField.Flags.Guilds, 
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.MessageContent,
            ],
});

client.login("MTI3MzAxNzkzNjMxOTM1MjgzMw.GA4eY4.wKUkTGETkUw51tkh-CvzJrhAUrReieC_IL37dc");
