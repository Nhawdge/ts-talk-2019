class Report {
    // TODO Part 1
    // Strengthen our types now that we have working code.
    Data: Array<MileageRow>;

    /**
     * Report!
     */
    constructor() {
        this.Data = new Array<MileageRow>();
    }

    UpdateData(data: Array<MileageRow>) {
        this.Data = data;
        console.log(this.Data);
    }

    RenderData(): HTMLElement {
        function renderTd(value: string): HTMLElement {
            let cell = document.createElement("td");
            cell.innerText = value;
            return cell;
        }

        var table = document.createElement("table");
        let header = document.createElement("thead");
        let headerRow = document.createElement("tr")
        
        headerRow.appendChild(renderTd("Date"));
        headerRow.appendChild(renderTd("Mileage"));
        headerRow.appendChild(renderTd("Cost"));
        headerRow.appendChild(renderTd("Fuel"));
        
        header.appendChild(headerRow);
        let body = document.createElement("tbody");
        
        for (let dataRow of this.Data) {
            console.log(dataRow);
            let row = document.createElement("tr");
            
            // TODO Part 2
            // Stronger typed code means being able to access properties
            row.appendChild(renderTd(dataRow.Date.toString()));
            row.appendChild(renderTd(dataRow.Mileage.toString()));
            row.appendChild(renderTd(dataRow.Cost.toString()));
            row.appendChild(renderTd(dataRow.Fuel.toString()));
            
            body.appendChild(row);
        }
        table.appendChild(header);
        table.appendChild(body);
        return table;

    }
}
// TODO Part 3
// First interface to smooth data between database and report 
// Duck Typing
interface MileageRow {
    Cost: number
    Date: Date
    Fuel: number
    Mileage: number
}
