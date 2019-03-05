const thurstyDiv = document.getElementById("thursty");
const drinkBtn = document.getElementById("drinkBtn");
const ageNum = document.getElementById("age");
const waterPhoto = "https://images.pexels.com/photos/1201625/pexels-photo-1201625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const beerPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg";
const napPhoto = "https://scientia.com.au/wp-content/uploads/2017/05/grecian-urn-cedar-open.png";
const babyPhoto ="https://assets.parents.com/s3fs-public/styles/nfp_1080_portrait/public/ZdorovKirillVladimirovich_0.jpg?HZo9_mI3Bdq5KNVEKWPF9SPETsqtRISw";
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];

const iAmThursty = (num) => {
    if (isNaN(num)){
      thurstyDiv.innerHTML = `bruh enter a number`;
    } else {
        if (num <= 0) {
            thurstyDiv.innerHTML = `Get out of here you baby/fetus! <br>
            <img src=${babyPhoto}>`;
        }else if (num < 21) {
            thurstyDiv.innerHTML = `You're only ${num}! Drink some water <br>
            <img src=${waterPhoto}>`;
        } else if (num < 65) {
            thurstyDiv.innerHTML = `Hey you're ${num}! Have a beer! <br>
            <img src=${beerPhoto}>`;
        } else {
            thurstyDiv.innerHTML = `Whoah, you're ${num}. Take a nap, ya old fuck. <br>
            <img src=${napPhoto}>`;
        }; 
    }
  
};

drinkBtn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "block";
    iAmThursty(ageNum.value);
    ageNum.value = "";
};


span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
}
//  THIS IS THE PRINT TO DOM FUNCTION THAT YOU'LL USE /////////


// const printToDom = (divId, textToPrint) => {
//     const selectedDiv = document.getElementById(divId);
//     selectedDiv.innerHTML += textToPrint;
// };



// iAmThursty(55);
// iAmThursty(11);
// iAmThursty(67);

// print to DOM 



const quote = 'winter is coming';
console.log(quote.indexOf('is')); //returns 7
console.log(quote.indexOf('bunny')); //returns -1