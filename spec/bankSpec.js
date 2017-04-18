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

  describe('accounts',function() {

    beforeEach(function() {
      bank.createAccount('Noora');
    });

    it('create a customer account in their name', function() {
      expect(bank.accounts.length).toEqual(1);
      expect(bank.accounts[0].name).toEqual('Noora');
    });

    it('get a customer\'s account using their name', function() {
      expect(function() { bank.getAccount('Somebody'); }).toThrow();
    });

    it('print a customer\'s account statement', function() {
      bank.getAccount('Noora').deposit(300);
      bank.getAccount('Noora').withdraw(100);
      expect(bank.printAccountStatement('Noora')).toEqual('date || credit || debit || balance' + '\n' + '19/03/2017 || 300 ||   || 300' + '\n' + '19/03/2017 ||   || 100 || 200');
    });
  });

});

// {name: "Noora", balance: 0, transactions:[]}
