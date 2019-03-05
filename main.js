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


const quote = 'winter is coming';
console.log(quote.indexOf('is')); //returns 7
console.log(quote.indexOf('bunny')); //returns -1

const catName = () => {
    return 'killer';
};

const bucketOCats = {
    cat1: 'fluffy',
    cat2: 5,
    cat3: catName,
    cat4: {
        water: 'nope',
        sunlight: 'yep'
    }
}


console.log(bucketOCats.cat2);
console.log(bucketOCats['cat2']);


let hitchhikers_guide = {
    characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
    catchphrase: "Don't Panic",
    random_facts: {
        copies_sold: 14000000,
        formats: ["radio", "TV", "film", "graphic novel"],
        ultimate_answer: {
            meaning_of_life: 42
        }
    }
};

console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);


let employee = {
    name: "Jeff Winger",
    age: 37,
    department: "legal",
    hire_date: "09/22/2010",
  }
  employee.vacation_days = 20;
  employee['vacation_days'] = 20;
    let eom = "employee_of_the_month";
    employee[eom] = false;

const answer1 = `The answer to question 1: Our company's lawyer is ${employee.name}<br><br>`;
const answer2 = `The answer to question 2: Jeff was hired on ${employee['hire_date']}<br><br>`;
const answer3 = `The answer to question 3: Jeff has ${employee.vacation_days} vacation days.<br>There seems to be no difference in dot or bracket notation<br><br>`;
const answer4 = `The answer to question 4: Is Jeff employee of the month? ${employee.eom}<br>The difference is dot uses "eom" while bracket uses "employee_of_the_month for the key"<br>`;
  


  const printToDom = (divId, textToPrint) => {

    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

printToDom('employeeDiv', answer1);
printToDom('employeeDiv', answer2);
printToDom('employeeDiv', answer3);
printToDom('employeeDiv', answer4);