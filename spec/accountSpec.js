"use strict";


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
});
