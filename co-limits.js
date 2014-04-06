var limits = require('limits.js'),
    util = require('util'),
    colimits;

colimits = function(opts) {
    if (!colimits.prototype.isPrototypeOf(this)) {
        return new colimits(opts);
    }
    limits.call(this, opts);
};

util.inherits(colimits, limits);

colimits.prototype.co = function(cond) {

    // returns a function that can be
    // yield from within a co context.
    return function(done) {
        var obj = this.push(function() {
            done(null, obj.delay);
        }, cond);

        if (!obj) done(null, false);
    }.bind(this);

};

module.exports = colimits;