class Database {
    static OpenDB(): IDBOpenDBRequest {
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
    static Save(toAdd: any): void {
        var db = this.OpenDB();
        db.onsuccess = function () {
            // TODO Part 5
            // What is this mess and why does it work?
            var transaction = db.result.transaction(["Mileage"], "readwrite");

            var objectStore = transaction.objectStore("Mileage");

            var request = objectStore.add(toAdd);
            // TODO Part 6
            // How come I never got this many call backs on my dating profile?
            request.onsuccess = function (event: Event) {
                console.log("Save successful");
                return true;
            }
            request.onerror = function () {
                console.log("Save failed");
                return false;
            }
        }

    }
    static Get(): object {
        var db = this.OpenDB();

        db.onsuccess = function (event: Event) {
        }
        // TODO 7
        // We'll get here, I promise.
        return {};
    }
}
