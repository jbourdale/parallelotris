# Parallelotris

[English version](./README.en.md)

## Credits

Ce jeu à été initialement créé par Vincent Joly, Professeur de maths dans l'université de Lille.
Lien orginal : http://mathematiques-medias.discipline.ac-lille.fr/Parallelotris/Parallelotris.html

## Ajouts

Liste des ajouts réalisés par Jules Bourdalé (jules.bourdale@gmail.com) en Mai 2023

- Correction de bugs:
    - Pièce encore déplaçable malgré la fin de partie
- Fonctionnalitées:
    - Possibilité de configurer le comportement du jeu depuis un fichier (voir [Configuration](#configuration))
        - bonus de score
        - probabilité de tirage
        - affichage ou non des règles
- Affichage :
    - Refonte général du style de la page HTML
- Technique :
    - Ajout de commentaires et d'explications en haut de chaque fichier expliquant le fonctionnement général
    - Suppression de code mort (non utilisé)

## Usage

- Copier tous les fichiers nécessaire au jeu en veillant à garder la même arborescence: 
    - `index.html`
    - `style.css`
    - `src/*` 
    - `libs/*`
    - `rules/*`
- Ouvrez `index.html`

## Configuration

- Dans le fichier, `src/options.js` vous trouverez la liste des options configurable :

```
const OPTIONS = {
    POURCENTAGE_PIECE_ET_PROPS: 70, // POURCENTAGE DE CHANCE D'AVOIR 2 PROPIÉTÉES LORS D'UN TIRAGE
    Pieces: {
      QUAD_QUELCONQUE: {            // QUADRILATÈRE QUELCONQUE
        code: 0,                    // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
        pourcentageTirage: 60,      // POURCENTAGE DE CHANCE D'APPARITION (hors deux propriétés tirées par POURCENTAGE_PIECE_ET_PROPS)
        score: 0                    // BONUS DE SCORE LORS DE LA CRÉATION (0 ici car le quadrilatère quelconque ne peut pas être formé à partir d'autres pièces)
      },
      PARALELOGRAMME: {             // PARALELOGRAMME
        code: 1,                    // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
        pourcentageTirage: 20,      // POURCENTAGE DE CHANCE D'APPARITION (hors deux propriétés tirées par POURCENTAGE_PIECE_ET_PROPS)
        score: 50                   // BONUS DE SCORE LORS DE LA CRÉATION
      },
      RECTANGLE: {                  // RECTANGLE
        code: 2,                    // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
        pourcentageTirage: 15,      // POURCENTAGE DE CHANCE D'APPARITION (hors deux propriétés tirées par POURCENTAGE_PIECE_ET_PROPS)
        score: 100                  // BONUS DE SCORE LORS DE LA CRÉATION
      },
      LOSANGE: {                    // LOSANGE
        code: 3,                    // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
        pourcentageTirage: 5,       // POURCENTAGE DE CHANCE D'APPARITION (hors deux propriétés tirées par POURCENTAGE_PIECE_ET_PROPS)
        score: 100                  // BONUS DE SCORE LORS DE LA CRÉATION
      },
      CARRE: {                      // CARRE
        code: 4,                    // REPRÉSENTATION INTERNE, NE PAS MODIFIER 
        pourcentageTirage: 0,       // POURCENTAGE DE CHANCE D'APPARITION (0 ici car le carré ne doit pas apparaitre mais seulement être formé)
        score: 200                  // BONUS DE SCORE LORS DE LA CRÉATION
      }
    },
  }
```

# License

Creative Common: [CC BY-NC-ND 3.0 FR](https://creativecommons.org/licenses/by-nc-nd/3.0/fr/)
Définit par l'auteur original : Vincent Joly
