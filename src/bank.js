(function(exports) {

  function Bank() {
    this.accounts = [];
  }

  Bank.prototype.createAccount = function (name) {
    this.accounts.push(new Account(name));
  };


  exports.Bank = Bank;

})(this);
