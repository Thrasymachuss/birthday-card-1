const card = document.querySelector(".card-inner");
const btnFront = document.querySelector(".btn-front");
const btnBack = document.querySelector(".btn-back");

function changeColor() {
    const bg = window.getComputedStyle(card).backgroundColor;

    const strippedBg = bg.slice(4, bg.length - 1).split(',');
    const currentColors = [
        parseInt(strippedBg[0]), 
        parseInt(strippedBg[1]), 
        parseInt(strippedBg[2])
    ];

    let first255Index;
    for (let i=0; i<3; i++) {
        if (currentColors[i] === 255) {
            first255Index = i;
            break;
        }
    }

    const previousIndex = first255Index === 0 ? 2 : first255Index - 1;
    const nextIndex = first255Index === 2 ? 0 : first255Index + 1;


    if (currentColors[nextIndex] === 255) {
        currentColors[first255Index] -= 5;
    } else if (currentColors[previousIndex] === 0) {
        currentColors[nextIndex] += 5;
    } else {
        currentColors[previousIndex] -= 5;
    }

    card.style.backgroundColor = `rgb(${currentColors[0]},${currentColors[1]},${currentColors[2]})`;
}

function flipCard() {
    card.classList.toggle('flipped');
}


setInterval(changeColor, 100);
btnFront.addEventListener('click', flipCard);
btnBack.addEventListener('click', flipCard);
