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
    return ``;
  
}

function printMinutes() {
    return getMinutes();
}

function printSeconds() {
  return getSeconds();
}

function printMilliseconds() {
 
}

function printSplit() {
 return split();
}

function clearSplits() {
    return splits = "";
}

function setStopBtn() {
    if (btnLeft.innerText === "STOP") {
        return start()
    }
}

function setSplitBtn() {
    // if (btnLeft.innerText === "STOP") {
    //     btnRight.innerText = "SPLIT"
    // }
    if (milUni > 0) {
        btnRight.innerText ="SPLIT";
    }
    return split()
}

function setStartBtn() {
    // btnLeft.classList.toggle("btn start")
    if (btnLeft.innerText === "START") {
        return stop()
    }

}

function setResetBtn() {
    if (btnRight.innerText === "RESET") {
        return split()
    }
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

    // btnLeft.classList.toggle("btn start"); 
    // btnLeft.innerText = "STOP"
    // return start();



    if (btnLeft.innerText === "START") {
    //     btnLeft.innerText = "STOP"
    // }
    // else if (btnLeft.innerText === "STOP") {
    //     btnLeft.innerText = "START"
    // }


    // btnLeft.classList.toggle("btn start")

    



});

// Reset/Split Button
btnRight.addEventListener('click', () => {

    btnRight.classList.toggle("btn reset")


    // if (btnLeft.innerText === "START") {
    //     btnRight.innerText = "RESET"
    // }
    // else if (btnLeft.innerText === "STOP") {
    //     btnRight.innerText = "SPLIT"
    // }


});
