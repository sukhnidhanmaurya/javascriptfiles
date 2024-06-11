/*function sum (x, y) {
    s = x + y ;
    return s;
}


 let val = sum(3,4);

 console.log(val);
*/

/* function sum (a , b) {
    return a * b ;
}

const arrowMull =  (a , b) => {
    console.log(a+b);
} */
/*
    function countvowels(str)  {
        let count = 0;
        for(const char of str) {
            if( char === "a" || char === "e" || char ==="o" || char === "u") {
                count++;
            }
        }

        console.log(count);
    }

    */

  /*  let arr = ["sultanpur","lucknow"];
    arr.forEach((val, idx , arr) => {
        console.log(val.toUpperCase(), idx, arr) ; 
    }); */

    // partice

    /* let nums = [9792];
    
    nums.forEach((num) => {
        console.log(num*num);
    }); */

    /*

let nums = [23,32,44];

let newarr = nums.map((val) => {
    return val * val;
});
console.log(newarr);

let calcsquare = (num) => {
    console.log(num*num);
};
 */
    
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);