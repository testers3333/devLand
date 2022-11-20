// in your terminal: npm i aoi.js and npm i dotenv 
const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: "bot token",
  prefix: ["$getServerVar[prefix]","<@$clientID>"],
  intents: "all",
          database: {

            type:'default',

            db:require('dbdjs.db'),

            path:"./db/",

            tables:["main"],

            promisify:true

        },

        respondOnEdit:{

            commands: true

        },

        suppressAllErrors: true
    })


require("dotenv").config(); 

bot.onMessage()
bot.onLeave()
bot.onMessageDelete()
bot.onJoin()
bot.onInteractionCreate()
bot.onMessageUpdate()
bot.onMessageDeleteBulk()
bot.onGuildJoin()
bot.onGuildLeave()
bot.onGuildUpdate()
bot.onGuildUnavailable()
bot.onRoleCreate()
bot.onRoleUpdate()
bot.onRoleDelete()
bot.onChannelCreate()
bot.onChannelUpdate()
bot.onChannelDelete()
bot.onChannelPinsUpdate()
bot.onStageInstanceCreate()
bot.onStageInstanceUpdate()
bot.onStageInstanceDelete()
bot.onThreadCreate()
bot.onThreadUpdate()
bot.onThreadDelete()
bot.onThreadListSync()
bot.onThreadMemberUpdate()
bot.onThreadMembersUpdate()
bot.onMemberUpdate()
bot.onMemberAvailable()
bot.onMembersChunk()
bot.onEmojiCreate()
bot.onEmojiDelete()
bot.onEmojiUpdate()
bot.onStickerCreate()
bot.onStickerDelete()
bot.onStickerUpdate()
bot.onBanAdd()
bot.onBanRemove()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onReactionAdd()
bot.onReactionRemove()
bot.onReactionRemoveAll()
bot.onReactionRemoveEmoji()
bot.onVoiceStateUpdate()
bot.onPresenceUpdate()
bot.onTypingStart()
bot.onApplicationCmdCreate()
bot.onApplicationCmdDelete()
bot.onApplicationCmdUpdate()
bot.onUserUpdate()
bot.onVariableCreate()
bot.onVariableDelete()
bot.onVariableUpdate()
bot.onRateLimit()
bot.onWebhookUpdate();

bot.status({
  text: "Made with ❤️ by DevLand", // you can change this by what do you want
  type: "PLAYING", // or COMPTETITING/WATCHING/LISTENING/STREAMING
  status: "idle", // or dnd/online/offline
  time: 12
})
// if you want a 2nd status just add the same code what you see on the top here

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

bot.variables({
  prefix: "=", // you can change by the prefix you want
})
