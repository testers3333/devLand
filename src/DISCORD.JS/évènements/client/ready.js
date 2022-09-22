const { Client } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "ready",
    once: false,
    /**
     * 
     * @param {Client} client 
     * @param {db} data
     */
    async execute (client, data) {
        client.guilds.cache
            .forEach((guild) => {
                if(guild.memberCount <= 15){
                    console.log(`Le serveur ${guild.name} avait ${guild.memberCount} membres dont ${guild.members.cache.filter((m) => m.user.bot).size} robots. Je l'ai donc quitté.`);
                    return guild.leave();
                }
                if(guild.members.cache.filter((m) => m.user.bot).size >= guild.members.cache.filter((m) => !m.user.bot).size){
                    console.log(`Le serveur ${guild.name} avait ${guild.memberCount} membres dont ${guild.members.cache.filter((m) => m.user.bot).size} robots. Je l'ai donc quitté.`);
                    return guild.leave();
                }
            })
    }
}