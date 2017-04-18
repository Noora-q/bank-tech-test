describe('Bank', function() {
  var bank;
  var account;

  beforeEach(function() {
    bank = new Bank();
    account = new Account('Noora');
  });

  it('exists', function() {
    expect(Bank).toBeDefined();
  });

  it('has an empty array of customers\' accounts by default', function() {
    expect(bank.accounts).toEqual([]);
  });

  it('can create a customer account in their name', function() {
    bank.createAccount('Noora');
    expect(bank.accounts.length).toEqual(1);
    expect(bank.accounts[0].name).toEqual('Noora');
  });
});
