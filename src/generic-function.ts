// // generic function

// const createArray = (param: string): string[] => {
//     return [param]
// }
// const createArray1 = <T>(param: T): T[] => {
//     return [param]
// }
// const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
//     return [param1, param2]
// }
// function createArray3<X, Y>(param1: X, param2: Y): [X, Y] {
//     return [param1, param2]
// }


// const result = createArray("Bangladesh")
// const result1 = createArray1<number>(100)
// const result2 = createArray2<number, string>(100, "Bangladesh")
// const result3 = createArray3<number, string>(100, "Bangladesh")

// interface IMyData {
//     name: string
// }
// const result4 = createArray2<IMyData, IMyData>({ name: "Robiul" }, { name: "Sakil Khan" })


// // spread oparator

// // const createNewInfo = (param: object): object => {
// //     const myName = "Robiul Alam"
// //     const newData = { ...param, myName }
// //     return newData
// // }
// const createNewInfo = <T>(param: T): T => {
//     const myName = "Robiul Alam"
//     const newData = { ...param, myName }
//     return newData
// }


// const myname: string = "Robiul Alam"
// const myInfo = {
//     age: 20,
//     proffesion: "student",
//     address: "Thakurgaon"
// }

// const newInfo = { ...myInfo, myname }
// const newInfo1 = createNewInfo(myInfo)