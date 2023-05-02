function userData(num1: number, num2: number): number {
    return num1 + num2
}


// const result = userData(10, 10)


const bio = (input: string) => {
    // console.log(`hello ${input}`);
}

bio("Ami Robiul Alam")



const person: {
    name: string,
    age: number,
    isMale: boolean,
    addAge(add: number): string
} = {
    name: "Md. Robiul Alam",
    age: 20,
    isMale: true,
    addAge(add: number) {
        return `My Age ${this.age + add}`
    }
}


// default paramiter
const myAdd = (num1: number, num2: number = 20) => {
    console.log(num1 + num2);
}
// myAdd(20, 101)


const myFriends = ["Ashik", "Jiyarul", "Abdul Khalek"]
const newFriends = ["Surujjamal", "Md. Rabbi hasan"]

newFriends.push(...myFriends)
// console.log(newFriends);


const wishFriend = (...newFriends: string[]): void => newFriends.forEach((f) => console.log(`Hi ${f}\n`))

wishFriend("Ashik", "Jiyarul", "Abdul Khalek")


// how to distructuring array and object

const [name1] = myFriends
const { age } = person
console.log(name1, age);
