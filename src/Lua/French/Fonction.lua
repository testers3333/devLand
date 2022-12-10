function identite(pseudo, prenom, age, ville)
    local resultat = pseudo.." "..prenom.." "..age.." "..ville
    return resultat
end
print(identite("Votre pseudo", "votre prenom","votre age", "votre ville"))
-- function est la fonction qui permet de crée une fonction dans le code
-- identite est le nom de la fonction
-- local est une fonction que l'on met toujours avant une variables pour pas qu'elle soit globale
-- resultat est la variable où l'on stockera les informations données via la fonction identite
-- return sert à savoir ce que va retourner la fonction, ici on retournera la variable avec les informations soit "resultat"
-- end sert à fermer le function
-- print sert à exécuter n'importe qu'elle chose dans votre terminale lors du lancement du jeux
-- identite(...) sert à donner les informations pour pouvoir les stocker dans la variable "resultat"
