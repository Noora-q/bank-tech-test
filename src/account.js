"use strict";

(function(exports) {

  function Account(name) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
  }

  Account.prototype.deposit = function (amount) {
    this.balance += amount;
  };

  Account.prototype.withdraw = function (amount) {
    this.balance -= amount;
  };

  exports.Account = Account;
})(this);
