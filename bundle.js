"use strict";
/*
    Type annotations and compile-time type checking
    Type inference
    Type erasure
    Interfaces
    Enumerated types
    Generics
    Namespaces
    Tuples
    Async/await
    */
//Type annotations and compile-time type checking
var PartOne;
(function (PartOne) {
    var age = 30;
    var Magnitude;
    (function (Magnitude) {
        Magnitude[Magnitude["Kilo"] = 100] = "Kilo";
        Magnitude[Magnitude["Deci"] = 10] = "Deci";
        Magnitude[Magnitude["Centi"] = 0.1] = "Centi";
    })(Magnitude || (Magnitude = {}));
    ;
    var Measurement = /** @class */ (function () {
        function Measurement() {
            this.value = 0;
            this.unit = null;
            this.magnitude = 0;
        }
        Measurement.prototype.toString = function () {
            var magnitudeName = Magnitude[this.magnitude];
            var measure = this.unit ? magnitudeName + this.unit.toLowerCase() : magnitudeName;
            measure = this.value != 1 ? measure + 's' : measure;
            return this.value + " " + measure;
        };
        return Measurement;
    }());
    var buildingHeight = new Measurement();
    buildingHeight.magnitude = Magnitude.Kilo;
    buildingHeight.unit = "Meter";
    buildingHeight.value = 10;
    console.log(buildingHeight.toString());
})(PartOne || (PartOne = {}));
var PartTwo;
(function (PartTwo) {
    var generics;
    var Car = /** @class */ (function () {
        function Car() {
            this.Make = "";
            this.Model = "";
            this.Year = 0;
        }
        return Car;
    }());
    var myCar = new Car();
    myCar.Stereo = "stock";
})(PartTwo || (PartTwo = {}));
//# sourceMappingURL=bundle.js.map