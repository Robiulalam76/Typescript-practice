const searchName = (value: string | null) => {
    if (value === null) {
        console.log("There is Nothing to search");
    }
    else {
        console.log("searching");
    }
}

// searchName(null)


const speedResult = (input: unknown): void => {
    console.log(input);
}

// speedResult("d4fd5")


// error handling

function trowError(message: string) {
    throw new Error(message)
}

console.log(trowError("this is Error"));