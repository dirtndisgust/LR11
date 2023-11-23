$(function(){
    const words = [
        { word: "evolution", translation: "еволюція" },
        { word: "gradual", translation: "поступовий" },
        { word: "response", translation: "відповідь" },
        { word: "accompany", translation: "супроводжувати" },
        { word: "culture", translation: "культура" },
        { word: "darkness", translation: "темрява" },
        { word: "partial", translation: "частковий" },
        { word: "anthem", translation: "гімн" },
        { word: "crowd", translation: "натовп" },
        { word: "natural", translation: "природний" },
        { word: "wild", translation: "дикий" },
        { word: "desert", translation: "пустеля" },
        { word: "wasteness", translation: "марнотратство" },
        { word: "angle", translation: "кут" },
        { word: "context", translation: "контекст" },
        { word: "event", translation: "подія" },
        { word: "consequence", translation: "наслідок" },
        { word: "issue", translation: "проблема" },
        { word: "rise", translation: "підніматися" },
        { word: "billow", translation: "хвилі" },
        { word: "graceful", translation: "витончений" },
        { word: "fluid", translation: "рідина" }
    ];
    
    let step = 1;
    let correct = 0;
    let incorrect = 0;
    
    function showWord(){
        let word = words[Math.floor(Math.random() * words.length)];
        $("#word").text(word.word);
    }

    function updateStep(){
        if(step <= 10)
            $("#step").text(step);
    }

    function resetGame(){
        step = 1;
        correct = 0;
        incorrect = 0;
        $("#step").text(step);
        $("#correct").text("0");
        $("#incorrect").text("0");
    } 

    showWord();
    $("#word").click(function(){
        let userTranslation = $("#translationInput").val().trim().toLowerCase();
        let currentWord = words.find(word => word.word == $("#word").text());
        if(userTranslation == currentWord.translation){
            correct++;
            $("#correct").text(correct);
        }
        else {
            incorrect++;
            $("#incorrect").text(incorrect);
        }
        step++;
        updateStep();
        $("#translationInput").val("");
        if (step <= 10)
            showWord();
        if((correct + incorrect) == 10) {
            setTimeout(function(){
                alert(`Ваш рівень знань мови: ${correct*10}%`);
                resetGame();
                showWord();
            }, 30);
        }
        if(correct + incorrect != 10 && step == 11){
            setTimeout(function(){
                alert("Надайте відповідь на 10 запитань! Вашу відповідь анульовано");
                resetGame();
                showWord();
            }, 30);
        }
    });

    $("#prevStep").click(function(){
        if (step > 1) {
            step--;
            updateStep();
            showWord();
        }
    });
    
    $("#nextStep").click(function(){
        if (step < 10) {
            step++;
            updateStep();
            showWord();
        }
    });
});
