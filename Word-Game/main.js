let words = ["mango", "banana", "cherry", "kiwi", "grape", "apple", "lemon", "orange", "lime", "papaya", "peach", "plum", "pineapple", "strawberry", "raspberry", "blueberry", "blackberry", "boysenberry", "currant", "gooseberry", "grapefruit", "kiwifruit", "lime fruit", "nectarine", "orange fruit", "tangerine", "watermelon", "almond", "apricot", "avocado", "breadfruit", "canary melon", "cashew", "coconut", "cantaloupe", "currant", "fig", "garlic", "grapefruit", "guava", "honeydew melon", "huckleberry", "kiwi fruit", "kiwifruit", "lemon fruit", "lime fruit", "mango", "nectarine", "orange fruit", "papaya", "passionfruit", "peach", "pear", "pineapple", "plum", "pomegranate", "raspberry", "star fruit", "strawberry", "tangerine", "ugli fruit", "watermelon", "zucchini"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let hint = "";

for (const element of selectedWord) {
    hint += "_";
}

console.log("Guess the " + selectedWord.length + " letter word:");
console.log(hint);

let guesses = 6;
let userGuess = prompt("Enter a letter to guess:").toLowerCase();

while (guesses > 0) {
    if (selectedWord.includes(userGuess)) {
        let position = selectedWord.indexOf(userGuess);
        hint = hint.split("");
        hint[position] = userGuess;
        hint = hint.join("");
        if (!hint.includes("_")) {
            console.log("Congratulations! You guessed the word correctly!");
            break;
        }
    } else {
        guesses--;
    }
    console.log(hint);
    if (guesses > 0) {
        userGuess = prompt("Enter a letter to guess:").toLowerCase();
    }
}

if (guesses === 0) {
    console.log("Sorry, you ran out of guesses. The correct word was: " + selectedWord);
}