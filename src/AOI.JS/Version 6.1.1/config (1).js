module.exports= {
    Bot: {
        token: "",
        prefix: "=",
        intents: ["Guilds", "GuildMembers", "GuildModeration", "GuildBans", "GuildEmojisAndStickers", "GuildIntegrations", "GuildWebhooks", "GuildInvites", "GuildVoiceStates", "GuildPresences", "GuildMessages", "GuildMessageReactions", "GuildMessageTyping", "DirectMessages", "DirectMessageReactions", "DirectMessageTyping", "MessageContent", "GuildScheduledEvents", "AutoModerationConfiguration", "AutoModerationExecution"],
        events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onGuildJoin", "onGuildLeave", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onReactionAdd", "onReactionRemove", "onReactionRemoveAll", "onReactionRemoveEmoji", "onVoiceStateUpdate", "onPresenceUpdate", "onTypingStart", "onInteractionCreate", "onApplicationCmdPermsUpdate", "onUserUpdate", "onVariableCreate", "onVariableDelete", "onVariableUpdate", "onFunctionError", "onWebhookUpdate"],
        database: {
            type:'default',
            db:require('dbdjs.db'),
            path:"./db/",
            tables:["main"],
            promisify:false
        },
        respondOnEdit:{
            commands: true
        },
        suppressAllErrors: false,
        desktopPlatform: true
    }
}
