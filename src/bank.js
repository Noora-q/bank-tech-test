(function(exports) {

  function Bank() {
    this.accounts = [];
  }

  Bank.prototype.createAccount = function (name) {
    this.accounts.push(new Account(name));
  };

  Bank.prototype.getAccount = function (name) {
    for (var i = 0; i < this.accounts.length; i ++) {
      if (name === this.accounts[i].name) {
        return this.accounts[i];
      } else {
        throw 'No account associated with this name.';
      }
    }
  };

  Bank.prototype.printAccountStatement = function (name) {
    return this.getAccount(name).statement();
  };


  exports.Bank = Bank;

})(this);
