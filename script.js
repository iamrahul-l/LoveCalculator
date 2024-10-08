function loveCalculator() {
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n) + 1;
    return n;
}

function calculateLoveScore() {
    var parname = document.getElementById("parname").value;
    var username = document.getElementById("username").value;
    var lovescore = loveCalculator();

    if (parname === "" || username === "") {
        document.getElementById("result").innerHTML = "Please enter both names.";
    } else {
        document.getElementById("result").innerHTML =
            "Love score between " + username + " and " + parname + " is " + lovescore + "%";
    }
}
