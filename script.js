// script.js
function submitForm() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let totalScore = 0;
    let group1Score = 0; // For questions 4, 8, 11
    let group2Score = 0; // For questions 5, 10, 17
    let group3Score = 0; // For questions 2, 9
    let group4Score = 0; // For questions 12, 14, 18
    let group5Score = 0; // For questions 5, 8, 11

    const group1Questions = [4, 8, 11];
    const group2Questions = [5, 10, 17];
    const group3Questions = [2, 9];
    const group4Questions = [12, 14, 18];
    const group5Questions = [5, 8, 11];

    const numQuestions = radios.length / 5;

    for (let i = 0; i < numQuestions; i++) {
        let questionScore = 0;
        const radioName = `question${i + 1}`;
        const selectedRadio = document.querySelector(`input[name="${radioName}"]:checked`);
        if (selectedRadio) {
            questionScore = parseInt(selectedRadio.value);
            totalScore += questionScore;
            if (group1Questions.includes(i + 1)) {
                group1Score += questionScore;
            } else if (group2Questions.includes(i + 1)) {
                group2Score += questionScore;
            } else if (group3Questions.includes(i + 1)) {
                group3Score += questionScore;
            } else if (group4Questions.includes(i + 1)) {
                group4Score += questionScore;
            } else if (group5Questions.includes(i + 1)) {
                group5Score += questionScore;
            }
        }
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `Your total score is: ${totalScore} <br>`;

    let comment = "";
    if (totalScore <= 42) {
        comment = "Your decision-making hasn't fully matured. You aren't objective enough, and you rely too much on luck, instinct or timing to make reliable decisions. Start to improve your decision-making skills by focusing more on the process that leads to the decision, rather than on the decision itself. With a solid process, you can face any decision with confidence. We'll show you how.";
    } else if (totalScore <= 66) {
        comment = "Your decision-making process is OK. You have a good understanding of the basics, but now you need to improve your process and be more proactive. Concentrate on finding lots of options and discovering as many risks and consequences as you can. The better your analysis, the better your decision will be in the long term. Focus specifically on the areas where you lost points, and develop a system that will work for you across a wide variety of situations.";
    } else if (totalScore <= 90) {
        comment = "You have an excellent approach to decision-making! You know how to set up the process and generate lots of potential solutions. From there, you analyze the options carefully, and you make the best decisions possible based on what you know. As you gain more and more experience, use that information to evaluate your decisions, and continue to build on your decision-making success. Think about the areas where you lost points, and decide how you can include those areas in your process.";
    } else {
        comment = "Thank you! We are thrilled that you loved our product.";
    }

    resultsDiv.innerHTML += `<strong>${comment}</strong> <br><br>`;

    resultsDiv.innerHTML += "making the right decision is not always easy<br><br>";

    resultsDiv.innerHTML += `Generate potential solutions: ${group1Score} <br>`;
    resultsDiv.innerHTML += `Decide: ${group2Score} <br>`;
    resultsDiv.innerHTML += `Check Your Decision: ${group3Score} <br>`;
    resultsDiv.innerHTML += `Communicate and Implement: ${group4Score} <br>`;
    resultsDiv.innerHTML += `Coaching and Mentoring: ${group5Score} <br>`;
    resultsDiv.innerHTML += `Total Group Score: ${group1Score + group2Score + group3Score + group4Score + group5Score} <br><br>`;

    const scores = [group1Score, group2Score, group3Score, group4Score, group5Score];
    const minScore = Math.min(...scores);
    const sortedScores = [...scores].sort((a, b) => a - b);
    const colors = scores.map(score => {
        if (score === minScore) return "red";
        if (score === sortedScores[1]) return "blue";
        return "grey";
    });

    let barChartHTML = "<div style='display: flex;'>";
    for (let i = 0; i < scores.length; i++) {
        barChartHTML += `<div class="bar ${colors[i]}" style="height: ${scores[i] * 10}px;">${scores[i]}</div>`;
    }
    barChartHTML += "</div>";

    resultsDiv.innerHTML += barChartHTML;

    resultsDiv.innerHTML += "<button onclick='window.print()'>Print</button>";
}

