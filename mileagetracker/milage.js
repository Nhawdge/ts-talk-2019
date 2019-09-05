"use strict";
var FormField = /** @class */ (function () {
    /**
     * This is form field
     */
    function FormField(input) {
        this.Name = input.Name;
        this.Type = input.Type;
        this.Value = input.Value || 0;
        this.Attributes = input.Attributes;
    }
    FormField.prototype.Render = function () {
        var group = document.createElement('fieldset');
        var labelElem = document.createElement('label');
        labelElem.innerHTML = this.Name;
        var inputElem = document.createElement('input');
        inputElem.type = this.Type.toString();
        inputElem.name = this.Name;
        inputElem.value = "";
        //labelElem.innerText = input;
        group.appendChild(labelElem);
        group.appendChild(inputElem);
        return group;
    };
    return FormField;
}());
var Entry = /** @class */ (function () {
    function Entry() {
        this.Mileage = 0;
        this.Date = new Date();
        this.Fuel = 0;
        this.TotalCost = 0;
    }
    Entry.prototype.Render = function () {
        var form = document.createElement("form");
        var inputs = [new FormField({
                Name: "Mileage",
                Type: Number,
                Value: 0,
                Attributes: ["type", "number"]
            })];
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            var inputElem = document.createElement('input');
            inputElem.type = "number";
            //inputElem.value =
            var labelElem = document.createElement('label');
            //labelElem.innerText = input;
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