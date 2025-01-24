Hangman Game
A simple Hangman Game built with HTML, CSS, and JavaScript. The game dynamically generates a random word from a set of categories, and the player must guess the letters of the word one by one.

Features
Random Word Selection: Words are fetched from a words.json file, which contains categories like "Programming Languages", "Movies", "People", and "Countries".
Letter Guessing: Players can click on letter buttons to guess the word.
Game Feedback: The game gives feedback on correct and wrong guesses, updating the display and drawing parts of a hangman figure as the player makes wrong attempts.
End Game Conditions: The game ends when the player guesses the word correctly or makes 8 incorrect attempts.
Technologies Used
HTML: For structuring the game interface.
CSS: For styling the game layout.
JavaScript: For handling game logic, word selection, and user interactions.
JSON: For storing the words in different categories.
How to Use
1. Download the Project:
Download the entire project, which should include the following files:
index.html: The main HTML file.
style.css: The CSS file for the game’s styling.
script.js: The JavaScript file that contains all the game logic.
words.json: The JSON file containing the categories and words.
2. Open the Game:
Open the index.html file in a web browser (Chrome, Firefox, etc.).
3. Play the Game:
Once the page loads, the game will randomly select a word from one of the categories in the JSON file.
Click the letters displayed on the screen to guess the word.
Each wrong guess will increment the hangman drawing.
Once you've guessed all the letters or made 8 incorrect guesses, the game ends.
Game Flow
Categories: The game randomly selects one of the categories from the JSON file: Programming, Movies, People, or Countries.
Letter Guessing: The player guesses letters by clicking on the letter buttons. If the letter is part of the word, it is revealed in the corresponding position. If it’s incorrect, a part of the hangman is drawn.
Win/Loss Condition: The game ends when:
The player correctly guesses all the letters in the word (win).
The player makes 8 incorrect guesses (loss).
Restart: After a game ends, the page will reload to start a new game.
JSON Structure (words.json)
The words.json file contains four categories, each with an array of words.

Code Explanation
JavaScript (script.js):
The game logic starts by fetching the words.json file, which contains words grouped by categories.
A random category and word are selected from the JSON data.
The word is then split into an array of letters, and empty letter spans are created to represent the word in the UI.
When a user clicks a letter, the game checks if the letter is part of the word and updates the display accordingly.
The hangman drawing is updated as the player makes wrong guesses.
HTML (index.html):
The HTML file contains the structure for displaying the game, including the letter buttons and the hangman drawing area.
CSS (style.css):
The CSS styles the layout and appearance of the game, including the button layout, word display, and hangman drawing.
Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit pull requests. Contributions could include:

Adding more categories and words to the words.json file.
Improving the user interface or game experience.
Fixing bugs or optimizing the code.


Acknowledgments
Thanks to the creators of the Hangman game concept!
Thanks to the contributors and the open-source community.
Enjoy playing the game!
