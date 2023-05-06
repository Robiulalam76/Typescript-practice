class Counter {
    static count: number = 0

    // constructor(count: number) {
    //     this.count = count
    // }

    static increament() {
        return Counter.count = Counter.count + 1
    }
    static dicreament() {
        return Counter.count = Counter.count - 1
    }
}


// const instance1 = new Counter()
// const instance2 = new Counter()

console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());