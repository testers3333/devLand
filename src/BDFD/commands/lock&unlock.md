# Lock et Unlock code
+ islocked = false
```ruby
$nomention
$defer
$ephemeral
$color[#ed4147]

$if[$checkUserPerms[$botID;managechannels]==false]
    $description[Commande désactivé en raison de mes permissions.]
    $stop
$endif

$if[$checkUserPerms[$authorID;managechannels]==false]
    $description[Utilisation de la commande impossible en raison de vos permissions.]
    $stop
$endif

$if[$message[salon]!=]
    $var[ch;$message[salon]]
    $if[$channelType[$message[salon]]==category]
        $var[ty;catégorie]
    $else
        $var[ty;salon]
    $endif
$else
    $var[ch;$channelID]
    $var[ty;salon]
$endif

$if[$var[ty]==salon]
    $if[$getChannelVar[islocked;$var[ch]]==false]
        $description[Salon <#$var[ch]> vérouillée aux membres.]
        $editChannelPerms[$var[ch];$guildID;-sendmessages]
        $setChannelVar[islocked;true;$var[ch]]
    $else
        $description[Salon <#$var[ch]> dévérouillée aux membres.]
        $editChannelPerms[$var[ch];$guildID;+sendmessages]
        $setChannelVar[islocked;false;$var[ch]]
    $endif
$else
    $optOff[$textSplit[$categoryChannels[$var[ch];¥¥¥;id];¥¥¥]]
    $if[$getChannelVar[islocked;$var[ch]]==false]
        $jsonArray[chs]
        $setChannelVar[islocked;true;$var[ch]]
        $eval[
            %{DOL}%var[c%{-SEMICOL-}%$joinSplitText[%ESCAPED%
                %{DOL}%if[%{DOL}%getChannelVar[islocked%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%==false%ESCAPED%
                    %{DOL}%editChannelPerms[%{DOL}%var[c%ESCAPED%%{-SEMICOL-}%%{DOL}%guildID%{-SEMICOL-}%-sendmessages%ESCAPED%
                    %{DOL}%jsonArrayAppend[chs%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%
                    %{DOL}%setChannelVar[islocked%{-SEMICOL-}%true%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%
                %{DOL}%endif
            %{DOL}%var[c%{-SEMICOL-}%]%ESCAPED%
            %{DOL}%if[%{DOL}%getChannelVar[islocked%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%%ESCAPED%
                %{DOL}%editChannelPerms[%{DOL}%var[c%ESCAPED%%{-SEMICOL-}%%{DOL}%guildID%{-SEMICOL-}%-sendmessages%ESCAPED%
                %{DOL}%jsonArrayAppend[chs%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%
                %{DOL}%setChannelVar[islocked%{-SEMICOL-}%true%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%
            %{DOL}%endif
        ]
        $if[$jsonArray[chs]!=[\]]
            $description[Catégorie vérouillée aux membres.]
            $addField[**Salon(s) vérouillée(s) $jsonArrayCount[chs]**;>>> <#$jsonJoinArray[chs;>
<#]>;no]
        $else
            $description[Catégorie déjà vérouillée aux membres.]
        $endif
    $else
        $jsonArray[chs]
        $setChannelVar[islocked;false;$var[ch]]
        $eval[
            %{DOL}%var[c%{-SEMICOL-}%$joinSplitText[%ESCAPED%
                %{DOL}%if[%{DOL}%getChannelVar[islocked%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%%ESCAPED%
                    %{DOL}%editChannelPerms[%{DOL}%var[c%ESCAPED%%{-SEMICOL-}%%{DOL}%guildID%{-SEMICOL-}%+sendmessages%ESCAPED%
                    %{DOL}%jsonArrayAppend[chs%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%
                    %{DOL}%setChannelVar[islocked%{-SEMICOL-}%false%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%
                %{DOL}%endif
            %{DOL}%var[c%{-SEMICOL-}%]%ESCAPED%
            %{DOL}%if[%{DOL}%getChannelVar[islocked%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%==false%ESCAPED%
                %{DOL}%editChannelPerms[%{DOL}%var[c%ESCAPED%%{-SEMICOL-}%%{DOL}%guildID%{-SEMICOL-}%+sendmessages%ESCAPED%
                %{DOL}%jsonArrayAppend[chs%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%
                %{DOL}%setChannelVar[islocked%{-SEMICOL-}%false%{-SEMICOL-}%%{DOL}%var[c%ESCAPED%%ESCAPED%
            %{DOL}%endif
        ]
        $if[$jsonArray[chs]!=[\]]
            $description[Catégorie dévérouillée aux membres.]
            $addField[**Salon(s) dévérouillée(s) $jsonArrayCount[chs]**;>>> <#$jsonJoinArray[chs;>
<#]>;no]
        $else
            $description[Catégorie déjà dévérouillée aux membres.]
        $endif
    $endif
$endif
```

# SLASH COMMAND
<img src="https://cdn.discordapp.com/attachments/1088512918892580884/1089666291813601330/IMG_7537.png"/>
<img src="https://cdn.discordapp.com/attachments/1088512918892580884/1089666300441284628/IMG_7538.png"/>
<img src="https://cdn.discordapp.com/attachments/1088512918892580884/1089666310897668177/IMG_7539.png"/>
<img src="https://cdn.discordapp.com/attachments/1088512918892580884/1089666323249909871/IMG_7540.png"/>

#PREVIEW
<img src="https://cdn.discordapp.com/attachments/1088512865247436890/1089669666290548807/IMG_7542.png"/>
<img src="https://cdn.discordapp.com/attachments/1088512865247436890/1089669666630271046/IMG_7541.png"/>

### INFOS

+ Let empty the others channel types in slash "salon" option.
