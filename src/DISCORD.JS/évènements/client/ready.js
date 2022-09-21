const { Client } = require('discord.js');

module.exports = {
    name: "ready",
    once: true,
    /**
     * 
     * @param {Client} client 
     */
    async execute (client) {
        client.guilds.cache
            .filter(async (g) => {
                guild.members.cache.filter(async (m) => m.user.bot).size >= guild.members.cache.filter(async (m) => !m.user.bot).size
                &&
                guild.memberCount <= 15
            })
            .forEach((g) => {
                return g.leave();
            });
    }
}