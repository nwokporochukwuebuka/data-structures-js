// function addTo80(n) {
//     console.log('long time');
//     return n + 80;
// }

// // this is a form of memoization 


// function memoizedAddTo80(n){
//     let cache = {};
//     return function(n){
//         if (n in cache){ // similar to saying cahe.n
//             return cache[n]
//         } else {
//             console.log("long time");
//             cache[n] = n + 80;
//             return cache[n];
//         }
//     }
// }

// // console.log(addTo80(5));
// // console.log(addTo80(5));
// // console.log(addTo80(5));

// // const memoized = memoizedAddTo80();

// // console.log('1', memoized(5));
// // console.log('2', memoized(6));


// // fibonacci series and recursion

// let calculations = 0;

// function fibonacci(n) {
//     console.log(calculations++);
//     if (n < 2) {
//         return n;
//     }
//     return fibonacci(n-1) + fibonacci(n-2);
// }

// console.log(fibonacci(7));


// writing my ow fibonacci's series that prints out the
// series up to the provided number

function displayFibonacci(n) {
    

    let arrNum = [0, 1];

    for (let begin = 1; begin < n; begin++) {
        arrNum.push(arrNum[begin] + arrNum[begin - 1]);
    }

    console.log(arrNum);
}

console.log(displayFibonacci(9))