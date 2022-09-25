const { ApplicationCommandOptionType, Client, CommandInteraction, ChannelType, ChatInputCommandInteraction, VoiceChannel, StageChannel, EmbedBuilder, GuildMember, formatEmoji, fetchRecommendedShardCount, PermissionsBitField } = require("discord.js");
const db = require('quick.db');

module.exports = {
    name: "voice",
    description: "Effectuer une action vocale.",
    options: [
        {
            name: "statistiques",
            description: "Obtenir les statistiques des utilisateurs en vocal.",
            type: ApplicationCommandOptionType.SubcommandGroup,
            options: [
                {
                    name: "user",
                    description: "Obtenir les statistiques d'un utilisateur en vocal",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "user",
                            description: "Utilisateur auquel vous souhaiteriez connaître ses données vocal.",
                            type: ApplicationCommandOptionType.User,
                            required: true
                        }
                    ]
                },
                {
                    name: "server",
                    description: "Obtenir les statistiques des membres en vocal d'un serveur",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: []
                }
            ]
        },
        {
            name: "moove",
            description: "Déplacer des utilisateurs d'un vocal à un autre.",
            type: ApplicationCommandOptionType.SubcommandGroup,
            options: [
                {
                    name: "user",
                    description: "Déplacer un utilisateur précis dans un autre vocal.",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "user",
                            description: "Utilisateur auquel vous souhaiteriez connaître ses données vocal.",
                            type: ApplicationCommandOptionType.User,
                            required: true
                        },
                        {
                            name: "channel",
                            description: "Salon où l'utilisateur sera déplacé.",
                            type: ApplicationCommandOptionType.Channel,
                            required: true,
                            channelTypes: [
                                ChannelType.GuildVoice,
                                ChannelType.GuildStageVoice
                            ]
                        }
                    ]
                },
                {
                    name: "channel",
                    description: "Déplacer tous les utilisateurs d'un vocal à un autre.",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "from",
                            description: "Salon d'où seront déplacer les utilisateurs.",
                            required: true,
                            type: ApplicationCommandOptionType.Channel,
                            channelTypes: [
                                ChannelType.GuildVoice,
                                ChannelType.GuildStageVoice
                            ]
                        },
                        {
                            name: "to",
                            description: "Salon où seront déplacer les utilisateurs du vocal définis précédemment.",
                            required: true,
                            type: ApplicationCommandOptionType.Channel,
                            channelTypes: [
                                ChannelType.GuildVoice,
                                ChannelType.GuildStageVoice
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    /**
     * 
     * @param {Client} client 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {db} data 
     */
    async run(client, interaction, data) {
        const sub = interaction.options.getSubcommandGroup();

        if(sub === 'statistiques'){

                const subb = interaction.options.getSubcommand();

                if(subb === 'user'){
                    const us = interaction.guild.members.cache.get(interaction.options.get('user').value);

                    if(!us.voice.channel){
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#F04747')
                                .setTitle(':x: **Salon invalide**')
                                .setDescription(`:warning: | **L'utilisateur <@${us.user.id}> n'est pas présent en vocal.**`)
                            ]
                        })
                    }

                    let a = us.voice;

                    interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setColor('#43B581')
                            .setTitle(':white_check_mark: **Données vocales**')
                            .setDescription(`:warning: | **Voici les données vocales de <@${us.user.id}>.**`)
                            .addFields([
                                {name: "**Séssion**", value: "`" + a.sessionId + "`", inline: true},
                                {name: "**Muet**", value: a.mute ? ":white_check_mark:" : ":x:", inline: true},
                                {name: "**Sourd**", value: a.deaf ? ":white_check_mark:" : ":x:", inline: true},
                                {name: "**Salon**", value: "<#" + a.channel?.id + ">", inline: true},
                                {name: "**Caméra**", value: a.streaming ? ":white_check_mark:" : ":x:", inline: true},
                                {name: "**Partage d'écran**", value: a.selfVideo ? ":white_check_mark:" : ":x:", inline: true}
                            ])
                        ]
                    })

                }

                if(subb === 'server'){

                    let a = interaction.guild.members.cache;

                    interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setColor('#43B581')
                            .setTitle(':white_check_mark: **Données vocales**')
                            .setDescription(`:warning: | **Voici les données vocales de ${interaction.guild.name}.**`)
                            .addFields([
                                {name: "**En vocal**", value: "`" + a.filter((m) => m.voice.channel).size + "`", inline: true},
                                {name: "**Muet**", value: "`" + a.filter((m) => m.voice.channel && m.voice.mute).size + "`", inline: true},
                                {name: "**Sourd**", value: "`" + a.filter((m) => m.voice.channel && m.voice.deaf).size + "`", inline: true},
                                {name: "**Non en vocal**", value: "`" + a.filter((m) => !m.voice.channel).size + "`", inline: true},
                                {name: "**Partage d'écran**", value: "`" + a.filter((m) => m.voice.channel && m.voice.streaming).size + "`", inline: true},
                                {name: "**Caméra**", value: "`" + a.filter((m) => m.voice.channel && m.voice.selfVideo).size + "`", inline: true}
                            ])
                        ]
                    })
                    
                }
                
        }
        else if(sub === 'moove'){
                const subb = interaction.options.getSubcommand();

                if(subb === 'user'){

                        /**
                        *
                        * @param {VoiceChannel | StageChannel} ch
                        * @param {GuildMember} us 
                        */
                        const ch = interaction.guild.channels.cache.get(interaction.options.get('channel').value);
                        const us = interaction.guild.members.cache.get(interaction.options.get('user').value);

                        if(!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.MoveMembers)){
                            return interaction.reply({
                                embeds: [
                                    new EmbedBuilder()
                                    .setColor('#F04747')
                                    .setTitle(':x: **Permission invalide**')
                                    .setDescription(`:warning: | **Mes permissions sont insuffisantes.**`)
                                ]
                            })
                        }
    
                        if(!interaction.member.permissions.has(PermissionsBitField.Flags.MoveMembers)){
                            return interaction.reply({
                                embeds: [
                                    new EmbedBuilder()
                                    .setColor('#F04747')
                                    .setTitle(':x: **Permission invalide**')
                                    .setDescription(`:warning: | **Vos permissions sont insuffisantes.**`)
                                ]
                            })
                        }

                        if(!us.voice.channel){
                            return interaction.reply({
                                embeds: [
                                    new EmbedBuilder()
                                    .setColor('#F04747')
                                    .setTitle(':x: **Salon invalide**')
                                    .setDescription(`:warning: | **L'utilisateur <@${us.user.id}> n'est pas présent en vocal.**`)
                                ]
                            })
                        }

                        if(us.voice.channel.id === ch.id){
                            return interaction.reply({
                                embeds: [
                                    new EmbedBuilder()
                                    .setColor('#F04747')
                                    .setTitle(':x: **Salon invalide**')
                                    .setDescription(`:warning: | **L'utilisateur <@${us.user.id}> est déjà présent dans ce salon.**`)
                                ]
                            })
                        }

                        interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#43B581')
                                .setTitle(':white_check_mark: **Utilisateur déplacé**')
                                .setDescription(`:warning: | **L'utilisateur <@${us.user.id}> a été déplacé.**`)
                            ]
                        })

                        us.voice.setChannel(ch.id);

                } else if(subb === 'channel'){

                    const ch = interaction.guild.channels.cache.get(interaction.options.get('from').value);
                    const to = interaction.guild.channels.cache.get(interaction.options.get('to').value);

                    if(!interaction.guild.members.me.permissions.has(PermissionsBitField.Flags.MoveMembers)){
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#F04747')
                                .setTitle(':x: **Permission invalide**')
                                .setDescription(`:warning: | **Mes permissions sont insuffisantes.**`)
                            ]
                        })
                    }

                    if(!interaction.member.permissions.has(PermissionsBitField.Flags.MoveMembers)){
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#F04747')
                                .setTitle(':x: **Permission invalide**')
                                .setDescription(`:warning: | **Vos permissions sont insuffisantes.**`)
                            ]
                        })
                    }

                    if(to.full){
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#F04747')
                                .setTitle(':x: **Salon remplit**')
                                .setDescription(`:warning: | **Le salon <#${to.id}> est remplit.**`)
                            ]
                        })
                    }

                    if(to.id === ch.id){
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#F04747')
                                .setTitle(':x: **Salon invalide**')
                                .setDescription(`:warning: | **Le salon est désigné deux fois.**`)
                            ]
                        })
                    }

                    if(ch.members.size === 0){
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#F04747')
                                .setTitle(':x: **Salon vide**')
                                .setDescription(`:warning: | **Le salon compte 0 membre.**`)
                            ]
                        })
                    }

                    if(!to.joinable){
                        return interaction.reply({
                            embeds: [
                                new EmbedBuilder()
                                .setColor('#F04747')
                                .setTitle(':x: **Salon non joignable**')
                                .setDescription(`:warning: | **Le salon ne peut pas être rejoint.**`)
                            ]
                        })
                    }

                    interaction.reply({
                        embeds: [
                            new EmbedBuilder()
                            .setColor('#43B581')
                            .setTitle(':white_check_mark: **Utilisateurs déplacés**')
                            .setDescription(`:warning: | **Les utilisateurs ont été déplacé.**`)
                        ]
                    })

                    ch.members.forEach(async (m) => {
                        m.voice.setChannel(to.id);
                    });

                }
                
        }
    }
}