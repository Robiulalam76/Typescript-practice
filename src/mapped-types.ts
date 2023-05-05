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
