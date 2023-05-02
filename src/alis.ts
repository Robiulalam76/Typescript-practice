type BrotherType = {
    name: string,
    age: number,
    profession: string,
    isMuslim: boolean
}

const myBrother1: BrotherType = {
    name: "Md. Ashikur Rohman",
    age: 20,
    profession: "Agriculture",
    isMuslim: true
}

const myBrother2: BrotherType = {
    name: "Md. Abdul Khalek",
    age: 20,
    profession: "Student",
    isMuslim: true
}


//------------------------------------
type AgeType = boolean
const isAge20: AgeType = true

//------------------------------------
type FriendsType = string[]

const allFriends: FriendsType = ["Ashik", "Jiyarul", "Abdul Khalek"]

//------------------------------------
type actionType = (x: number, y: number) => number

const calculation = (num1: number, num2: number, action: actionType) => {
    return action(num1, num2);
}

console.log(calculation(10, 20, (x, y) => x + y));
console.log(calculation(100, 20, (x, y) => x - y));
console.log(calculation(10, 20, (x, y) => x * y));