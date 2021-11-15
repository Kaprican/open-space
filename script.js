function disableInputs() {
    let inputs = document.querySelectorAll("[type=checkbox], [type=range], .launch-button");
    for (let input of inputs) {
        input.disabled = true;
    }
}

function enableInputs() {
    let inputs = document.querySelectorAll("[type=checkbox], [type=range]");
    for (let input of inputs) {
        input.disabled = false;
    }
}

function checkPassword() {
    const checkedPassword = document.querySelector("input[type=password]");

    if (checkedPassword.value === "TrustNo1") {
        checkedPassword.disabled = true;
        document.querySelector(".check-password").disabled = true;
        enableInputs();
    }
}

function checkControls() {
    let isReadyToLaunch;

    let checkboxes = document.querySelectorAll("[type=checkbox]");
    let checks = [].map.call(checkboxes, function(obj) {
        return obj.checked;
    });

    let ranges = document.querySelectorAll("[type=range]");
    let rangeValues = [].map.call(ranges, function(obj) {
        return obj.value;
    });

    isReadyToLaunch = checks.every(elem => elem)
        && rangeValues.every(value =>  Number(value) === 100);

    if (isReadyToLaunch) {
        document.querySelector(".launch-button").disabled = false;
        console.log("Start enabled");
    } else {
        console.log("You are not ready. Please, check controls");
    }
}

function launchRocket() {
    let rocket = document.querySelector(".rocket");
    rocket.style.transform = "translate(40vw, -70vh) rotate(60deg)";
    // rocket.style.animation = "rocketMove 3s"
    rocket.style.transition = "all 2s ease-in";
    console.log("Let's rock!");
}

document.querySelector(".check-password")
    .addEventListener("click", checkPassword);

document.querySelector(".launch-button")
    .addEventListener("click", launchRocket);

document.querySelector(".levers")
    .addEventListener("change", checkControls);

document.querySelector(".check-buttons")
    .addEventListener("change", checkControls);

disableInputs();