# EcolibTube

React application of a video hosting service like *Youtube* for an universitary course (GL03) with eco-conception as main focus.

```
Groupe EcolibTub
Florian LOPITAUX & Gabriel DOSNE
```

---

## 2ème Séance : Impact et utilité

#### Choix du sujet

Personnellement, [Youtube](https://www.youtube.com) fait entièrement partie de notre quotidien. <br>
Nous nous en servons pour nous divertir (gaming, humour, storytelling, ...), mais également pour nous informer et aussi apprendre de nombreuses choses (tuto, veille technologique, ...). <br>
De ce fait, pour nous, Youtube a entièrement remplacé la traditionnelle télévision (nous n'en avons même pas) et nous pensons que plus le temps va passer plus la télévision perdra des "places de marché" face aux médias du web comme Youtube (son existence devient de plus en plus importante dans nos vies).

Cependant, nous reconnaissons que Youtube n'est absolument pas parfait et que malgré son utilité que nous débattrons juste après, la plateforme possède des problèmes éthiques et écologiques. <br>
En outre, la surconsommation de contenu et l'impact écologique du stockage de vidéos et de sa bande passante utilisé pour la diffusion.

C'est pourquoi, nous pensons que Youtube peut être un bon sujet pour ce projet. <br>
Afin de concevoir une application d'hébergement de vidéo en ligne la plus éco-responsable et éthique possible avec les principes de conception vus en cours GL03 de l'[UTT](https://www.utt.fr).

- [Statistique médiamétrie sur l'audience de la télévision](https://www.mediametrie.fr/fr/audiences-et-resultats/tv/mediamat-annuel)
- [Étude sur l'impact écologique des hébergeurs vidéos comme Youtube](https://www.carbontrust.com/en-eu/our-work-and-impact/guides-reports-and-tools/carbon-impact-of-video-streaming)

#### Utilité sociale
Le partage de vidéo a une utilité sociale conséquente puisqu'elle permet d'accomplir des fonctions sociales importante tel que :
 - Le partage de savoir :
   - Territoire : Publicité, Communication, etc.
   - Éducation : Vidéo vulgarisation (C'est pas Sorcier!), documentaire, etc.
   - Santé : Communication publique sur la Santé (Covid-19, Prévention tabac/alcool)
   - Bien-être : développement personnel, philosophie, etc.
 - Lien social (partage d'idée, de création artistique, etc.)
 - Divertissement

L'accès libre à l'information et au savoir est essentielle pour la démocratie.

#### Effets de la numérisation

De prime abord, le remplacement de la consommation médias de la Télévision vers Youtube était catastrophique du fait que la Télévision était mine de rien assez écologique fonctionnant avec les ondes radios et antenne. Cependant, depuis de nombreuses années l'usage des foyers de la télévision a drastiquement changé ne passant plus par des ondes mais par leur box internet et devenons donc similaires à Youtube en coût de bande passante pour la diffusion de vidéos.

En revanche, si l'on considère Youtube a une substitution à l'achat/location de dvd/cd pour des films/séries ..., alors effectivement Youtube se voit beaucoup plus mauvais pour l'environnement. Cependant, le secteur du support physique est aujourd'hui extrêmement limité voir quasiment mort (avant même Youtube), donc même si Youtube venait à disparaître, il est possible qu'il laisse juste un vide plutôt que d'être remplacé par ce secteur.

- [Impact écologie du support vidéo physique (CD/DVD)](https://www.telecom-paris.fr/streaming-dvd-bilan-carbone)

---

## 3ème séance : Scénarios d'usage et impacts

Toutes les vidéos doivent être regardés en **qualité 720p HD** (qualité plutôt standard plutôt courante pour le web) pendant une **durée de 2 minutes**.
Il faut donc choisir des vidéos de **minimum 5min** (pour le pré-téléchargement des vidéos fait au fur et à mesure par le site).

#### Scénario : "Regarde des vidéos que lui recommande la plateforme"
- L'utilisateur se rend sur la page d'accueil du site (donc sans passer par un moteur de recherche). Si nécessaire, il donne son consentement.
- Puis il consulte les vidéos recommandé par l'algorithme de la plateforme.
- Il choisit une vidéo et regarde la vidéo.
- Puis cherche (sur le côté ou au-dessous de la vidéo) une autre vidéo recommandé (scroller/dérouler 1 fois pour charger d'autres vidéos que celles déjà présentent).
- Lance une nouvelle vidéo et regarde encore une fois la vidéo.

#### Scénario : "Cherche des vidéos sur un thème à travers la plateforme et regarde des vidéos dessus"
- L'utilisateur se rend sur la page d'accueil du site (donc sans passer par un moteur de recherche). Si nécessaire, il donne son consentement.
- Puis fait une recherche sur un thème précis (thème choisi : **Échecs Esports World Cup 2025**) pour obtenir des recommandations de vidéos sur ce thème.
- Il choisit une des vidéos proposés et la regarde.
- Il revient en arrière sur les vidéos proposés pour son thème.
- Il choisit une autre vidéo et la regarde.

## 4ème séance : Impact de l'exécution des scénarios auprès de différents services concurrents

L'EcoIndex d'une page (de A à G) est calculé (sources : [EcoIndex](https://www.ecoindex.fr/comment-ca-marche/), [Octo](https://blog.octo.com/sous-le-capot-de-la-mesure-ecoindex), [GreenIT](https://github.com/cnumr/GreenIT-Analysis/blob/acc0334c712ba68939466c42af1514b5f448e19f/script/ecoIndex.js#L19-L44)) en fonction du positionnement de cette page parmi les pages mondiales concernant :

- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services d'hébergement de vidéo les plus utilisés : **YouTube**, **BiliBili** et **PeerTube** qui n'est pas parmis les plus utilisé mais qui est une option open source et décentralisé.

| Service | Score (sur 100) | Classe | Détail des mesures
| --- | --: | --: | --:
| YouTube | 4,675 | G 🟥 | […](./benchmark/youtube_scenario_1_2.csv)
| BiliBili | 4,93 | G 🟥 |  […](./benchmark/bilibili_scenario_1.csv) […](./benchmark/bilibili_scenario_2.csv)
| PeerTube | 19,425 | F 🟧 | […](./benchmark/peertube_scenario_1_2.csv)

Tab.1 : Mesure de l'EcoIndex moyen de services d'hébergement de vidéo.

Comme on pouvait s'y attendre les résultats des plateformes sont mauvais, en effet l'hébergement et la diffusion de vidéos sont extrêmement coûteux d'un point de vue environnemental.

Cependant, on observe quand même que Peertube obtient un score et une note bien supérieurs à ces deux concurrents. Ce constat peut notamment s'expliquer par la différence de philosophie des plateformes. PeerTube est un logiciel libre développé par Framasoft et a un modèle économique basé sur la donation et le financement participatif alors que Youtube et Bilibili eux sont des entreprises qui de par leur modèle économique, intègrent de nombreuses fonctionnalités sur leurs plateformes qui ont un impact écologique (publicité, tracker, données personnelles, algorithme de recommandation, ...)

## Modèle économique

Comme nous l'avons vu dans la section précédente, parmi les choix de conception ayant le plus d'impact environnemental, la plupart sont directement liés au modèle économique du service.
C'est pourquoi il est nécessaire à ce stade d'analyser leur modèle économique et de définir notre propre modèle permettant une conception plus frugale.

Pour ce qui est des modèles économiques des services numériques de vidéo à la demande (cf. Tab. 2 ), ils semblent s'être harmonisés autour d'un modèle dit "*freemium*" (de *free*, gratuit, et *premium*, supplément) :

- un accès gratuit à pratiquement toutes les vidéos, financé par la publicité et le suivi,
- un accès à des fonctionnalité supplémentaire (meilleures options de qualité, téléchargement de vidéo, vidéos exclusives etc.), sans publicité (ou moins), réservé aux abonnés.

| Service | Visiteur anonyme | Abonné
| --- | --- | ---
| Youtube | <ul><li>Publicités (régie tierce)</li><li>Suivi</li></ul> | <ul><li>Téléchargement de vidéo</li><li>Pas de pub sur certaine vidéo</li><li>Meilleures options de qualité</li></ul> 
| PeerTube | <ul><li>Accès à tout</ul> | / 

Tab. 2 : Offre des services de VOD.

L'étude de l'offre des services de VOD nous a permis d'identifier les sources de revenu communément utilisées (cf Tab. 2). Nous avons pu établir que :

1. La principale source de revenu pour ces services provient de publicité.
2. Certains services on également la possibilité de contracter un abonnement pour avoir des fonctionnalité supplémentaire sur la plateforme.

Maintenant que nous avons observer et comparé les différents modèles économiques, nous allons maintenant établir notre possible modèle. <br>
Pour ce faire nous sommes parties d'un salaire médian français (3507€) à payer pour établir le nombre de "clients" que nous devions avoir.

| Source possible de revenus | Montant unitaire | Quantité nécessaire pour financer un salaire
| --- | --: | --:
| Abonnement particulier n°1 | 7,99€ *[mensuel]* | 439
| Abonnement particulier n°2 | 13,99€ *[mensuel]* | 251
| Abonnement professionnel n°1 | 95,99€ *[mensuel]* | 37
| Abonnement professionnel n°2 | 1000€ *[annuel]* | 42
| Boost de recommandation pour une vidéo | 1,99€ | 1753,5

Tab. 3 : Source de revenus possibles pour notre plateforme d'hébergement de vidéos

Exemple type : Pour un salairé coût total employeur (3507€/mois), on pourrait avoir :

- 35% abonnements particulier n°1  -> 153,6 abonnements
- 25% abonnements particulier n°2  -> 62,6 abonnements
- 10% abonnements pro n°1  -> 3,6 abonnements
- 15% abonnements pro n°2  -> 6,3 abonnements
- 5% options  -> 87,6 jour_boosté

Ce modèle freemium permettra d'une part, d'éviter les publicités qui implique des scripts et tracker sur les pages qui alourdissent les pages web et dégradent notre impact écologique. Mais également une éco-conception directement dans les fonctionnalités de notre site web, car les utilisateurs seront limités par le nombre d'heures de vidéos qu'ils peuvent uploader sur la plateforme par semaine (afin de limiter la surconsommation de médias).
