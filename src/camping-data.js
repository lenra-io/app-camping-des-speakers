export const sessions = {
  "FrankenPHP": {
    "attributes": {
      "key": "FrankenPHP",
      "title": "FrankenPHP, un serveur d'application moderne pour PHP écrit en Go",
      "speakers": [
        "kevin_dunglas"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "13h30",
      "duration": "45 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "PHP, ça peut sembler ringard, mais pourtant - grâce à WordPress, Laravel et Symfony - c'est toujours le langage incontournable pour créer des applications web et des API . Il faut aussi dire que PHP s'est énormément amélioré ces dernières années, et en devient même agréable à utiliser."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Cependant, déployer du PHP en production, et en particulier dans des environnements \"Cloud Native\", ça reste relativement complexe. Contrairement à la plupart des autres outils similaires, PHP ne dispose pas nativement d'un serveur web. On expose généralement les apps via un serveur web tiers (NGINX, Apache), qui délègue l’exécution des scripts à PHP-FPM, via le vénérable protocole FastCGI. Avec Docker, ça fait beaucoup de services et de complexité juste pour exposer un site web."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Mais ça c'était avant. Avant FrankenPHP."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "FrankenPHP, c'est un serveur d'application moderne pour PHP qui est écrit en Go. Il est bâti sur Caddy, le serveur web qui monte malgré le silence des médias, et embarque directement un interpréteur PHP (qui est lui même écrit en C) grâce à une bibliothèque ad-hoc écrite en cgo."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "FrankenPHP donné également à PHP des fonctionnalités qui vont faire rougir les autres langages :"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "support natif de HTTP/2 et de HTTP/3"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "génération et renouvèlement automatique des certificats TLS grâce à Let's Encrypt ou à ZeroSSL"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "support des Early Hints (qui viennent également d'être implémentés par Chrome)"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "mode \"worker\" qui permet de court-circuiter l'architecture ",
              {
                "tag": "em",
                "children": [
                  "share nothing"
                ]
              },
              " de PHP et de diviser par trois (ou plus) les temps de réponse comparé à PHP-FPM"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "support du temps réel avec support natif du protocole ",
              {
                "tag": "a",
                "props": {
                  "href": "https://mercure.rocks"
                },
                "children": [
                  "Mercure"
                ]
              },
              ", une alternative aux WebSockets basée sur les SSE"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "images Docker légères, simples d'utilisation et faites pour la prod (compatibles avec Kubernetes)"
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Venez découvrir les fonctionnalités et les entrailles de FrankenPHP !"
        ]
      }
    ]
  },
  "a_la_decouverte_du_developpement_mobile": {
    "attributes": {
      "key": "a_la_decouverte_du_developpement_mobile",
      "title": "À la découverte du développement mobile, sans les maux de tête",
      "speakers": [
        "robin_caroff",
        "cyril_hue"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "17h10",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Vous êtes un développeur souhaitant explorer les possibilités offertes par le développement mobile, mais vous êtes confronté à diverses incertitudes. "
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "Comment déployer son code sur un téléphone ?"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Comment distribuer son application sur un magasin ?"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Combien ça coûte ?"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Combien de temps ça prend ?"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "etc"
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Au cours de ce talk, nous vous présenterons le parcours de Cyril, développeur web s’étant lancé dans le développement d’une application mobile. Nous partagerons, entre autres, les problématiques qu'il a rencontré et les solutions qu'il a utilisées pour les résoudre.\nAvec l'aide de Robin, expert en développement mobile, nous aborderons les bonnes pratiques et des astuces pour développer, déployer et maintenir une application mobile."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Ce talk est destiné à tous les curieux intéressés par cet écosystème particulier."
        ]
      }
    ]
  },
  "apprenons_ensemble": {
    "attributes": {
      "key": "apprenons_ensemble",
      "title": "Apprenons ensemble grâce aux bookclubs",
      "speakers": [
        "marion_valentin",
        "yvonnick_frin"
      ],
      "type": "quechua",
      "day": 0,
      "time": "17h10",
      "duration": "20 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Tu aimerais lire plus de dix pages d'un livre pro sans lâcher l'affaire ? Tu as lu le même livre que tes collègues mais vous n’avez pas compris la même chose ? Et pourtant la lecture est un super moyen d’échanger et de progresser dans ton métier !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Marion et Yvonnick n'en lisaient pas jusqu’à l’année dernière. Mais cette année, ils ont lu cinq livres grâce aux bookclubs ! Bookclub ? Non, on ne parle pas de club de lecture pour le troisième âge…"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "En participant et en animant ces clubs de lecture, ils ont élargi leurs connaissances professionnelles. La lecture de “The manager’s path” les a par exemple aidés à devenir plus proactifs dans leur rôle de manageur et dans l’accompagnement de leurs équipes."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Après avoir découvert le fonctionnement des bookclubs, il y a fort à parier que vous serez prêts à embarquer vos collègues dans la lecture de ce livre qui traîne sur votre bureau. Et vous serez même capable d'animer des conversations constructives et passionnantes autour de vos lectures. Qui sait, peut être que vous arriverez comme nous à convaincre votre CTO de participer à votre premier bookclub ?"
        ]
      }
    ]
  },
  "astuces_pour_parler": {
    "attributes": {
      "key": "astuces_pour_parler",
      "title": "🗣️ Zut ! J'aurais du dire ça ! 🙊 Astuces pour parler avec aisance en public 🎙️",
      "speakers": [
        "willy_malvault",
        "sylvain_coudert"
      ],
      "type": "bivouac",
      "day": 1,
      "time": "14h30",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "\" La peur de parler en public est une des peurs les plus partagées au monde. Devant la pauvreté, devant la maladie, devant la mort\" ... (Nable Léviste)"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Qui ne s'est jamais dit, après une prise de parole en public \"Zut ! J'aurais du dire ça !\" ? Qui n'a jamais perdu ses moyens au moment de s'adresser à un public, même restreint? Qui n'a jamais senti sa voix se faire tremblotante, son regard devenir fuyant et les mains être de plus en plus moites?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Rassurez-vous, tout ceci est normal et naturel et on va vous donner des astuces pour progresser, avec cet atelier/conférence de prise de parole. Centré sur la voix et la posture, le contact avec le public et la gestion de l'intention, ce mini-workshop propose des exercices mêlant pratique et observation permettant de travailler sur les difficultés de base de toute prise de parole en public."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "On ne promet pas de faire de vous des orateurs hors-pair en moins d'une heure, mais cet atelier vous permettra de prendre conscience de vos marges de progression et des leviers dont vous disposez pour évoluer, positivement, vers une aisance absolue dans la prise de parole en public."
        ]
      }
    ]
  },
  "avant_je_supprimai_des_bugs": {
    "attributes": {
      "key": "avant_je_supprimai_des_bugs",
      "title": "Avant, je supprimai des bugs, maintenant j'élève des abeilles",
      "speakers": [
        "florian_roulet"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "10h15",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Un jour, je plaquerai tout pour aller élever des chèvres dans le Larzac !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Qu'est-ce qu'on a pu l’entendre cette phrase lorsqu'on en avait marre du projet sur lequel on bossait ! Eh bien, un jour, j'ai sauté le pas de l'élevage, ou presque : je n'élève pas des ovins, mais des abeilles mellifères."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Avez-vous déjà ouvert une ruche ? Savez-vous comment est organisée une colonie d'abeilles ? Comment s'occuper de ses colonies, les soigner, les protèger, les faire grossir, les dupliquer, jusqu'au moment tant attendu de la récolte ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Il y a un peu plus d'un an, je me suis inscrit à l'initiative d'un ami apiculteur de mon village : le lancement d'un rucher communal. Entre les cours théoriques et la mise en pratique, du premier essayage de la combinaison à la mise en pot du miel, je viens vous raconter cette aventure d'une pratique aussi vieille que l'Humanité."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Si vous avez du pot 🍯, on fera même une dégustation !"
        ]
      }
    ]
  },
  "bienvenue_dans_ma_zone_d_inconfort": {
    "attributes": {
      "key": "bienvenue_dans_ma_zone_d_inconfort",
      "title": "Bienvenue dans ma zone d'inconfort",
      "speakers": [
        "noemie_delrue"
      ],
      "type": "quechua",
      "day": 0,
      "time": "16h00",
      "duration": "20 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Bonjour à tous, je m'appelle Noémie et pour oser parler de mon sujet aujourd'hui, je sors de ma zone de confort."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "La zone de confort, vous en avez sûrement déjà entendu parler."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Peut-être vous a-t-on déjà demandé d'en sortir ? Au boulot ou même dans la vie perso. Peut-être y avez-vous déjà été confronté ? Consciemment ou inconsciemment. Vous vous doutez que si je viens vous en parler, c'est qu'à moi aussi cela m'est arrivée."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je vous invite au cœur d'une histoire qui est la mienne mais qui raconte d'une certaine façon celle de beaucoup d'entre nous."
        ]
      }
    ]
  },
  "cette_annee_retombez_amoureux_de_CSS": {
    "attributes": {
      "key": "cette_annee_retombez_amoureux_de_CSS",
      "title": "Cette année, retombez amoureux de CSS ❤️",
      "speakers": [
        "olivier_leplus"
      ],
      "type": "quechua",
      "day": 1,
      "time": "11h40",
      "duration": "20 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Je ne vais pas vous mentir, quand j'ai commencé à faire du dev front il y a 15 ans, le CSS et moi, nous n'étions pas vraiment amis. Malgré l'arrivée des variables ou de nouveaux systèmes de layouts, je suis resté quand même distant face à cette techno, ne l'utilisant que parce qu'étant obligé.\nEn 2023, j'ai décidé de me pencher sur les nouveautés de css et j'ai remarqué que comme pour le JavaScript, ce qu'il est possible de faire avait beaucoup évolué ces dernières années."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Dans ce talk plein de démos, je parlerai de certains standards déjà là ou qui arrivent très bientôt et qui m'ont fait retomber amoureux de CSS. Venez découvrir des choses comme :is(), :has(), le nesting, les custom media queries, les custom properties (bien plus puissantes que je ne le pensais) et bien d'autres choses encore !"
        ]
      }
    ]
  },
  "comment_gerer_des_journees_de_35h": {
    "attributes": {
      "key": "comment_gerer_des_journees_de_35h",
      "title": "Comment gérer des journées de 35h ?",
      "speakers": [
        "sylvain_gougouzian"
      ],
      "type": "quechua",
      "day": 1,
      "time": "14h55",
      "duration": "20 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Connaissez-vous l’origine de l’expression “être réglé comme du papier à musique” ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "La présentation aurait pu également s'appeler : ",
          {
            "tag": "em",
            "children": [
              "Comment être chef d'orchestre m'a permis de hacker mon cerveau ?"
            ]
          }
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Toute personne passionnée mène une vie riche et variée. Dans la mienne, la passion s'exprime par ma vie de famille, la musique et le développement."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Comment jongler alors avec un emploi du temps chargé et ne pas devenir fou ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Dans cette présentation, je vous parlerai des parallèles que je vois entre la direction d’orchestre et la gestion d’un agenda. Au rythme moderato donné par ma baguette de chef d'orchestre, je vous partagerai mes astuces qui vous aideront peut-être à mieux organiser votre emploi du temps et survivre à ces journées bien chargées."
        ]
      }
    ]
  },
  "comment_hacker_vos_applications_mobiles": {
    "attributes": {
      "key": "comment_hacker_vos_applications_mobiles",
      "title": "Comment hacker vos applications mobiles ?",
      "speakers": [
        "julien_jimenez",
        "amelie_avignon"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "10h15",
      "duration": "45 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Nous utilisons tous des applications mobiles pour payer, s'authentifier ou consulter nos comptes bancaires. Etant donné la sensibilité de ces actions, nous faisons confiance aux éditeurs que sont les banques ou le service publique. Mais peut-on hacker de telles applications ou les données qu'elles contiennent ? Yes, we can ! Quels sont ces moyens d'attaque ? Quels sont les risques et que pouvons-nous faire pour les réduire ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "La sécurité mobile est au cœur du métier de notre équipe car nous travaillons quotidiennement à protéger les applications mobiles de nos clients. Dans cette présentation nous nous focaliserons sur le pentest (la partie offensive de notre activité) en alliant explications et démonstrations. Cette conférence s’adresse donc à un public technique assez large : des personnes intéressées par la sécurité des applications mobiles, que ce soit simplement pour se rendre compte des attaques possibles ou bien pour les mettre en pratique."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Nous allons utiliser un téléphone rooté, pour analyser une application Android et la modifier grâce au reverse engineering. Ensuite, nous approfondirons l’analyse avec l'utilisation d'outils permettant de modifier dynamiquement le comportement de l'application lors de son exécution. Enfin nous évoquerons les protections à mettre en place pour éviter ces attaques."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "A l'issu de notre présentation, vous aurez une meilleure vision du pentest mobile et les bases nécessaires pour utiliser les outils élémentaires de ce domaine."
        ]
      }
    ]
  },
  "construire_soi_meme_son_clavier_mecanique": {
    "attributes": {
      "key": "construire_soi_meme_son_clavier_mecanique",
      "title": "Construire soi-même son clavier mécanique, idée bizarre ou idée de génie ?",
      "speakers": [
        "benjamin_legrand"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "10h15",
      "duration": "45 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Après avoir longtemps voulu un clavier \"ergonomique\", j'ai décidé de me lancer moi-même dans sa construction"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Ce que je ne savais pas, c'est que j'allais plonger dans le monde merveilleux des claviers mécaniques et du \"do it yourself\""
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "On sait tous utiliser le clavier standard AZERTY dit 100%, mais est-ce que cette disposition est toujours pertinente en 2023 ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "En quoi faire son propre clavier peut il être intéressant pour les développeurs et développeuses que nous sommes ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Survolons ensemble les différentes options qui s'offrent à nous aujourd'hui."
        ]
      }
    ]
  },
  "corn_hole_2_turbo": {
    "attributes": {
      "key": "corn_hole_2_turbo",
      "title": "Corn Hole 2 Turbo : De l'arduino pour l'apéro !",
      "speakers": [
        "paul_roye"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "11h15",
      "duration": "45 minute",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Le Corn Hole est un jeu d'extérieur qui nous vient des USA. Aussi connu là-bas que notre pétanque nationale, il consiste à lancer de petits sacs remplis de grains de maïs sur une planche située à 8,20m. Si possible il faut viser le trou situé en haut de la planche ! Tout ça, traditionnellement, à l'heure de l'apéro !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Avec Nico on voulait \"bidouiller\". De l'électronique, du travail du bois, de la découpe laser, de l'impression 3D.. on voulait bricoler. Pour le Corn Hole nous avions un besoin : rendre le score disponible à tout le monde : aux joueurs, mais aussi au public. Et soyons honnête, on avait aussi vraiment envie de faire n'importe quoi ! Jusqu'où pourrions-nous aller ? Autour d'un verre, le défi était lancé.."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "C'est comme ça que nous nous sommes lancés à faire une planche \"2.0\", avec des capteurs, un affichage du score, etc.. Au menu : du travail du bois, du dev arduino et du dev android. Quelle satisfaction de mettre les mains dans le cambouis ! Tout était nouveau pour nous. A l'heure de l'artisanat logiciel, on y redécouvre les sensations grisantes de nos débuts… repartir de zéro, avec peu de ressources. Cela nous a appris à être extrêmement sobres en énergie, en code et en utilisation de ressources ! Après quelques grosses claques (spoiler : nous n'avons pas pu atteindre nos objectifs les plus fous.. !) , c'est un retour aux sources, du développement sous contrainte, et nos premiers pas dans le développement embarqué."
        ]
      }
    ]
  },
  "creer_des_objets_3D_avec_du_code": {
    "attributes": {
      "key": "creer_des_objets_3D_avec_du_code",
      "title": "Créer des objets 3D avec du code, grâce à OpenSCAD",
      "speakers": [
        "yohan_lasorsa"
      ],
      "type": "quechua",
      "day": 0,
      "time": "17h40",
      "duration": "20 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "La modélisation 3D, c'est tout un art! Si vous avez déjà tenté l'expérience d'un modeleur 3D comme Blender, vous avez probablement constaté la difficulté de l'exercice. Mais comment faire alors pour créer des modèles 3D que l'on a en tête, quand on vient d'investir dans une belle imprimante 3D? Réponse de développeur: avec du code!"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Pour cela nous allons découvrir l'outil et le langage de script OpenSCAD, qui permet de créer des objets à base de primitives et fonctions géométriques simples. A travers cette courte session de live coding, vous apprendrez les bases pour créer vos propres modèles imprimables et laisser libre court à votre imagination!"
        ]
      }
    ]
  },
  "creer_sa_propre_vm_avec_compilation_jit_pour_les_nuls": {
    "attributes": {
      "key": "creer_sa_propre_vm_avec_compilation_jit_pour_les_nuls",
      "title": "Créer sa propre VM avec compilation JIT pour les nuls",
      "speakers": [
        "olivier_poncet"
      ],
      "type": "canadienne",
      "day": 1,
      "time": "10h15",
      "duration": "45 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "La compilation « Just In Time » est une technique d'exécution très utilisée depuis de nombreuses années au sein des machines virtuelles de langages tels que Java, C#, JavaScript, etc .... Elle permet d'interpréter et d'exécuter un byte-code tout en le transformant « à la volée » vers le langage machine natif de la machine hôte nous permettant ainsi d'obtenir des performances bien plus élevées lors d'une seconde exécution du code."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Ces techniques de recompilation dynamique peuvent être complexes à appréhender lorsque l'on est néophyte sur le sujet, c'est pourquoi nous allons démystifier ensemble ce sujet"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Dans ce talk nous mettrons en œuvre et en live notre propre machine virtuelle avec JIT intégrée pour une calculatrice ",
          {
            "tag": "a",
            "props": {
              "href": "https://en.wikipedia.org/wiki/Reverse_Polish_notation"
            },
            "children": [
              "RPN"
            ]
          },
          " (Reverse Polish Notation), sans aucun framework ni infrastructure de compilation extérieure, en émettant nous même le code machine ",
          {
            "tag": "code",
            "children": [
              "x86_64"
            ]
          },
          " nécessaire à l'exécution."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Puisse le dieu des « segmentation fault (core dumped) » être avec nous !"
        ]
      }
    ]
  },
  "d_un_orchestre_fige_a_un_joli_ballet": {
    "attributes": {
      "key": "d_un_orchestre_fige_a_un_joli_ballet",
      "title": "D'un orchestre figé à un joli ballet aka comment on a propulsé notre monolith dans un pas de danse endiablé 😈",
      "speakers": [
        "marie_laure_momplot",
        "sebastien_viale"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "14h30",
      "duration": "45 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Il était une fois, dans une célèbre manufacture de pneus 🏭, une grande volonté de remplacer son orchestrateur supply chain et logistique 🚚. Le chef d'orchestre étant épuisé, il fallait le remplacer: et pourquoi pas par un joli ballet 🤔 ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Ayant choisi ses nouveaux atouts, kafka et kafka streams, plongez dans l'aventure de notre équipe, ultra motivée, pour passer d'un logiciel orchestré à des chorégraphies de micro services bien rôdées ✨. Sur un nouveau tempo 🥁, venez découvrir comment elle a pu accorder un rythme de batch quotidien voir hebdo avec des flux continus et instantanés d'une architecture event driven. Mais aussi, venez apprendre de nos fausses notes et nos pas maladroits pour passer d'un monolith figé à plusieurs centaines de micro-services survoltés 🧨."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Fort de notre histoire, vous repartirez avec la stratégie qui nous a permis :"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "la coordination harmonieuse de plus de 200 micro services kafka streams sur kubernetes tanzu,"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "l'utilisation de 250 objets kafka connects pour discuter avec nos applications legacies,"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "les points d'attention à garder en tête lors du passage d'un écosystème cadencé dans une base de données à un logiciel \"event management\" basé sur 1000 topics kafka"
            ]
          },
          "\n"
        ]
      }
    ]
  },
  "de_la_tablette_d_argile_a_ChatGPT": {
    "attributes": {
      "key": "de_la_tablette_d_argile_a_ChatGPT",
      "title": "De la tablette d'argile à ChatGPT : la passionnante histoire de la diffusion du savoir",
      "speakers": [
        "patrice_de_saint_steban"
      ],
      "type": "autour_du_feu",
      "day": 0,
      "time": "13h50",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Les révolutions technologiques de l'écriture ont eu un impact considérable sur la transmission et la diffusion du savoir dans l'histoire de l'humanité. Depuis l'invention de l'écriture il y a plus de 5000 ans, en passant par l'imprimerie au 15ème siècle et l'avènement d'Internet au 20ème siècle, chaque étape a permis de démocratiser l'accès à l'information et de faciliter la transmission des connaissances. L'arrivée de l'IA et de ChatGPT représente une nouvelle étape dans cette évolution technologique, offrant de nouvelles perspectives pour l'apprentissage et l'accès à l'information."
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "Comment partager de l'information sans avoir inventé l'écriture ?"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Est-ce que vous savez comment vous servir d'un papyrus ? "
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Qu'est-ce qu'un codex ? Et qu'est-ce que cela a révolutionné ? "
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Connaissez vous les personnes qui ont été les plus terrifiés par l'apparition de l'imprimerie ? ou d'internet ? "
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Est-ce qu'il a fallu attendre ChatGPT et l'internet pour avoir des fake news ?"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Est-ce que l'IA va finir par contrôler le monde ?"
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Apportez votre couverture et votre thé, réunissez les enfants au coin du feu, nous allons vous conter la merveilleuse histoire de la transmission du savoir."
        ]
      }
    ]
  },
  "dessines_moi_rust": {
    "attributes": {
      "key": "dessines_moi_rust",
      "title": "Dessines-moi Rust ✏🦀",
      "speakers": [
        "yannick_guern"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "21h00",
      "duration": "45 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Rust est un langage qui peut avoir une courbe d'apprentissage assez abrupte. Tellement abrupte qu'elle peut décourager plus d'un ou d'une."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "La vulgarisation d'un concept peut prendre diverses formes. Mon canal de transmission préféré est le dessin."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je propose ainsi, au travers de dessin et de schéma accompagné d'explications possibles et d'analogies parfois douteuses ^^' De découvrir sous un autre angle, les mécanismes spécifiques de Rust qui en font un langage qui permet de mieux coder."
        ]
      }
    ]
  },
  "dis_papa_c_est_quoi_impression_3D": {
    "attributes": {
      "key": "dis_papa_c_est_quoi_impression_3D",
      "title": "Dis papa, c'est quoi l'impression 3D ?",
      "speakers": [
        "yohan_lasorsa",
        "wassim_chegham"
      ],
      "type": "bivouac",
      "day": 1,
      "time": "10h15",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Qui n'a jamais rêvé de pouvoir fabriquer ses propres objets, en 3D, dans le monde réel? Concevoir ses propres outils pour sa maison, réaliser des pièces de rechange pour sa voiture ou créer des jouets uniques pour ses enfants est aujourd'hui à la portée de tous. L'impression 3D a révolutionné le prototypage et la fabrication dans de nombreux domaines, mais comment ça marche? Quelles sont les différentes technologies disponibles, et leurs applications? Et surtout, comment ça s'imprime?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "A travers ce talk pratique et sans slides, nous allons vous présenter les différentes technologies d'impression 3D, et détailler les composants et le fonctionnement d'une imprimante à dépot de filament fondu (FDM). Vous aurez l'occasion d'observer l'impression d'une pièce en directe, et de réaliser vous-même votre première pièce en 3D! Ce sera aussi un moment d'échange pour poser toutes vos questions sur l'impression 3D, et évoquer les prochaines évolutions de cette technologie... et peut être donner l'envie de vous y mettre? 🙂"
        ]
      }
    ]
  },
  "do_not_track_me": {
    "attributes": {
      "key": "do_not_track_me",
      "title": "#DoNotTrackMe 📺📱",
      "speakers": [
        "cedric_gatay"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "11h15",
      "duration": "45 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Nous passons beaucoup de temps devant nos écrans et nous sommes la cible parfaite des publicités et du tracking en tout genre. AdBlock / UBlock vous parlent, mais ils se limitent à vos navigateurs, savez-vous que vous pouvez efficacement bloquer une grande partie des publicités qui transitent sur vos écrans, que ce soit vos ordinateurs ou téléphones ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Nous allons étudier et comprendre les mécanismes que nous pouvons mettre en place pour bloquer les publicités mais également les marqueurs qui permettent de vous pister sur internet."
        ]
      }
    ]
  },
  "escape_camp_part_1": {
    "attributes": {
      "key": "escape_camp_part_1",
      "title": "Escape Camp 🏃🏕️",
      "speakers": [
        "gregory_bevan",
        "william_bartlett"
      ],
      "type": "bivouac",
      "day": 1,
      "time": "13h30",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      "Rejoignez-nous pour une série d'énigmes qui mettront vos neurones à rude épreuve, vous amèneront à découvrir différents lieux du camping et vous inviteront à deviner le thème de notre talk ! Saurez-vous découvrir avant les autres et en moins de 45min le mystérieux sujet technique que nous vous présenteront dans la 2e partie ? Rien n’est moins sûr !"
    ]
  },
  "escape_camp_part_2": {
    "attributes": {
      "key": "escape_camp_part_2",
      "title": "Escape Camp 🏃🏕️",
      "speakers": [
        "gregory_bevan",
        "william_bartlett"
      ],
      "type": "bivouac",
      "day": 1,
      "time": "14h30",
      "duration": "20 minutes",
      "room": "petite_salle"
    },
    "children": [
      "The mysterious Conf ! Rejoignez-nous pour le making of technique de l'escape game. Les technologies et concepts employés n'auront plus de secrets pour vous."
    ]
  },
  "esprit_de_famille": {
    "attributes": {
      "key": "esprit_de_famille",
      "title": "Esprit de famille, méthodes, rapport à l'argent, ambitions - l'héritage d'une famille d'entrepreneurs depuis 100 ans",
      "speakers": [
        "mathieu_passenaud"
      ],
      "type": "autour_du_feu",
      "day": 0,
      "time": "17h40",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "L'impact et l'influence de notre entourage sur nos vies (pro ou perso) peut être grand. L'éducation que l'on reçoit, l'exemple familial, certains évènements marquants, nos expériences... tout ceci prend part dans ce que nous sommes."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "En 1907, mon arrière arrière grand père a créé l'entreprise Passenaud spécialisée dans la récupération de peaux, chiffons et plumes. 100 ans plus tard le groupe Passenaud est devenu un des leaders de la collecte et du tri de déchets et brasse plus de 600 000 tonnes de marchandises par an."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Comment cette histoire et ce contexte familial ont impacté ma vie professionnelle pourtant dans un secteur très éloigné de ce que je pratique aujourd'hui."
        ]
      }
    ]
  },
  "et_si_on_arretait_de_basher_les_esn": {
    "attributes": {
      "key": "et_si_on_arretait_de_basher_les_esn",
      "title": "Et si on arrêtait de basher les ESN ?",
      "speakers": [
        "olivier_thierry"
      ],
      "type": "bivouac",
      "day": 1,
      "time": "11h15",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      "Les ESN, des marchands de viande qui n'ont aucune considération pour leurs collaborateurs et arnaquent leurs clients ? C'est en tout cas l'image que véhiculent souvent les sociétés de service dans le milieu des développeurs. Pourtant ça fait 25 ans que je bosse dans une ESN et je n'ai jamais eu ce ressenti. Même s'il n y a pas de fumée sans feu, est-ce qu'on peut faire de ces clichés une généralité ? Ai-je eu de la chance ? Ou alors le milieu des ESN n'est pas aussi pourri qu'on le dit ? Je vous propose mon retour d'expérience sur mes années d'ESN, les difficultés qu'on peut vivre dans une ESN, mais aussi les opportunités qu'elles offrent, en particulier en début de carrière."
    ]
  },
  "event_driven_qu_est_ce_donc": {
    "attributes": {
      "key": "event_driven_qu_est_ce_donc",
      "title": "Event Driven, qu'est-ce donc ?! Un nouveau buzzword ?",
      "speakers": [
        "celine_louvet"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "13h30",
      "duration": "45 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "On entend, de plus en plus, parler d'Event Driven Systems. C'est un peu le nouveau truc à la mode, mais en quoi ça consiste réellement ? Pour le comprendre, nous repartirons des fondamentaux, pour progressivement voir ce que peut nous apporter le modèle événementiel publisher / subscriber, ses avantages et ses inconvénients. Nous verrons aussi comment l'utiliser dans certains cas fréquents."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "De plus, nous prendrons un SI typique que nous chercherons à améliorer, de façon à rendre les services plus performants et moins interdépendants."
        ]
      }
    ]
  },
  "il_etait_une_fois_un_arbre_qui_parle": {
    "attributes": {
      "key": "il_etait_une_fois_un_arbre_qui_parle",
      "title": "Il était une fois un arbre qui parle",
      "speakers": [
        "paul_pinault"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "13h30",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Faire parler les objets, choses et être vivants autour de nous c'est l'enjeu de l'Internet des objets pour comprendre le monde qui nous entoure, le preserver."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je vais vous compter l'histoire de l'Internet des objets, des technologies qui sont nées en 2009 et évoluent depuis, je vous emmène 45 minutes dans ce qui me passionne pour vous faire découvrir l'IoT terrestre et l'IoT satellitaire, vous expliquer leur fonctionnement, leur contraintes et ce que nous pouvons en attendre."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Pas de slide, pas de code, mais sans doute pas mal de boitiers, composants, piles pour illustrer tout cela."
        ]
      }
    ]
  },
  "imager_materialiser_sa_pensee": {
    "attributes": {
      "key": "imager_materialiser_sa_pensee",
      "title": "Imager, matérialiser sa pensée",
      "speakers": [
        "virginie_ferey"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "14h30",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "h2",
        "props": {
          "id": "-moi-tfaçons-jsais-pas-dessiner-"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#-moi-tfaçons-jsais-pas-dessiner-"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "« Moi, t’façons, j’sais pas dessiner. »"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  "Venez décomplexer votre coup de crayon en jouant à une version « maison » du Gartic Phone."
                ]
              },
              "\n"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  "Venez réfléchir à la façon dont vous vous représentez les choses, à travers la présentation et l’évocation de différents sujets par des biais inhabituels."
                ]
              },
              "\n"
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "h2",
        "props": {
          "id": "-rien-de-tel-quun-bon-schéma--oui-mais-lequel-comment-le-réaliser-et-avec-quoi-"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#-rien-de-tel-quun-bon-schéma--oui-mais-lequel-comment-le-réaliser-et-avec-quoi-"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "« Rien de tel qu’un bon schéma. » Oui, mais lequel, comment le réaliser, et avec quoi ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Dans la foulée, je vous propose un temps d’échange et de partage sur les méthodes et les outils que vous préférez, qu’ils soient graphiques, ou pas !"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "Pour comprendre, analyser, mémoriser des concepts nouveaux,"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Pour reformuler une pensée, une idée,"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Pour communiquer sur un projet,"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Pour transmettre des informations,"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "..."
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "h2",
        "props": {
          "id": "pourquoi-"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#pourquoi-"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "Pourquoi ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Quand on travaille dans le champ de l’informatique, du numérique, on met en œuvre beaucoup (et essentiellement !) de compétences intellectuelles. Raisonnement, abstraction, capacité à se projeter, etc."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Malgré ça, on a tous été confronté un jour à une situation où on ne saisit pas ce qui se joue. On a beau tourner le truc dans tous les sens, on sent bien qu’on a mal abordé le sujet, que quelque chose nous échappe :"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "Les raisons d’une décision, d’un choix technique,"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Le mécanisme de raisonnement qui sous-tend un fonctionnement, "
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "La formulation d’une demande, "
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "..."
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "En plus d’être très frustrant, ça peut grandement compliquer notre compréhension et/ou notre communication des choses, et être bloquant."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Par ailleurs, la représentation graphique y est très présente également, tout simplement parce qu’elle aide à rendre tangible idées, concepts et données.\nSchémas, graphiques, sketchnotes, cartes mentales, il existe différentes façons de mettre en forme tout ça.\nMais ces vecteurs de réflexion, communication et compréhension semblent parfois secondaires, perçus comme « accessoires »."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Pourtant… "
        ]
      }
    ]
  },
  "intelligence_artificielle_expliquee_en_20_minutes": {
    "attributes": {
      "key": "intelligence_artificielle_expliquee_en_20_minutes",
      "title": "L'intelligence artificielle expliquée en 20 minutes !",
      "speakers": [
        "stephane_philippart"
      ],
      "type": "quechua",
      "day": 0,
      "time": "16h30",
      "duration": "20 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "... ",
          {
            "tag": "em",
            "children": [
              "Ou comment en tant que dev faire de l'IA sans être Data Scientist ?"
            ]
          },
          "  "
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "L'IA est partout, du moins tout le monde revendique d'avoir de l'IA dans ses applications, ses objets connectés, ..."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Oui mais voilà, au final c'est quoi l'Intelligence Artificielle et qu'y a-t-il de caché derrière ce terme ?\nComment expliquer simplement les notions techniques impliquées ?\nLa grande IA va-t-elle gouverner le monde ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Durant ce talk je vous propose de découvrir simplement, mais de manière la plus exhaustive possible, avec ma vision de développeur, ce qu'est l'intelligence artificielle et quelles technologies sont utilisées dans ce milieu."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Et tout ça en 20 minutes !"
        ]
      }
    ]
  },
  "ivre_et_au_chomage": {
    "attributes": {
      "key": "ivre_et_au_chomage",
      "title": "Ivre et au chômage, elle décide d'écrire un livre sur le Scala en plein Covid",
      "speakers": [
        "agnes_cardin"
      ],
      "type": "quechua",
      "day": 0,
      "time": "17h40",
      "duration": "20 minutes",
      "room": "petite_salle"
    },
    "children": [
      "REX sur l'écriture d'un premier livre : comment s'est arrivé ? pourquoi j'ai accepté ? par quelles étapes de dépression suis-je passée ? Je vais parler des relations avec l'équipe éditoriale, des délais, des étapes de la réalisation d'un livre du jour 1 avec les premières lignes jusqu'à la livraison. Je ne m'arrête pas là, on va parler de marketing, publicité, impression, sortie officielle du livre et pourquoi je ne referai plus ça."
    ]
  },
  "javascript_une_histoire": {
    "attributes": {
      "key": "javascript_une_histoire",
      "title": "JavaScript : une histoire d'amour 💔",
      "speakers": [
        "jordane_grenat"
      ],
      "type": "autour_du_feu",
      "day": 0,
      "time": "17h10",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Encore une fois amis campeurs, je viens vous ouvrir mon coeur. Dans ce récit versifié, je vais vous raconter, mon histoire d'amour avec JS, nos meilleurs jours et ses faiblesses. Chaque relation, parait-il nous grandit ; dans cette passion j'ai beaucoup appris !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Évidemment c'est naturel, les torts sont partagés : j'ai parfois été infidèle, avec des langages compilés : Elm, Flutter, TypeScript, Reason et aussi PureScript... J'ai maintes fois cédé à ces nouveaux venus, parfois juste typés, souvent bien mieux conçus."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Sans plus de distractions, venez donc écouter mon aventure, du début de notre liaison à bien après notre rupture !"
        ]
      }
    ]
  },
  "keynote_jeudi_matin": {
    "attributes": {
      "key": "keynote_jeudi_matin",
      "title": "Keynote d'ouverture et Marché aux poissons",
      "speakers": [
        "horacio_gonzalez",
        "pierre_tibulle"
      ],
      "type": "keynote",
      "day": 0,
      "time": "09h00",
      "duration": "40 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Keynote des organisateurs"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Marché aux poissons"
        ]
      }
    ]
  },
  "keynote_vendredi_matin": {
    "attributes": {
      "key": "keynote_vendredi_matin",
      "title": "Keynote surprise et Marché aux poissons",
      "speakers": [
        "horacio_gonzalez",
        "pierre_tibulle"
      ],
      "type": "keynote",
      "day": 1,
      "time": "09h00",
      "duration": "60 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Keynote d'un.e invité.e surprise !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Marché aux poissons"
        ]
      }
    ]
  },
  "keynote_vendredi_soir": {
    "attributes": {
      "key": "keynote_vendredi_soir",
      "title": "Keynote d'Au revoir 😢",
      "speakers": [
        "horacio_gonzalez",
        "pierre_tibulle"
      ],
      "type": "keynote",
      "day": 1,
      "time": "16h00",
      "duration": "20 minutes",
      "room": "petite_salle"
    },
    "children": [
      "Keynote de fin des organisateurs"
    ]
  },
  "l_art_du_DeeJaying_par_la_pratique": {
    "attributes": {
      "key": "l_art_du_DeeJaying_par_la_pratique",
      "title": "L'art du DeeJaying par la pratique",
      "speakers": [
        "david_pilato"
      ],
      "type": "autour_du_feu",
      "day": 1,
      "time": "14h30",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Dans cet atelier, nous allons découvrir quelques techniques utilisées par les DeeJays pour vous faire bouger toute une soirée :"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "L'ajustement des BPM (Battements Par Minute)"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "L'ajustement des harmoniques"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Les égalisateurs de fréquence"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Les Cue Points"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Les boucles"
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Nous tenterons à la fin de faire un mix à plusieurs mains pour mettre en pratique ce que nous avons appris."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Matériel principalement utilisé :"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "deux ",
              {
                "tag": "a",
                "props": {
                  "href": "https://www.pioneerdj.com/fr-fr/product/player/cdj-3000/black/overview/"
                },
                "children": [
                  "Pioneer CDJ-3000"
                ]
              }
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "une ",
              {
                "tag": "a",
                "props": {
                  "href": "https://www.pioneerdj.com/fr-fr/product/mixer/archive/djm-900nxs2/white/overview/"
                },
                "children": [
                  "Pioneer DJM-900 Nexus 2 White"
                ]
              },
              " ou une ",
              {
                "tag": "a",
                "props": {
                  "href": "https://www.pioneerdj.com/fr-fr/product/mixer/djm-v10-lf/black/overview/"
                },
                "children": [
                  "Pioneer DJM-V10LF"
                ]
              }
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "une enceinte amplifiée ",
              {
                "tag": "a",
                "props": {
                  "href": "https://www.fbt.it/en/products/x-pro/x-pro-112ma/"
                },
                "children": [
                  "FBT - X-Pro 112MA"
                ]
              }
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "un enregistreur"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "une table [AmericanDJ Pro Event table II](",
              {
                "tag": "a",
                "props": {
                  "href": "https://www.americandj.eu/fr/pro-event-table-ii-mb.html"
                },
                "children": [
                  "https://www.americandj.eu/fr/pro-event-table-ii-mb.html"
                ]
              }
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Aucune connaissance en musique requise. Juste un bon moment à passer en poussant des boutons."
        ]
      }
    ]
  },
  "la_pull_request_de_l_horreur": {
    "attributes": {
      "key": "la_pull_request_de_l_horreur",
      "title": "La Pull Request de l’horreur",
      "speakers": [
        "jean_francois_greffier"
      ],
      "type": "autour_du_feu",
      "day": 0,
      "time": "21h00",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Le légendaire Necronomicon, De Vermis Mysteriis, la pull request d'un collègue nonchalant… Certaines lectures sont tellement abjectes, tellement intenses que d’après HP Lovecraft ou moi elles peuvent menacer la santé mentale de celle ou celui qui s’y aventure."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Dans ce récit, vous verrez comment une simple relecture de code m’a fait me questionner. Comment elle m’a aidé à mieux comprendre le contexte du projet, m’a fait réaliser ce qui ne m’allait pas, et comment cette PR a participé à ma dépression."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Venez écouter cette histoire d’horreur au coin du feu, contée comme je le ferais pour une partie du jeu de rôle l’Appel de Cthulhu."
        ]
      }
    ]
  },
  "le_guide_du_voyageur": {
    "attributes": {
      "key": "le_guide_du_voyageur",
      "title": "Le guide du voyageur LGBTQIA+",
      "speakers": [
        "elaine_dias_batista"
      ],
      "type": "autour_du_feu",
      "day": 0,
      "time": "13h30",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      "Vous connaissez sûrement ce sigle, mais savez-vous ce qui se cache derrière chaque lettre ? Ce n'est pas facile d'expliquer dans les détails toutes ces définitions, mais des concepts basiques acceptés dans la communauté sont souvent méconnus. Identité sexuelle, orientation sexuelle, sexe biologique, expression de l'identité sexuelle: je vous propose d'expliquer de manière générale les différentes possibilités derrière ces concepts."
    ]
  },
  "les_7_vies_d_une_qa_analyst": {
    "attributes": {
      "key": "les_7_vies_d_une_qa_analyst",
      "title": "Les 7 vies d'une QA Analyst en reconversion",
      "speakers": [
        "audrey_moulins"
      ],
      "type": "quechua",
      "day": 0,
      "time": "21h00",
      "duration": "20 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Dès notre plus jeune âge, nous sommes amenés à choisir NOTRE voie. Parfois nous la choisissons, parfois nous sommes poussés par divers éléments pour l’emprunter : des choix familiaux, des études plus attrayantes et gratifiantes etc. Ajoutons à cela la précarité de l’emploi : un enchaînement de CDD, la recherche du mouton à 7 pattes par les recruteurs, un salaire ne correspondant absolument pas à l’expertise que l’on a. A ce moment précis, on se retrouve face à l’évidence : cette vie professionnelle ne me correspond pas, je ne suis pas à ma place."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Se pose alors les questions : dois-je envisager une reconversion professionnelle ? Comment vais-je être accueillie par mes pairs ? Comment me sentir légitime dans cette nouvelle voie ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "A travers ce témoignage, vous cheminerez sur mon parcours parsemé d'embûches et de réussites afin d'obtenir des conseils qui vous permettront de mieux comprendre les profils en reconversion et éviter les \"bugs\"."
        ]
      }
    ]
  },
  "maitrise_ton_apprentissage": {
    "attributes": {
      "key": "maitrise_ton_apprentissage",
      "title": "Maitrise ton apprentissage aussi bien que la cuisson de tes saucisses 🔥",
      "speakers": [
        "maxime_deroullers"
      ],
      "type": "autour_du_feu",
      "day": 1,
      "time": "10h15",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "C'est bien connu, ",
          {
            "tag": "strong",
            "children": [
              "être développeur, c'est être un expert en veille et un étudiant permanent !"
            ]
          },
          " Les technologies et les méthodes évoluent sans cesse avec des concepts toujours plus nombreux... Se maintenir à jour est de plus en plus difficile 🤯 "
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Bien sûr, ton entreprise s’attend à ce que tu fasses ta ",
          {
            "tag": "strong",
            "children": [
              "veille sur ton temps libre"
            ]
          },
          " et que tu passes tes ",
          {
            "tag": "strong",
            "children": [
              "dimanches à faire des side projects"
            ]
          },
          "… Pas de problème, puisque tu es un(e) développeur(se) “passionné(e)” 😂"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Bref, c'est l'enfer pour concilier vie pro et perso ! 🔥🔥🔥"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Bonne nouvelle 🎉 : c'est possible de ",
          {
            "tag": "strong",
            "children": [
              "gagner un temps précieux"
            ]
          },
          " en ayant les bons outils, astuces et habitudes."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je vais te partager les connaissances, ressources et outils que j’ai expérimentés ces dernières années pour ",
          {
            "tag": "strong",
            "children": [
              "optimiser ton temps de veille et d’apprentissage"
            ]
          },
          ". C’est aussi un bon point de départ pour les développeurs qui se demandent par où commencer."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          " Lors de la session, tu découvriras comment :"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  "établir des ",
                  {
                    "tag": "strong",
                    "children": [
                      "objectifs en lien avec tes valeurs et les atteindre"
                    ]
                  }
                ]
              },
              "\n"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  {
                    "tag": "strong",
                    "children": [
                      "créer ta roadmap d’apprentissage"
                    ]
                  }
                ]
              },
              "\n"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  "développer des ",
                  {
                    "tag": "strong",
                    "children": [
                      "routines efficaces"
                    ]
                  },
                  " "
                ]
              },
              "\n"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  {
                    "tag": "strong",
                    "children": [
                      "automatiser les process"
                    ]
                  },
                  " (mon côté DevOps 🤷) pour se concentrer sur l’essentiel"
                ]
              },
              "\n"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  "faire une ",
                  {
                    "tag": "strong",
                    "children": [
                      "veille sans effort"
                    ]
                  }
                ]
              },
              "\n"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  "créer un système de mémorisation et de récupération de l'information, aussi appelé ",
                  {
                    "tag": "strong",
                    "children": [
                      "second cerveau"
                    ]
                  }
                ]
              },
              "\n"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "\n",
              {
                "tag": "p",
                "children": [
                  "exploiter les ",
                  {
                    "tag": "strong",
                    "children": [
                      "bons outils pour gagner en productivité"
                    ]
                  }
                ]
              },
              "\n",
              {
                "tag": "p",
                "children": [
                  "Tout ce que je te partage, je l'ai appris au cours de ma carrière sportive en équitation et professionnelle dans le développement et l'entrepreneuriat. "
                ]
              },
              "\n",
              {
                "tag": "p",
                "children": [
                  "Aujourd'hui, je m’occupe de deux associations (Cloud Nord et Cloud Alpes) et une société tout en continuant à être un développeur, et pourtant, je trouve ",
                  {
                    "tag": "strong",
                    "children": [
                      "toujours le temps de m'adonner à mes passions 😍"
                    ]
                  }
                ]
              },
              "\n",
              {
                "tag": "p",
                "children": [
                  "Toi aussi, gagne du temps en maîtrisant ton apprentissage aussi bien que la cuisson de tes saucisses ! 🔥"
                ]
              },
              "\n"
            ]
          },
          "\n"
        ]
      }
    ]
  },
  "maman_mon_partenaire_financier_m_a_lache": {
    "attributes": {
      "key": "maman_mon_partenaire_financier_m_a_lache",
      "title": "Maman, mon partenaire financier m’a lâché!",
      "speakers": [
        "sahbi_ktifa"
      ],
      "type": "quechua",
      "day": 0,
      "time": "16h30",
      "duration": "20 minutes",
      "room": "petite_salle"
    },
    "children": [
      "Notre partenaire principal de financement sur la plateforme Malt est entré en liquidation judiciaire au début du mois de Septembre 2022. Nous l'avons appris à la mi-aout côté product. Avec les congés des uns et des décisions radicales à prendre pour maintenir des flux de paiement à hauteur de 15M par mois à trois jours pour nos freelances, je vous propose de vous relater cette aventure passé inaperçue (heureusement) pour nos utilisateurs, mais qui a su mobiliser les équipes engineering, product, legal et finance pour arriver à un happy end (pour nous en tout cas)."
    ]
  },
  "mini_golf_pour_une_accessibilite": {
    "attributes": {
      "key": "mini_golf_pour_une_accessibilite",
      "title": "Mini golf pour une accessibilité numérique maximale",
      "speakers": [
        "herve_boisgontier"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "14h30",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Au travers d’une partie de mini-golf, nous allons parler ensemble d’accessibilité. Vous allez être mis en situation de handicap : par exemple, pour simuler des problèmes de vision, vous devrez porter des lunettes déformantes… Je n’en dit pas plus pour ne pas gâcher la surprise !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Ce jeu est l’occasion de parler ensemble des différents déficiences qui touchent plus de monde que nous l’imaginons (environ une personne sur cinq). Bien évidemment nous transposerons cela à notre métier d’informaticien ou d’informaticienne. Nous réfléchirons ensemble aux difficultés d’accessibilité numérique pour ces différentes déficiences et à ce que nous pouvons mettre en place pour assurer l’accessibilité de nos sites internet."
        ]
      }
    ]
  },
  "mobkky_le_mob_applique_au_molkky": {
    "attributes": {
      "key": "mobkky_le_mob_applique_au_molkky",
      "title": "Möbkky, le mob appliqué au Mölkky 🎳",
      "speakers": [
        "benoit_masson",
        "gwendal_leclerc"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "10h15",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Vous savez jouer au Mölkky ? Non ? C'est pas grave car dans cette session nous allons y jouer en utilisant les principes du mob programming."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Le mob programming (programmation en groupe) fait de plus en plus parler de lui. Il s'appuie sur les principes d'Extreme programming et du Lean software development afin de faciliter le développement et d'améliorer la qualité des logiciels. Nous allons vous faire découvrir ces principes à travers un jeu finlandais iconique en équipe.\nCette analogie nous permettra d'appréhender les avantages et inconvénients de cette pratique, et de discuter de sa mise en application au quotidien."
        ]
      }
    ]
  },
  "naviguer_et_coder_comment_on_fait": {
    "attributes": {
      "key": "naviguer_et_coder_comment_on_fait",
      "title": "Naviguer et coder, comment on fait ?",
      "speakers": [
        "aleth_gueguen"
      ],
      "type": "autour_du_feu",
      "day": 0,
      "time": "16h30",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      "Quand on aime passer du temps sur l'océan, et qu'on peut travailler de n'importe où, est-ce que naviguer et coder c'est compatible ?\nQuand l'électricité n'est pas au bout de la prise, mais dépend du soleil.\nQuand on est dans un milieu humide et pas stable.\nJe passe plusieur mois par an sur mon bateau, et dans ce talk je vais vous raconter comment je me suis organisée pour concilier voile et travail."
    ]
  },
  "on_vit_deja_dans_un_monde_federe": {
    "attributes": {
      "key": "on_vit_deja_dans_un_monde_federe",
      "title": "On vit déjà dans un monde fédéré !",
      "speakers": [
        "anthony_pena"
      ],
      "type": "autour_du_feu",
      "day": 0,
      "time": "16h00",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "On parle beaucoup de Mastodon et du modèle fédéré comme étant une nouvelle manière de fonctionner, que ça pose autant de problèmes que ça n’apporte de solution, que ça ne peut pas marcher, etc."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je vous propose de revenir sur la base d’échange réseau en ligne, des différents modèles, des nouveaux protocoles et comment se place Mastodon dans tout ça. Vous verrez que vous utilisez déjà des systèmes fédérés voir décentralisé au quotidien sans même vous en rendre compte."
        ]
      }
    ]
  },
  "passez_moins_de_temps_a_attendre_la_ci": {
    "attributes": {
      "key": "passez_moins_de_temps_a_attendre_la_ci",
      "title": "Passez moins de temps à attendre la CI et plus de temps au bord de la piscine",
      "speakers": [
        "jean_phi_baconnais",
        "guillaume_membre"
      ],
      "type": "bivouac",
      "day": 1,
      "time": "11h15",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Que vous soyez développeur·se ou Ops, les pipelines de CI/CD sont de plus en plus utilisés au quotidien dans nos projets. Mais comment optimiser vos pipelines ? En les réorganisant ? En ajoutant du parallélisme ? A l’aide de toboggans, nous vous partagerons quelques astuces d’optimisation pour gagner du temps et parfois même de l’argent !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Pour parler de ce sujet assez important et “chaud”, nous vous proposons de nous retrouver autour de la piscine pour des illustrations \"rafraîchissantes\" 😅!"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "PS : pensez à vos maillots de bain pour ceux qui le souhaitent 😎"
        ]
      }
    ]
  },
  "pour_eviter_le_dirty_recruiting": {
    "attributes": {
      "key": "pour_eviter_le_dirty_recruiting",
      "title": "Pour éviter le dirty recruiting, on ne laisse pas ses valeurs dans un coin",
      "speakers": [
        "shirley_almosni_chiche"
      ],
      "type": "canadienne",
      "day": 0,
      "time": "14h30",
      "duration": "45 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Retour d'expérience sur mon métier de recruteuse où j'ai pu constater que tout se négocie (salaire, remote, avantages...) sauf mes valeurs."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Cela a été un cheminement long et l'art du non compromis est une discipline qui se travaille avec le temps et quotidiennement. Cela passe inévitablement par une bonne connaissance de soi-même, une introspection et un véritable questionnement sur pourquoi on fait un métier de passion."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Mais avant cela je raconterai les choses inacceptables que j'ai tolérées en faisant le parallèle avec certaines théories en psychologie (Milgram, dynamique de groupe...) et ce qui a été pour moi un élément déclencheur..."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Evidemment, je donnerai des tips pour travailler sur sa propre valeur et son impact et j'essayerai d'aborder le sujet grave de la discrimination avec une pincée d'humour tout de même !"
        ]
      }
    ]
  },
  "programmons_ensemble": {
    "attributes": {
      "key": "programmons_ensemble",
      "title": "Programmons ensemble... une boite de vitesses",
      "speakers": [
        "mathieu_passenaud"
      ],
      "type": "bivouac",
      "day": 1,
      "time": "13h30",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      "Après avoir vu l’application du logiciel dans la gestion du moteur de voiture il y a quelques temps... continuons le démontage et allons explorer les antres de la boîte de vitesse automatique jusqu’à faire un prototype de boîte pilotée à variation continue avec un arduino et quelques légos ! Ce type de boite de vitesse s'applique au milieu des travaux public, agricole, mais aussi voitures hybrides Toyota ou même des vélos électriques."
    ]
  },
  "recits_d_epouvante_mlops": {
    "attributes": {
      "key": "recits_d_epouvante_mlops",
      "title": "Récits d'épouvante MLOps : Oseras-tu y faire face ?",
      "speakers": [
        "yuliana_khorolich"
      ],
      "type": "autour_du_feu",
      "day": 0,
      "time": "21h00",
      "duration": "15 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Les histoires d’horreur ont souvent le même début : un voyageur intrépide se dirige vers un lieu reculé et inconnu. Les signes inquiétants commencent à s’accumuler, mais malgré ses doutes, il persévère. Ou un cadeau est laissé sur son bureau, un modèle avec une requête banale : déploie-le en production !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Les problèmes liés à la mise en production sont fréquemment les plus effrayants et exaspérants, encore avant que quelqu'un n'ose toucher la solution. C'est sans oublier la question du modèle de machine learning, qui possède son propre caractère, et de tous les défis que cela entraîne."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Cette histoire tourne au cauchemar pour l’équipe d’engineering, pendant ce temps l’équipe des data scientists fête les performances de son modèle. Les données d’inférence, qui ne respectent pas les règles du jeu et ne correspondent pas aux données d’entraînement. Ou encore, la prochaine version du modèle, qui détruit le travail déjà effectué, et nos espoirs pour la fin du projet réussie."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Et après des semaines d'efforts acharnés, l’équipe réussit à corriger les erreurs, rendre le modèle conforme aux données et commencer à respirer plus tranquillement. Tout cela pour recommencer à zéro avec le projet suivant."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Certaines batailles nous laissent des cicatrices, et si on essayait de les éviter ?"
        ]
      }
    ]
  },
  "revivez_la_cryptographie_de_nos_ancetres": {
    "attributes": {
      "key": "revivez_la_cryptographie_de_nos_ancetres",
      "title": "Revivez la cryptographie de nos ancêtres, de Lysandre de Sparte à Blaise de Vigenère",
      "speakers": [
        "willy_malvault",
        "virginie_casavecchia"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "11h15",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Aujourd'hui la ",
          {
            "tag": "strong",
            "children": [
              "cryptographie est partout"
            ]
          },
          " ! Dans nos smartphones, nos TV, nos cartes de paiement, etc… On ne réfléchit même plus à comment nos échanges HTTPS fonctionnent, on les met simplement en place et les on les utilise ! Mais saviez-vous que ",
          {
            "tag": "strong",
            "children": [
              "la cryptographie existe depuis plus de 400 ans avant notre ère"
            ]
          },
          " ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Dans cette session au ",
          {
            "tag": "strong",
            "children": [
              "format bivouac"
            ]
          },
          ", nous vous proposons de ",
          {
            "tag": "strong",
            "children": [
              "redécouvrir les fondamentaux de la cryptographie"
            ]
          },
          ", à travers un court voyage historique. ",
          {
            "tag": "strong",
            "children": [
              "De Lysandre de Sparte à Blaise de Vigenère"
            ]
          },
          ", revivez avec nous les méthodes de l'époque, sans outil numérique, et tentez de déchiffrer les messages que nous aurons préparés pour l'occasion."
        ]
      }
    ]
  },
  "sous_le_capot": {
    "attributes": {
      "key": "sous_le_capot",
      "title": "Sous le capot des navigateurs web",
      "speakers": [
        "anthony_le_goas"
      ],
      "type": "quechua",
      "day": 0,
      "time": "16h00",
      "duration": "20 minutes",
      "room": "petite_salle"
    },
    "children": [
      "Hey ! Dis moi, tu sais comment ça fonctionne un navigateur web toi ? Le moteur de rendu, concrètement, il fait quoi ? Ça doit être sacrément compliqué de tout dessiner à l'écran non ? Allez, regardons ça ensemble !"
    ]
  },
  "speech_to_text": {
    "attributes": {
      "key": "speech_to_text",
      "title": "Speech To Text: une opportunité pour améliorer votre productivité ?",
      "speakers": [
        "mathieu_busquet"
      ],
      "type": "canadienne",
      "day": 1,
      "time": "11h15",
      "duration": "45 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Êtes-vous prêt à découvrir ce qu’est le ",
          {
            "tag": "strong",
            "children": [
              "Speech to Text"
            ]
          },
          " et comment il peut vous ",
          {
            "tag": "strong",
            "children": [
              "faciliter la vie"
            ]
          },
          " au quotidien et ",
          {
            "tag": "strong",
            "children": [
              "révolutionner votre entreprise"
            ]
          },
          " ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Durant ce talk, je vous présenterai ce système ainsi que ses différents cas d’utilisation. Nous étudierons les différentes possibilités permettant de le mettre en place. Vous ne pourrez plus dire que \" l'IA, c'est trop compliqué\" ! En effet, nous verrons ensemble que mettre en place un tel système ne demande pas d'être un ou une spécialiste de l'IA, ni d'avoir accès à énormément de données !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Vous découvrirez également une application de Speech to Text, réalisée avec ",
          {
            "tag": "a",
            "props": {
              "href": "https://streamlit.io/"
            },
            "children": [
              "Streamlit"
            ]
          },
          ", et ses nombreuses fonctionnalités, tout en comprenant l’avantage d’utiliser des ressources GPU."
        ]
      }
    ]
  },
  "the_developer_portal": {
    "attributes": {
      "key": "the_developer_portal",
      "title": "The Developer Portal: Open the Gate to Productivity 🚀",
      "speakers": [
        "maha_alsayasneh"
      ],
      "type": "quechua",
      "day": 0,
      "time": "17h10",
      "duration": "20 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "ArgoCD, Jenkins, Buildkite, Kubernetes, Jira, SonarQube, Vault, etc., with the rapid growth of technologies, this list keeps getting larger and the company software ecosystem gets more and more complex."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "It becomes overwhelming and time-consuming for developers to configure and use these software tools especially when the tools used for developing services owned by team A are different from those owned by team B."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "To free your developers from the burden of figuring out what service to use and how, in this talk, I will present the concept of service catalog, a developer portal to improve the developer experience and speed up development cycles."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Through a demo, I will show how to build a developer portal using Backstage service catalog and how to plug your existing services into it. Real successful case studies will be presented."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Join me if you would like to know more about it 😉"
        ]
      }
    ]
  },
  "un_scrum_master_en_or": {
    "attributes": {
      "key": "un_scrum_master_en_or",
      "title": "Un scrum master en or",
      "speakers": [
        "laurie_coquillat"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "16h00",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Sur une musique entraînante, la présentatrice s'avance, le sourire aux lèvres. Elle porte dans la main les fiches des questions qui serviront à départager les équipes : qui saura définir le \"Scrum Master en or\" ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Venez relever le défi en équipes : pour chaque question portant sur le Scrum Master, identifiez les réponses les plus souvent citées par un panel préalablement interrogé. Puis en équipe, dressez le portrait du Scrum Master que tout le monde rêverait d'avoir. Quelle proportion de qualités humaines et de compétences professionnelles mettrez-vous dans votre description ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Que vous soyez Scrum Master ou non, que vous en ayez un formidable dans votre équipe ou que vous les détestiez la plupart du temps, venez partager votre expérience et aider le groupe à aller au delà du descriptif de poste, pour définir enfin comment il peut être un formidable allié au quotidien."
        ]
      }
    ]
  },
  "vite_une_nouvelle_ere_de_tooling_front": {
    "attributes": {
      "key": "vite_une_nouvelle_ere_de_tooling_front",
      "title": "Vite, une nouvelle ère de tooling front ?",
      "speakers": [
        "yann_thomas_le_moigne",
        "christophe_jolivet"
      ],
      "type": "canadienne",
      "day": 1,
      "time": "13h30",
      "duration": "45 minutes",
      "room": "petite_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Depuis des années nous avons utilisé des tas d'outils différents pour builder nos applications JavaScript. Vous souvenez vous de Grunt ou Gulp ? Peut être avez-vous même builder vos applications avec des outils de l'écosystème Java comme Ant ou Maven."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Cette foule d'outils semblait avoir été unifiée par Webpack qui amenait de la simplification. Toutefois Webpack est il sur le point d'être détroné ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Avez vous déjà entendu parlé de Vite ? Oui Vitejs, le nouvel outil qui a déjà 3 ans."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Dans ce talk nous proposons de vous faire découvrir cet outil tout en essayant de répondre à la question, va-t'il révolutionner le tooling des développeurs front ?"
        ]
      }
    ]
  },
  "vous_pouvez_venir": {
    "attributes": {
      "key": "vous_pouvez_venir",
      "title": "Vous pouvez venir à ce talk les yeux fermés",
      "speakers": [
        "francois_xavier_lair"
      ],
      "type": "bivouac",
      "day": 0,
      "time": "11h15",
      "duration": "45 minutes",
      "room": "slideless"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Un talk à l'extérieur sans projecteur, cette contrainte est une superbe opportunité de se mettre dans la peau d'une personne malvoyante qui navigue sur un site internet."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "L'objectif de ce talk est de faire découvrir le navigation sur les sites internet à l'aide d'un lecteur d'écran."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Comment ça marche, comment \"voit-on\" un site sans le voir ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Quels sont les problèmes rencontrés par les utilisateurs de lecteurs d'écrans et surtout, comment faciliter cette navigation et éviter de faire un site inutilisable pour certains."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Durant ce talk, on écouteras des sites web, on parlera de sémantique, d'accès rapide, de landmarks, d'alternatives aux images, de tableaux, d'Aria, de formulaires, de liens et de boutons (spoiler : un div n'est pas un bouton)."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "On parlera aussi un peu de SEO : l'aveugle le plus célèbre au monde n'est il pas Google ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Un talk a écouter les yeux fermés."
        ]
      }
    ]
  },
  "wolfy": {
    "attributes": {
      "key": "wolfy",
      "title": "Wolfy - de 2000 à 20 000 joueurs connectés",
      "speakers": [
        "kevin_jean"
      ],
      "type": "canadienne",
      "day": 1,
      "time": "10h15",
      "duration": "45 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Wolfy est un jeu de loup-garou en ligne, fait par des fans du genre. Nous avons voulu remettre au goût du jour ce jeu en utilisant les dernières technologies (Docker, Kubernetes, NextJS, microservice...)"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Lors du premier confinement, tous les écoliers se sont retrouvés confinés chez eux. Pour garder le contact entre eux, l'un des moyens a été le jeu vidéo. Wolfy a vu son trafic multiplié par 10 dans les premiers jours du confinement."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Venez suivre nos nuits blanches et les différents problèmes de performance, de charge, de DDOS et de saturation réseau que nous avons dû affronter lié à cette augmentation exceptionnelle de joueurs."
        ]
      }
    ]
  },
  "yagni_kiss_and_dry": {
    "attributes": {
      "key": "yagni_kiss_and_dry",
      "title": "YAGNI, KISS, and DRY: The Secret Recipe For Better Software Design",
      "speakers": [
        "maha_alsayasneh"
      ],
      "type": "quechua",
      "day": 1,
      "time": "11h15",
      "duration": "20 minutes",
      "room": "grande_salle"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "\"Every line of code we don't write is dollars we didn't spend, and time on the calendar we get back for free\" -Tim Evans-Ariyeh."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "In today’s world, software are growing radically. Building software that is easy to maintain, understand, and reuse is the ultimate dream of any company."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Also, because a simple product that does a single thing well is better than a complex product that does many things poorly, concepts like YAGNI, KISS and DRY are important to help you design, build, and maintain a good and success."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "This talk will show how to apply these concepts to your team. We will show the best practices for designing good software."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Come and discover the magic recipe for designing better software and how to achieve it."
        ]
      }
    ]
  }
}

export const speakers = {
  "agnes_cardin": {
    "attributes": {
      "key": "agnes_cardin",
      "name": "Agnès Cardin",
      "company": "iAdvize",
      "photoURL": "speakers/agnes_cardin.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/agnesmdev",
          "name": "agnesmdev"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/agnes_cardin",
          "name": "agnes_cardin"
        }
      ]
    },
    "children": [
      "Développeuse passionnée et évangéliste SCALA, j'aime les chats 🐱, les jeux vidéos et le Japon. J'aime le travail bien fait et cherche toujours la meilleure façon de faire les choses sans réinventer la roue. Au quotidien, je m'applique à cultiver une vision du travail qui rime avec sens et performance. 🌟"
    ]
  },
  "aleth_gueguen": {
    "attributes": {
      "key": "aleth_gueguen",
      "name": "Aleth Gueguen",
      "company": "Aleth Gueguen Conseil",
      "city": "Nantes, France",
      "photoURL": "speakers/aleth_gueguen.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/planeth44",
          "name": "planeth44"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/pl4n3th",
          "name": "pl4n3th"
        }
      ]
    },
    "children": [
      "Je suis développeuse indépendante depuis 2006.\nMes missions : développer des logiciels métier pour les PME.\nJe prends en charge la totalité du projet, diagnostic business, scopage, définition des besoins, ateliers découverte métier, architecture, dev, accompagnement à la prise en main, maintenance et support.\nMa philosophie : utiliser des technos stables et bien connues, pour me focaliser sur les besoins métiers. Quand je ne suis pas sur la mer, je suis en vélo."
    ]
  },
  "amelie_avignon": {
    "attributes": {
      "key": "amelie_avignon",
      "name": "Amélie Avignon",
      "company": "Worldline",
      "photoURL": "speakers/amelie_avignon.jpg"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Sortie de l’université en tant que data scientist, j’ai intégré une équipe d’experts sécurité mobile et web. Ma mission est alors de lier data et sécurité afin d’améliorer l’expérience utilisateur."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je suis aujourd’hui product owner et j’adore élaborer et mettre en place de nouvelles solutions innovantes avec mon équipe."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "La transmission du savoir est également un élément important pour moi. C’est pourquoi je retrouve les bancs de l’école afin d’encadrer des projets universitaires, ou les conférences tech en tant que participante ou speaker."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "--"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "After graduating from university as a data scientist, I joined a team of mobile and web security experts. My mission is to bind data and security in order to improve the user experience."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "I am now a product owner and I love to design and build new innovative solutions with my team."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Knowledge transfer is also an important element for me. That's why I go back to school to supervise university projects, or tech conferences as an attendee or speaker."
        ]
      }
    ]
  },
  "anthony_le_goas": {
    "attributes": {
      "key": "anthony_le_goas",
      "name": "Anthony Le Goas",
      "company": "Zenika",
      "city": "Brest, France",
      "photoURL": "speakers/anthony_le_goas.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/@anthonylegoas",
          "name": "anthonylegoas"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/anthony_legoas",
          "name": "anthony_legoas"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Dév. web & directeur @Zenika Brest / Co-organisateur Svelte Society France + BrestJS + UX Design Brest."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Passionné par le web et son optimisation. Contributeur SvelteJS."
        ]
      }
    ]
  },
  "anthony_pena": {
    "attributes": {
      "key": "anthony_pena",
      "name": "Anthony Pena",
      "company": "SFEIR",
      "city": "Nantes, France",
      "photoURL": "speakers/anthony_pena.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/_Anthony_Pena",
          "name": "_Anthony_Pena"
        },
        {
          "icon": "github",
          "link": "https://github.com/kuroidoruido",
          "name": "kuroidoruido"
        }
      ]
    },
    "children": [
      "Codeur et blogueur le jour et dévoreur de manga la nuit, vous me verrez souvent parler de Java, JavaScript, Typescript, Rust ou de test, parfois un peu (beaucoup) de jeux-vidéos ou de bricolage de console."
    ]
  },
  "audrey_moulins": {
    "attributes": {
      "key": "audrey_moulins",
      "name": "Audrey Moulins",
      "company": "Leboncoin",
      "city": "France",
      "photoURL": "speakers/audrey_moulins.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/Audrey_Moulins",
          "name": "Audrey_Moulins"
        }
      ]
    },
    "children": [
      "Je suis lead QA chez leboncoin depuis maintenant 1 an et QA Analyst depuis presque 3 ans. Issue de la reconversion, j'étais auparavant chargée de Communication et j'ai fais mes études dans le marketing et la Stratégie Digitale J'aime le fromage, la bonne bouffe (notamment découvrir de nouvelles saveurs), faire du karaoké et passer du temps avec mon fils de 3 ans et demi (en ayant le même regard innocent sur la vie)"
    ]
  },
  "benjamin_legrand": {
    "attributes": {
      "key": "benjamin_legrand",
      "name": "Benjamin Legrand",
      "company": "Groupe Onepoint",
      "city": "Nantes, France",
      "photoURL": "speakers/benjamin_legrand.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/benjilegnard",
          "name": "benjilegnard"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/benjilegnard",
          "name": "benjilegnard"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Tombé dans la marmite du web étant petit en regardant sous le capot ce que frontpage ou dreamweaver générait, c'est tout naturellement que Benjamin fit depuis 2008 du développement web son métier."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "D'abord full-stack, puis en fait full fronteux, parfois défricheur de frameworks javascript bizarres, amoureux du Typescript, fanboy d'Angular. touche à tout musicien."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Intervenu sur plein de projets variés, de l'e-commerce à l'industrie, en passant par les telecoms ."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Aujourd'hui Tech Lead front / Architecte Logiciel chez Onepoint"
        ]
      }
    ]
  },
  "benoit_masson": {
    "attributes": {
      "key": "benoit_masson",
      "name": "Benoît Masson",
      "company": "OVHcloud",
      "city": "Rennes, France",
      "photoURL": "speakers/benoit_masson.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/benoitmasson",
          "name": "benoitmasson"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Tombé dans la potion quand j'étais petit, je m'intéresse depuis toujours à l'informatique : d'abord joueur, bidouilleur et développeur sur calculatrice, puis professionnellement en tant que chercheur et formateur, et finalement de retour au développement web full-stack depuis quelques années."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Passionné par les langages modernes, de bas niveau (Go, Rust) ou fonctionnels (Caml, Elm) permettant par leur conception de limiter les risques d'erreur humaine, je m'implique dans les communautés locales pour partager mes expériences et améliorer mes pratiques."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Actuellement Team Leader dans l'équipe Noms de Domaines chez OVHcloud."
        ]
      }
    ]
  },
  "cedric_gatay": {
    "attributes": {
      "key": "cedric_gatay",
      "name": "Cedric Gatay",
      "company": "Code-Troopers",
      "city": "Tours, France",
      "photoURL": "speakers/cedric_gatay.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/CedricGatay",
          "name": "CedricGatay"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/Cedric_Gatay",
          "name": "Cedric_Gatay"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Co-fondateur de Code-Troopers : studio de développement basé à Tours."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Co-lead du GDG Tours."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Initiateur de l'OpenDeviceLab de Tours."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Team member Touraine.tech : conférence autour du monde du développement en Touraine."
        ]
      }
    ]
  },
  "celine_louvet": {
    "attributes": {
      "key": "celine_louvet",
      "name": "Céline Louvet",
      "company": "Shine",
      "city": "Lyon, France",
      "photoURL": "speakers/celine_louvet.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/celinelouvet",
          "name": "celinelouvet"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/celine_louvet",
          "name": "celine_louvet"
        }
      ]
    },
    "children": [
      "Développeuse backend passionnée depuis 17 ans, actuellement lead developer chez Shine, j'aime la recherche de stabilité et de qualité d'une application. Je me suis spécialisée sur les architectures cloud."
    ]
  },
  "christophe_jolivet": {
    "attributes": {
      "key": "christophe_jolivet",
      "name": "Christophe Jollivet",
      "company": "Apside",
      "city": "Tours, France",
      "photoURL": "speakers/christophe_jolivet.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/jollivetc",
          "name": "jollivetc"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/jollivetc",
          "name": "jollivetc"
        }
      ]
    },
    "children": [
      "Agitateur technique chez Apside, Christophe prêche les bonnes pratiques sur divers projets informatiques et universités en région tourangelle. Reconverti à l’informatique il y a 17 ans suite à un doctorat de neurobiologie, il contribue activement dans les communautés Java en ayant été co-responsable de la rubrique Java du site developpez.com mais aussi en participant à des conférences et en ayant fondé le Tours JUG en 2008 et co-fondé TouraineTech en 2017"
    ]
  },
  "cyril_hue": {
    "attributes": {
      "key": "cyril_hue",
      "name": "Cyril Hue",
      "company": "Kanoma",
      "city": "Nantes, France",
      "photoURL": "speakers/cyril_hue.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/Horsty80",
          "name": "Horsty80"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/cy_hue",
          "name": "cy_hue"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Développeur Front, 30ans, sur Nantes depuis 2018."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Amoureux de rétrogaming, comics, et autres collections."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "En visioconférence, je suis fier de pouvoir montrer ma collection de Mégazord à mes contacts :p"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Organisateur du Meetup Design System Nantes"
        ]
      }
    ]
  },
  "david_pilato": {
    "attributes": {
      "key": "david_pilato",
      "name": "David Pilato",
      "company": "elastic",
      "city": "Cergy, France",
      "photoURL": "speakers/david_pilato.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/dadoonet",
          "name": "dadoonet"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/dadoonet",
          "name": "dadoonet"
        }
      ]
    },
    "children": [
      "Depuis 2013, David Pilato est développeur et évangéliste chez elastic.co, après avoir passé les deux années précédentes à promouvoir le projet open-source Elasticsearch. Il en anime la communauté française et organise des BBLs au sein des entreprises."
    ]
  },
  "elaine_dias_batista": {
    "attributes": {
      "key": "elaine_dias_batista",
      "name": "Elaine Dias Batista",
      "company": "SFEIR",
      "city": "Paris, France",
      "photoURL": "speakers/elaine_dias_batista.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/elainedb",
          "name": "xx"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/elainedbatista",
          "name": null
        }
      ]
    },
    "children": [
      "Elaine has been working with mobile apps development for the past 6 years. Since the launch of the Google Assistant, she has been following the developments around that area. She truly believes that interacting with technology using natural language will define the future of computing. Born and raised in Brazil, she's been living in France since 2004 and loves everything multicultural. She's a GDE for the Google Assistant."
    ]
  },
  "florian_roulet": {
    "attributes": {
      "key": "florian_roulet",
      "name": "Florian Roulet",
      "company": "Orthomatique",
      "city": "Saint-Branchs, France",
      "photoURL": "speakers/florian_roulet.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/florianroulet",
          "name": "florianroulet"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/florianroulet",
          "name": "florianroulet"
        }
      ]
    },
    "children": [
      "La journée, je code dans une TPE qui édite un logiciel d'aide à la création de compte rendu de bilan orthophonique. Le soir, Je m'occupe de mes enfants et fais du badminton. Le week-end, je bricole, fais de l'impression 3D, monte des legos. Et entre tout ça, je m'occupe de mon troisième bébé, TouraineTech."
    ]
  },
  "francois_xavier_lair": {
    "attributes": {
      "key": "francois_xavier_lair",
      "name": "François-Xavier Lair",
      "company": "onepoint",
      "city": "Nantes, France",
      "photoURL": "speakers/francois_xavier_lair.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/lair_net",
          "name": "lair_net"
        }
      ]
    },
    "children": [
      "Après plus d'une dizaine d'année de Devfront j'interviens à présent sur les projets en tant qu'expert accessibilité et qualité. Expert BBQ (Bike, Beer and QualityWeb), quand je ne bosse pas sur la qualité Web j'adore bricoler des vélos ou brasser de la bière."
    ]
  },
  "glenn_feunteun": {
    "attributes": {
      "key": "glenn_feunteun",
      "name": "Glenn Feunteun",
      "company": "Zenika",
      "photoURL": "speakers/glenn_feunteun.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/gfeun",
          "name": "gfeun"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/g_feun",
          "name": "g_feun"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Glenn est un Linuxien convaincu 🐧."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Il a travaillé 7 ans chez Orange Labs en recherche sur les Content Delivery Network, en lien avec les clouds distribués ou la 5G."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Il a rejoint Zenika en 2020 ou il intervient en tant que consultant dans le vaste domaine du DevOps, avec des affinités particulières sur l'optimisation des environnements de dev, la mise en place et l'optimisation de chaînes d’intégration et déploiement continues et la jointure avec les infrastructures, cloud ou bare metal. Il est monté à bord du train de la conteneurisation en 2015 en démarrant avec Lxc et Rkt, pour ensuite passer à Docker et Kubernetes."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Il est certifié sur Kubernetes et Google Cloud, et formateur sur Kubernetes et Gitlab CI."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Coté dev ses langages de préférence sont Go et Python."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Chaque année, il endosse la casquette d'enseignant vacataire à l'IUT de Brest ou il forme les étudiants à la programmation de microcontrôleurs."
        ]
      }
    ]
  },
  "gregory_bevan": {
    "attributes": {
      "key": "gregory_bevan",
      "name": "Grégory Bévan",
      "company": "Zenika",
      "city": "Nantes, France",
      "photoURL": "speakers/gregory_bevan.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/Gr3gory%20B3van",
          "name": "Gr3gory B3van"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/gr3gory_b3van",
          "name": "gr3gory_b3van"
        }
      ]
    },
    "children": [
      "Développeur passionné depuis 15 ans, Grégory est aujourd'hui consultant/formateur chez Zenika Nantes pour mettre à profit son expérience du monde de l'édition de logiciels Web. Architecte et développeur backend Java et NodeJS, il est aussi aguerri à tous les aspects de la construction logicielle et positionne la culture craftsmanship au coeur de la production de logiciels de qualité. Sa quête d'apprentissage l'amène à explorer les mondes du front avec Angular et VueJS, des micro-services et de langages modernes tels que Kotlin."
    ]
  },
  "guillaume_membre": {
    "attributes": {
      "key": "guillaume_membre",
      "name": "Guillaume Membré",
      "company": "Zenika",
      "city": "Nantes, France",
      "photoURL": "speakers/guillaume_membre.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/gmembre-zenika",
          "name": "xx"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/GuillaumeMembre",
          "name": null
        }
      ]
    },
    "children": [
      "Geek à toute heure, je travaille principalement sur des sujets de migration d’architecture sur le cloud d'AWS et également sur des problématiques d'intégration et de déploiement continu. Je partage son expérience pour faciliter la mise en place de démarche devops chez différents acteurs. J'adore bidouiller des RaspberryPi ou Arduino pour créer des choses inutiles donc indispensables ! Lorsque le temps le permet, je décris mes aventures sur mon ",
      {
        "tag": "a",
        "props": {
          "href": "https://www.mydiy.dev/"
        },
        "children": [
          "site web"
        ]
      },
      "."
    ]
  },
  "gwendal_leclerc": {
    "attributes": {
      "key": "gwendal_leclerc",
      "name": "Gwendal Leclerc",
      "company": "OVHcloud",
      "city": "Chasné-sur-Illet, France",
      "photoURL": "speakers/gwendal_leclerc.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/gwleclerc",
          "name": "gwleclerc"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/skillo1989",
          "name": "skillo1989"
        }
      ]
    },
    "children": []
  },
  "herve_boisgontier": {
    "attributes": {
      "key": "herve_boisgontier",
      "name": "Hervé Boisgontier",
      "company": "ENI École Informatique",
      "city": "Saint-Herblain, France",
      "photoURL": "speakers/herve_boisgontier.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/hboisgontier",
          "name": "hboisgontier"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Formateur en développement informatique au sein d'ENI École Informatique à Nantes."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Depuis plus de 10 ans, avec différents langages, je forme à la programmation et l’art du développement informatique. Depuis longtemps, je m’intéresse au développement durable et plus récemment comment le mettre en pratique dans notre métier d’informaticien ou d'informaticienne. Je me suis donc intéressé à ces thématiques et pour parfaire mes connaissances, j'ai suivi les formations \"Écoconception de services numériques\" par GreenIT.fr et \"Développer des sites web accessibles\" par Access42 et obtenu les certifications associées. J’ai écrit le livre \"Green IT et Accessibilité\" aux Éditions ENI afin de partager mes connaissances sur ces sujets et d’aider à la création de sites web plus numériquement responsables."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Pour plus d'informations : ",
          {
            "tag": "a",
            "props": {
              "href": "https://www.linkedin.com/in/boisgontier/"
            },
            "children": [
              "https://www.linkedin.com/in/boisgontier/"
            ]
          }
        ]
      }
    ]
  },
  "jean_francois_greffier": {
    "attributes": {
      "key": "jean_francois_greffier",
      "name": "Jean-François Greffier",
      "company": "Conserto",
      "city": "Rennes, France",
      "photoURL": "speakers/jean_francois_greffier.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/jfgreffier",
          "name": "jfgreffier"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/jfgreffier",
          "name": "jfgreffier"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Front-end Tech Lead. J'accompagne des équipes vers plus d'agilité et d'excellence technique."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je suis intéressé par l'agilité, le Software Craft et les tests. Ambassadeur Playwright"
        ]
      }
    ]
  },
  "jean_phi_baconnais": {
    "attributes": {
      "key": "jean_phi_baconnais",
      "name": "Jean-Phi Baconnais",
      "company": "Zenika",
      "city": "Nantes, France",
      "photoURL": "speakers/jean_phi_baconnais.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/jeanphibaconnais",
          "name": "jeanphibaconnais"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/JPhi_Baconnais",
          "name": "JPhi_Baconnais"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          {
            "tag": "strong",
            "children": [
              "Développeur chez Zenika Nantes"
            ]
          }
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Plongé dans le développement avec l'éco-système Java, curieux de nature, j'aime découvrir et expérimenter de nouvelles technos back end ou front end et les partager autour de moi."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "GitLab Heroes 🦊 - Community Hero Gitpod 🍑 - Co orga des Human Talks Nantes"
        ]
      }
    ]
  },
  "jordane_grenat": {
    "attributes": {
      "key": "jordane_grenat",
      "name": "Jordane Grenat",
      "company": "Comet Meetings",
      "city": "Paris, France",
      "photoURL": "speakers/jordane_grenat.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/jgrenat",
          "name": "jgrenat"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/JoGrenat",
          "name": "JoGrenat"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Jordane est développeur chez Comet Meetings et adore les découvertes et ce qui sort de l'ordinaire. Ce qui est souvent incompatible avec le pragmatisme technologique nécessaire sur les projets clients."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Il assouvit alors sa passion à coup de projets perso jamais finis et en écumant les conférences en compagnie des autres développeurs férus de nouveautés. En vrac : Elm, F#, nouveau-framework-à-la-mode-JS, ..."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Il passe le reste de son temps libre à refuser les cookies sur les sites web qu'il consulte."
        ]
      }
    ]
  },
  "julien_jimenez": {
    "attributes": {
      "key": "julien_jimenez",
      "name": "Julien Jimenez",
      "company": "Worldline",
      "city": "Blois, France",
      "photoURL": "speakers/julien_jimenez.jpg"
    },
    "children": []
  },
  "kevin_dunglas": {
    "attributes": {
      "key": "kevin_dunglas",
      "name": "Kévin Dunglas",
      "company": "Les-Tilleuls.coop",
      "city": "Lille, France",
      "photoURL": "speakers/kevin_dunglas.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/dunglas",
          "name": "dunglas"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/dunglas",
          "name": "dunglas"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Kévin est le créateur du framework API Platform (un outil populaire pour développer des projets API-first) ainsi que de Mercure (une solution de publication en temps réel), de Vulcain (un style d'API dirigées par les clients) et de FrankenPHP (un serveur d'application performant et moderne pour PHP)."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Il est également membre de la Core Team du framework Symfony (l'un des frameworks web parmi les plus utilisés au monde), contributeur aux langages de programmation Go et PHP et il a cofondé la société société coopérative Les-Tilleuls.coop (entreprise entièrement possédée par ses salarié·es et où les décisions sont prises sur le principe 1 personne = 1 voix)."
        ]
      }
    ]
  },
  "kevin_jean": {
    "attributes": {
      "key": "kevin_jean",
      "name": "Kevin Jean"
    },
    "children": []
  },
  "laurie_coquillat": {
    "attributes": {
      "key": "laurie_coquillat",
      "name": "Laurie Coquillat",
      "company": "Lunatech",
      "city": "Chessy, France",
      "photoURL": "speakers/laurie_coquillat.jpg"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Dans le domaine professionnel on peut dire que j'ai eu deux vies. Après des études dans le domaine littéraire, passionnée par la transmission et le contact humain, j'ai passé plus de huit ans dans le domaine du tourisme, en tant que responsable animation, pédagogie et expérience client. Mon métier ? Créer des contenus à la fois ludiques et pédagogiques à destination de familles et d'enfants de tous âges, afin de découvrir la biodiversité marine et l'importance de sa préservation. J'avais aussi en charge de former et accompagner les équipes de conférenciers et d'animateurs, et améliorer chaque jour la qualité et l'offre de service en fonction des retours client."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Sur mon temps libre, j'ai très tôt commencé à bidouiller des sites Internet, aller voir sous le capot comment fonctionnaient les forums... Si bien qu'un jour j'ai décidé de sauter le pas et de faire une reconversion de Concepteur Développeur Informatique."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Après l'obtention de mon diplôme en 2018, je me suis définitivement lancée en tant que développeuse Java (puis Scala) et très vite je suis tombée dans l'Agilité. Mes expériences passées en terme d'organisation et d'accompagnement d'équipe ont très vite été mis à contribution dans les projets qui ont jalonnés depuis mon parcours de développeuse. Scrum master puis Product Owner certifiée, j'ai pu mettre en pratique la théorie pour des clients français et internationaux. Je suis depuis janvier 2021 \"Agile and Product Delivery Lead\" au sein de Lunatech France. Je me consacre aujourd'hui à gagner en expérience dans le domaine de l'Agilité et du Scrum plus particulièrement."
        ]
      }
    ]
  },
  "maha_alsayasneh": {
    "attributes": {
      "key": "maha_alsayasneh",
      "name": "Maha ALSAYASNEH",
      "company": "Elastic",
      "city": "Grenoble, France",
      "photoURL": "speakers/maha_alsayasneh.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/MahaALSayasneh",
          "name": "MahaALSayasneh"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "I am a computer scientist with more than 10 years of experience in various fields ranging from web development to big data, including cloud computing and artificial intelligence. My experience combines technical and analytical aptitudes with problem-solving strengths to drive projects to on-time and high-quality completion."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "I also have a Ph.D. in optimizing the performance of multi-tier distributed systems."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Currently, I am an Engineering Manager at Elastic. We are the leading platform for search-powered solutions."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "I love communicating and sharing knowledge with people ;) ( I also love sports and mountains ;) )"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "My motto in life is LIVE + LOVE + LAUGH :)"
        ]
      }
    ]
  },
  "marie_laure_momplot": {
    "attributes": {
      "key": "marie_laure_momplot",
      "name": "Marie-Laure Momplot",
      "company": "Michelin",
      "city": "Clermont-Ferrand, France",
      "photoURL": "speakers/marie_laure_momplot.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/MaLainDa",
          "name": "MaLainDa"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Je suis Marie-Laure Momplot 👱‍♀️."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je travaille pour Michelin depuis fin 2009."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Analyste-développeuse de par mes études j'ai commencé par du dev java, un peu devops, de l'analyse fonctionnelle, du scrum master et du chef de projet! Je suis un peu un couteau suisse finalement 😏 ! D'ailleurs je me suis relancée dans l'aventure du développement il y a deux ans, je fais du kafka mais surtout du kafka streams, du kubernetes tanzu :)"
        ]
      }
    ]
  },
  "marion_valentin": {
    "attributes": {
      "key": "marion_valentin",
      "name": "Marion Valentin",
      "company": "BAM",
      "city": "Nantes, France",
      "photoURL": "speakers/marion_valentin.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/marionnousvalentin",
          "name": "marionnousvalentin"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/MarionBarr2",
          "name": "MarionBarr2"
        }
      ]
    },
    "children": []
  },
  "mathieu_busquet": {
    "attributes": {
      "key": "mathieu_busquet",
      "name": "Mathieu Busquet",
      "company": "OVHcloud",
      "city": "Nantes, France",
      "photoURL": "speakers/mathieu_busquet.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/MathieuBsqt",
          "name": "MathieuBsqt"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/mat_bsqt",
          "name": "mat_bsqt"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Passionné par les technologies ainsi que par la résolution de problèmes, j'ai décidé d'effectuer une école d'ingénieurs ancrée dans le monde numérique. Cette formation m'a permis de développer une solide compréhension des concepts informatiques et de maîtriser plusieurs langages. Actuellement en dernière année, je me spécialise dans le domaine de l'Intelligence Artificielle (IA) et de la Data Science."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Afin de renforcer mes compétences professionnelles dans ces domaines, j'ai décidé d'effectuer cette dernière année en alternance chez OVHcloud. Cette expérience m'offre l'opportunité d'appliquer les connaissances théoriques acquises durant ma formation à des fins concrètes."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "L'IA est un domaine en constante évolution, à la fois complexe et fascinant, qui me permet de découvrir, de comprendre des concepts, de faire parler ma créativité, mais aussi de partager et d'expliquer mes connaissances!"
        ]
      }
    ]
  },
  "mathieu_passenaud": {
    "attributes": {
      "key": "mathieu_passenaud",
      "name": "Mathieu Passenaud",
      "company": "please-open.it",
      "city": "Toulouse, France",
      "photoURL": "speakers/mathieu_passenaud.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/mathieupassenaud",
          "name": "mathieupassenaud"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/mathieupassenau",
          "name": "mathieupassenau"
        }
      ]
    },
    "children": [
      "Après 8 ans en tant que DevOps dans les univers du Cloud et de l'IOT, j'ai découvert la nécessité absolue de bien fait l'authentification sur les applications. Depuis 4 ans, j'ai décidé de ne faire que ça avec please-open.it. N'oublions jamais que nous faisons des logiciels pour des utilisateurs finaux, seul l'usage prime."
    ]
  },
  "maxime_deroullers": {
    "attributes": {
      "key": "maxime_deroullers",
      "name": "Maxime Deroullers",
      "company": "HoppR",
      "city": "Lyon, France",
      "photoURL": "speakers/maxime_deroullers.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/mderoullers",
          "name": "mderoullers"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/mderoullers",
          "name": "mderoullers"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Maxime Deroullers est un développeur passionné de 8 ans d’expérience. Très curieux par nature, il s’est intéressé rapidement au monde de l’Ops… Avant de se laisser séduire complétement par la culture DevOps."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Ce dont il est le plus fier, c'est de s'impliquer dans les communautés tech en France. Il a créé 2 associations, Cloud Nord et Cloud Alpes, pour permettre le partage de connaissance lors de conférences organisées sur Lille et Lyon."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Il s'est également lancé dans l'entrepreneuriat en s'associant à HoppR."
        ]
      }
    ]
  },
  "noemie_delrue": {
    "attributes": {
      "key": "noemie_delrue",
      "name": "Noémie Delrue",
      "city": "Nantes, France",
      "photoURL": "speakers/noemie_delrue.jpg"
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Salut c'est Noémie !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Nantaise pure petit beurre et bretonne de cœur, je travaille dans l'informatique depuis bientôt 7 ans."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Curieuse, pleine d'imagination, je fais partie de ceux qui adorent travailler en société de service et je n'ai d'ailleurs toujours pas changé d'entreprise depuis mon stage de fin d'études (il parait que ça se fait rare)."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Mon univers à moi ? C'est avant tout du Microsoft. SharePoint d'abord, Microsoft 365 maintenant."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Entre cas d'usage spécifiques, contraintes techniques ou de gouvernance, j'ai le sentiment que chacun de mes projets n'est jamais qu'un nouveau puzzle à résoudre. Certains diront que ce n'est pas du code, moi c'est ce qui me plait, c'est le plus important non ?"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "En dehors ça, je suis aussi une grande bricoleuse. Je rénove ma maison de fond en comble. Ce qui n'est toutefois qu'un nouveau casse-tête à résoudre quand on y regarde d'un peu plus près."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Laissez-vous tenter par les histoires que j'ai à raconter =D"
        ]
      }
    ]
  },
  "olivier_leplus": {
    "attributes": {
      "key": "olivier_leplus",
      "name": "Olivier Leplus",
      "company": "AWS",
      "city": "Paris, France",
      "photoURL": "speakers/olivier_leplus.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/tagazok",
          "name": "tagazok"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/olivierleplus",
          "name": "olivierleplus"
        }
      ]
    },
    "children": [
      "Developer Advocate at AWS and Google Developer Expert in Web Technologies. I love to share knowledge (and love) among developers and people in general."
    ]
  },
  "olivier_poncet": {
    "attributes": {
      "key": "olivier_poncet",
      "name": "Olivier PONCET",
      "company": "HAWKSWELL",
      "city": "Massy, France",
      "photoURL": "speakers/olivier_poncet.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/@ponceto",
          "name": "ponceto"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/ponceto91",
          "name": "ponceto91"
        }
      ]
    },
    "children": [
      "Geek, ex-nerd repenti, je code, je teste, je bricole, je soude et parfois fait sauter les plombs. CTO et spécialiste du magiciel, je suis aussi libriste dans l'âme et très impliqué dans le mouvement des logiciels libres."
    ]
  },
  "olivier_thierry": {
    "attributes": {
      "key": "olivier_thierry",
      "name": "Olivier THIERRY",
      "company": "ASI",
      "city": "Nantes, France",
      "photoURL": "speakers/olivier_thierry.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/chawax",
          "name": "chawax"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/OThierryBzh",
          "name": "OThierryBzh"
        }
      ]
    },
    "children": [
      "Je suis expert technique chez ASI et compte derrière moi près de 25 ans de développement. Après avoir commencé en Visual Basic, fait un peu de PHP et beaucoup de Java, je me suis tourné vers l'écosystème Javascript depuis une dizaine d'années. J'interviens sur des projets d'applications mobiles (Ionic, React Native), d'applications et sites web (React JS, Gatsby, Next.js) et de plateformes API (Node.js, NestJS). J'ai une appétence particulière pour l'écosystème React. En tant qu'expert technique chez ASI, mon rôle est d'imaginer les solutions techniques pour résoudre les problèmes de nos clients, d'accompagner les développeurs pendant la réalisation des projets et d'assurer la qualité de nos réalisations. Je contribue également à l'animation de notre communauté technique. Ce qui me motive chaque jour : travailler en équipe et voir chacun d'entre nous évoluer et progresser, techniquement mais aussi humainement !"
    ]
  },
  "patrice_de_saint_steban": {
    "attributes": {
      "key": "patrice_de_saint_steban",
      "name": "Patrice De Saint Steban",
      "company": "Zenika",
      "city": "Nantes, France",
      "photoURL": "speakers/patrice_de_saint_steban.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/patou",
          "name": "patou"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/patoudss",
          "name": "patoudss"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Depuis plus de 10 ans je me passionne pour le développement d'applications WEB et Mobile, en touchant à toutes les couches du Front au Back jusqu'à son déploiement sur le Cloud."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "J'ai travaillé sur des technologies très différentes, du PHP au JAVA et JAVASCRIPT, du GWT à Angular et React, de Google App Engine à NodeJS. Je m'intéresse maintenant à Flutter et Svelte."
        ]
      }
    ]
  },
  "paul_pinault": {
    "attributes": {
      "key": "paul_pinault",
      "name": "Paul Pinault",
      "company": "Braincube",
      "city": "Clermont-Ferrand, France",
      "photoURL": "speakers/paul_pinault.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/disk91",
          "name": "disk91"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/disk_91",
          "name": "disk_91"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          {
            "tag": "strong",
            "children": [
              "Paul le jour"
            ]
          },
          "\nJ'ai 45 ans, 3 enfants et 3 jobs, dont celui de responsable de la stratégie produit sur la marché IIoT pour la société Braincube qui m'occupe à plein temps, ca me laisse encore un peu de temps pour animer des communautés et partager mes connaissances et expériences."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          {
            "tag": "strong",
            "children": [
              "Disk91 la nuit"
            ]
          },
          "\nPassionné, techos plutôt reconnu dans les eco-systèmes IoT et Crypto-IoT , je blog depuis l'an 2000 environ , youtubeur plus récemment, community manager dans l'Internet de Objets depuis quelques années sur différentes technos. Ces aventures mon conduites à une forte implication dans des technos comme Sigfox, LoRaWan (TheThingsNetwork, Helium), à la création de multiples produits et services commerciaux et open-source dans ces domaines. Je code en C, des fois en assembleur pour l'embarqué, mais le gros de mes dev est en Java, Go, JS pour les backends et frontend de service, bash, docker.. pour déployer tout ca."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          {
            "tag": "strong",
            "children": [
              "M. Pinault durant les RTT"
            ]
          },
          "\nPartager mes connaissances et expériences est un de mes moteurs, depuis 22 ans j'enseigne sur différentes universités, écoles d'ingénieurs, sciences Po, sur Clermont-Ferrand, Paris, Grenoble. Dans des matières principalement autour de l'Internet des Objets mais aussi de l'architecture ou l'art du pitch appliqué à la technologie."
        ]
      }
    ]
  },
  "paul_roye": {
    "attributes": {
      "key": "paul_roye",
      "name": "Paul ROYE",
      "company": "SII",
      "city": "Nantes, France",
      "photoURL": "speakers/paul_roye.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/paul-roye",
          "name": "paul-roye"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/Paulo_Del_Rey",
          "name": "Paulo_Del_Rey"
        }
      ]
    },
    "children": [
      "Tech Crafter and DIY enthusiast. Also lead tech at SII."
    ]
  },
  "robin_caroff": {
    "attributes": {
      "key": "robin_caroff",
      "name": "Robin Caroff",
      "company": "Resonantes",
      "city": "Nantes, France",
      "photoURL": "speakers/robin_caroff.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/RobinCaroff",
          "name": "RobinCaroff"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/robin.caroff",
          "name": "robin.caroff"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Technical Lead at Resonantes (",
          {
            "tag": "a",
            "props": {
              "href": "http://association.resonantes.fr/"
            },
            "children": [
              "http://association.resonantes.fr/"
            ]
          },
          ") where I am mostly developing the App-Elles Android and iOS app (",
          {
            "tag": "a",
            "props": {
              "href": "https://app-elles.fr/"
            },
            "children": [
              "https://app-elles.fr/"
            ]
          },
          ")."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Mobile developer since 2011, I am also Co-Founder and Organizer of the GDG Nantes Android (",
          {
            "tag": "a",
            "props": {
              "href": "https://www.meetup.com/fr-FR/gdg_nantes_android/"
            },
            "children": [
              "https://www.meetup.com/fr-FR/gdg_nantes_android/"
            ]
          },
          ") and the FRAUG (French Android User Group - ",
          {
            "tag": "a",
            "props": {
              "href": "https://www.twitch.tv/frenchandroidusergroup"
            },
            "children": [
              "https://www.twitch.tv/frenchandroidusergroup"
            ]
          },
          ")."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Technology enthusiast, highly convinced that technology and mobile devices can improve productivity for small as well as for big companies."
        ]
      }
    ]
  },
  "sahbi_ktifa": {
    "attributes": {
      "key": "sahbi_ktifa",
      "name": "Sahbi KTIFA",
      "company": "Malt",
      "city": "Thoiry, France",
      "photoURL": "speakers/sahbi_ktifa.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/sahbi-ktifa",
          "name": "sahbi-ktifa"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/SahbiKtifa",
          "name": "SahbiKtifa"
        }
      ]
    },
    "children": [
      "Staff Software Engineer travaillant chez Malt, j'adore découvrir de nouvelles choses, que ce soit des nouvelles technos ou bien de nouveaux pays ! Lead VueJS dans la team JHipster. Heureux papa de deux enfants, j'adore le sport, les jeux vidéos et bien manger !"
    ]
  },
  "sebastien_viale": {
    "attributes": {
      "key": "sebastien_viale",
      "name": "Sébastien Viale",
      "photoURL": "speakers/sebastien_viale.png"
    },
    "children": [
      "Après l'obtention d’un diplôme en Mécanique des fluides il y a 20 ans, je me suis rapidement orienté vers le développement Java.\nTrès curieux des nouvelles technologies, je me suis spécialisé depuis 6 ans dans l’écosystème Apache Kafka et l’event driven architecture."
    ]
  },
  "shirley_almosni_chiche": {
    "attributes": {
      "key": "shirley_almosni_chiche",
      "name": "Shirley Almosni Chiche",
      "company": "BUILD RH",
      "photoURL": "speakers/shirley_almosni_chiche.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/ShirleyAlmCh",
          "name": "ShirleyAlmCh"
        }
      ]
    },
    "children": [
      "Je suis recruteuse IT depuis 10 ans, agent de carrière depuis 5 ans et maman de deux enfants. J’adore aider les entreprises dans leurs méthodes de recrutement, accompagner les individus dans leur projet de carrière, faire bouger les lignes et provoquer de l’impact (même minime), tout cela en mettant une pincée d’humour dans mon quotidien !"
    ]
  },
  "stephane_philippart": {
    "attributes": {
      "key": "stephane_philippart",
      "name": "Stéphane Philippart",
      "company": "OVHcloud",
      "city": "Tours, France",
      "photoURL": "speakers/stephane_philippart.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/philippart-s",
          "name": "philippart-s"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/wildagsx",
          "name": "wildagsx"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Développeur un jour, développeur toujours !"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Développeur Java depuis de nombreuses d'années, j'ai la joie de connaître le JDK 1.1, JEE, Struts, ... et maintenant Spring, Quarkus, Angular, Groovy, Golang, ..."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Durant plus d'une dizaine d'années j'ai été Architecte Logiciel, métier qui m'a permis de me confronter à de nombreuses problématiques inhérentes aux systèmes d'information toujours complexes dans les grands groupes."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "J'ai eu aussi d'autres vies, notamment dans l'automatisation et la livraison avec la mise place de chaînes de CI/CD basées sur les pipelines as code de Jenkins."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Aimant particulièrement le partage et les relations avec les développeurs je suis devenu DevRel au sein d'OVHcloud. Cette nouvelle aventure me permet de continuer à être au milieu de technologies que j'affectionne comme Kubernetes par exemple mais aussi de continuer à apprendre et découvrir énormément de nouvelles choses. J'ai, notamment, découvert le monde passionnant de l'intelligence artificielle et plus particulièrement du machine learning."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Tout en gardant à l'esprit une de mes principales motivation en tant que DevRel : rendre les développeuses et développeurs heureux."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Toujours dans le partage, je suis le co-créateur du Meetup TADx à Tours, permettant la découverte et partage autour de différents sujets de la tech."
        ]
      }
    ]
  },
  "sylvain_coudert": {
    "attributes": {
      "key": "sylvain_coudert",
      "name": "Sylvain Coudert",
      "company": "Freelance",
      "photoURL": "speakers/sylvain_coudert.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/sylv_coud",
          "name": "sylv_coud"
        }
      ]
    },
    "children": [
      "Dev .NET depuis 2008, Freelance depuis 2018, Crafter devant l'éternel et debugger de l'infini! J'aime apprendre, transmettre et découvrir. Chanteur rockeur intermittent et papa à temps plein, j'aime également prendre le temps de regarder le vent agiter les feuilles d'un arbre."
    ]
  },
  "sylvain_gougouzian": {
    "attributes": {
      "key": "sylvain_gougouzian",
      "name": "Sylvain Gougouzian",
      "company": "Zenika",
      "city": "Feurs, France",
      "photoURL": "speakers/sylvain_gougouzian.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/gouz",
          "name": "gouz"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/gouz",
          "name": "gouz"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Senior Dev @ Zenika depuis Septembre 2022"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Plus d'infos sur ",
          {
            "tag": "a",
            "props": {
              "href": "https://sylvain.gougouzian.fr"
            },
            "children": [
              "https://sylvain.gougouzian.fr"
            ]
          },
          " et tous mes liens sociaux sont sur ",
          {
            "tag": "a",
            "props": {
              "href": "https://gouz.dev"
            },
            "children": [
              "https://gouz.dev"
            ]
          }
        ]
      }
    ]
  },
  "virginie_casavecchia": {
    "attributes": {
      "key": "virginie_casavecchia",
      "name": "Virginie CASAVECCHIA",
      "company": "Actoll",
      "photoURL": "speakers/virginie_casavecchia.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/Fairy-wen",
          "name": "Fairy-wen"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/La_Fee_Dragee",
          "name": "La_Fee_Dragee"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Diplômée en 2010 d'un Master de cryptologie et sécurité informatique, je travaille depuis 2011 au sein de la société Actoll proposant des solutions de paiement par carte bancaire sur autoroute, dans les transports en commun ou encore pour du don, ainsi que des solutions de billettique (~gestion de titres de transports) pour les réseaux de transport en commun de diverses tailles.  "
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Initialement développeuse, je suis ensuite passée côté intégration et qualification des solutions de paiement.  "
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je suis aujourd'hui à la fois responsable qualification, intégratrice, formatrice en interne ou pour les clients, support client, rédactrice de documentations : en somme baby-DevRel 🦄🥑.  "
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Parallèlement, je suis membre d'un groupe de musique intitulé Les Marmottes depuis 2011. Nous faisons principalement des reprises instrumentales de morceaux de métal, bandes originales de films/séries/jeux vidéos.  "
        ]
      }
    ]
  },
  "virginie_ferey": {
    "attributes": {
      "key": "virginie_ferey",
      "name": "Virginie Ferey",
      "company": "ENSA Normandie",
      "city": "Rouen, France",
      "photoURL": "speakers/virginie_ferey.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/pansybloom",
          "name": "pansybloom"
        }
      ]
    },
    "children": [
      {
        "tag": "h1",
        "props": {
          "id": "quelques-mots-pour-me-situer-un-peu"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#quelques-mots-pour-me-situer-un-peu"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "Quelques mots pour me situer un peu"
        ]
      },
      "\n",
      {
        "tag": "h2",
        "props": {
          "id": "côté-perso"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#côté-perso"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "Côté perso"
        ]
      },
      "\n",
      {
        "tag": "h3",
        "props": {
          "id": "je-fais"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#je-fais"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "Je fais"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "Je traîne mes guêtres toutes les semaines dans un HackerSpace, où je retrouve une bande de copains dont les centres d'intérêts sont très variés. Un ami a commencé à me parler d'algorithmes de compression, je vais creuser le sujet pour moi-même et probablement me faire une note de synthèse qui pourrait se transformer en présentation."
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "J'aime que les choses fonctionnent : je m'implique pour ça, en étant bénévole là où ça me semble pertinent selon mes disponibilités mentales et temporelles. En ce moment c'est présidence d'une AMAP, participation au CA d'une crèche associative, et une proposition de participation logistique à DevoxxFR"
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "h3",
        "props": {
          "id": "jaime"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#jaime"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "J'aime"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "Les Lego, les jeux de construction en général, les puzzles, les jeux de société et les jeux de rôles."
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Voler (en parapente, par exemple, ou bien par procuration en faisant voler un cerf-volant), et faire du vélo (dans les descentes qui vont vite, c'est un peu comme voler :-) !)"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Découvrir : je suis curieuse, dès qu'une opportunité s'offre à moi j'essaie de la saisir : participer à un jeu de rôle grandeur nature, aller voir un match de foot, de hockey sur glace, un concert de Métal, faire une présentation lors d'une conférence, etc. ;-)"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "L'humour, les jeux de mots pourris. Je pratique l'auto-dérision, c'est essentiel ! Par exemple, là, je ne sais pas quoi renseigner côté perso qui ne soit pas encore plus cliché que ce qui précède, donc je vais m'arrêter là."
            ]
          },
          "\n"
        ]
      },
      "\n",
      {
        "tag": "h2",
        "props": {
          "id": "côté-pro"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#côté-pro"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "Côté pro"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Concernant mes choix d'orientation professionnelle, dès le départ je ne pouvais concéder une chose : passer 7 à 8 heures par jour à faire quelque chose qui m'ennuie pour gagner davantage ou sécuriser un emploi, c'était NON.\nÇa m'a pris un peu de temps de trouver le domaine dans lequel je me plairais. J'aime les gens, et j'aime comprendre comment fonctionnent les choses. Mais ça, ce n'est pas facile avec les gens :-D. Je trouve aujourd'hui cet équilibre avec l'informatique."
        ]
      },
      "\n",
      {
        "tag": "h3",
        "props": {
          "id": "le-boulot"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#le-boulot"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "Le boulot"
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je suis en poste en tant que technicienne informatique dans une petite équipe, au sein d'un établissement d'enseignement supérieur : pour moi ça veut dire que je touche à plein de trucs. J'administre quelques serveurs, je gère des équipements de captation vidéo, je mets du papier et des toners dans les imprimantes, je fais de la gestion de parc (inventaire et déploiement), et du support utilisateur."
        ]
      },
      "\n",
      {
        "tag": "h3",
        "props": {
          "id": "la-formation"
        },
        "children": [
          {
            "tag": "a",
            "props": {
              "aria-hidden": "true",
              "href": "#la-formation"
            },
            "children": [
              {
                "tag": "span",
                "props": {
                  "class": "icon icon-link"
                }
              }
            ]
          },
          "La formation"
        ]
      },
      "\n",
      {
        "tag": "ul",
        "children": [
          "\n",
          {
            "tag": "li",
            "children": [
              "Un bac pro \\\"Production graphique\\\" à 30 ans"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Un titre RNCP niveau 5 \\\"Technicien Systèmes et Administration Réseaux\\\" en alternance à 40 ans"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Un master ou un titre d'ingénieur, à 50 ans ? Un doctorat à 60 ans ? ;-)"
            ]
          },
          "\n",
          {
            "tag": "li",
            "children": [
              "Beaucoup d'auto-formation, avec tout ce que ça implique d'errances mais aussi de découvertes !"
            ]
          },
          "\n"
        ]
      }
    ]
  },
  "wassim_chegham": {
    "attributes": {
      "key": "wassim_chegham",
      "name": "Wassim Chegham",
      "company": "Microsoft",
      "city": "Bruz, France",
      "photoURL": "speakers/wassim_chegham.jpg",
      "socials": [
        {
          "icon": "twitter",
          "link": "https://twitter.com/manekinekko",
          "name": "manekinekko"
        },
        {
          "icon": "github",
          "link": "https://github.com/manekinekko",
          "name": "manekinekko"
        }
      ]
    },
    "children": [
      "Wassim is a Senior Developer Advocate at Microsoft and a contributor to the Angular and Node.js projects. He is the author of many open-source projects such as xlayers.dev and ngx.tools. He is also a GDE for the Angular team, the Google Assistant teams at Google, and an Ambassador for Auth0. He is a member of the Node.js Foundation. A former member of the Angular Universal core team. He is currently learning about music composition and drawing. You can reach out to him on Twitter @manekinekko and wassim.dev."
    ]
  },
  "william_bartlett": {
    "attributes": {
      "key": "william_bartlett",
      "name": "William Bartlett",
      "company": "Zenika",
      "city": "Nantes, France",
      "photoURL": "speakers/william_bartlett.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/punkstarman",
          "name": "punkstarman"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/bartlettstarman",
          "name": "bartlettstarman"
        }
      ]
    },
    "children": [
      "Second generation developer, William had his first email account in 1990 at the age of 6 and fell into IT at the age of 10. On his journey across the universe of programming, he has roamed the superpowers of procedural and object-oriented where C, Python or Java are natively spoken. He has also embarked on several treks to the more exotic lands of the functional world, equipped only with a lambda and a few parentheses. His familiar is the penguin and his motto is “Use the right tool at the right time”."
    ]
  },
  "willy_malvault": {
    "attributes": {
      "key": "willy_malvault",
      "name": "Willy Malvault",
      "company": "Sogilis",
      "city": "Grenoble, France",
      "photoURL": "speakers/willy_malvault.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/vlamy/",
          "name": "vlamy"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/malvaultw",
          "name": "malvaultw"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "I started with my carreer with a PhD in peer-to-peer, Cloud and extreme decentralization between 2008 and 2011. Since then I've worked in several places mainly as developer, doing a lot of tests in various ways particularilry un distributed environment. Since 2018 I'm working at Sogilis, where I'm a senior consultant on architecture, agility, Cloud and security."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Since 2020 I'm officially a Cloud Native and cybersecurity evangelist."
        ]
      }
    ]
  },
  "yann_thomas_le_moigne": {
    "attributes": {
      "key": "yann_thomas_le_moigne",
      "name": "Yann-Thomas Le Moigne",
      "company": "Apside TOP",
      "city": "Tours, France",
      "photoURL": "speakers/yann_thomas_le_moigne.jpeg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/Yatho",
          "name": "Yatho"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/Yatho91",
          "name": "Yatho91"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Développeur informatique passionné par les technologies Angular, Java, Spring et Quarkus."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je suis curieux et j'aime beaucoup ce qui peut me faciliter la vie. C'est pourquoi je propose de partager mon expérience sur certains outils de développement."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je suis également Sapeur Pompier Volontaire depuis maintenant 9 ans."
        ]
      }
    ]
  },
  "yannick_guern": {
    "attributes": {
      "key": "yannick_guern",
      "name": "Yannick Guern",
      "company": "Clever-Cloud",
      "city": "Brest, France",
      "photoURL": "speakers/yannick_guern.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/akanoa",
          "name": "akanoa"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/_Akanoa_",
          "name": "_Akanoa_"
        }
      ]
    },
    "children": [
      {
        "tag": "p",
        "children": [
          "Je m'appelle Yannick Guern connu sous les réseaux sous le pseudo d'Akanoa."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je travaille chez Clever Cloud en tant que développeur base de données."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Je fais du Rust depuis plus de 3 ans maintenant et j'essaie de présenter la beauté de cet écosystème au plus grand nombre."
        ]
      },
      "\n",
      {
        "tag": "p",
        "children": [
          "Mon plaisir est de vulgariser des concepts pour les amener à la compréhension du plus grand monde, vous pouvez retrouver mon travail ",
          {
            "tag": "a",
            "props": {
              "href": "https://lafor.ge/"
            },
            "children": [
              "ici"
            ]
          },
          "."
        ]
      }
    ]
  },
  "yohan_lasorsa": {
    "attributes": {
      "key": "yohan_lasorsa",
      "name": "Yohan Lasorsa",
      "company": "Microsoft",
      "city": "Grenoble, France",
      "photoURL": "speakers/yohan_lasorsa.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/sinedied",
          "name": "sinedied"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/sinedied",
          "name": "sinedied"
        }
      ]
    },
    "children": [
      "Passionné d'Open Source et d'artisanat logiciel, le web est le terrain de jeu ultime pour Yohan. Avec plus de 10 ans d'expérience dans divers domaines tels que la recherche appliquée sur le mobile et l'IoT, en passant par le développement et l'architecture d'applications cloud, il a commencé avec des stacks de bas niveau avant de plonger dans le développement web. En tant qu'ingénieur fullstack et bricoleur du dimanche, il aime maintenant pousser des morceaux de JavaScript partout où il peut, en partageant sa passion avec les autres."
    ]
  },
  "yuliana_khorolich": {
    "attributes": {
      "key": "yuliana_khorolich",
      "name": "Yulianna KHOROLICH",
      "company": "SFEIR",
      "city": "Paris, France",
      "photoURL": "speakers/yuliana_khorolich.jpg"
    },
    "children": [
      "Hi everyone! My name is Yulianna, and I am a Solutions Architect [Data & ML] at SFEIR. Even though I've always had a soft spot for data, I got the chance to participate in all phases of the software development lifecycle in my career path. At the moment, I enable data-driven decision-making by creating simple solutions that are easily maintainable, cost-effective, well-documented and documented, and most importantly, documented."
    ]
  },
  "yvonnick_frin": {
    "attributes": {
      "key": "yvonnick_frin",
      "name": "Yvonnick FRIN",
      "company": "Pix",
      "photoURL": "speakers/yvonnick_frin.jpg",
      "socials": [
        {
          "icon": "github",
          "link": "https://github.com/frinyvonnick",
          "name": "frinyvonnick"
        },
        {
          "icon": "twitter",
          "link": "https://twitter.com/YvonnickFrin",
          "name": "YvonnickFrin"
        }
      ]
    },
    "children": [
      "Yvonnick développeur chez Pix. Curieux et passionné, il aime découvrir les dernières technologies du Web. Social, il co-organise NantesJS."
    ]
  }
}

export const sponsors = {
  "asi": {
    "attributes": {
      "key": "asi",
      "title": "ASI",
      "category": 2048,
      "logoURL": "logos/2048-ASI-format-rond-rouge.png",
      "url": "https://www.asi.fr/",
      "socials": []
    },
    "children": []
  },
  "bearstudio": {
    "attributes": {
      "key": "bearstudio",
      "title": "Bear Studio",
      "category": 2048,
      "logoURL": "logos/2048-bearstudio.png",
      "url": "https://www.bearstudio.fr/",
      "socials": []
    },
    "children": []
  },
  "cesi": {
    "attributes": {
      "key": "cesi",
      "title": "CESI",
      "category": 2048,
      "logoURL": "logos/2048-cesi.png",
      "url": "https://www.cesi.fr/",
      "socials": []
    },
    "children": []
  },
  "elastic": {
    "attributes": {
      "key": "elastic",
      "title": "Elastic",
      "category": 2048,
      "logoURL": "logos/2048-elastic.png",
      "url": "https://www.elastic.co/",
      "socials": []
    },
    "children": []
  },
  "empty": {
    "attributes": {
      "key": "empty",
      "title": "Vide"
    },
    "children": []
  },
  "lenra": {
    "attributes": {
      "key": "lenra",
      "title": "Lenra",
      "category": 2048,
      "logoURL": "logos/2048-lenra.png",
      "url": "https://lenra.io/",
      "socials": []
    },
    "children": []
  },
  "lunatech": {
    "attributes": {
      "key": "lunatech",
      "title": "Lunatech",
      "category": 4096,
      "logoURL": "logos/4096-lunatech.png",
      "url": "https://www.lunatech.fr/",
      "socials": []
    },
    "children": []
  },
  "mgdis": {
    "attributes": {
      "key": "mgdis",
      "title": "MGDIS",
      "category": 2048,
      "logoURL": "logos/2048-mgdis.png",
      "url": "https://mgdis.fr/",
      "socials": []
    },
    "children": []
  },
  "ovhcloud": {
    "attributes": {
      "key": "ovhcloud",
      "title": "OVHcloud",
      "category": 4096,
      "logoURL": "logos/4096-ovhcloud.png",
      "url": "https://ovhcloud.com/",
      "socials": []
    },
    "children": []
  },
  "please-open-it": {
    "attributes": {
      "key": "please-open-it",
      "title": "Please Open IT",
      "category": 512,
      "logoURL": "logos/512-please.png",
      "url": "https://please-open.it/",
      "socials": []
    },
    "children": []
  },
  "serli": {
    "attributes": {
      "key": "serli",
      "title": "Serli",
      "category": 512,
      "logoURL": "logos/512-serli.png",
      "url": "https://www.serli.com/",
      "socials": []
    },
    "children": []
  },
  "worldline": {
    "attributes": {
      "key": "worldline",
      "title": "Worldline",
      "category": 512,
      "logoURL": "logos/512-worldline.png",
      "url": "https://blog.worldline.tech/",
      "socials": []
    },
    "children": []
  },
  "zenika": {
    "attributes": {
      "key": "zenika",
      "title": "Zenika",
      "category": 512,
      "logoURL": "logos/512-zenika.png",
      "url": "https://zenika.com/",
      "socials": []
    },
    "children": []
  }
}