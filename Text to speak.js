var speech = new SpeechSynthesisUtterance();

        function speak() {
            var textToSpeak = document.getElementById('textToSpeak').value;
            if (textToSpeak.trim() !== "") {
                speech.text = textToSpeak;
                speech.rate = 1;
                speech.volume = 1;
                speech.pitch = 2;
                window.speechSynthesis.speak(speech);
            } else {
                alert("Please enter some text.");
            }
        }