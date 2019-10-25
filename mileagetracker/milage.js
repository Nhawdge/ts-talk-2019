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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
    Database.GetAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var db = this.OpenDB();
                        db.onsuccess = function (event) {
                            var transaction = db.result.transaction(["Mileage"]);
                            var request = transaction.objectStore("Mileage");
                            var data = request.getAll();
                            data.onsuccess = function () { return resolve(data.result); };
                        };
                    })];
            });
        });
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