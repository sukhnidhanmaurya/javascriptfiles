//let marks = [88,46,332,,46,44,64];
//console.log(marks); 

  // for loop  
let heroes = ["ironman","hulk","thor","antman","captain"];

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);

    }

    //for of 
    for (let hero of heroes) {
        console.log(hero);
    }

    //practice

    let marks = [78, 78 ,89 ,86,90];
    let sum = 0;

    for (let val of marks) {
        sum += val;
    }

    let avg = sum / marks.length;
    console.log(`avg marks of the class = ${avg}`);
     
    let food = ["rice","dal","paner"];

    console.log(food);
     
    let marvelheros = ["thor","ironman"];
    let dcheroes = ["superhero","batman"];


let heros = marvelheros.concat(dcheroes);
console.log(heros);