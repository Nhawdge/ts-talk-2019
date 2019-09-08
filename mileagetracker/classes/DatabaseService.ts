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
    static Save(toAdd: any): boolean {
        var db = this.OpenDB();
        db.onsuccess = function () {

            var transaction = db.result.transaction(["Mileage"], "readwrite");

            var objectStore = transaction.objectStore("Mileage");

            var request = objectStore.add(toAdd);
            request.onsuccess = function (event: Event) {
                console.log("Save successful");
            }
        }
        return false;
    }
    static Get(): object {
        var db = this.OpenDB();

        db.onsuccess = function (event: Event) {
            //(db.transaction as IDBTransaction).objectStore("Milage");


        }



        //db.results
        return {};
    }
}


interface DatabaseTable {
    Name: string;
    Columns: Array<DatabaseColumn>;
}

interface DatabaseColumn {
    Name: string;
    Key: string;
}