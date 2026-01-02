function BankAccount(customerName, openingBalance=0) {
    // by default, balance is 0 if not provided
    this.customerName = customerName;
    // account number is not passed as parameter, it is generated automatically
    this.accountNumber = Date.now();// date.now gives current time in miliseconds, it is used as unique account number
    this.openingBalance = openingBalance;

    //this.deposit = function(ampount) {
    //   this.balance += ampount;
    //};

    //this.withdraw = amount => {
    //  this.balance -= amount;
    //};
    
}

//const RakeshAccount = new BankAccount('Rakesh', 5000);
//const JohnAccount = new BankAccount('John');

//JohnAccount.deposit(1000);
//RakeshAccount.deposit(2000);
//JohnAccount.withdraw(500);
//console.log(RakeshAccount, JohnAccount);
const accounts = [];
const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const openingBalance = document.querySelector('#balance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const depositAmount = document.querySelector('#amount');

accountForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    const account = new BankAccount(customerName.value, +openingBalance.value);
    accounts.push(account);
    console.log(accounts);
});

depositForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    const account = accounts.find((account) => account.accountNumber === +accountNumber.value)
    account.deposit(+depositAmount.value);
    console.log(accounts);
    
});


