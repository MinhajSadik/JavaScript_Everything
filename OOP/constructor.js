// function BankAccount(accountName, balance = 0) {
//   this.accountName = accountName;
//   this.balance = balance;
//   this.accountNumber = Date.now();

//   this.deposit = (amount) => {
//     this.balance += amount;
//   };

//   this.withdraw = (amount) => {
//     this.balance -= amount;
//   };
// }

// const minhaj = new BankAccount("Minhaj", 1000);
// const fahim = new BankAccount("Fahim", 10000);

// minhaj.deposit(5000);
// minhaj.withdraw(1000);

// console.log(minhaj);

//class
class BankAccount {
  constructor(accountName, balance = 0) {
    this.accountName = accountName;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  deposit = (amount) => {
    this.balance += amount;
  };

  withdraw = (amount) => {
    this.balance -= amount;
  };
}

const minhaj = new BankAccount("Minhaj", 1000);
const fahim = new BankAccount("Fahim", 10000);

minhaj.deposit(15000);
minhaj.withdraw(1000);

console.log(minhaj);
