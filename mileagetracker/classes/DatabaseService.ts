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
            var transaction = db.result.transaction(["Mileage"], "readwrite");
            
            var objectStore = transaction.objectStore("Mileage");

            var request = objectStore.add(toAdd);
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
    static GetAll(callback: (data: any) => any): any {
        var db = this.OpenDB();
        db.onsuccess = function (event: Event) {
            var transaction = db.result.transaction(["Mileage"]);
            var request = transaction.objectStore("Mileage");

            var data = request.getAll();
            data.onsuccess = () => callback(data.result);
        }   
    }
}


