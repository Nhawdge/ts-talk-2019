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
        var inputs = [
            new FormField({
                Name: "Mileage",
                Type: "number",
                Value: null,
                Attributes: [["placeholder", "Total current milage"]]
            }),
            new FormField({
                Name: "Date",
                Type: "date",
                Value: new Date(),
                Attributes: [["placeholder", "Date Done"]]
            }),
            new FormField({
                Name: "Fuel",
                Type: "number",
                Value: '',
                Attributes: [["placeholder", "Fuel in Gallons"]]
            }),
            new FormField({
                Name: "Cost",
                Type: "number",
                Value: "",
                Attributes: [["placeholder", "Cost in Dollars"]]
            }),
        ];
        for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
            var input = inputs_1[_i];
            form.appendChild(input.Render());
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
        //inputElem.type = this.Type;
        inputElem.name = this.Name;
        if (this.Value) {
            inputElem.value = this.Value;
        }
        this.Attributes.forEach(function (x) { return inputElem.setAttribute(x[0], x[1]); });
        //labelElem.innerText = input;
        group.appendChild(labelElem);
        group.appendChild(inputElem);
        return group;
    };
    return FormField;
}());
//# sourceMappingURL=milage.js.map