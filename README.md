# LoveCalculator

## Overview
The Love Calculator is a fun web application that calculates a "love score" between two individuals based on their names. The score is generated randomly and presented in percentage form.

## Features
- User-friendly interface for inputting names.
- Random love score calculation displayed as a percentage.
- Input validation to ensure both names are provided.

## Technologies Used
- HTML
- CSS
- JavaScript

## Working of Java script

// fuction1
function loveCalculator() {
    var n = Math.random(); // Generates a random number between 0 (including) and 1 (excluding)
    n = n * 100; // Scales the random number to be between 0 and 100
    n = Math.floor(n) + 1; // Floors the number to get an integer and adds 1, so the range becomes 1 to 100
    return n; // Returns the love score
}

// fuction2
function calculateLoveScore() {
    var parname = document.getElementById("parname").value; // Gets the value of the partner's name input
    var username = document.getElementById("username").value; // Gets the value of the user's name input
    var lovescore = loveCalculator(); // Calls loveCalculator to generate a random love score

    // Checks if either input field is empty
    if (parname === "" || username === "") {
        document.getElementById("result").innerHTML = "Please enter both names."; // Prompts user to fill in both names
    } else {
        // Displays the love score between the two names
        document.getElementById("result").innerHTML =
            "Love score between " + username + " and " + parname + " is " + lovescore + "%";
    }
}


