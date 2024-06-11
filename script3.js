/* for (let count = 1; count<= 994; count++) { 
    console.log("sukh nidhan");
}

console.log("loop has ended"); */

/*let sum = 0;
let n = 100;

for(let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("sum =", sum);
console.log("loop has end"); */

/* let i = 1;
while(i <= 10) {
    console.log("sukh nidhan");
    i++;
} */
/* let  i = 1; 
do {
    console.log("i =",i);
    i++;
} while (i <= 7); */

/* let str = "sukh nidhan";

let size = 0;
for (let val of str) {
    console.log("val=", val);
    size++;
}
 console.log("string size =", size); */


/*  let student = {
    name: "sukh nidhan",
    age: 20,
    cgpa: 7.5,
    ispass: true,
 };

 for (let key in student) {
    console.log("key=", key, "value=", student[key]);
 } */

/* for ( let num=0; num <=100; num++) {
    if (num%2== 0)
 console.log("num=", num);
 } */

/* let gamenum = 2;

let usernum = prompt("guess the game number :");
while (usernum != gamenum) {
   usernum = prompt("You entered wrong number. Guess again : ");
}

console.log("congratulation, you entered the right number"); */

//string

/* let str = "sukh nidhn";

console.log(str[8]);

//template literals 

let specialstring = `this is a template literal`;
console.log(typeof specialstring);

let obj = {
    item: "pen",
    price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of", obj.item, "is", obj.price, "rupees"); */

/* let str = "           sukh nidhan         "; 
console.log(str.trim()); */


/* let str = "hello";
console.log(str.slice());

let str1 = "sukh";
let str2 = "nidhan";

let res = str1 + str2;
console.log(res); */

/* let str = "hello";
console.log(str.replaceAll("lo","p")); */

//practice

let fullName = prompt("enter your fullName without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);