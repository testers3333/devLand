const { Client, Guild } = require('discord.js');

module.exports = {
    name: "guildCreate",
    once: false,
    /**
     * 
     * @param {Client} client 
     * @param {Guild} guild 
     */
    async execute (client, guild) {
        if(guild.memberCount <= 15){
            return guild.leave();
        }
        if(guild.members.cache.filter(async (m) => m.user.bot).size >= guild.members.cache.filter(async (m) => !m.user.bot).size){
            return guild.leave();
        }
    }
}