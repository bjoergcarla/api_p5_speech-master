let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt;
let kakao, bjoerg, fravaer, malthe, javascript, imageHolder;
let myVoice
function setup() {

    imageHolder= createDiv();
    kakao = loadImage('img/kakao.jpg'); // Load the image
    bjoerg = loadImage('img/bjoerg.jpg'); // Load the image
    malthe = loadImage('img/malthe.jpg'); // Load the image
    javascript = loadImage('img/javascript.jpg'); // Load the image
    fravaer = loadImage('img/Fravaer.png'); // Load the image

    //Jeg sætter en kommentar her
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(400, 600);
    background('red');
    txt = createElement("h5", "Say something..")
        .position(40, 200)
        .style("color:white;")
        .hide();

    resultP = createP("")
        .position(40, 220)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        myVoice = new p5.Speech()
        myVoice.setLang('da-DK')
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {
image(kakao, 0, 240, 400, 370).hide;
image(bjoerg, 0, 240, 400, 370).hide;
image(malthe, 0, 240, 400, 370).hide;
image(fravaer, 0, 240, 400, 370).hide;
image(javascript, 0, 240, 400, 370).hide;


}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString;
        resultP.html(sentence);

        if (sentence.includes("kakao")) {
            image(kakao, 0, 240, 400, 370);
        };
        if (sentence.includes("fravær")) {
            image(fravaer, 0, 240, 400, 370);
        };
        if (sentence.includes("måltid")) {
            image(malthe, 0, 240, 400, 370);
        };
        if (sentence.includes("feltmadras")) {
            image(bjoerg, 0, 240, 400, 370);
        };
        if (sentence.includes("programmering")) {
            image(javascript, 0, 240, 400, 370);

            //Hej, jeg ligner et måltid og Bjørg er en feltmadras.
            //Vi kan godt lide kakao.
            //Vi har ret højt fravær og vi kan godt lide programmering.

        }

    }
}