const cardGames = [
    {
        ref: "cg1",
        category: 0,
        title: "Les 5 rois",
        image: "les-cinq-rois.jpg",
        description: "Les Cinq Rois est un jeu de cartes inspiré du Rami avec 5 couleurs et une bonne dose de malice en plus !<br/>Les 5 couleurs : pique, coeur, carreau, trèfle et étoile permettent de faciliter l’arrangement de votre main en suite ou en famille. Au fur et à mesure des manches, les joueurs joueront avec une carte de plus et l’atout changera en fonction : si le tour est joué avec 5 cartes, l’atout pour cette manche sera le 5... Faites les bonnes combinaisons pour vous débarrasser en premier de vos cartes et pour marquer manche après manche le moins de points possible.<br/> Un jeu universel et simple pour lequel on enchaîne les parties avec plaisir !",
        price: "14.90",
        age: "8 ans",
    },
    {
        ref: "cg2",
        category: 0,
        title: "Rick & Morty: Total Rickall- Le jeu de cartes",
        image: "rick-and-morty.jpg",
        description: "Rick and Morty Total Rickall est un jeu de cartes basé sur un épisode de la série. Incarnez les Smith pour identifier et éliminer tous les parasites avant qu'ils ne s'échappent.",
        price: "17.90",
        age: "16 ans",
    },
    {
        ref: "cg3",
        category: 0,
        title: "The Game - oya",
        image: "the-game.jpg",
        description: "Tous les joueurs ensemble doivent parvenir à poser toutes les cartes sur 4 piles: 2 ascendantes, 2 descendantes. Pour les aider dans cette tâche, on peut faire des sauts en arrière de 10. Mais cela suffira-t-il pour vaincre le jeu, sachant que l'on ne peut communiquer la valeur de ses cartes en main ?<br/>Le jeu s'appelle 'The Game' parce que l'on joue ensemble contre le jeu. Les joueurs doivent coopérer, prendre des décisions ensemble et ne pas craquer quand la pression monte !",
        price: "11.00",
        age: "12 ans",
    },
    {
        ref: "cg4",
        category: 0,
        title: "The Mind",
        image: "the-mind.jpg",
        description: "Les joueurs doivent poser leurs cartes par ordre croissant au centre de la table. Il n’y a pas d’ordre de jeu : qui pense avoir la plus petite carte la pose en premier et ainsi de suite. On ne peut ni parler, ni se faire des signes, ni communiquer d’aucune manière ! Et pourtant, le succès est possible.",
        price: "17.90",
        age: "8 ans",
    },
]

const escapeGames = [
    {
        ref: "esc1",
        category: 1,
        title: "Unlock! L'île du docteur Goorse",
        image: "unlock-dr-island.jpg",
        description: "Unlock ! L'île du docteur Goorse : Le jeu d'escape room d’Asmodée est un jeu de cartes coopératif inspiré des jeux d'escape room. Lancez-vous dans l’aventure et visitez l’île d’un milliardaire excentrique. Ce collectionneur d’antiquités vous a préparé des pièges. Unissez vos forces et triomphez-en !",
        price: "14.99",
        age: "10 ans",
    },
    {
        ref: "esc2",
        category: 1,
        title: "Unlock! Escape adventures",
        image: "unlock1.jpg",
        description: "Des énigmes visuelles ou audio ralentissent votre progression... à vous de coopérer avec vos partenaires pour avancer et terminer dans les temps !<br/>L'application gratuite Unlock, compatible avec les téléphones et tablettes Android et iOS, est nécessaire pour jouer. Elle permet d'obtenir des indices, de repérer des objets cachés, mais aussi d'entrer les codes découverts. Elle contribue également à l'ambiance avec ses musiques dédiées à chaque aventure, ses énigmes audio, ses terribles pénalités et son compte à rebours fatal !<ul>La boîte Unlock ! contient trois aventures :<li>La Formule : Entrez dans un laboratoire secret pour récupérer un mystérieux sérum élaboré par un scientifique.</li><li>Squeek & Sausage : Déjouez les plans de l'infâme professeur Noside dans cette aventure cartoonesque.</li><br/>L'île du docteur Goorse : Visitez l'île d'un milliardaire excentrique collectionneur d'antiquités et triomphez de ses pièges.",
        price: "26.90",
        age: "10 ans",
    },
    {
        ref: "esc3",
        category: 1,
        title: "Unlock! Timeless adventures",
        image: "unlock2.jpg",
        description: "<ul>La boîte Unlock! 6 Timeless Adventures contient trois nouvelles aventures :<li>The Noside Show : Le cirque Diosen arrive en ville, mais le professeur Noside a prévu un grand numéro de sabotage : arrêtez-le car le spectacle doit continuer...</li><li> Arsène Lupin et le Grand Diamant Blanc : Vivez une course au joyau dans le paris du début du XXè siècle et relevez le défi d'Arsène Lupin !</li><li> Perdus dans le Chronowarp : La machine à voyager dans le temps du professeur Alcibiade Tempus s'emballe et c'est à vous qu'il revient de tout remettre en ordre !</li></ul>",
        price: "26.90",
        age: "10 ans",
    },
    {
        ref: "esc4",
        category: 1,
        title: "Unlock! Heroic adventures",
        image: "unlock3.jpg",
        description: "La boîte Unlock! 5 Heroic Adventures contient trois nouvelles aventures : <li>Sherlock Holmes sur le fil : Le maître des détectives fait face à une affaire des plus étranges. Pouvez-vous l’aider dans les méandres de son enquête ?</li><li>À la poursuite du lapin blanc : Découvrez le pays des Merveilles et ses étranges personnages. Ne tardez pas, aidez Alice à s’en échapper à temps !</li><li>Insert Coin : Passez les niveaux successifs d’une aventure virtuelle. Évitez le Game Over pour vous échapper !</li>",
        price: "26.90",
        age: "10 ans",
    },
]

const kidsGames = [
    {
        ref: "kid1",
        category: 2,
        title: "BrainBox - Animaux",
        image: "brain-box.jpg",
        description: "Pour apprendre à connaître les animaux en s'amusant, Brain Box est le jeu idéal ! Les enfants regardent une carte pendant 10 secondes puis essaient de répondre au numéro de la question indiquée sur le dé. Attention au sablier car le temps est limité ! La réponse est bonne ? Parfait, la carte est gagnée ! Sur chaque carte, on retrouve le dessin de l'animal ainsi que quelques caractéristiques (taille, alimentation, environnement...). Et grâce à sa taille, ce petit jeu pour toute la famille se glisse facilement dans le sac pour s'emmener partout !",
        price: "15.99",
        age: "8 ans",
    },
    {
        ref: "kid2",
        category: 2,
        title: "Défis Nature: rois du camouflage",
        image: "defi-nature.jpg",
        description: "Défis Nature vous emmène à la rencontre des rois du camouflage ! Découvrez les espèces à préserver, puis pariez sur les points forts de vos animaux pour collecter toutes les cartes du jeu et remporter la partie. Alors, prêts à relever le défi ?",
        price: "12.60",
        age: "7 ans",
    },
    {
        ref: "kid3",
        category: 2,
        title: "Le tour du monde de Loup",
        image: "le-loup.jpg",
        description: "Loup part faire le tour du monde ! Joue avec lui pour être le premier à poster toutes les cartes postales. Un très beau jeu de plateau avec des cartes illustrées, des cartes actions pour pimenter la partie, un dé spécial et une figurine Loup en métal ! Ce jeu contient : 30 cartes action, 24 cartes postales, 1 plateau, 1 figurine métal et 1 dé spécial.",
        price: "24.95",
        age: "4 ans",
    },
    {
        ref: "kid4",
        category: 2,
        title: "Le prince de Motordu",
        image: "Le-Prince-de-Motordu.jpg",
        description: "Le jeu du Prince de Motordu est un jeu de société pour s'amuser avec les mots. Votre enfant lance le dé tout rond dans le château et regarde par quelle porte il ressort pour savoir s'il va jouer au jeu des initiales, des rimes, des syllabes ou des max de mots. Un jeu efficace pour développer son vocabulaire, en s'amusant.",
        price: "24.99",
        age: "6 ans",
    },
    {
        ref: "kid5",
        category: 2,
        title: "Takenoko",
        image: "takeneko.jpg",
        description: "Il y a bien longtemps, l’Empereur de Chine offrit à l’Empereur du Japon un Grand Panda, symbole de paix. Votre délicate mission est de prendre soin de l’animal en lui aménageant une bambouseraie. Vous allez cultiver des parcelles de terrain, les irriguer et y faire pousser du bambou. Mais attention à l’animal sacré et à son goût immodéré pour les tiges croquantes…",
        price: "32.26",
        age: "8ans",
    }
]

const familyGames = [
    {
        ref: "fam1",
        category: 3,
        title: "Boursicocotte",
        image: "boursicocotte.jpg",
        description: "Dans ce jeu pour vrais maquignons, vous cherchez à faire des affaires en vendant vos bestiaux au meilleur prix. Enchères et bluff pour ce petit jeu de cartes génial, qui est désormais un classique",
        price: "28.90",
        age: "12 ans",
    },
    {
        ref: "fam2",
        category: 3,
        title: "Burger Quiz",
        image: "burger-quizz.jpg",
        description: "Mayonnaise contre Ketchup (à 2 joueurs ou 2 équipes) vous devez répondre à diverses questions plus ou moins loufoques et parfois même déstabilisantes pour être le 1er à atteindre 25 Miam (points) et aller en Finale. La Finale s’appelle : Le Burger de la mort ; pour gagner il faut répondre à 10 questions mais seulement après que les 10 questions ont été énoncées, l'animateur cherchant souvent à déstabiliser le joueur. Arriver à répondre uniquement aux 5 premières questions constitue le Petit Burger de la mort",
        price: "24.99",
        age: "16 ans",
    },
    {
        ref: "fam3",
        category: 3,
        title: "Cluedo Game of Thrones",
        image: "cluedo-got.jpg",
        description: " Cette édition spéciale du Cluedo inclut deux intrigues, chacune avec des suspects et des lieux différents. Le plateau recto-verso permet de choisir le lieu de l'intrigue : le Donjon Rouge ou Meereen !",
        price: "39.90",
        age: "12 ans",
    },
    {
        ref: "fam4",
        category: 3,
        title: "Dixit",
        image: "dixit.jpg",
        description: "Dixit est un jeu de société qui vous emmène dans un monde onirique où de douces illustrations vous serviront d'inspiration pour de belles envolées poétiques.",
        price: "26.90",
        age: "8ans",
    },
    {
        ref: "fam5",
        category: 3,
        title: "BOGOSS - Jeu de stratégie phosphorescent",
        image: "Djeco-Bogo.jpg",
        description: "On distribue 6 cartes à chaque joueur. Ceux-ci doivent tour à tour demander à un autre joueur de leur choix une partie manquante de leur squelette. Si le joueur en question a la carte demandée, il est obligé de la donner. Mais surprise, cela pourrait être un bout de squelette cassé!",
        price: "11.90",
        age: "7ans",
    },
    { 
        ref: "fam6",
        category: 3,
        title: "Soviet Kitchen",
        image: "Soviet-Kitchen.jpg",
        description: "« Soviet Kitchen » est un jeu culinaire coopératif, délirant et évolutif. Les joueurs doivent mixer les ingrédient les plus étranges pour correspondre aux couleurs du plat commandé. Mais soyez vigilants, camarades, ou la Mère Patrie ne résistera pas longtemps à vos plats toxiques.<br/>Ce jeu nécessite l’utilisation d’une application gratuite pour pouvoir y jouer.",
        price: "26.65",
        age: "14 ans",
    }
]

export const list = [ cardGames, escapeGames, kidsGames, familyGames ]