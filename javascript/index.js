// const Chronometer = require("./chronometer");

const chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');



function printTime() {
    printMinutes();
    printSeconds();  
}

function printMinutes() {
    let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
    minDec.innerText = minutes[0];
    minUni.innerText = minutes[1];

    
}
// console.log(printMinutes())
function printSeconds() {
    let segundos = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
    secDec.innerText = segundos[0];
    secUni.innerText = segundos[1];
//   return chronometer.getSeconds();

}

// function printMilliseconds() { 
// }

function printSplit() {

    
    splits.push(chronometer.split());
     splits;
}

function clearSplits() {
    splits = "";
}

function setStopBtn() {
    // btnLeft.toggle("STOP");
    // btnLeft.toggle("START");
    // if (btnLeft.innerText === "START"){
    // chronometer.stop()
    // }
    // if (btnLeft.innerText === "STOP") {
    //     return start()
    // }
}

function setSplitBtn() {
    // if (btnLeft.innerText === "STOP") {
    //     btnRight.innerText = "SPLIT"
    // }
    // if (milUni > 0) {
    //     btnRight.innerText ="SPLIT";
    // }
    // if (btnLeft.innerText === "STOP"){
        btnRight.classList.toggle("SPLIT")
    // chronometer.split()
    // }
}

function setStartBtn() {
    // btnLeft.classList.toggle("btn start")
    // if (btnLeft.innerText === "START") {
    //     return stop()
    // }
    btnLeft.classList.toggle("START")    
    // btnLeft.toggle("STOP")
    // btnLeft.setAttribute("btnLeft", "start")
        chronometer.start(printTime)
    
}

function setResetBtn() {
    // if (btnLeft.innerText === "START") {
        btnRight.classList.toggle("RESET");
        // chronometer.split()
    // }
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
    // btnLeft.toggle("START")
    // btnLeft.toggle("STOP");
    if (btnLeft.innerText === "START"){
        // chronometer.start();
        setStopBtn();
        setSplitBtn();

    }else 
    chronometer.stop();
    setStartBtn;
    setResetBtn;



    // btnLeft.classList.toggle("btn start"); 
    // btnLeft.innerText = "STOP"
    // return start();


    // if (btnLeft.innerText === "START") {
    //     btnLeft.innerText = "STOP"
    // }
    // else if (btnLeft.innerText === "STOP") {
    //     btnLeft.innerText = "START"
    // }


    // btnLeft.classList.toggle("btn start")

    // btnLeft.classList.toggle("start")
    // btnLeft.classList.toggle("stop")
    // btnLeft.innerText = "STOP"   
    // chronometer.start()
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

    // btnRight.classList.toggle("btn reset")


    // if (btnLeft.innerText === "START") {
    //     btnRight.innerText = "RESET"
    // }
    // else if (btnLeft.innerText === "STOP") {
    //     btnRight.innerText = "SPLIT"
    // }
    if (btnRight.innerHTML === "RESET"){
        chronometer.reset();
        clearSplits();
    }
    else {
        chronometer.split()
    }


});
