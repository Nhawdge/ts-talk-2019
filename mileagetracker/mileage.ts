// TODO 1
// Start Function!
// "Plain JS"
function Start(): void {
    console.log("Start");
    var form = document.querySelector('#Entry') as HTMLElement;
    var entry = new Entry();
    form.appendChild(entry.Render())

    var reportElem = document.querySelector('#Report') as HTMLElement;
    var report = new Report();

    Database.GetAll(data => {
        report.UpdateData(data);
        reportElem.appendChild(report.RenderData())
    });
}
// END 

document.addEventListener("DOMContentLoaded", Start);