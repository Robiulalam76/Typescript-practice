const numbers = [1, 2, 3, 4, 5, 6];

// numbers to string convert with map
const newNumbers = numbers.map((number) => number.toString())
// console.log(newNumbers);


type Volume = {
    height: number,
    width: number,
    depth: string
}

// type Area = {
//     [key in keyof Volume]: string
// }

type Area<T> = {
    readonly [key in keyof T]: T[key]
}

const result: Area<{ name: string }> = ({ name: "Md. Robiul alam" })
// result.name = "dfdfd"


function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

    const item = arr[index];

    return item[key];

}
const users = [{ name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

console.log(getArrayItem(users, 0, 'name'))

interface Person {

    firstName: string;

    lastName: string;

}


