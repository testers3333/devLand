module.exports ={
    name:"$alwaysExecute",
    code:`
    $addClientReactions[👋]
    Hello !
    $onlyIf[$checkContains[$message;<@$clientID>]==true;]
    `
}
