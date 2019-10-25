class Database {
    // TODO Part 1
    // Static X.... solve for X
    static OpenDB(): IDBOpenDBRequest {
        // TODO Part 2
        // Wouldn't it be great to abstract this into a nice little JS file for working with indexDB?
        var db = window.indexedDB.open("mileage-tracker")

        db.onupgradeneeded = function (event: Event) {
            var db = (event.target as IDBOpenDBRequest).result;

            console.log("Generating DB", db);
            var mileageEntry = db.createObjectStore("Mileage", { keyPath: 'entryId', autoIncrement: true });
            mileageEntry.createIndex("Mileage", "");
            mileageEntry.createIndex("Date", "");
            mileageEntry.createIndex("Fuel", "");
            mileageEntry.createIndex("TotalCost", "");
        }
        return db;
    }
    static Save(toAdd: any): boolean {
        // TODO Part 3
        // Let's Abstract our connection
        var db = this.OpenDB();
        db.onsuccess = function () {

            var transaction = db.result.transaction(["Mileage"], "readwrite");

            var objectStore = transaction.objectStore("Mileage");

            var request = objectStore.add(toAdd);
            // TODO Part 4
            // Welcome to call backs
            request.onsuccess = function (event: Event) {
                console.log("Save successful");
            }
        }
        return false;
    }
    static Get(): object {
        var db = this.OpenDB();

        db.onsuccess = function (event: Event) {
            // I've got enough place holders for a dinner party!
        }
        return {};
    }
}
