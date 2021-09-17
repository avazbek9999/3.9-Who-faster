//html elements
var elForm = document.querySelector('.faster__form');
var elInput = elForm.querySelector('.Faster__input');
var elResultBox = document.querySelector('.list__item__paragraf');
var elResultBox2 = document.querySelector('.paragraf2');
var elResultBox3 = document.querySelector('.paragraf3');
var elResultBox4 = document.querySelector('.paragraf4');


//speed
var speedMan = 3.6;
var speedBike = 20.1;
var speedCar = 70;
var speedPlane = 800;


//calculate time Function

function calculetTime(distence, speed) {
    var hour = Math.floor(distence / speed);
    var minute = Math.floor((distence / speed - hour) * 60);
    var secound = Math.floor(((distence / speed - hour) * 60 - minute) * 60);
    return hour + ' soat ' + minute + ' minut ' + secound + ' sekund';
}


//submit function
function eventSubmit(evt) {
    evt.preventDefault();
    var distensInput = Number(elInput.value.trim());
    elInput.value = null;

    //early return 
    if (distensInput <= 0 || isNaN(distensInput)) {
        elInput.style.border = '2px solid red'
        return;
    } else {
        elInput.style.border = '2px solid green'   
    }
    
    
    elResultBox.textContent = calculetTime(distensInput, speedMan);
    elResultBox2.textContent = calculetTime(distensInput, speedBike);
    elResultBox3.textContent = calculetTime(distensInput, speedCar);
    elResultBox4.textContent = calculetTime(distensInput, speedPlane);
}

elForm.addEventListener('submit', eventSubmit)