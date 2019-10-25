//TODO Part 1
// Abstraction distraction!
abstract class FormField {
    Name: string;
    Type: string;
    Value: any;
    Attributes: Array<[string, string]>;

    /**
     * This is form field  
     */
    constructor(input: any) {
        // TODO Part 2
        // Input Any was probably a bad idea here.
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
        inputElem.name = this.Name;
        if (this.Value) {
            inputElem.value = this.Value;
        }

        this.Attributes.forEach(x => inputElem.setAttribute(x[0], x[1]));

        group.appendChild(labelElem)
        group.appendChild(inputElem)
        return group;
    }
}

// TODO Part 3
// Typescript extends? Tell me more!
class NumberFormField extends FormField {
    /**
     * Form field for number type
     */
    // TODO Part 4
    // !!!Constructor danger!!!!
    constructor(name: string, placeholder: string = "", value: number = 0, attributes: Array<[string, string]> = new Array<[string, string]>()) {
        if (placeholder) {
            attributes.push(["placeholder", placeholder])
        }
        // TODO Part 5
        // Did you just...? Wow...
        var properties = {
            Name: name,
            Type: "number",
            Value: value,
            Attributes: attributes
        }
        super(properties);
    }
}


// TODO Part 6
// Again from the top!
class DateFormField extends FormField {
    /**
     *Form field for Date types
     */
    constructor(name: string, placeholder: string = "", value: Date = new Date(), attributes: Array<[string, string]> = new Array<[string, string]>()) {
        if (placeholder) {
            attributes.push(["placeholder", placeholder])
        }
        var properties = {
            Name: name,
            Type: "date",
            Value: new Date(),
            Attributes: attributes
        }
        super(properties);
    }

}