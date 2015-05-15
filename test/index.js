"use strict";
var subclass;

subclass = require("../src/subclass");


exports.testSubclass = function (test) {
    var Parent, Child, ch;

    Parent = function (x) {
        this.x = x;
    };

    Parent.prototype.get = function () {
        return this.x;
    };

    Child = function (x) {
        Parent.apply(this, arguments);
    };

    test.throws(function () { (new Child(42)).get(); });

    subclass(Parent, Child);
    test.doesNotThrow(function () { (new Child(42)).get(); });

    ch = new Child(42);
    test.strictEqual(ch.constructor, Child);

    test.notStrictEqual(ch.constructor, Parent);


    Parent = function (value) {
        this.value = value;
    };
    Child = subclass(Parent);

    ch = new Child(42);
    test.strictEqual(ch.value, 42);


    test.done();
};
