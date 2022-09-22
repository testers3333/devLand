const { Client } = require('discord.js');
const client = new Client({intents: 131071}); // discord.js v14.4.0
const { config } = require('./bot.json');
const db = require('quick.db');

const fs = require('fs');
const eventFolders = fs.readdirSync('./évènements');
for(const folder of eventFolders){
    const eventFiles = fs.readdirSync(`./évènements/${folder}`);
    for(file of eventFiles){
        const data = require(`./évènements/${folder}/${file}`);
        if(!data.name) return console.log(`Le fichier ${file} n'a pas de nom d'évènement.`);
        if(!data.execute) return console.log(`Le fichier ${file} n'a pas de nom d'évènement.`);
        if(data.once){
            client.once(data.name, (...args) => data.execute(client, db, ...args));
            console.log(`Le fichier ${file} contenant l'évènement ${data.name} vient de charger.`);
        } else {
            client.on(data.name, (...args) => data.execute(client, db, ...args));
            console.log(`Le fichier ${file} contenant l'évènement ${data.name} vient de charger.`);
        }
    }
}

client.login(config.token)
    .then(async () => {
        console.log(`Le client vient de se connecter sous l'utilisateur: ${client.user.username}`);
    })
    .catch(async (e) => {
        console.log(`La clé renseigné est une clé invalide.`);
    });


/*
    INFORMATIONS !
        - Les commandes se trouvant dans le dossier "commandes" sont uniquement des slash's.
        - Le dossier "contextuels" est utilisé pour les commandes contextuels d'utilisateur ou de message.
        - Installes discord.js, quick.db & fs en utilisant cette commande "npm i discord.js@v14.4.0 fs quick.db@v7.1.3" 
*/