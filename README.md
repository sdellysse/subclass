# subclass
Simple Prototypal Inheritance

## Usage

    var Dog = function () {
        this.name = "Scruffy";
    };
    Dog.prototype.getName = function () { return this.name; };
    Dog.prototype.getSound = function () { return "woof"; };
    Dog.prototype.bark = function () { return this.getName()+" says "+this.getSound(); };

    var Chihuaua = subclass(Dog, function () {
        this.name = "Pibbles";
    });
    Chihuaua.prototype.getSound = function () { return "arff"; };

    var ch = new Chihuaua();
    ch.bark() // <== "pibbles says arff";
