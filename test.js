
require('mocha');
var expect = require("chai").expect;
const getLink = require('./');

describe('getLink', function () {
    it('should throw an error if video link or quality is parameter is missing:', function () {
        var result1 = getLink('', 'max')
        var result2 = getLink('https://www.youtube.com/watch?v=a3ICNMQW7Ok', '')
        var result3 = getLink('', '')
        var result4 = getLink()
        expect(result1).to.equal('Please provide link and quality')
        expect(result2).to.equal('Please provide link and quality')
        expect(result3).to.equal('Please provide link and quality')
        expect(result4).to.equal('Please provide link and quality')
    });
    it('should throw an error if video link is proper:', function () {
        var result1 = getLink('https://www.google.com/', 'max')
        var result2 = getLink('https://www.youtube.com/watch?v=Tm', 'max')
        expect(result1).to.equal('Please check youtube video link')
        expect(result2).to.equal('Please check youtube video link')
    });
    it('should give thumbnail link', function () {
        var result1 = getLink('https://www.youtube.com/watch?v=a3ICNMQW7Ok', 'max')
        expect(result1).to.equal('https://i1.ytimg.com/vi/a3ICNMQW7Ok/maxresdefault.jpg')
    })
});