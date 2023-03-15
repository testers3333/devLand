// code to eval : $createApplicationCommand[global(or $guildID);test;A simple test;true;slash]
module.exports ={
  name:"test",
  type:"interaction",
  prototype:"slash",
  code:`
  $interactionReply[Hello !;;;;all;true]
  $onlyIf[$username==$username;Example of error that responds to your slash command in ephemeral{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
}
