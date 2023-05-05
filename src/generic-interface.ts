// generic interface 
interface Icrush1<T> {
    name: string,
    husband: T
}
interface Icrush2<T, U = null> {
    name: string,
    husband: T,
    wife?: U
}


interface IcrushNameAge {
    name: string,
    age: number
}

const crush1: Icrush1<boolean> = {
    name: "robiul alam",
    husband: true
}
const crush2: Icrush2<string> = {
    name: "robiul alam",
    husband: "Ahlia"
}



const crush3: Icrush2<IcrushNameAge, IcrushNameAge> = {
    name: "robiul alam",
    husband: { name: "abc", age: 20 },
    wife: { name: "abc", age: 20 }
}


type MyRoleNumbersType<T> = Array<T>

const myRollNumbers: MyRoleNumbersType<number> = [1, 2, 3, 4, 5, 6];
const myFreinds: MyRoleNumbersType<string> = ["Robiul", "ashik", "Jiyarul"];
const myFriend: MyRoleNumbersType<boolean> = [true, false];

type TuopleType<X, Y> = [X, Y]
const nameAndRoll: TuopleType<string, number> = ["robiul", 200];

type relationType = { name: string, sellery: number }

// const nameAndSallery: TuopleType<{ name: string, sellery: number }, string> = [
const nameAndSallery: TuopleType<relationType, relationType> = [
    { name: "robiul alam", sellery: 200 },
    { name: "robiul alam", sellery: 200 },
]