const { CommandInteraction, Client } = require('discord.js');
const db = require('quick.db');
const fs = require('fs');

module.exports = {
    name: "interactionCreate",
    once: false,
    /**
     * 
     * @param {Client} client 
     * @param {db} database 
     * @param {CommandInteraction} interaction 
     */
    async execute (client, database, interaction) {
        if(!interaction.isChatInputCommand()) return;
        const slashFolders = fs.readdirSync('./commandes');
        for(const folder of slashFolders){
            const slashFiles = fs.readdirSync(`./commandes/${folder}`);
            for(const file of slashFiles){
                const data = require(`../../commandes/${folder}/${file}`);

                if(data.name === interaction.commandName){
                    return data.run(client, interaction, database);
                }
            }
        }
    }
}