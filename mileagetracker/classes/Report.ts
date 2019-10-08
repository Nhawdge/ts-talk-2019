class Report {
    Data: Array<object>;

    /**
     *
     */
    constructor() {
        this.Data = new Array<Object>();
    }

    UpdateData(data: any) {
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
