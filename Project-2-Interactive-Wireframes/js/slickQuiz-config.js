// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Help Casey with her cookies!",
        "main":    "<p>Multiply fractions to help figure out the measurements of ingredients using the recipe </p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "How many cups of flour should she use?",
            "a": [
                {"option": "1",      "correct": false},
                {"option": "1 3/4",     "correct": false},
                {"option": "3",      "correct": true},
                {"option": "1 1/2",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The letter A is the first letter in the alphabet!</p>",
            "incorrect": "<p><span>Uhh no.</span> It's the first letter of the alphabet. Did you actually <em>go</em> to kindergarden?</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How much butter should Casey use?",
            "a": [
                {"option": "1 cup",               "correct": false},
                {"option": "2 cups",   "correct": true},
                {"option": "1 3/4 cups",               "correct": false},
                {"option": "2 1/2 cups", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Your cholestoral level is probably doing alright.</p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How much sugar does she need?",
            "a": [
                {"option": "1 cup",    "correct": false},
                {"option": "2 cups",   "correct": false},
                {"option": "1 1/2 cups","correct": false},
                {"option": "3/4 cups",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius, (wo)man.</p>",
            "incorrect": "<p><span>Not Quite.</span> You're actually on Planet Earth, in The Milky Way, At a computer. But nice try.</p>" // no comma here
        },
        { // Question 4
            "q": "How much brown sugar should she use?",
            "a": [
                {"option": "1",    "correct": false},
                {"option": "3",    "correct": true},
                {"option": "1 3/4","correct": false},
                {"option": "1/2",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Holy bananas!</span> I didn't actually expect you to know that! Correct!</p>",
            "incorrect": "<p><span>Fail.</span> Sorry. You lose. It actually rains approximately 32 inches a year in Michigan.</p>" // no comma here
        },
        { // Question 5
            "q": "How many cups of chocolate chips?",
            "a": [
                {"option": "1",    "correct": true},
                {"option": "2",     "correct": false},
                {"option": "1 3/4","correct": false},
                {"option": "1/2",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You must be very observant!</p>",
            "incorrect": "<p><span>ERRRR!</span> What planet Earth are <em>you</em> living on?!?</p>" // no comma here
        } // no comma here
    ]
};
