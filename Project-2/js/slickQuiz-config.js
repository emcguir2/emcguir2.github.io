// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Casey's Cookie Catastrophe",
        "main":    "<p>Multiply fractions to help figure out the measurements of ingredients using the recipe </p>",
        "results": "",
        "level1":  "Great Cookies! Fraction Master <img src='assets/cookieplate.svg'/>",
        "level2":  "Pretty Nice! You've got those fractions down.<img src='assets/cookieplate.svg'/>",
        "level3":  "Not too bad!<img src='assets/cookieplate.svg'/>",
        "level4":  "Keep Trying. These cookies look burnt.<img src='burntcookieplate.svg'/>",
        "level5":  "Better luck next time. Looks like the cookies burned. You may want to try again.<img src='burntcookieplate.svg'/>" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "<img src='assets/flour-and-card2.svg'/>How many cups of flour should she use?",
            "a": [
                {"option": "<img src='assets/3.svg'/>",      "correct": true},
                {"option": "<img src='assets/2.svg'/>",     "correct": false},
                {"option": "<img src='assets/1.svg'/>",      "correct": false},
                {"option": "<img src='assets/4.svg'/>",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> She should use 3 cups of flour. </p><img src='assets/explanation1.svg'/>",
            "incorrect": "<p><span>Incorrect</span> She should actually use 3 cups of flour</p><img src='assets/explanation1.svg'/>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "<img src='assets/butter-and-card.svg'/>How many cups of butter should Casey use?",
            "a": [
                {"option": "<img src='assets/1.svg'/>",   "correct": false},
                {"option": "<img src='assets/3.svg'/>",   "correct": false},
                {"option": "<img src='assets/2-2.svg'/>", "correct": false},
                {"option": "<img src='assets/2-4.svg'/>", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You're doing great!</p><img src='assets/explanation2.svg'/>",
            "incorrect": "<p><span>Hmmm.</span> You might want to try again.</p><img src='assets/explanation2.svg'/>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "<img src='assets/card-and-sugar2.svg'/>How much sugar does she need?",
            "a": [
                {"option": "<img src='assets/3-1.svg'/>",    "correct": false},
                {"option": "<img src='assets/3-2.svg'/>",   "correct": true},
                {"option": "<img src='assets/3-3.svg'/>", "correct": false},
                {"option": "<img src='assets/3-4.svg'/>",  "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're doing great! </p><img src='assets/explanation3.svg'/>",
            "incorrect": "<p><span>Not Quite.</span> See below!</p><img src='assets/explanation3.svg'/>" // no comma here
        },
        { // Question 4
            "q": "<img src='assets/card-and-brownsugar2.svg'/>How much brown sugar should she use?",
            "a": [
                {"option": "<img src='assets/3-1.svg'/>",    "correct": true},
                {"option": "<img src='assets/4-2.svg'/>",    "correct": false},
                {"option": "<img src='assets/4-3.svg'/>", "correct": false},
                {"option": "<img src='assets/2-2.svg'/>",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span> That's correct! Almost there!</p><img src='assets/explanation4.svg'/>",
            "incorrect": "<p><span>Incorrect.</span> Sorry. See how it's done here.</p><img src='assets/explanation4.svg'/>" // no comma here
        },
        { // Question 5
            "q": "<img src='assets/chips-and-card2.svg'/> How many cups of chocolate chips?",
            "a": [
                {"option": "<img src='assets/5-1.svg'/>",    "correct": false},
                {"option": "<img src='assets/3.svg'/>",     "correct": false},
                {"option": "<img src='assets/5-3.svg'/>", "correct": true},
                {"option": "<img src='assets/4-2.svg'/>",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> You got it!</p><img src='assets/explanation5.svg'/>",
            "incorrect": "<p><span>Sorry!</span> That's not correct. </p><img src='assets/explanation5.svg'/>" // no comma here
        } // no comma here
    ]
};