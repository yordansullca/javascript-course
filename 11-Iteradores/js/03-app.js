const numero = 15;

// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0&& i % 5 === 0 ) {
//         console.log(`${i}: FIZZBUSS`);
//         continue;
//     } 

//     if (i % 3 === 0) {
//         console.log(`${i}: fizz`);
//     }

//     if (i % 5 === 0) {
//         console.log(`${i}: buzz`);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     switch (true) {
//         case (i % 3 === 0 && i % 5 === 0):
//             console.log(`${i}: FIZZBUSS`);
//             break;
//         case i % 3 === 0 :
//             console.log(`${i}: fizz`);
//             break;

//         case  i % 5 === 0:
//             console.log(`${i}: buss`);
//             break;

//         default:
//             break;
//     }
// }

for (let i = 1; i < 100; i++) {
    
    if (i % 15 === 0) {
        console.log(`${i}: FIZZBUSS`);
    } else if (i % 3 === 0) {
        console.log(`${i}: fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i}: buss`);
    } 
}

