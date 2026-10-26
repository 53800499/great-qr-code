const TICKETS_DATA = [
  {
    id: "CER-STD-2026",
    code: "CER-STD-2026",
    slug: "solidaire",
    slideIndex: 1,
    name: "1. Ticket Standard « Solidaire »",
    shortName: "Solidaire",
    price: "50 000 FCFA",
    places: "1 place",
    carteImg: "slides_export/carte/carte_slide_1.png",
    ticketImg: "slides_export/tickets/ticket_slide_1.png",
    qrImg: "qr_codes/web/qr_CER-STD-2026.png",
    carteColors: {
      bg: "linear-gradient(315deg, #FF1D9D 0%, #FFEFD2 100%)",
      textColor: "#000000"
    },
    ticketColors: {
      bodyBg: "#FBF3EC",
      stubBg: "#F4C6D4",
      textColor: "#241C1C",
      accentColor: "#241C1C"
    },
    carteText: {
      title: "Ticket Solidaire",
      message: "Merci de faire partie de cette belle chaîne de solidarité. Par votre présence, vous donnez de la force et de l’espoir à toutes celles qui se battent contre le cancer du sein. Ensemble, nous sommes plus forts. Votre ticket solidaire est le premier maillon de cette chaîne: sans lui, rien ne serait possible. Merci de lancer l’élan.",
      org: "Reprod’Action Santé"
    },
    ticketDetails: {
      category: "TICKET INDIVIDUEL",
      slogan: "UN DON, UN EXAMEN, UNE VIE SAUVÉE",
      avantages: [
        "Accès au dîner-gala et à l'animation",
        "Accès à l'espace de sensibilisation",
        "Un ruban à nouer à l'Arbre de l'Espoir",
        "Participation à la minute de lumière rose",
        "Accès au photobooth de la soirée"
      ],
      placesTotal: "Places : 40"
    }
  },
  {
    id: "CER-VIP-2026",
    code: "CER-VIP-2026",
    slug: "espoir",
    slideIndex: 2,
    name: "2. Ticket VIP « Espoir »",
    shortName: "Espoir",
    price: "100 000 FCFA",
    places: "1 place",
    carteImg: "slides_export/carte/carte_slide_2.png",
    ticketImg: "slides_export/tickets/ticket_slide_2.png",
    qrImg: "qr_codes/web/qr_CER-VIP-2026.png",
    carteColors: {
      bg: "linear-gradient(90deg, #000000 0%, #3533CD 100%)",
      textColor: "#FFFFFF"
    },
    ticketColors: {
      bodyBg: "#1F3864",
      stubBg: "#101F3B",
      textColor: "#FFFFFF",
      accentColor: "#F4E5B2"
    },
    carteText: {
      title: "Ticket Espoir",
      message: "Merci de faire partie de cette belle chaîne de solidarité. Par votre présence, vous donnez de la force et de l’espoir à toutes celles qui se battent contre le cancer du sein. Ensemble, nous sommes plus forts.Votre ticket espoir est une lumière pour celles qui en ont beoin.",
      org: "Reprod’Action Santé"
    },
    ticketDetails: {
      category: "TICKET VIP",
      slogan: "UN DON, UN EXAMEN, UNE VIE SAUVÉE",
      avantages: [
        "Placement en zone préférentielle",
        "Cocktail de bienvenue",
        "Kit invité offert",
        "Carte-menu narrative « Du Doute à la Vie »",
        "Accès prioritaire au photobooth"
      ],
      placesTotal: "Places : 25"
    }
  },
  {
    id: "CER-OR-2026",
    code: "CER-OR-2026",
    slug: "coeur-dor",
    slideIndex: 3,
    name: "3. Ticket Prestige « Cœur d'Or »",
    shortName: "Cœur d'Or",
    price: "150 000 FCFA",
    places: "1 place",
    carteImg: "slides_export/carte/carte_slide_3.png",
    ticketImg: "slides_export/tickets/ticket_slide_3.png",
    qrImg: "qr_codes/web/qr_CER-OR-2026.png",
    carteColors: {
      bg: "linear-gradient(90deg, #000000 0%, #C89116 100%)",
      textColor: "#FFFFFF"
    },
    ticketColors: {
      bodyBg: "#BF9000",
      stubBg: "#8A6D00",
      textColor: "#FFFFFF",
      accentColor: "#F4E5B2"
    },
    carteText: {
      title: "Ticket Cœur d’Or",
      message: "Merci de faire partie de cette belle chaîne de solidarité. Par votre présence, vous donnez de la force et de l’espoir à toutes celles qui se battent contre le cancer du sein. Ensemble, nous sommes plus forts. Votre générosité a un cœur en or, merci.",
      org: "Reprod’Action Santé"
    },
    ticketDetails: {
      category: "TICKET PRESTIGE · 15 PLACES",
      slogan: "UN DON, UN EXAMEN, UNE VIE SAUVÉE",
      avantages: [
        "Table 1ᵉʳ rang face à la scène",
        "Cocktail privé VIP avant le gala",
        "Photo officielle avec marraines et autorités",
        "Mention nominative à l'écran et au programme",
        "Reçu-impact personnalisé + cadeau souvenir"
      ],
      placesTotal: "Places : 15"
    }
  },
  {
    id: "CER-TBL-2026",
    code: "CER-TBL-2026",
    slug: "partenaire",
    slideIndex: 4,
    name: "4. Table Entreprise · Partenaire",
    shortName: "Table Partenaire",
    price: "1 600 000 FCFA",
    places: "8 places",
    carteImg: "slides_export/carte/carte_slide_4.png",
    ticketImg: "slides_export/tickets/ticket_slide_4.png",
    qrImg: "qr_codes/web/qr_CER-TBL-2026.png",
    carteColors: {
      bg: "linear-gradient(180deg, #731919 0%, #E52B2B 100%)",
      textColor: "#FFFFFF"
    },
    ticketColors: {
      bodyBg: "#C00000",
      stubBg: "#7A0000",
      textColor: "#FFFFFF",
      accentColor: "#FFFFFF"
    },
    carteText: {
      title: "Ticket Partenaire",
      message: "Merci de faire partie de cette belle chaîne de solidarité. Par votre présence, vous donnez de la force et de l’espoir à toutes celles qui se battent contre le cancer du sein. Ensemble, nous sommes plus forts. Merci de porter cette cause avec nous, vous faites rayonner la solidarité bien au-delà de cette soirée. Tous les héros ne portent pas de cape.",
      org: "Reprod’Action Santé"
    },
    ticketDetails: {
      category: "8 PLACES VIP",
      slogan: "UN DON, UN EXAMEN, UNE VIE SAUVÉE",
      avantages: [
        "8 places en zone VIP pour l'entreprise",
        "Logo visible sur la table durant la soirée",
        "Mention comme table partenaire au micro",
        "Reçu-impact collectif au nom de l'entreprise",
        "Photo officielle de groupe avec bannière"
      ],
      placesTotal: "Places : 8"
    }
  },
  {
    id: "CER-MP-2026",
    code: "CER-MP-2026",
    slug: "marraine-parrain",
    slideIndex: 5,
    name: "5. Marraine / Parrain d'Espoir",
    shortName: "Marraine/Parrain",
    price: "300 000–500 000 FCFA",
    places: "4 à 5 max.",
    carteImg: "slides_export/carte/carte_slide_5.png",
    ticketImg: "slides_export/tickets/ticket_slide_5.png",
    qrImg: "qr_codes/web/qr_CER-MP-2026.png",
    carteColors: {
      bg: "linear-gradient(90deg, #000000 0%, #737373 100%)",
      textColor: "#FFFFFF"
    },
    ticketColors: {
      bodyBg: "#12100F",
      stubBg: "#1C1815",
      textColor: "#FFFFFF",
      accentColor: "#F4E5B2"
    },
    carteText: {
      title: "Ticket Marraine/Parrain",
      message: "Merci de faire partie de cette belle chaîne de solidarité. Par votre présence, vous donnez de la force et de l’espoir à toutes celles qui se battent contre le cancer du sein. Ensemble, nous sommes plus forts. Marraine et Parrain de coeur, vous êtes le visage de notre engagement. Merci de porter cette cause avec nous, et de lui donner tant d’élan.",
      org: "Reprod’Action Santé"
    },
    ticketDetails: {
      category: "TICKET D'HONNEUR · PLACES TRÈS LIMITÉES",
      slogan: "UN DON, UN EXAMEN, UNE VIE SAUVÉE",
      avantages: [
        "Tous les avantages « Cœur d'Or »",
        "Parrainage symbolique d'une femme bénéficiaire",
        "Rapport de suivi personnalisé après l'événement",
        "Nom associé au projet pendant toute l'année",
        "Invitation prioritaire à l'édition suivante"
      ],
      placesTotal: "Places : 4 à 5 max."
    }
  }
];
