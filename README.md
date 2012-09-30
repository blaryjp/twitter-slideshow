Please bring back photo grid view !
===================================

Disponible en *Français* ! - Available in *English* !

Réactive le carrousel des images miniatures de Twitter. - Reactivates the carousel of thumbnails on Twitter.

Introduction
------------

[FR] Il y a quelques mois, Twitter a eu la (mauvaise) idée de supprimer l'affichage des miniatures des images dans sa galerie...
L'explication "officielle" étant qu'ils sont en train d' "expérimenter" ce nouvel affichage, promettant un retour de cette fonctionnalité prochainement (voir https://dev.twitter.com/discussions/9538)...
Malheureusement, ça fait plus de 2 mois et on attend toujours... Perso, je trouvais ça vraiment super pratique, donc ça me manque.

Bref, un jour j'ai découvert que Twitter avait simplement "caché" le carrousel (et supprimé bien évidemment le téléchargement des miniatures qu'il contenait) !
En effet, d'après mes constatations personnelles, pour que le système actuel puisse fonctionner, ils ont BESOIN de ce carrousel... donc ne peuvent pas le supprimer !

---

[EN] A few months ago, Twitter had the (bad) idea to delete the display of thumbnails of the images in the gallery ...
The "official" explanation is that they are an "experiment" of this new display, promising to return soon to this feature (see https://dev.twitter.com/discussions/9538) ...
Unfortunately, it has been over 2 months and we are still waiting ...

Anyway, one day, I discovered that Twitter had simply "hidden" the carousel (and of course disabled the thumbnails download)!
Indeed, from my personal observations, for that current system still work, they NEED this carousel ... therefore they cannot delete it!


Comment ça marche ? - How it works ?
------------------------------------

[FR] J'affiche simplement le carrousel en CSS. La récupération des images, par contre, là c'est plus compliqué. Chaque service possède sa propre méthode de récupération des images. Je dois donc procéder au cas-par-cas.
Vous retrouverez une liste des services actuellement pris en charge ci-dessous.

Le plus compliqué, c'est pour récupérer les images de Twitter (pic.twitter.com et Photobucket). En effet, une image uploadée sur Twitter, est considérée comme faisant partie du Tweet.

On doit donc aller récupérer l'URL de l'image en appellant l'API de Twitter, en lui passant l'ID du Tweet. Cependant, Twitter bloque le nombre de requêtes vers son API à 150 par heure.
Donc je n'aurai pu afficher que 150 images provenant de Twitter (les plus courantes...) par heure :(... Heureusement j'ai une autre solution (bien lourde :P), une fois que cette limite est atteinte : il suffit d'aller récupérer tout l'HTML complet du Tweet, puis cibler la balise < img > et ainsi récupérer son URL !

Vu que c'est un peu lourdingue, j'ai désactivé cette option par défaut. Il suffit de l'activer dans le popup (l'icône dans la barre d'adresse).

---

[EN] I simply displays the carousel with CSS. Recovery images, for cons, there is more complicated. Each service has its own method of retrieving images. I must proceed on a case-by-case basis.
You will find a list of services currently supported below.

The more complicated it is to retrieve images of Twitter (pic.twitter.com and Photobucket). Indeed, an image uploaded on Twitter is considered part of the Tweet.

We should go get the image URL by calling the Twitter API, passing the ID of Tweet. However, the number of Twitter requests to the API is blocked to 150 per hour.
So I could display only 150 pictures from Twitter (the most common ...) per hour :(... Fortunately I have another solution (very heavy :P), once this limit is reached: just go get all the HTML full tweet, then target the < img > tag and recover its URL!

Since it is a bit heavy, I disabled this option by default. Simply activate this into the popup (the icon in the address bar).


Services actuellement pris en charge - Service currently managed
----------------------------------------------------------------

* *Instagram* : OK.
* *Lockerz* : OK.
* *Twitpic* : OK.
* *pic.twitter.com* et/and *Photobucket* : OK, mais cas particulier (voir ci-dessus). - OK, but it's a special case (see above).
* *Yfrog* : OK, mais images écrasées parfois. - OK, but sometimes smashed images.
* *Flickr* : En attente d'obtention d'une clé API... - Waiting to obtain an API key...


Téléchargement - Download
-------------------------

Google Chrome Web Store : https://chrome.google.com/webstore/detail/dphcimgkdmgbfalcacldkcoedhbkijde


Références - Links
------------------

* https://dev.twitter.com/discussions/9843
* https://dev.twitter.com/discussions/9538
* http://www.vtdesignworks.com/blog/twitter-recent-images-grid-view-missing-what-happened-to-our-photo-galleries
