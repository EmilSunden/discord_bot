const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");
const fs = require('node:fs');
require('dotenv').config()

// const { BOT_TOKEN, BOT_APPLICATION_ID, DISCORD_GUILD_ID} = process.env;
const BOT_TOKEN = process.env.BOT_TOKEN;
const BOT_APPLICATION_ID = process.env.BOT_APPLICATION_ID;
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
const commands = [];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log(command)
    commands.push(command.data.toJSON());
};

const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);
console.log(BOT_TOKEN)

async function runCommands () {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        console.log(Routes.applicationGuildCommands)

        const data = await rest.put(Routes.applicationGuildCommands(BOT_APPLICATION_ID, DISCORD_GUILD_ID), { body: commands })
    
        console.log(`Successfully reloaded ${data.length} application (/) commands.`)
    } catch (error) {
        console.error(error)
    }
}
runCommands();
