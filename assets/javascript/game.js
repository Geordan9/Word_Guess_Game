var possibleWords = [
    "Abare",
    "Absolute Block",
    "Advanced Blocking",
    "Aerial Rave",
    "Aggression",
    "Anti-Air",
    "Air to Air",
    "Armor",
    "Armor Mode",
    "Armor Breaking Move",
    "Auto Combo",
    "Auto Correct",
    "Auto Guard",
    "Baiting",
    "Balance",
    "Block",
    "Blockstop",
    "Block String",
    "Block Stun",
    "Blow Away Attacks",
    "Broken",
    "Buffering",
    "Button Mashing",
    "Cancel",
    "Chain Combo",
    "Channeling",
    "Charge Move",
    "Chicken Blocking",
    "Chip Damage",
    "Clone",
    "Combo",
    "Command Move",
    "Command Grab",
    "Conditioning",
    "Counter Hit",
    "Counter Mode",
    "Counterpick",
    "Criticals",
    "Cross-Up",
    "Crouch Dash",
    "Damage Scaling",
    "Dark force",
    "Dash",
    "Deadly Rave",
    "Death Trap",
    "Deep Hit",
    "Desperation Move",
    "Double KO",
    "Download",
    "Dragon Punch",
    "Dramatic Battle",
    "Endurance Match",
    "Enhanced Special Move",
    "EX Focus",
    "EX Moves",
    "Fierce",
    "Finish",
    "Focal Adherence",
    "Focus Attack",
    "Focus Attack Dash Canceling",
    "Footsies",
    "Forward",
    "Four-button Fighter",
    "Four Fierce Combo",
    "Frame",
    "Frame Advantage",
    "Frame Data",
    "Frame Trap",
    "Free Cancels",
    "Fuzzy Guard",
    "Grappler",
    "Guard Break",
    "Guard Cancel",
    "Guard Meter",
    "Half Circle Backward",
    "Half Circle Forward",
    "Happy Birthday",
    "Hit Box",
    "Hit Confirm",
    "Hit Stun",
    "Hood Flawless/Hood Perfect",
    "Hunter Chain",
    "Infinite",
    "Invincibility",
    "Jab",
    "Juggle",
    "Jump Installing",
    "Kara Cancel",
    "Knockout",
    "Life",
    "Link",
    "Low Attack",
    "Matchup",
    "MAX Mode",
    "Meaty",
    "Mercy",
    "Meter",
    "Meter Gain",
    "Mind Games",
    "Mirror Match",
    "Mixup",
    "Negative Edge",
    "Neutral Game",
    "Normal move",
    "Off the Ground",
    "Okizeme",
    "Option Select",
    "Orientation",
    "Overhead Attack",
    "Parry",
    "Plink",
    "Poke",
    "Pressure",
    "Pretzel Motion",
    "Priority",
    "Punish",
    "Puppet Fighter",
    "Pursuit Attack",
    "Push Block",
    "Quarter Circle Back",
    "Quarter Circle Forward",
    "Quick Recover",
    "Rage Gauge",
    "Ranbu Super",
    "Read/Reading",
    "Recovery",
    "Red Parry",
    "Renda Bonus",
    "Rekka",
    "Repel",
    "Reset",
    "Reversal",
    "Ring Out",
    "Rolling",
    "Roll Cancel",
    "Roundhouse",
    "Rubber Band AI",
    "Rushdown",
    "Run",
    "Runback",
    "Sabaki",
    "Safe",
    "Safe Jump",
    "Scrub",
    "Scramble",
    "SGGK",
    "Shenanigans",
    "Short",
    "Short Jump",
    "Shotokan Character",
    "Shoto",
    "Shotoclone",
    "Six-button Fighter",
    "SNK Boss Syndrome",
    "Spam",
    "Spatial Cognition",
    "Special Move",
    "Spinning Pile Driver",
    "Startup",
    "String",
    "Strong",
    "Stuffing",
    "Stun",
    "Summon",
    "Super Armor",
    "Super Canceling",
    "Super Combo and Super Combo Gauge",
    "Super Jump Cancel or High Jump Cancel",
    "Super Move",
    "Super Stock",
    "Survival Battle",
    "Sweep",
    "Tag",
    "Taunt",
    "Teching",
    "Throws",
    "Tier",
    "Tiger Knee",
    "Time Killer",
    "Time Over",
    "Trade",
    "Turtling",
    "Unblockables",
    "Universal Overhead Hit",
    "Victory Symbols",
    "Vortex",
    "Yomi",
    "Wakeup",
    "Wavedash",
    "Weapons Fighter",
    "Whiff",
    "Wire",
    "Zoning"
];

var word = "";

var hiddenWord = "";

var guessedLetters = [];

var wins = 0;
var losses = 0;

var lives = 8;

var myRegEx = /[A-z]/g;

function wordToHTML() {
    var html = "<p>" + hiddenWord + "</p>" /*+ "<p>" + word.split('').join(' ') + "</p>"*/;
    document.getElementById("currentWord").innerHTML = html;
}

function guessToHTML() {
    var html = "<p>" + guessedLetters.join(', ') + "</p>";
    document.getElementById("lettersGuessed").innerHTML = html;
}

function setWord() {
    guessedLetters = [];

    lives = 8;

    document.getElementById("lettersGuessed").textContent = "";

    document.getElementById("remainingGuesses").innerText = "Lives: " + lives;

    word = possibleWords[Math.floor(Math.random() * possibleWords.length)];

    hiddenWord = word.replace(myRegEx, '_').split('').join(' ');

    wordToHTML();
}

document.onkeyup = function (event) {

    var userInput = event.key.toLowerCase();

    if (/^([A-z])$/.test(userInput)) {
        if (document.getElementById("lettersGuessed").textContent.toLowerCase().split(userInput).length - 1 == 0) {
            var wordSplit = word.split('').join(' ').split('');
            if (word.toLowerCase().split(userInput).length - 1 == 0) {
                lives--;
            }
            for (i = 0; i < wordSplit.length; i++) {

                if (wordSplit[i].toLowerCase() == userInput) {
                    var hiddenWordSub = hiddenWord.split('');
                    hiddenWordSub[i] = wordSplit[i];
                    hiddenWord = hiddenWordSub.join('');
                }
            }
            wordToHTML();
            guessedLetters.push(userInput.toUpperCase())
            guessToHTML();
            document.getElementById("remainingGuesses").innerText = "Lives: " + lives;
            if (hiddenWord == wordSplit.join('') || lives == 0) {
                if (hiddenWord == wordSplit.join(''))
                {
                    wins++;
                    document.getElementById("wins").innerText = "Wins: " + wins;
                }
                if (lives == 0){
                    losses++;
                    document.getElementById("losses").innerText = "Losses: " + losses;
                }
                setWord();
            }
        } else {

        }
    }


}

setWord();