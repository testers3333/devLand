module.exports =[{
  name:"reaction",
  code:`
  $reactionCollector[$channelID;$get[id];everyone;;❌;reac;yes]
  $let[id;$sendMessage[Hello, do you know what song makes a goat ?;yes]]`
},{
  name:"reac",
  type:"awaited",
  code:`
  $editMessage[$message[1];Qué miras bobo 🇦🇷]
  `
}]
