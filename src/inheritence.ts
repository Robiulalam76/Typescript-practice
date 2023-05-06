class Parent {
    name: string;
    address: string;
    age: number;

    constructor(name: string, age: number, address: string) {
        this.name = name,
            this.address = address,
            this.age = age
    }

    makeSleep(hours: number): string {
        return `this ${this.name} will sleep for ${hours}`;
    }
}


class Student extends Parent {
    constructor(name: string, age: number, address: string) {
        super(name, age, address)
    }
}

const student1 = new Student("robiul", 20, "thakurgaon");
student1.makeSleep(8)


class Teacher extends Parent {
    designation: string;

    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation
    }
    takeClasse(numberOfClass: number): string {
        return `${this.name} will this ${numberOfClass}`
    }
}

const teacher1 = new Teacher("Habib", 26, "Bhully Bazar", "Teacher");
teacher1.takeClasse(8)