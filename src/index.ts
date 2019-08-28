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

namespace PartOne { 

    var age: number = 30;

    export type MetricUnit = "Gram" | "Liter" | "Meter" | null;
    enum Magnitude { "Kilo" = 100, "Deci" = 10, "Centi" = .1 };

    class Measurement {
        value: number;
        unit: MetricUnit;
        magnitude: Magnitude;

        constructor() {
            this.value = 0;
            this.unit = null;
            this.magnitude = 0;
        }

        toString() {
            var magnitudeName: string = Magnitude[this.magnitude];
            var measure = this.unit ? magnitudeName + this.unit.toLowerCase() : magnitudeName;
            measure = this.value != 1 ? measure + 's' : measure;
            return `${this.value} ${measure}`;
        }
    }

    var buildingHeight = new Measurement();

    buildingHeight.magnitude = Magnitude.Kilo;
    buildingHeight.unit = "Meter";
    buildingHeight.value = 10;

    console.log(buildingHeight.toString());
}

namespace PartTwo {

    var generics: any;

    class Car {
        Make: string = "";
        Model: string = "";
        Year: number = 0;

        [key: string]: string | number;

    }

    var myCar = new Car();

    myCar.Stereo = "stock";
}

namespace PartThree {
    interface Measurement {
        value: number;
        unit: globalThis.PartOne.MetricUnit;
    }
}