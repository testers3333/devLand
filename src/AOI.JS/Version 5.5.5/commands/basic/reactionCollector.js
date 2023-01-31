module.exports =[{
  name:"reaction",
  code:`
  $reactionCollector[$channelID;$get[id];everyone;;❌;reac;yes]
  $let[id;$sendMessage[Hello, do you know the most beautiful mother?;yes]]`
},{
  name:"reac",
  type:"awaited",
  code:`
  $editMessage[$message[1];It's not your mother ahah]
  `
}]
