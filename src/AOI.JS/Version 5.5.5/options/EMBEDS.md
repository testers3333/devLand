## You should always start your code line with {newEmbed:here options}
Options for components :
for a button answer: 
```js
{actionRow:{button:name of the button:color:id of the button:no(yes for disabled the button):emoji}}
```

(color => primary == blue / danger == red / success == green / secondary == grey)

for a link button :
```js
{actionRow:{button:name of the button:link:the link you want:no:emoji}}
```

for a select menu answer: 
```js
{selectMenu:id of the select:placeholder:1:1:no:{selectMenuOptions:title of the option:id of the option:description oh the option:no(yes to show the option in placeholder):emoji}{selectMenuOptions:title of the option:id of the option:description oh the option:no(yes to show the option in placeholder):emoji}}
```

Options for embed :

```js
{thumbnail:image link}
```
```js
{edit:duration:{new message}:{new message}:{etc...}}
```
```js
{timestamp}
```
```js
{author:an author text:image link}
```
```js
{color:hex color for embed}
```
```js
{attachment:name.extension:image link}
```
available extensions : png/webp/gif(for the video)/etc...

```js
{reactions:emoji,emoji2,etc...}
```
```js
{delete:time}
```
```js
{image:image link}
```
```js
{execute:awaited name}
```
```js
{field:title:description:inline(yes or no)}
```
```js
{footer:a footer text:image link}
```
```js
{url:link} for a link on the title
```
```js
{title:a title text}
```
for not error: 
```js
{suppress:yes(or no)}
```

These elements work only in these functions :

```js
$sendMessage
```
```js
$sendWebhook
```
```js
$sendDM
```
```js
$sendCrosspostingMessage
```
```js
$channelSendMessage
```
```js
$onlyIf
```
```js
$onlyBotPerms
```
```js
$onlyPerms
```
```js
$onlyIfMessageContains
```
```js
$suppressErrors
```
```js
$argsCheck
```
```js
$cooldown
```
```js
$onlyForIDs
```
