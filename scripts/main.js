const form = document.querySelector('form');
const calc = document.getElementById('calc-btn');
const stdTotal = document.getElementById('act-Total');
const stdTip = document.getElementById('act-Tip');
const rndTotal = document.getElementById('round-Total');
const rndTip = document.getElementById('round-Tip');
const quickBtns = document.getElementById('quick-calc-btn').childNodes;
const percentInput = document.getElementById('percent-input');


// FUNCTIONS
const calculateTip = (total, tip) => {
    let actTip = (total * (tip / 100)).toFixed(2);
    let actTotal = (total + (total * (tip / 100))).toFixed(2);
    let roundTotal = Math.ceil(actTotal).toFixed(2);
    let roundTip = (roundTotal - total).toFixed(2);

    displayDetails(actTotal, actTip, roundTotal, roundTip);
}

const quickPercent = (x) => {
    percentInput.value = x;
}

const displayDetails = (aTotal, aTip, rTotal, rTip) => {

    stdTip.innerText = `To Tip: $${aTip}`
    stdTotal.innerText = `Total: $${aTotal}`
    rndTip.innerText = `To Tip: $${rTip}`
    rndTotal.innerText = `Total: $${rTotal}`

    stdTip.style = `color: black;`;
    stdTotal.style = `color: black;`;
    rndTip.style = `color: black;`;
    rndTotal.style = `color: black;`;

    form[0].value = '';
    form[1].value = '';
}

// EVENT LISTENERS
quickBtns[1].addEventListener('click',() =>  quickPercent(15));
quickBtns[3].addEventListener('click',() =>  quickPercent(20));
quickBtns[5].addEventListener('click',() =>  quickPercent(25));

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let total = Number(form[0].value);
    let tipPercent = Number(form[1].value);

    calculateTip(total, tipPercent);
});