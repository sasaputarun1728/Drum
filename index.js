var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInner = this.innerHTML;
        makesound(buttonInner);
        buttonAnimation(this); // Pass the button element itself
    });
}

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonAnimation(document.querySelector("." + event.key)); // Pass the corresponding button element
});

function makesound(key) {
    var audio;
    switch (key) {
        case "a":
            audio = new Audio("drum songs/tom1.mp3.wav");
            break;
        case "s":
            audio = new Audio("drum songs/tom2.mp3.wav");
            break;
        case "d":
            audio = new Audio("drum songs/tom3.mp3.mp3");
            break;
        case "f":
            audio = new Audio("drum songs/tom4.mp3.wav");
            break;
        case "g":
            audio = new Audio("drum songs/tom5.mp3.wav");
            break;
        case "h":
            audio = new Audio("drum songs/tom6.mp3.wav");
            break;
        case "j":
            audio = new Audio("drum songs/tom7.mp3.wav");
            break;
        case "k":
            audio = new Audio("drum songs/h.mp3");
            break;
        case "l":
            audio = new Audio("drum songs/i.mp3");
            break;
        case "c":
            audio = new Audio("drum songs/j.mp3");
            break;
        case "v":
            audio = new Audio("drum songs/k.mp3");
            break;
        case "b":
            audio = new Audio("drum songs/l.mp3");
            break;
        case "n":
            audio = new Audio("drum songs/m.mp3");
            break;
        case "m":
            audio = new Audio("drum songs/n.mp3");
            break;
        default:
            console.log(key);
            return;
    }
    audio.play();
}

function buttonAnimation(button) {
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100);
}
