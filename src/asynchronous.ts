type promiseType = string
type promiseBooleanType = boolean
type promiseObjectType = object


// string type
const makePromise = (): Promise<promiseType> => {
    return new Promise((resolved, reject) => {
        const data: promiseType = "Hello world"
        if (data) {
            resolved(data)
        } else {
            reject("Data Rejected")
        }
    })
}

// boolean type
const makePromiseBoolean = (): Promise<promiseBooleanType> => {
    return new Promise((resolved, reject) => {
        const data: promiseBooleanType = true
        if (data) {
            resolved(data)
        } else {
            reject("Data Rejected")
        }
    })
}

// object type
const makePromiseObject = (): Promise<promiseObjectType> => {
    return new Promise((resolved, reject) => {
        const data: promiseObjectType = { data: "data Fetched" }
        if (data) {
            resolved(data)
        } else {
            reject("Data Rejected")
        }
    })
}


const fetchPromise = async (): Promise<void> => {
    const data = await makePromise()
    console.log(data);
}



interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const fetchTodo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return response.json()
}


const getTodoData = async (): Promise<void> => {
    const data = await fetchTodo()
    console.log(data);
}

getTodoData()



