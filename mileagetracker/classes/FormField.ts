abstract class FormField {
    Name: string;
    Type: string;
    Value: any;
    Attributes: Array<[string, string]>;
    // TODO Part 3
    // Lets add some somewhat important feature.
    HasLabel = true;

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
        if (this.HasLabel) {
            let labelElem = document.createElement('label');
            labelElem.innerHTML = this.Name;
            group.appendChild(labelElem);
        }

        let inputElem = document.createElement('input');
        inputElem.type = this.Type;
        inputElem.name = this.Name;
        if (this.Value) {
            inputElem.value = this.Value;
        }

        this.Attributes.forEach(x => inputElem.setAttribute(x[0], x[1]));

        group.appendChild(inputElem);
        return group;
    }
}


class NumberFormField extends FormField {
    /**
     * Form field for number type
     */
    constructor(name: string, placeholder: string = "", value: number = 0, attributes: Array<[string, string]> = new Array<[string, string]>()) {
        if (placeholder) {
            attributes.push(["placeholder", placeholder])
        }
        var properties = {
            Name: name,
            Type: "number",
            Value: value,
            Attributes: attributes
        }
        super(properties);
    }
}

class DateFormField extends FormField {
    /**
     *Form field for Date types
     */
    constructor(name: string, placeholder: string = "", date: Date = new Date(), attributes: Array<[string, string]> = new Array<[string, string]>()) {
        if (placeholder) {
            attributes.push(["placeholder", placeholder])
        }
        var dateFormatter = new Intl.DateTimeFormat();
        var properties = {
            Name: name,
            Type: "date",
            Value: dateFormatter.format(date),
            Attributes: attributes
        }
        super(properties);
    }
}

// TODO Part 1
// Can't submit without a submit button.
class SubmitFormField extends FormField {
    /**
     * Submit button
     */
    constructor(name: string, attributes: Array<[string, string]> = new Array<[string, string]>()) {
        // TODO Part 2
        // Notice the properties we don't need?
        var properties = {
            Name: name,
            Type: "submit",
            Value: null,
            Attributes: attributes
        }
        super(properties);
        this.HasLabel = false;
    }
}