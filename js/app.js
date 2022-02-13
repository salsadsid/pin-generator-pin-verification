let count = 3;
function pinGenerator() {
    let customPin = Math.round(Math.random() * 10000);
    let pinLength = customPin + "";
    if (pinLength.length != 4) {
        return pinGenerator();
    }
    return pinLength;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const getPin = pinGenerator();
    displayPin.style.textAlign = "center";
    displayPin.style.fontSize = "20px";
    displayPin.value = getPin;
})

document.getElementById('numbers').addEventListener('click', function (event) {
    const inputField = document.getElementById('input-pin');
    const number = event.target.innerText;
    inputField.style.textAlign = "center";
    inputField.style.fontSize = "20px";
    inputField.style.color = "20px";
    if (number == "C" || number == "<") {
        inputField.value = "";
    }
    else {
        const previousNumber = inputField.value;
        const newNumber = previousNumber + number;
        inputField.value = newNumber;
    }
})
const notifyWrong = document.getElementById('notify-wrong');
const notifyRight = document.getElementById('notify-right');
notifyWrong.style.display = "none";
notifyRight.style.display = "none";
document.getElementById('submit-pin').addEventListener('click', function () {
    const getDisplayPin = document.getElementById('display-pin');
    const getInputPin = document.getElementById('input-pin');
    const notifyWrong = document.getElementById('notify-wrong');
    const notifyRight = document.getElementById('notify-right');
    const tryLeft = document.getElementById('try-left');


    if (getDisplayPin.value == getInputPin.value) {
        if (getDisplayPin.value == "") {
            getDisplayPin.value = "Please Enter PIN";
            getDisplayPin.style.fontSize = "30px";
            getDisplayPin.style.color = "yellow";
            getDisplayPin.style.textAlign = "center";
        }
        else {
            notifyWrong.style.display = "none";
            notifyRight.style.display = "block";
        }

    }
    else if (count > 1) {
        notifyWrong.style.display = "block";
        notifyRight.style.display = "none";
        count--;
        tryLeft.innerText = count + " try left";
    }
})
document.getElementById('submit-pin').addEventListener('blur', function () {
    const notifyWrong = document.getElementById('notify-wrong');
    const notifyRight = document.getElementById('notify-right');
    notifyWrong.style.display = "none";
    notifyRight.style.display = "none";
})