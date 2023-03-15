const aoijs = require("aoi.js");
const { Util } = require("aoi.js");
const fs = require('fs');
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

require('./handler/status.js')(bot)
require('./handler/variables.js')(bot)

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});
