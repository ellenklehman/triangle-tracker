describe('leapYear', function() {
  it("is false for a year that is not divisible by 4", function() {
    leapYear(1999).should.equal(false);
  });

  it("is true for most years divisible by 4", function() {
    leapYear(2012).should.equal(true);
  });

  it("is false for most years divisible by 100", function() {
    leapYear(1900).should.equal(false);
  });
});

describe("divisibleByFour", function() {
  it("it is false if a number is not divisible by four", function() {
    divisibleByFour(7).should.equal(false);
  });

  it("it is true if a number is divisible by four", function() {
    divisibleByFour(8).should.equal(true);
  });
});

describe("divisibleByHundred", function() {
  it("it is false if a number is not divisible by hundred", function() {
    divisibleByHundred(1999).should.equal(false);
  });
});

