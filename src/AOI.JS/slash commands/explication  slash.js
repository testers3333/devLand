module.exports ={
    name:"name of slash",
    type:"interaction",
    prototype:"slash",
    code:`
    $interactionReply[The answer when using slash] 
    `
  }
// the code to eval for the code on top : $createApplicationCommand[$guildID;name of slash;description of slash;true]
module.exports ={
    name:"name of slash",
    type:"interaction",
    prototype:"slash",
    code:`
    $interactionReply[Your text: $interactionData[options.data[0].value]] 
    `
  }
// the code to eval for the code on top : $createApplicationCommand[$guildID;name of slash;description of slash;true;slash;{
//             "name" : "name of the option",
//             "description" : "the description of the option",
//             "type" : 3,
//             "required" : true (or false)
//    }]
// type: 3 == message / 4 == number / 5 == True or False in option / 6 == user / 7 == channel / 8 == role / 9 == everything that is mentionable
// for an ephemeral answer: $interactionReply[The answer when using slash;;;;;yes]
// for an embed answer: $interactionReply[;{newEmbed:{description:The answer when using slash}}]
// For more options go to the files "options.js".
