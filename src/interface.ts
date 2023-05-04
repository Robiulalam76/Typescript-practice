
interface IStudent {
    student: boolean
}

// interface
interface IUser extends IStudent {
    name: string,
    age: number
}

type studentType = {
    student: boolean
}

// type alias
type userType = studentType & {
    name: string,
    age: number,
    student: true
}

// used interface
const user: IUser = {
    name: "Md Robiul alam",
    age: 20,
    student: true
}

// used type alias
// const user: userType = {
//     name: "Md. Robiul Alam",
//     age: 20
// }


// for function
type numberType = (num1: number, num2: number) => number
interface IaddNumbers {
    (num1: number, num2: number): number
}
// const addNumbers: numberType = (num1, num2) => num1 + num2
const addNumbers: IaddNumbers = (num1, num2) => num1 + num2


// for array
type rollsType = number[]
interface Irolls {
    [index: number]: number
}
// const rolls: rollsType = [1, 2, 3, 4, 5];
const rolls: Irolls = [1, 2, 3, 4, 5];