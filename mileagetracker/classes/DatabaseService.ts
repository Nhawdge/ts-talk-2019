// TODO Part 1
// A new Class?!?!

class Database {
    static Save(): boolean {
        return false;
    }
    static Get(): object {
        // TODO Part 2
        // Ready... Set... INDEXDB
        var db = window.indexedDB.open("Mileage")
        db.onsuccess = function (event: Event) {
            // TODO Part 3
            // I'ma wizard! Watch me cast!
            var db = (event.target as IDBOpenDBRequest).result;
            var transaction = db.transaction(["Mileage"], "readwrite");
            transaction.oncomplete = function (evt: Event) {
                console.log("Transaction Complete")
            }
            var objectStore = transaction.objectStore("Mileage");
            var request = objectStore.add("100","Mileage");
            request.onsuccess =function(event:Event){
                console.log("request successful");
            }

        }

        // TODO Part 4
        // IndexDB - On upgrade needed. How cool is this?
        db.onupgradeneeded = function (event: Event) {
            var db = (event.target as IDBOpenDBRequest).result;

            console.log("db", db);

            // TODO Part 5
            // If anyone has ever used Index DB. Avert your eyes
            var mileageEntry = db.createObjectStore("Mileage");
            mileageEntry.createIndex("Date", "Date");
            mileageEntry.add("Mileage", "Mileage");
            mileageEntry.add("Date", "Date");
            mileageEntry.add("Fuel", "Fuel");
            mileageEntry.add("TotalCost", "TotalCost");
        }
        
        // TODO Part 6
        // If this isn't a WIP example I don't know what is.
        return {};
    }
}