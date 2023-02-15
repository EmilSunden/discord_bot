const { Events } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        if (interaction.commandName === 'ping') {
            // await interaction.deferReply();
            // await wait(4000);
            // await interaction.editReply('Pong!')
            await interaction.reply('Pong!')
            await interaction.followUp({ content: 'Pong again!', ephemeral: true })
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(`Error executing ${interaction.commandName}`);
            console.error(error)
        }
    }
}