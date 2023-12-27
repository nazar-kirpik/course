const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
    const acceptedColors = [
        'red',
        'green',
        'blue',
        'purple',
        'pink',
        'orange',
        'yellow',
        'brown',
        'black',
        'white',
    ]

    for (let i = e.resultIndex; i < e.results.length; i++) {
        let script = e.results[i][0].transcript.toLowerCase().trim();
        if (script[script.length-1] === '.'){
            script = script.slice(0, script.length-1)
        }
        console.log(script);
        console.log(acceptedColors.includes(script))
        if (acceptedColors.includes(script)) {
            document.body.style.backgroundColor = script;
        } else {
            alert('Please say a color');
        }
    }
}

rec.start();
