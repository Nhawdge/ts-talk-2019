class Entry {
    Mileage = 0;
    Date = new Date();
    Fuel = 0;
    TotalCost = 0;

    Render(): HTMLElement {
        var form = document.createElement("form") as HTMLFormElement;

        var inputs = [
            new NumberFormField("Mileage", "Total mileage"),
            new DateFormField("Date", "Purchase Date"),
            new NumberFormField("Fuel", "Fuel In Gallons"),
            new NumberFormField("Cost", "Total cost in USD"),
            new SubmitFormField("Submit")
        ];

        for (let input of inputs) {
            form.appendChild(input.Render());
        }
        form.onsubmit = this.FormSubmit;
        

        return form;
    }

    FormSubmit(e:Event): boolean {
        e.preventDefault();
        Database.Get();
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