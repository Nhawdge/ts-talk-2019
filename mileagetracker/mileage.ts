// TODO Part 1
// Model our form field.
class FormField {
    Name: string;
    Type: any;
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

    // TODO Part 3
    // I know what you're thinking. Why not?!
    Render(): HTMLElement {
        let group = document.createElement('fieldset') as HTMLFieldSetElement;
        let labelElem = document.createElement('label');
        labelElem.innerHTML = this.Name;

        let inputElem = document.createElement('input');
        inputElem.type = this.Type.toString();
        inputElem.name = this.Name;
        inputElem.value = ""

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
        // TODO Part 3
        // This is the first form field for our milage.
        var inputs = [new FormField({
            Name: "Mileage",
            Type: Number,
            Value: 0,
            Attributes: ["type", "number"]
        })];

        for (let input of inputs) {
            let inputElem = document.createElement('input');
            inputElem.type = "number";

            let labelElem = document.createElement('label');

            form.appendChild(labelElem);
            form.appendChild(inputElem);
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