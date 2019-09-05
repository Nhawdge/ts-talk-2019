class FormField {
    Name: string;
    Type: string;
    Value: any;
    Attributes: Array<[string, string]>;

    /**
     * This is form field 
     */
    constructor(input: any) {
        this.Name = input.Name;
        this.Type = input.Type;
        this.Value = input.Value || 0;
        this.Attributes = input.Attributes
    }

    Render(): HTMLElement {
        let group = document.createElement('fieldset') as HTMLFieldSetElement;
        let labelElem = document.createElement('label');
        labelElem.innerHTML = this.Name;

        let inputElem = document.createElement('input');
        inputElem.type = this.Type;
        inputElem.name = this.Name;
        inputElem.value = this.Value;

        this.Attributes.forEach(x => inputElem.setAttribute(x[0], x[1]));

        //labelElem.innerText = input;
        group.appendChild(labelElem)
        group.appendChild(inputElem)
        return group;
    }
}

class Entry {
    Mileage = 0;
    Date = new Date();
    Fuel = 0;
    TotalCost = 0;

    Render(): HTMLElement {
        var form = document.createElement("form") as HTMLFormElement;

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

        for (let input of inputs) {
            form.appendChild(input.Render());
        }

        return form;

    }
}

function Start(): void {
    console.log("Start");
    var form = document.querySelector('#Entry') as HTMLElement;
    var entry = new Entry();
    form.appendChild(entry.Render())


    // load from History

    // Generate new report
}

document.addEventListener("DOMContentLoaded", Start);