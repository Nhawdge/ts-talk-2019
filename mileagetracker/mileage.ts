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
        var obj = this.Inputs
            .map(x => { return { Name: x.Name, Value: x.Value } })
            .reduce((a: any, c) => { a[c.Name] = c.Value; return a; }, {})
        console.log('Got values', obj)
        return obj
    }


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
    var reportElem = document.querySelector('#Report') as HTMLElement;
    var report = new Report();
    
    var data = Database.GetAll(data => {
        console.log("Updating Report", data)

        report.UpdateData(data);
        reportElem.appendChild(report.RenderData())
    });
    

    // Generate new report
}

document.addEventListener("DOMContentLoaded", Start);