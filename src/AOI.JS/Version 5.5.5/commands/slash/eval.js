/* eval this: {your.prefix}eval $createApplicationCommand[$guildID;eval;A simple slash command eval;true;slash;{
             "name" : "code",
             "description" : "The code to test",
             "type" : 3,
             "required" : true
    }]
*/
module.exports =[{
    name:"eval",
    type:"interaction",
    prototype:"slash",
    code:`
    $eval[$interactionData[options.data[0].value];yes]
    $interactionReply[Your code has been sent !;;;;all;yes]
    $onlyForIDs[$botOwnerID;{
    "content" : "Only my developer has access to this command",
    "ephemeral" : true,
    "options" : {
    "interaction" : true
    }}
    `
  },{
    name:"eval",
    code:`
    $eval[$message;yes]
     `
  }]
