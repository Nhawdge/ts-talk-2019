// TODO 2
/*
    Classes - Methods and Properties
    Type Inferencing
    Fat arrow functions
*/
class Entry {
    Mileage = 0;
    Date = new Date();
    Fuel = 0;
    TotalCost = 0;
    // Auto type inferencing
    //Inputs: Array<FormField> = [
    Inputs = [
        new NumberFormField("Mileage", "Total mileage"),
        new DateFormField("Date", "Purchase Date"),
        new NumberFormField("Fuel", "Fuel In Gallons"),
        new NumberFormField("Cost", "Total cost in USD"),
        new SubmitFormField("Submit")
    ];

    Render(): HTMLElement {
        var form = document.createElement("form");

        for (let input of this.Inputs) {
            form.appendChild(input.Render());
        }
        form.onsubmit = this.FormSubmit;

        return form;
    }
    // Fat arrow functions 
    GetFormValues = (): object => {
        var obj = this.Inputs
            .map(input => { return { Name: input.Name, Value: input.Value } })
            .reduce((accumulator: any, currentValue) => {
                accumulator[currentValue.Name] = currentValue.Value;
                return accumulator;
            }, {})
        return obj
    }

    ClearForm(): void {
        this.Inputs.forEach(input => input.Value = null);
    }

    FormSubmit = (e: Event): boolean => {
        e.preventDefault();
        var formValues = this.GetFormValues();

        Database.Save(formValues)
        this.ClearForm();

        return false;
    }
}
