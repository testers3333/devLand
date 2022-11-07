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
// for a button answer: $interactionReply[content;;{actionRow:{button:name of the button:color:id of the button:no(yes for disabled the button):emoji}}] 
// (color => primary == blue / danger == red / success == green / secondary == grey)
// for a select menu answer: $interactionReply[content;;{selectMenu:id of the select:placeholder:1:1:no:{selectMenuOptions:title of the option:id of the option:description oh the option:no(yes to show the option in placeholder):emoji}{selectMenuOptions:title of the option:id of the option:description oh the option:no(yes to show the option in placeholder):emoji}}] 
// available options :
// {thumbnail:image link}
// {edit:duration:{new message}:{new message}:{etc...}}
// {timestamp} for ms : {timestamp:ms}
// {author:an author text:image link}
// {color:hex color for embed}
// {attachment:name.extension:image link} available extensions : png/webp/gif(for the video)/etc...
// for not error: {suppress:yes(or no)}
// {reactions:emoji,emoji2,etc...}
// {delete:time}
// {image:image link}
// {execute:awaited name}
// {field:title:description:inline(yes or no)}
// {footer:a footer text:image link}
// {url:link} for a link on the title
// {title:a title text}
// These elements work only in these functions :
//$sendMessage
//$sendWebhook
//$sendDM
//$sendCrosspostingMessage
//$channelSendMessage
//$onlyIf
//$onlyBotPerms
//$onlyPerms
//$onlyIfMessageContains
//$suppressErrors
//$argsCheck
//$cooldown
//$onlyForIDs
