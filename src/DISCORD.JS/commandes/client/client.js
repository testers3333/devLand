const { ApplicationCommandOptionType, Client, CommandInteraction, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChatInputCommandInteraction } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "client",
    description: "Obtenir une donnée du client.",
    options: [
        {
            name: "latence",
            description: "Connaître les différentes latences du client.",
            type: ApplicationCommandOptionType.Subcommand,
            options: []
        },
        {
            name: "statistiques",
            description: "Connaître les différentes statistiques du client.",
            type: ApplicationCommandOptionType.Subcommand,
            options: []
        },
        {
            name: "connexion",
            description: "Connaître la date de connexion du client.",
            type: ApplicationCommandOptionType.Subcommand,
            options: []
        },
        {
            name: "invite",
            description: "Obtenir de quoi inviter le client.",
            type: ApplicationCommandOptionType.Subcommand,
            options: []
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {db} data
     */
    async run (client, interaction, data) {
        const sub = interaction.options.getSubcommand();

        if(sub === 'latence'){
                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor('#5865F2')
                        .setTitle(':white_check_mark: **Recherche en cours**')
                        .setDescription(`:stopwatch: | **Calcul des latences en cours.**`)
                    ],
                    fetchReply: true
                })
                    .then(async (msg) => {
                        const ms1 = msg.createdTimestamp - interaction.createdTimestamp;
                        const ms2 = client.ws.ping;
                        const ms3 = Date.now();
                        data.all();
                        const ms4 = Date.now() - ms3;

                        if(!msg.editable){
                            return msg.reply({
                                embeds: [
                                    new EmbedBuilder()
                                    .setColor('#F04747')
                                    .setTitle(':x: **Modification impossible**')
                                    .setDescription(`:warning: | **Le message** [**${msg.id}**](https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${msg.id}) **ne peut pas être modifié.**\`\`\`md\n# Modifiable:\n- ${msg.editable ? 'Oui' : 'Non'}\n# Supprimable:\n- ${msg.deletable ? 'Oui' : 'Non'}\`\`\``)
                                ]
                            })
                        }

                        return msg.edit({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#43B581')
                                .setTitle(':white_check_mark: **Latence trouvée**')
                                .setDescription(`:stopwatch: | **Voici les latences du client**\`\`\`md\n# Base de donnée:\n- ${ms4}ms\n# Api gateway:\n- ${ms2}ms\n# Réponse:\n- ${ms1}ms\`\`\``)
                            ]
                        })


                    });
        } else if(sub === 'statistiques'){
                let boost = 0;
                client.guilds.cache.filter(async (g) => g.premiumSubscriptionCount > 0).forEach(async (g) => boost+= g.premiumSubscriptionCount);
                let role = 0;
                client.guilds.cache.filter(async (g) => g.roles.cache.size > 0).forEach(async (g) => role+= g.roles.cache.size);

                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor('#43B581')
                        .setTitle(':white_check_mark: **Statistiques**')
                        .setDescription(`:stopwatch: | **Voici les statistiques du client.**\`\`\`md\n# Guildes:\n- ${client.guilds.cache.size}\n# Utilisateurs:\n- ${client.users.cache.size}\n# Salons:\n- ${client.channels.cache.size}\n# Boosts:\n- ${boost}\n# Rôles:\n- ${role}\n# Base de donnée:\n- connecté\n# Latence:\n- ${client.ws.ping}ms\n# Discord.js:\n- ${require('../../package.json').dependencies["discord.js"]}\n# Tag:\n- ${client.user.tag}\n# Commandes:\n- 4\`\`\``)
                    ],
                });
          
        } else if (sub === 'connexion'){
                let jours = Math.floor(client.uptime / 86400000);
                let heures = Math.floor(client.uptime / 3600000) % 24;
                let minutes = Math.floor(client.uptime / 60000) % 60;
                let secondes = Math.floor(client.uptime / 1000) % 60;

                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor('#43B581')
                        .setTitle(':white_check_mark: **Connexion**')
                        .setDescription(`:stopwatch: | **Date de connexion du client.**\`\`\`md\n# ${jours < 2 ? 'Jour' : 'Jours'}\n- ${jours}\n# ${heures < 2 ? 'Heure' : 'Heures'}\n- ${heures}\n# ${minutes < 2 ? 'Minute' : 'Minutes'}\n- ${minutes}\n# ${secondes < 2 ? 'Seconde' : 'Secondes'}\n- ${secondes}\`\`\``)
                    ],
                });
        } else if(sub === 'invite'){
                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor('#43B581')
                        .setTitle(':white_check_mark: **Lien généré**')
                        .setDescription(`:stopwatch: | **Voici un** [**lien**](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands) **d'invitation.**`)
                    ],
                    components: [
                        new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                            .setDisabled(false)
                            .setLabel('Invite-moi !')
                            .setStyle(ButtonStyle.Link)
                            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
                        )
                    ]
                });
        } else {
                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                        .setColor('#F04747')
                        .setTitle(':x: **Commande invalide**')
                        .setDescription(`:warning: | **La commande ${this.name} a bien été reçue.**\`\`\`md\n# Erreur:\n- Aucune sous commande trouvée.\`\`\``)
                    ]
                })
        }
    }
}