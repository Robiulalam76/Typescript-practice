class BankAccount {
    readonly id: string;
    readonly name: string;
    private _blance: number;

    constructor(id: string, name: string, blance: number) {
        this.id = id
        this.name = name
        this._blance = blance
    }
    getBlance() {
        console.log(`My Blance is ${this._blance}`);
    }
    depositBlance(amount: number) {
        return this._blance = this._blance + amount
    }
}

