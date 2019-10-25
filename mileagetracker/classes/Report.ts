// TODO Part 4
// Hey a new class!

class Report {
    Data: Array<object>;

    /**
     * Report!
     */
    constructor() {
        this.Data = new Array<Object>();
    }

    UpdateData(data: any) {
        this.Data = data;
        console.log(this.Data);
    }

    RenderData(): HTMLElement {
        // TODO Part 5
        // Little helper function in a class's method
        function renderTd(value: string): HTMLElement {
            let cell = document.createElement("td");
            cell.innerText = value;
            return cell;
        }

        // TODO Part 6
        // Typescript _knows_
        var table = document.createElement("table");

        for (let dataRow of this.Data) {
            let row = document.createElement("tr");

            row.appendChild(renderTd("a"));
            row.appendChild(renderTd("a"));
            row.appendChild(renderTd("a"));
            table.appendChild(row);
        }
        return table;

    }
}
