module.exports =[{
  name:"reaction",
  code:`
  $reactionCollector[$channelID;$get[id];everyone;;❌;reac;yes]
  $let[id;$sendMessage[Hello, you know the best aoi.js encoder ?;yes]]`
},{
  name:"reac",
  type:"awaited",
  code:`
  $editMessage[$message[1];It's Leref of course]
  `
}]
