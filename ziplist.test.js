/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */


describe('ZipList', function () {
  const testArray1 = [1, 2, 3];
  const testArray2 = ['a', 'b', 'c'];
  describe('zipList', function () {
    it('Should be of length 6', function () {
      chai.expect(zipList(testArray1, testArray2)).to.have.lengthOf(6);
    });
    it('Must deep include testArray1', function () {
      chai.expect(zipList(testArray1, testArray2)).to.deep.include.members(testArray1);
    });
    it('Must deep include testArray2', function () {
      chai.expect(zipList(testArray1, testArray2)).to.deep.include.members(testArray2);
    });
  });
  describe('zipListTheSimpleWay', function () {
    it('Should be of length 6', function () {
      chai.expect(zipListTheSimpleWay(testArray1, testArray2)).to.have.lengthOf(6);
    });
    it('Must deep include testArray1', function () {
      chai.expect(zipListTheSimpleWay(testArray1, testArray2)).to.deep.include.members(testArray1);
    });
    it('Must deep include testArray2', function () {
      chai.expect(zipListTheSimpleWay(testArray1, testArray2)).to.deep.include.members(testArray2);
    });
  });
});

