/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */


describe('ZipList', function () {
  const testArray1 = [1, 2, 3];
  const testArray2 = ['a', 'b', 'c'];
  describe('zipList', function () {
    it('must be string', function () {
      chai.expect(zipList(testArray1, testArray2)).to.equal([1, 'a', 2, 'b', 3, 'c']);
    });
  });
  describe('zipListTheSimpleWay', function () {
    it('must be string', function () {
      chai.expect(zipListTheSimpleWay(testArray1, testArray2)).to.equal([1, 'a', 2, 'b', 3, 'c']);
    });
  });
});

