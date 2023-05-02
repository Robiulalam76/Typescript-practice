// ----------for ternary oparator----------

const year: number = 18;

// if (year >= 20) {
//     console.log("Yaung");
// }
// else {
//     console.log("child");
// }

const result = year >= 20 ? "Yaung" : "child"
// console.log(result);

// ----------for ternary oparator----------


const authentication = 42
const username = authentication ?? "Ghuest"
const isUser = authentication ? authentication : "ghuest"

// console.log({ username }, { isUser });

function generateAdder(a: number): (b: number) => number {

    return function (b: number) {

        return a + b;

    };

}



const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));