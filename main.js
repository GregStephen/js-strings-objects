const thurstyDiv = document.getElementById("thursty");
const drinkBtn = document.getElementById("drinkBtn");
const ageNum = document.getElementById("age");
const waterPhoto = "https://images.pexels.com/photos/1201625/pexels-photo-1201625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const beerPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg";
const napPhoto = "https://scientia.com.au/wp-content/uploads/2017/05/grecian-urn-cedar-open.png";


const iAmThursty = (num) => {
    if (num < 21) {
        thurstyDiv.innerHTML = `You're only ${num}! Drink some water <br>
        <img src=${waterPhoto}>`;
    } else if (num < 65) {
        thurstyDiv.innerHTML = `Hey you're ${num}! Have a beer! <br>
        <img src=${beerPhoto}>`;
    } else {
        thurstyDiv.innerHTML = `Whoah, you're ${num}. Take a nap, ya old fuck. <br>
        <img src=${napPhoto}>`;
    }; 
};

drinkBtn.onclick = function(e) {
    e.preventDefault();
    iAmThursty(ageNum.value);
};

//  THIS IS THE PRINT TO DOM FUNCTION THAT YOU'LL USE /////////


// const printToDom = (divId, textToPrint) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML += textToPrint;
// };



// iAmThursty(55);
// iAmThursty(11);
// iAmThursty(67);

// print to DOM 