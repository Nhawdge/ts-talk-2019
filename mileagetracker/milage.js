"use strict";
var Entry = /** @class */ (function () {
    function Entry() {
        this.Mileage = 0;
        this.Date = new Date();
        this.Fuel = 0;
        this.TotalCost = 0;
    }
    Entry.prototype.Render = function () {
        var form = document.createElement("form");
        var inputs = ['Mileage', 'Date', 'Fuel', 'TotalCost'];
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var inputElem = document.createElement('input');
            inputElem.type = "number";
            var labelElem = document.createElement('label');
            labelElem.innerText = input;
            form.appendChild(labelElem);
            form.appendChild(inputElem);
        }
        return form;
    };
    return Entry;
}());
function Start() {
    console.log("Start");
    var form = document.querySelector('#Entry');
    var entry = new Entry();
    form.appendChild(entry.Render());
    // load from History
    // Generate new report
}
document.addEventListener("DOMContentLoaded", Start);
//# sourceMappingURL=milage.js.map