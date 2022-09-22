const { Client, ApplicationCommandType, Collection } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

module.exports = {
    name: "ready",
    once: false,
    /**
     * 
     * @param {Client} client 
     * @param {db} database
     */
    async execute (client, database) {
        const slashFolders = fs.readdirSync('./commandes');
        for(const folder of slashFolders){
            const slashFiles = fs.readdirSync(`./commandes/${folder}`);
            for(const file of slashFiles){
                const data = require(`../../commandes/${folder}/${file}`);

                if(!data.name) return console.log(`La commande du fichier ${file} manque d'un nom.`);
                if(!data.description) return console.log(`La commande du fichier ${file} manque d'une description.`);

                if(data.name && data.description){
                    console.log(`La commande du fichier ${file} a été configuré avec comme nom: ${data.name}.`);

                    return client.application.commands.create({
                        name: data.name,
                        description: data.description,
                        type: ApplicationCommandType.ChatInput,
                        options: data.options || []
                    });
                }
            }
        }
    }
}