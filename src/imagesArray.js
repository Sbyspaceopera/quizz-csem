const images = [
  {
    id: 1,
    name: "Sport",
    url: "https://i.ytimg.com/vi/fVUi5Kj8jDQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAK0bkgjeJGa39-tFZliSlXiUyh1Q",
    keywords: [
      { id: 1, name: "Sport" },
      { id: 2, name: "Entraînement physique" },
      { id: 3, name: "Compétition sportive" },
      { id: 4, name: "Astuce sport" },
    ]
  },
  {
    id: 2,
    name: "Musique",
    url: "https://i.ytimg.com/vi/-d6J0ke5ROY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDg6Som3lwLnKEjp9p6jkujwNi2jg",
    keywords: [
      { id: 5, name: "Musique" },
      { id: 6, name: "Concert live" },
      { id: 7, name: "Clip officiel" },
      { id: 8, name: "Paroles de chansons" },
    ]
  },
  {
    id: 3,
    name: "Humour",
    url: "https://i.ytimg.com/vi/OR-1TUobxk8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwEm02N7tTfWrqXOQVlssf6uLyPw",
    keywords: [
      { id: 9, name: "Humour" },
      { id: 10, name: "Blague" },
      { id: 11, name: "Sketch comique" },
      { id: 12, name: "Stand-up" },
    ]
  },
  {
    id: 4,
    name: "Santé",
    url: "https://i.ytimg.com/vi/Bbss9eH8a_s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKoh85ud15QZgl9qSzqEGevbw_7g",
    keywords: [
      { id: 13, name: "Santé" },
      { id: 14, name: "Conseils santé" },
      { id: 15, name: "Nutrition" },
      { id: 16, name: "Exercices pour la santé" },
    ]
  },
  {
    id: 5,
    name: "Bricolage",
    url: "https://i.ytimg.com/vi/bmOKOyFN6lg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtDB3S753Jcy19wdcXmESZQ12SWw",
    keywords: [
      { id: 17, name: "Tutoriels" },
      { id: 18, name: "Guides pas à pas" },
      { id: 19, name: "Conseils pratiques" },
      { id: 20, name: "Astuces" },
    ]
  },
  {
    id: 6,
    name: "Vlogs",
    url: "https://i.ytimg.com/vi/5wx9AhBEwls/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxutUX5w7m8e6NuTYga7uc046FvA",
    keywords: [
      { id: 21, name: "Vlogs" },
      { id: 22, name: "Vie quotidienne" },
      { id: 23, name: "Aventures" },
      { id: 24, name: "Vlogs de voyage" },
    ]
  },
  {
    id: 7,
    name: "Jeux Vidéos",
    url: "https://i.ytimg.com/vi/T7h7mm69W84/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDt4FxwvBmARgxhZm_VbTasN1iaTw",
    keywords: [
      { id: 25, name: "Jeux Vidéos" },
      { id: 26, name: "Gameplay" },
      { id: 27, name: "Astuce jeux vidéos" },
      { id: 28, name: "Guide de jeux vidéos" },
    ]
  },
  {
    id: 8,
    name: "Education",
    url: "https://i.ytimg.com/vi/nLRL_NcnK-4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJas_Ng-a8m7MaZy4pFXEtg32wrg",
    keywords: [
      { id: 29, name: "Education" },
      { id: 30, name: "Cours en ligne" },
      { id: 31, name: "Tutoriels éducatifs" },
      { id: 32, name: "Leçons" },
    ]
  },
  {
    id: 9,
    name: "Sciences",
    url: "https://i.ytimg.com/vi/dqHmMU3hkoM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB77lpB1qMWSyX7ssN9YW-IBWy1pw",
    keywords: [
      { id: 33, name: "Sciences" },
      { id: 34, name: "Expériences scientifiques" },
      { id: 35, name: "Théories scientifiques" },
      { id: 36, name: "Innovations scientifiques" },
    ]
  },
  {
    id: 10,
    name: "Beauté",
    url: "https://i.ytimg.com/vi/GNVCE8ilR9k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_B6GShM8t1mgp_AYj7VcJg10xmw",
    keywords: [
      { id: 18, name: "Beauté" },
      { id: 19, name: "Makup" },
      { id: 101, name: "Tutoriels beauté" },
      { id: 102, name: "Astuces beauté" }
    ]
  },
  {
    id: 11,
    name: "Animaux",
    url: "https://i.ytimg.com/vi/XsIGXNuT0VQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPt8wFXsvOjfCLUC82xJXjpd_9og",
    keywords: [
      { id: 20, name: "Animaux" },
      { id: 103, name: "Animaux drôles" },
      { id: 104, name: "Documentaires sur les animaux" }
    ]
  },
  {
    id: 12,
    name: "Documentaires",
    url: "https://i.ytimg.com/vi/Go7CTjJP9Lk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7ib7wo1IB7ZSqn6FlbiZjBkVRFA",
    keywords: [
      { id: 22, name: "Documentaire" },
      { id: 105, name: "Documentaire historique" },
      { id: 106, name: "Documentaire scientifique" }
    ]
  },
  {
    id: 13,
    name: "Cinéma",
    url: "https://i.ytimg.com/vi/ZekafEW6vJs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjGfeyARpO0bB1gBsaAB2I9f9_cw",
    keywords: [
      { id: 24, name: "Cinéma" },
      { id: 25, name: "Séries" },
      { id: 107, name: "Bande annonce" },
      { id: 108, name: "Critiques de films" }
    ]
  },
  {
    id: 14,
    name: "Actualités",
    url: "https://i.ytimg.com/vi/_W1ehD-vo74/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAelDpNgzSJsg_WoBymqSGYj5srsw",
    keywords: [
      { id: 26, name: "Actualités" },
      { id: 109, name: "Actualités internationales" },
      { id: 110, name: "Actualités technologiques" }
    ]
  },
  {
    id: 15,
    name: "Technologies",
    url: "https://i.ytimg.com/vi/UAG_FBZJVJ8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzvXPkvN64E8A3XYoWbRPZ6VWGvQ",
    keywords: [
      { id: 28, name: "Technologies" },
      { id: 111, name: "Nouvelles technologies" },
      { id: 112, name: "Critiques de produits technologiques" }
    ]
},
{
  id: 15,
  name: "Jardinage",
  url: "https://i.ytimg.com/vi/UAG_FBZJVJ8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzvXPkvN64E8A3XYoWbRPZ6VWGvQ",
  keywords: [
    { id: 28, name: "Jardinage" },
  ]
}
  ];

  export default images;
