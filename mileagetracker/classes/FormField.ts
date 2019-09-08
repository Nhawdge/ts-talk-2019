abstract class FormField {
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
        //inputElem.type = this.Type;
        inputElem.name = this.Name;
        if (this.Value) {
            inputElem.value = this.Value;
        }

        this.Attributes.forEach(x => inputElem.setAttribute(x[0], x[1]));

        //labelElem.innerText = input;
        group.appendChild(labelElem)
        group.appendChild(inputElem)
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