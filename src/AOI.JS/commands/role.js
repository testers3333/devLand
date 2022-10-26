module.exports =[{
    name:"rôle",
    code:`
    $title[AUTO-RÔLE]
    $description[
    **CHOIX**
    <@&id role> ➜ 📢
    ]
    $color[0d69ae]
    $addButton[1;📢;secondary;role;no;]
    $onlyForIDs[$botOwnerID;]`
    },{
    name:"role",
    type:"interaction",
    prototype:"button",
    $if:"v4",
    code:`
    $if[$hasRoles[$guildID;$authorID;id role]==true]
    $takeRole[$guildID;$authorID;id role]
    $interactionReply[;{newEmbed:{title:❎・Retrait}{description:Le rôle <@&id role> vous a bien été retiré}{color:0d69ae}};;;;yes]
    $else
    $giveRole[$guildID;$authorID;id role]
    $interactionReply[;{newEmbed:{title:✅・Ajout}{description:Le rôle <@&id role> vous a bien été ajouté}{color:0d69ae}};;;;yes]
    $endif
    `
    }]