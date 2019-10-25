class Entry {
    Mileage = 0;
    Date = new Date();
    Fuel = 0;
    TotalCost = 0;
    Inputs = [
        new NumberFormField("Mileage", "Total mileage"),
        new DateFormField("Date", "Purchase Date"),
        new NumberFormField("Fuel", "Fuel In Gallons"),
        new NumberFormField("Cost", "Total cost in USD"),
        new SubmitFormField("Submit")
    ];

    Render(): HTMLElement {
        var form = document.createElement("form") as HTMLFormElement;

        for (let input of this.Inputs) {
            form.appendChild(input.Render());
        }
        form.onsubmit = this.FormSubmit;

        return form;
    }

    GetFormValues(): object {
        // TODO Part 1
        // We needed to solve a problem of getting the inputs once the've been rendered.
        // Stop code g̩̞͍̮͢o͙̱͡l̨̘̫̹̼f̩̖̩̹̺ͅi̶̪̩͖n̸g̯̟̣̗̼̮̰ ̟t͙u̬̱̬͍t͈̥̣͉̣o̪̘͟r͙͎i̙̩̞à̩l̶̹̪s̷͖̱͉
        var obj = this.Inputs
            .map(x => { return { Name: x.Name, Value: x.Value } })
            .reduce((a: any, c) => { a[c.Name] = c.Value; return a; }, {})
        console.log('Got values', obj)
        return obj
    }

    // TODO Part 4
    // Arrow functions preserve `this` in Classes
    FormSubmit = (e: Event): boolean => {
        e.preventDefault();
        var a = this.GetFormValues();
        Database.Save(a);
        return false;
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