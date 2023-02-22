
   
function speak() {
    let text = document.getElementById('text').value;
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
speak();

