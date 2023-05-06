type Alphaneumberic = number | string

function add(param1: Alphaneumberic, param2: Alphaneumberic): Alphaneumberic {
    if (typeof param1 == "number" && typeof param2 == "number") {
        return param1 + param2
    }
    else {
        return `${param1.toString() + param2.toString()}`
    }
}




// ------------in guard------------
type NormalUserType = {
    name: string
}
type AdminUserType = {
    name: string,
    role: "admin"
}


function getUser(user: NormalUserType | AdminUserType) {
    if ("role" in user) {
        return `i am an admin and my role is ${user.role}`
    }
    else {
        return `i am a normal user`
    }
}


const normaluser1: NormalUserType = { name: "robiul" }
const adminuser1: AdminUserType = { name: "sakil khan", role: 'admin' }

console.log(getUser(normaluser1));
console.log(getUser(adminuser1));


// ------------instance------------

class Animal {
    name: string;
    speacies: string;

    constructor(name: string, speacies: string) {
        this.name = name
        this.speacies = speacies
    }

    makeSound() {
        console.log(`Meaw Meaw`);
    }
}
class Dog extends Animal {
    constructor(name: string, speacies: string) {
        super(name, speacies)
    }
    makeDog() {
        console.log(`Dog is ghew ghew`);
    }
}
class Cat extends Animal {
    constructor(name: string, speacies: string) {
        super(name, speacies)
    }
    makeCat() {
        console.log(`Cat is Mew mew`);
    }
}


function isDog(animal: Animal): animal is Dog {
    return animal instanceof Dog
}
function isCat(animal: Animal): animal is Cat {
    return animal instanceof Cat
}


function getAnimal(animal: Animal) {
    // if (animal instanceof Dog) {
    if (isDog(animal)) {
        animal.makeDog()
    }
    // else if (animal instanceof Cat) {
    else if (isCat(animal)) {
        animal.makeCat()
    }
    else {
        animal.makeSound()
    }
}


const animal1 = new Dog("Dog", "ghew Ghew");
const animal2 = new Cat("Cat", "Mew Mew");

getAnimal(animal1)


