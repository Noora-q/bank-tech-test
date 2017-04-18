// "use strict";

describe('Account', function() {
  var newAccount;

  beforeEach(function() {
    newAccount = new Account('Noora');
  });

  it('exists', function() {
    expect(Account).toBeDefined();
  });

  it('is associated with the account holder\'s name', function(){
    expect(newAccount.name).toEqual('Noora');
  });

  it('has a default balance of 0', function(){
    expect(newAccount.balance).toEqual(0);
  });

  it('has an empty array of transactions by default', function(){
    expect(newAccount.transactions).toEqual([]);
  });

  describe('transactions', function() {
    beforeEach(function() {
      var testDate = new Date(2017, 3, 19);
      jasmine.clock().mockDate(testDate);
    });

    describe('deposits', function() {

      beforeEach(function() {
        newAccount.deposit(150);
      });

      it('calculates the balance for a credit transaction', function() {
        newAccount.calculateBalance('credit', 50);
        expect(newAccount.balance).toEqual(200);
      });

      it('increases the balance by the amount deposited', function() {
        expect(newAccount.balance).toEqual(150);
      });

      it('adds the deposit transaction to transactions array', function() {
        expect(newAccount.transactions.length).toEqual(1);
      });

      it('a credit transaction has an associated amount', function() {
        expect(newAccount.transactions[0].credit).toEqual(150);
      });

      it('a credit transaction has an associated balance', function() {
        expect(newAccount.transactions[0].balance).toEqual(150);
      });

      it('a credit transaction has an associated date', function() {
        newAccount.deposit(50);
        expect(newAccount.transactions[0].date).toEqual('19/03/2017');
      });
    });

    describe('withdrawals', function() {

      beforeEach(function() {
        newAccount.newTransaction('credit', 150);
        newAccount.withdraw(50);
      });

      it('calculates the balance for a debit transaction', function() {
        expect(newAccount.balance).toEqual(100);
      });

      it('decreases the balance by the amount withdrawn', function() {
        expect(newAccount.balance).toEqual(100);
      });

      it('adds the withdrawal transaction to transactions array', function() {
        expect(newAccount.transactions.length).toEqual(2);
      });

      it('a debit transaction has an associated amount', function() {
        expect(newAccount.transactions[1].debit).toEqual(50);
      });

      it('a debit transaction has an associated balance', function() {
        expect(newAccount.transactions[1].balance).toEqual(100);
      });

      it('a debit transaction has an associated date', function() {
        expect(newAccount.transactions[1].date).toEqual('19/03/2017');
      });
    });
  });

  describe('statement', function() {
    it('shows all the transactions with type, balance and date', function() {
      newAccount.deposit(200);
      newAccount.withdraw(100);
      expect(newAccount.statement()).toEqual('date || credit || debit || balance' + '\n' + '19/03/2017 || 200 ||   || 200' + '\n' + '19/03/2017 ||   || 100 || 100');
    });
  });
});
