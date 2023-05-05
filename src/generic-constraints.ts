
type infoTypes = { name: string, sellary: number, address: string }
interface infoInterface { name: string, sellary: number, address: string }

const createNewInfo = <T extends infoInterface>(param: T): T => {
    const myName = "Robiul Alam"
    const newData = { ...param, myName }
    return newData
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

const newInfo1 = createNewInfo(myInfo)
// newInfo1.