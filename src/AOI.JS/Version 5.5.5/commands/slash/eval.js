/* eval this: {your.prefix}eval $createApplicationCommand[$guildID;eval;permet de tester une commande à partir d'une autre;true;slash;{
             "name" : "code",
             "description" : "le code à tester",
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
    $interactionReply[votre code vient d'être envoyé !;;;;all;yes]
    $onlyForIDs[$botOwnerID;{
    "content" : "Seul le développeur peut utiliser cette commande",
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
