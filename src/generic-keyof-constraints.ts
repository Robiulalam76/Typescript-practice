

const createNewInfo = <X, Y extends keyof X>(obj: X, key: Y) => {
    obj[key]
}

interface IMyinfo {
    name: string,
    sellary: number,
    address: string,
    other1?: string
}

const myInfo: IMyinfo = {
    name: "robiul alam",
    sellary: 20000,
    address: "Thakurgaon",
    other1: "ace"
}

type newType = "name" | "age" | "sellary";
type newTypeOfKeyof = keyof IMyinfo;
const a: newType = "age"
const b: newTypeOfKeyof = "name"

const newInfo1 = createNewInfo(myInfo, "name")
// newInfo1.