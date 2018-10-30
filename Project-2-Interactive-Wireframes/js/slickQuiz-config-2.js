// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Help with the ingredient measurements",
        "main":    "<p>Can you help Casey make her cookies?</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Perfect Cookies!",
        "level2":  "Delicious!",
        "level3":  "Pretty good",
        "level4":  "A little burnt",
        "level5":  "Let's try again" // no comma here
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
            "correct": "<p><span>That's right!</span> She shoudl use ___ cups of flour.</p>",
            "incorrect": "<p><span>Sorry</span> She should use ___ cups of flour</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "How many cups of butter should she use?",
            "a": [
                {"option": "1", "correct": false},
                {"option": "2",   "correct": true},
                {"option": "3",               "correct": false},
                {"option": "4", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> She shoudl use___ cups of butter.</p>",
            "incorrect": "<p><span>Hmmm.That's not right</span> She should use ___ .</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How much sugar should she use?",
            "a": [
                {"option": "1 cup",           "correct": false},
                {"option": "2 cups",          "correct": false},
                {"option": "3 cups",  "correct": false},
                {"option": "4 cups",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Great!</span> She shouls use____ </p>",
            "incorrect": "<p><span>Not Quite.</span>She shousl use____</p>" // no comma here
        },
        { // Question 4
            "q": "How many cups of chocolate chips?",
            "a": [
                {"option": "1",    "correct": false},
                {"option": "3",     "correct": true},
                {"option": "2",      "correct": false},
                {"option": "12",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Yes!</span> She should use___</p>",
            "incorrect": "<p><span>Sorry.</span> She shoudl actually use___</p>" // no comma here
        },
        { // Question 5
            "q": "How many ______",
            "a": [
                {"option": "1",    "correct": true},
                {"option": "3",    "correct": false},
                {"option": "2.5",    "correct": false},
                {"option": "2",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Good Job!</span> She should use____</p>",
            "incorrect": "<p><span>SOrry!!</span> She shoudl actually use___</p>" // no comma here
        } // no comma here
    ]
};
