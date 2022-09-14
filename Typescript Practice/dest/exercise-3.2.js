"use strict";
const bankAccount = {
    money: 0,
    deposit(value, message) {
        this.money += value;
        if (typeof message !== 'undefined') {
            console.log(message);
        }
    }
};
bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received');
console.log('[Exercise 3.2]', `Account value: $${bankAccount.money}`);
