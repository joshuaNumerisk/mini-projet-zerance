# mini-projet-zerance

##Installation

Pour visualiser le site vous pouvez utiliser les commandes "npm install -g live-server" et
"live-server" pour pouvoir afficher le site

##Fonction technique

La page est organsé  majoritairement à l'aide  de display flex pour différencier les différentes sections et leur sous-élements.
le menu est organisé avec 4 liens dont 3 qui permettent d'accéder aux sections du site. Le lien contact ouvre un popup d'un formualiare de contact.

### Popup contact
j'ai donc mis un évènement "onclick" pour que lorsque l'on clique sur contact un popup apparaisse. Pour cela j'ai du mettre un "display :none" sur mon popup qui m'as ensuite permis de cacher ce dernier.
Ensuite pour le rendre visible mon évènement vas changer le css grâce à javascript.

###Slider

j'ai également utiliser javascript pour le slider. Ainsi j'ai créer un tableau pour stocker mes 2 images. Alors avec ma fonction changeSlide qui est appelé à chaque fois que je clique sur l'icon "suivante"
le slide change d'image. Pour cela j'ai ajouté un paramètre "sens" à ma fonction qui me permet d'incrémenter de +1  le parcours de mon tableau d'image.
Enfin si jamais on a parcouru tout le tableau on réintialise à 0 le parcours. j'ai dù donc éffectuer une conditon grâce à .length pour savoir si on avait
parcouru tout le tableau.

##Les difficultés
j'ai eu quelques soucis lors de ce mini-projet notemment pour le popup contact. Je n'ai pas réussi à importer l'api gender-api sur javascript j'ai essayé d'ajouter "script style="module" pour résoudre
le problème mais sans résultat

mon 2ème soucis était au niveau du logo où j'ai pas pu parfaitement le placer par rapport aux autres élements du menu.

##gestion du temps
le menu et la section client m'ont pris 2 heure
le popup contact m'as pris 2H30 ET LE slider 1h30
