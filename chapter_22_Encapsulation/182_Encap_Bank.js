class ICICI {
    #balance;    // # means private in JS, In Typescript - private

    constructor(name, balance) {
        this.#balance = balance;
        this.name = name;
    }

    getBalance() {
        return this.#balance;
    }

    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        } else {
            console.log("Not allowed")
        }
    }

}

let venkat = new ICICI("Venkat", 1000);
console.log(venkat.getBalance());
venkat.setBalance(10000000, false);
console.log(venkat.getBalance());

let venkat_father = new ICICI("Veennkat", 2000);
console.log(venkat_father.getBalance());
venkat_father.setBalance(30000, true);
console.log(venkat_father.getBalance());

