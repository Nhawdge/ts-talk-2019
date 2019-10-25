 // TODO Part 4
 // Model our entry for the database
class Entry {
    Mileage = 0;
    Date = new Date();
    Fuel = 0;
    TotalCost = 0;

    Render(): HTMLElement {
        var form = document.createElement("form") as HTMLFormElement;

        var inputs = ['Mileage', 'Date', 'Fuel', 'TotalCost'];

        for (let input of inputs) {
            let inputElem = document.createElement('input');
            inputElem.type = "number";

            let labelElem = document.createElement('label');
            labelElem.innerText = input;

            form.appendChild(labelElem);
            form.appendChild(inputElem);
        }

        return form;

    }
}

// TODO Part 3
// Create a start point for our app. 
function Start(): void {
    console.log("Start");
    var form = document.querySelector('#Entry') as HTMLElement;
    var entry = new Entry();
    form.appendChild(entry.Render())


    // load from History

    // Generate new report
}

document.addEventListener("DOMContentLoaded", Start);