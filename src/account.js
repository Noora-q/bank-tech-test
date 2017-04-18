"use strict";

(function(exports) {

  function Account(name) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
  }

  exports.Account = Account;
})(this);
