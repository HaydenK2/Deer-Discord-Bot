const {Client, IntentsBitField} = require('discord.js')

token = "dfs"

const client = new Client(
    // Intents = set of permissions to access set of events
    //  ex. if have Guilds, will know if guild (aka server) is created, etc.
    intents = [IntentsBitField.Flags.Guilds, 
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.MessageContent]
);
client.login(token);
