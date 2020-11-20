let popCounter = 0;

const balloons = document.querySelectorAll('.balloon');
const endText = document.querySelector('#say-no-balloons');

function popBalloon() {
    this.setAttribute('class', 'inVisible');
    console.log(this.getAttribute('class'));
    if ((popCounter += 1) == 25) endText.setAttribute('style', 'display: inline');
}

(function setBalloonsPopEvent() {
    balloons.forEach(balloon => balloon.addEventListener('mouseover', popBalloon));
})()
