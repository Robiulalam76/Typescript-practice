type noobLavelDeveloperType = {
    name: string
}

const noobLavelDeveloper: noobLavelDeveloperType = {
    name: "Robiul",
}


type juniorLavelDeveloperType = noobLavelDeveloperType & {
    address: string,
    profession: string,
    isMuslim: boolean
}


// example: 1
const juniorLavelDeveloper1: noobLavelDeveloperType & juniorLavelDeveloperType = {
    name: "Md. Robiul Alam",
    address: "Dhaka",
    profession: "web Developer",
    isMuslim: true
}

// example: 2 because => line: 10   type juniorLavelDeveloperType = noobLavelDeveloperType & {
const juniorLavelDeveloper2: juniorLavelDeveloperType = {
    name: "Md. Robiul Alam",
    address: "Dhaka",
    profession: "web Developer",
    isMuslim: true
}