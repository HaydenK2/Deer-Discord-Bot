const {Client, IntentsBitField} = require('discord.js')
token = MTI3MzAxNzkzNjMxOTM1MjgzMw.GA4eY4.wKUkTGETkUw51tkh-CvzJrhAUrReieC_IL37dc
const client = new Client(
    // Intents = set of permissions to access set of events
    //  ex. if have Guilds, will know if guild (aka server) is created, etc.
    intents = [IntentsBitField.Flags.Guilds, 
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.MessageContent]

    client.login(token)
)
