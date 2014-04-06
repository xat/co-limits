var co = require('co'),
    colimits = require('../co-limits'),
    expect = require('expect.js');

describe('co-limits tests', function() {

    it('should set the correct delays', function(done) {
        var fn = colimits({
            secondly: 2
        }).co();

        co(function* () {
            expect(yield fn).to.equal(0);
            expect(yield fn).to.equal(0);
            expect(yield fn).to.be.within(900, 1000);
            done();
        })();
    });

    it('should exit the loop if the conditonal returns true', function(done) {
        var fn = colimits({
            secondly: 5
        }).co(function(delay) {
            return delay === 0;
        });
        var c = 0;

        co(function* () {
            while((yield fn) !== false) {
                c++;
            }
            expect(c).to.equal(5);
            done();
        })();
    });

});