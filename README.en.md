# Parallelotris

## Credits
This game was initially created by Vincent Joly, a math professor at the University of Lille.
Original link: http://mathematiques-medias.discipline.ac-lille.fr/Parallelotris/Parallelotris.html

## Additions
List of additions made by Jules Bourdalé (jules.bourdale@gmail.com) in May 2023

- Bug fixes:
    - Piece still movable despite end of game
- Features:
    - Ability to configure the game's behavior from a file (see [Configuration](#configuration))
        - score bonus
        - draw probability
        - display of rules or not
- Display:
    - General redesign of the HTML page style
- Technical:
    - Added comments and explanations at the top of each file explaining the general functioning
    - Removal of dead code (unused)

## Usage

- Copy all necessary files for the game, making sure to keep the same directory structure:
    - `parallelotris.html`
    - `src/*`
    - `libs/*`
- Open `parallelotris.html`

## Configuration

In the file, `src/options.js`, you will find the list of configurable options:

```
const OPTIONS = {
    POURCENTAGE_PIECE_ET_PROPS: 70, // PERCENTAGE CHANCE OF HAVING 2 PROPERTIES DURING A DRAW
    Pieces: {
      QUAD_QUELCONQUE: {            // IRREGULAR QUADRILATERAL
        code: 0,                    // INTERNAL REPRESENTATION, DO NOT MODIFY
        pourcentageTirage: 60,      // CHANCE OF APPEARANCE PERCENTAGE (excluding two properties drawn by POURCENTAGE_PIECE_ET_PROPS)
        score: 0                    // BONUS SCORE ON CREATION (0 here because the irregular quadrilateral cannot be formed from other pieces)
      },
      PARALELOGRAMME: {             // PARALLELOGRAM
        code: 1,                    // INTERNAL REPRESENTATION, DO NOT MODIFY
        pourcentageTirage: 20,      // CHANCE OF APPEARANCE PERCENTAGE (excluding two properties drawn by POURCENTAGE_PIECE_ET_PROPS)
        score: 50                   // BONUS SCORE ON CREATION
      },
      RECTANGLE: {                  // RECTANGLE
        code: 2,                    // INTERNAL REPRESENTATION, DO NOT MODIFY
        pourcentageTirage: 15,      // CHANCE OF APPEARANCE PERCENTAGE (excluding two properties drawn by POURCENTAGE_PIECE_ET_PROPS)
        score: 100                  // BONUS SCORE ON CREATION
      },
      LOSANGE: {                    // RHOMBUS
        code: 3,                    // INTERNAL REPRESENTATION, DO NOT MODIFY
        pourcentageTirage: 5,       // CHANCE OF APPEARANCE PERCENTAGE (excluding two properties drawn by POURCENTAGE_PIECE_ET_PROPS)
        score: 100                  // BONUS SCORE ON CREATION
      },
      CARRE: {                      // SQUARE
        code: 4,                    // INTERNAL REPRESENTATION, DO NOT MODIFY
        pourcentageTirage: 0,       // CHANCE OF APPEARANCE PERCENTAGE (0 here because the square should not appear but only be formed)
        score: 200                  // BONUS SCORE ON CREATION
      }
    },
  }
```

## License

Creative Common: [CC BY-NC-ND 3.0 FR](https://creativecommons.org/licenses/by-nc-nd/3.0/fr/)
Defined by the original author: Vincent Joly