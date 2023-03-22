module.exports =[{
  name:"modal",
  code:`
  Your modal test is below
  $addButton[1;first visualization;primary;st;no]
  $addButton[2;second visualization;2;primary;nd;no}
  `
  },{
    type:"interaction",
    prototype:"button",
    code:`
    $interactionModal[Modal test;modaltext;{actionRow:1
{textInput:First visualization of an input:1:first:Oh... it's a litle div:yes::1(min characters):3(max characters)}
},{actionRow:2
{textInput:Second visualization of an input:2:second:Whaouh it's a big div:yes::1(min characters):200(max characters)}
}]
    $onlyIf[$checkContains[$interactionData[customId];visualization]==true;]
    `
  },{
    name:"modaltext",
    type:"interaction",
    prototype:"modal",
    code:`
    	$interactionReply[$textInputValue[first] => $textInputValue[second];;;;all]
    `
  }]
