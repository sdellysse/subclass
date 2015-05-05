"use strict";
var subclass;

subclass = function (Parent, Child) {
    var Surrogate, surrogateInstance;

    Surrogate = function () {};
    Surrogate.prototype = Parent.prototype;

    surrogateInstance = new Surrogate();
    Child.prototype = surrogateInstance;
    Child.prototype.constructor = Child;

    return Child;
};

module.exports = subclass;
