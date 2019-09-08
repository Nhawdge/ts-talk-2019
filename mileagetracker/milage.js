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
            new NumberFormField("Mileage", "Total mileage"),
            new DateFormField("Date", "Purchase Date"),
            new NumberFormField("Fuel", "Fuel In Gallons"),
            new NumberFormField("Cost", "Total cost in USD")
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var NumberFormField = /** @class */ (function (_super) {
    __extends(NumberFormField, _super);
    /**
     * Form field for number type
     */
    function NumberFormField(name, placeholder, value, attributes) {
        if (placeholder === void 0) { placeholder = ""; }
        if (value === void 0) { value = 0; }
        if (attributes === void 0) { attributes = new Array(); }
        var _this = this;
        if (placeholder) {
            attributes.push(["placeholder", placeholder]);
        }
        var properties = {
            Name: name,
            Type: "number",
            Value: value,
            Attributes: attributes
        };
        _this = _super.call(this, properties) || this;
        return _this;
    }
    return NumberFormField;
}(FormField));
var DateFormField = /** @class */ (function (_super) {
    __extends(DateFormField, _super);
    /**
     *Form field for Date types
     */
    function DateFormField(name, placeholder, value, attributes) {
        if (placeholder === void 0) { placeholder = ""; }
        if (value === void 0) { value = new Date(); }
        if (attributes === void 0) { attributes = new Array(); }
        var _this = this;
        if (placeholder) {
            attributes.push(["placeholder", placeholder]);
        }
        var properties = {
            Name: name,
            Type: "date",
            Value: new Date(),
            Attributes: attributes
        };
        _this = _super.call(this, properties) || this;
        return _this;
    }
    return DateFormField;
}(FormField));
//# sourceMappingURL=milage.js.map