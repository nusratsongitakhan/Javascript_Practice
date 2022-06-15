const dolphinsAverageScore = (97 + 112 + 101) / 3;
const koalasAverageScore = (109 + 95 + 123) / 3;

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log("Dolphin is the winner of the competition! 🏆");
} else if (koalasAverageScore > dolphinsAverageScore && koalasAverageScore >= 100) {
    console.log("Koalas is the winner of the competition! 🏆");
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log("Draw 🎰");
} else {
    console.log("No team wins the trophy 😐!!! ");
}

// windows + . = emoji (On windows).

