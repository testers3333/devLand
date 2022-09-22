/*
    DOSSIER BDFD
        - Le dossier "commandes"
            - Ce dossier a un sous dossier permettant de filtré les commandes par leur catégorie.
            - Chaque dossier possède des dossiers nommés par le nom de la commande qui y se trouve, portant eux des fichiers en .txt portant le nom qui devra-être associer sur bdfd.
            - Les dossiers de commandes peuvent posséder:
                - $onInteraction[] // Les codes possédants les intéractions, si aucun crochet n'est mit, alors, il ne faut pas en mettre.
                - $onAutoComplete[] // Les codes possédants les complétions automatiques pour les slash's, si aucun crochet n'est mit, alors, il ne faut pas en mettre.
            - Mais ! Ils possèdent forcément ces fichiers:
                - <command_name>.txt // Code contenant le code.
                - README.md // description de la commande avec une image montrant le résultat de la commande.
                - SLASH.md // les différentes valeurs et options à inscrire à votre slash.
        - Le dossier "évènements" est différent de "commandes" dans le terme que lui ne possède que les triggers utilisables une seule fois. Tel que $onJoined[], $onLeave[]...
*/


/*
    DOSSIER DISCORD.JS & AOI.JS
        - Les dossiers et fichiers portent leur nom, merci de ne pas le modifier. Tout doit-être copié, c'est différent du bdfd car là, il vous faut un handler pour séparer vos commandes dans des fichiers.
*/

require('./DISCORD.JS/index');