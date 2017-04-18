"use strict";

(function(exports) {

  function Account(name) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
  }

  Account.prototype.deposit = function (amount) {
    this.newTransaction('credit', amount);
  };

  Account.prototype.withdraw = function (amount) {
    this.newTransaction('debit', amount);

  };

  Account.prototype.calculateBalance = function (kind_of_transaction, amount) {
    if (kind_of_transaction === 'credit') {
      return this.balance += amount;
    }
    else if (kind_of_transaction === 'debit') {
      return this.balance -= amount;
    }
  };

  Account.prototype.newTransaction = function (kind_of_transaction, amount) {
    var transaction = {
      [kind_of_transaction]: amount,
      balance: this.calculateBalance(kind_of_transaction, amount),
      date: convertDateToString(new Date())
    };

    this.transactions.push(transaction);
  }

  function convertDateToString(date) {
    var day = date.getDate()
    var month = date.getMonth()
    var year = date.getFullYear()

    if (month < 10) {
      return day + "/0" + month + "/" + year
    }
    return day + "/" + month + "/" + year
  }
  exports.Account = Account;

})(this);
