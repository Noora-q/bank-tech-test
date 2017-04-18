// "use strict";

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

  Account.prototype.calculateBalance = function (type_of_transaction, amount) {
    if (type_of_transaction === 'credit') {
      return this.balance += amount;
    }
    else if (type_of_transaction === 'debit') {
      return this.balance -= amount;
    }
  };

  Account.prototype.newTransaction = function (type_of_transaction, amount) {
    var transaction = {
      [type_of_transaction]: amount,
      balance: this.calculateBalance(type_of_transaction, amount),
      date: convertDateToString(new Date())
    };

    this.transactions.push(transaction);
  }

  Account.prototype.statement = function () {
    statementDisplay = 'date || credit || debit || balance';
    this.updateStatement();
    return statementDisplay;
  };

  Account.prototype.updateStatement = function () {
    this.transactions.map(function(transaction) {
      statementDisplay += ('\n' + transaction.date + ' || ' + transaction.credit + ' || ' + transaction.debit + ' || ' + transaction.balance);
      statementDisplay = statementDisplay.replace('undefined', ' ');
    });
  };

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
