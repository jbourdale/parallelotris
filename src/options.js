const OPTIONS = {
  POURCENTAGE_PIECE_ET_PROPS: 70,     // POURCENTAGE DE CHANCE D'AVOIR 2 PROPIÉTÉES LORS D'UN TIRAGE
  Pieces: {
    QUAD_QUELCONQUE: {                // QUADRILATÈRE QUELCONQUE
      code: 0,                        // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
      pourcentageTirage: 60,          // POURCENTAGE DE CHANCE D'APPARITION (hors deux propriétés tirées par POURCENTAGE_PIECE_ET_PROPS)
      score: 0                        // BONUS DE SCORE LORS DE LA CRÉATION (0 ici car le quadrilatère quelconque ne peut pas être formé à partir d'autres pièces)
    },
    PARALELOGRAMME: {                 // PARALELOGRAMME
      code: 1,                        // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
      pourcentageTirage: 20,          // POURCENTAGE DE CHANCE D'APPARITION (hors deux propriétés tirées par POURCENTAGE_PIECE_ET_PROPS)
      score: 50                       // BONUS DE SCORE LORS DE LA CRÉATION
    },
    RECTANGLE: {                      // RECTANGLE
      code: 2,                        // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
      pourcentageTirage: 15,          // POURCENTAGE DE CHANCE D'APPARITION (hors deux propriétés tirées par POURCENTAGE_PIECE_ET_PROPS)
      score: 100                      // BONUS DE SCORE LORS DE LA CRÉATION
    },
    LOSANGE: {                        // LOSANGE
      code: 3,                        // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
      pourcentageTirage: 5,           // POURCENTAGE DE CHANCE D'APPARITION (hors deux propriétés tirées par POURCENTAGE_PIECE_ET_PROPS)
      score: 100                      // BONUS DE SCORE LORS DE LA CRÉATION
    },
    CARRE: {                          // CARRE
      code: 4,                        // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
      pourcentageTirage: 0,           // POURCENTAGE DE CHANCE D'APPARITION (0 ici car le carré ne doit pas apparaitre mais seulement être formé)
      score: 200                      // BONUS DE SCORE LORS DE LA CRÉATION
    }
  },
  AFFICHAGE_BTN_REGLES: true         // AFFICHE OU NON LE BOUTON "AFFICHER LES RÈGLES"
}