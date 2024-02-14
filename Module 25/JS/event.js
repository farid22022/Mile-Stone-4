console.log('This is separate JS file');
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */}
// option 1: directly set on the HTML

// option 2 : add onclick function on the html element 
// <button onclick="makeRed()">Make red</button>
function makeRed(){
    document.body.style.backgroundColor='red';
}

// option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick=makeBlue;
function makeBlue(){
    document.body.style.background='blue';
}
// option 3 (another)
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}



