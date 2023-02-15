const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('oop')
        .setDescription('Describes OOP'),
    async execute(interaction) {
        await interaction.reply('`OOP stands for "Object-Oriented Programming." It is a programming paradigm that uses objects to represent and manipulate data and behavior in software programs. OOP is based on the concept of objects, which are instances of classes that encapsulate data and behavior. OOP allows for modular, reusable, and extensible code that can be easier to maintain and debug.`')
    }
}