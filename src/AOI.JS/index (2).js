const aoijs = require("aoi.js");
const { Util } = require("aoi.js");
const fs = require('fs');
const colors = require('colors/safe');
const { parse, createAst } = require("aoi.parser");
const { parseExtraOptions, parseComponents } = require("aoi.parser/components");
Util.parsers.ErrorHandler = parse;
Util.parsers.OptionsParser = ( data ) => {
     return createAst( data ).children.map( parseExtraOptions );
}
Util.parsers.ComponentParser = ( data ) => {
     return createAst( data ).children.map( parseComponents );
}
const config = require('./config.js');
const bot = new aoijs.AoiClient(config.Bot);
const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
  } = require(`@akarui/aoi.music`);

require('./handler/status.js')(bot)
require('./handler/variables.js')(bot)

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});

bot.readyCommand({
    channel: "",
    code: `$djsEval[var colors = require('colors/safe')
	console.clear()
	console.log(colors.cyan(d.client.user.username + '#' + d.client.user.discriminator) + colors.green(' vient juste de se relancer !'))]`
})

bot.functionManager.createFunction({
  name: "$setItem",
  type: "djs",
  code: async d => {
    let data = d.util.aoiFunc(d), {readFileSync, writeFileSync} = require("fs"), [path,key,value]=data.inside.splits, db = JSON.parse(readFileSync(path, 'utf8'));
    db[key] = value;
    writeFileSync(path,JSON.stringify(db), {encoding:'utf8'});
  return {code: d.util.setCode(data)}
  }
})

bot.functionManager.createFunction({
  name: "$getItem",
  type: "djs",
  code: async d => {
    let data = d.util.aoiFunc(d), {readFileSync} = require("fs"), [path,key]=data.inside.splits, db = JSON.parse(readFileSync(path, 'utf8'));
    data.result = db[key];
  return {code: d.util.setCode(data)}
  }
})

bot.functionManager.createFunction({
  name: "$deleteItem",
  type: "djs",
  code: async d => {
    let data = d.util.aoiFunc(d), {readFileSync,writeFileSync} = require("fs"), [path,key]=data.inside.splits, db = JSON.parse(readFileSync(path, 'utf8'));
    delete db[key];
    writeFileSync(path, JSON.stringify(db), {encoding:'utf8'})
  return {code: d.util.setCode(data)}
  }
})

const { AttachmentBuilder } = require('discord.js');
const { profileImage } = require('discord-arts');

await interaction.deferReply();
const user = interaction.options.getUser('user-option');

const buffer = await profileImage(author.id, {
  customTag: 'Admin',
  ...imgOptions
});

const attachment = new AttachmentBuilder(buffer, { name: 'profile.png' });
interaction.followUp({ files: [attachment] });

const voice = new AoiVoice(bot, {
    searchOptions: {
        soundcloudClientId: "VTl9gNS05wF10zfiwKJ6FwK9mJsLVuAV",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin( PluginName.Filter, new Filter( {
    filterFromStart: false,
}));

voice.addEvent("trackStart");
voice.addEvent("trackEnd");
voice.addEvent("queueEnd");
voice.addEvent("queueStart");
voice.addEvent("audioError");
voice.addEvent("trackPause");
voice.addEvent("trackResume");

// loader.load(voice.cmds,"./voice/")