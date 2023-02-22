// eval this (using the file "eval.js"): $createApplicationCommand[$guildID(or global);rôle;A simple slash command role reaction;true]
module.exports =[{
    name:"role",
    type:"interaction",
    prototype:"slash",
    code:`
    $title[ROLE REACTION]
    $description[
    **CHOIX**
    <@&id role> ➜ 📢
    ]
    $color[0d69ae]
    $addButton[1;📢;secondary;role;no;]
    $onlyPerms[admin;{
    "content" : "Only members with the \`\`admin\`\` permission can use this command !",
    "ephemeral" : true,
    "options" : {
    "interaction" : true
    }}]`
    },{
    name:"role",
    type:"interaction",
    prototype:"button",
    $if:"v4",
    code:`
    $if[$hasRoles[$guildID;$authorID;id role]==true]
    $takeRole[$guildID;$authorID;id role]
    $interactionReply[;{newEmbed:{title:❎・Removed}{description:The role <@&id role> has been removed from your roles}{color:0d69ae}};;;;yes]
    $else
    $giveRole[$guildID;$authorID;id role]
    $interactionReply[;{newEmbed:{title:✅・Added}{description:The role <@&id role> has been added to your roles}{color:0d69ae}};;;;yes]
    $endif
    `
    }]
// if you want to add more reaction roles just copy the code and add more buttons with more interactions
