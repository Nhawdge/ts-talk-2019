"use strict";
var Entry = /** @class */ (function () {
    function Entry() {
        var _this = this;
        this.Mileage = 0;
        this.Date = new Date();
        this.Fuel = 0;
        this.TotalCost = 0;
        this.Inputs = [
            new NumberFormField("Mileage", "Total mileage"),
            new DateFormField("Date", "Purchase Date"),
            new NumberFormField("Fuel", "Fuel In Gallons"),
            new NumberFormField("Cost", "Total cost in USD"),
            new SubmitFormField("Submit")
        ];
        this.FormSubmit = function (e) {
            e.preventDefault();
            var formValues = _this.GetFormValues();
            Database.Save(formValues);
            _this.ClearForm();
            return false;
        };
    }
    Entry.prototype.Render = function () {
        var form = document.createElement("form");
        for (var _i = 0, _a = this.Inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            form.appendChild(input.Render());
        }
        form.onsubmit = this.FormSubmit;
        return form;
    };
    Entry.prototype.GetFormValues = function () {
        var obj = this.Inputs
            .map(function (x) { return { Name: x.Name, Value: x.Value }; })
            .reduce(function (a, c) { a[c.Name] = c.Value; return a; }, {});
        return obj;
    };
    Entry.prototype.ClearForm = function () {
        this.Inputs.forEach(function (input) { return input.Value = null; });
    };
    return Entry;
}());
function Start() {
    console.log("Start");
    var form = document.querySelector('#Entry');
    var entry = new Entry();
    form.appendChild(entry.Render());
    var reportElem = document.querySelector('#Report');
    var report = new Report();
    var data = Database.GetAll(function (data) {
        report.UpdateData(data);
        reportElem.appendChild(report.RenderData());
    });
}
document.addEventListener("DOMContentLoaded", Start);
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.OpenDB = function () {
        var db = window.indexedDB.open("mileage-tracker");
        db.onupgradeneeded = function (event) {
            var db = event.target.result;
            console.log("Generating DB", db);
            var mileageEntry = db.createObjectStore("Mileage", { keyPath: 'entryId', autoIncrement: true });
            mileageEntry.createIndex("Mileage", "");
            mileageEntry.createIndex("Date", "");
            mileageEntry.createIndex("Fuel", "");
            mileageEntry.createIndex("TotalCost", "");
        };
        return db;
    };
    Database.Save = function (toAdd) {
        var db = this.OpenDB();
        db.onsuccess = function () {
            var transaction = db.result.transaction(["Mileage"], "readwrite");
            var objectStore = transaction.objectStore("Mileage");
            var request = objectStore.add(toAdd);
            request.onsuccess = function (event) {
                console.log("Save successful");
                return true;
            };
            request.onerror = function () {
                console.log("Save failed");
                return false;
            };
        };
    };
    Database.GetAll = function (callback) {
        var db = this.OpenDB();
        db.onsuccess = function (event) {
            var transaction = db.result.transaction(["Mileage"]);
            var request = transaction.objectStore("Mileage");
            var data = request.getAll();
            data.onsuccess = function () { return callback(data.result); };
        };
    };
    return Database;
}());
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
     * This is an abstract form field
     */
    function FormField(input) {
        var _this = this;
        this.HasLabel = true;
        this.Bind = function (e) {
            _this.Value = e.target.value;
        };
        this.Name = input.Name;
        this.Type = input.Type;
        this.Value = input.Value || 0;
        this.Attributes = input.Attributes;
    }
    FormField.prototype.Render = function () {
        var group = document.createElement('fieldset');
        if (this.HasLabel) {
            var labelElem = document.createElement('label');
            labelElem.innerHTML = this.Name;
            group.appendChild(labelElem);
        }
        var inputElem = document.createElement('input');
        inputElem.type = this.Type;
        inputElem.name = this.Name;
        if (this.Value) {
            inputElem.value = this.Value;
        }
        inputElem.onchange = this.Bind;
        this.Attributes.forEach(function (x) { return inputElem.setAttribute(x[0], x[1]); });
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
    function DateFormField(name, placeholder, date, attributes) {
        if (placeholder === void 0) { placeholder = ""; }
        if (date === void 0) { date = new Date(); }
        if (attributes === void 0) { attributes = new Array(); }
        var _this = this;
        if (placeholder) {
            attributes.push(["placeholder", placeholder]);
        }
        var dateFormatter = new Intl.DateTimeFormat();
        var properties = {
            Name: name,
            Type: "date",
            Value: dateFormatter.format(date),
            Attributes: attributes
        };
        _this = _super.call(this, properties) || this;
        return _this;
    }
    return DateFormField;
}(FormField));
var SubmitFormField = /** @class */ (function (_super) {
    __extends(SubmitFormField, _super);
    /**
     * Submit button
     */
    function SubmitFormField(name, attributes) {
        if (attributes === void 0) { attributes = new Array(); }
        var _this = this;
        // if (placeholder) {
        //     attributes.push(["placeholder", placeholder])
        // }
        var properties = {
            Name: name,
            Type: "submit",
            Value: null,
            Attributes: attributes
        };
        _this = _super.call(this, properties) || this;
        _this.HasLabel = false;
        return _this;
    }
    return SubmitFormField;
}(FormField));
var Report = /** @class */ (function () {
    /**
     *
     */
    function Report() {
        this.Data = new Array();
    }
    Report.prototype.UpdateData = function (data) {
        this.Data = data;
        console.log(this.Data);
    };
    Report.prototype.RenderData = function () {
        function renderTd(value) {
            var cell = document.createElement("td");
            cell.innerText = value;
            return cell;
        }
        var table = document.createElement("table");
        var header = document.createElement("thead");
        var headerRow = document.createElement("tr");
        headerRow.appendChild(renderTd("Date"));
        headerRow.appendChild(renderTd("Mileage"));
        headerRow.appendChild(renderTd("Cost"));
        headerRow.appendChild(renderTd("Fuel"));
        header.appendChild(headerRow);
        var body = document.createElement("tbody");
        for (var _i = 0, _a = this.Data; _i < _a.length; _i++) {
            var dataRow = _a[_i];
            console.log(dataRow);
            var row = document.createElement("tr");
            row.appendChild(renderTd(dataRow.Date.toString()));
            row.appendChild(renderTd(dataRow.Mileage.toString()));
            row.appendChild(renderTd(dataRow.Cost.toString()));
            row.appendChild(renderTd(dataRow.Fuel.toString()));
            body.appendChild(row);
        }
        table.appendChild(header);
        table.appendChild(body);
        return table;
    };
    return Report;
}());
//# sourceMappingURL=milage.js.map