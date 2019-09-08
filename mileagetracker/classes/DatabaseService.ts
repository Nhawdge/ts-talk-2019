class Database {
    static Save(): boolean {
        return false;
    }
    static Get(): object {
        var db = window.indexedDB.open("Mileage")
        db.onsuccess = function (event: Event) {
            var db = (event.target as IDBOpenDBRequest).result;
            //console.log(event);
            //console.log(db.result);
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

        db.onupgradeneeded = function (event: Event) {
            var db = (event.target as IDBOpenDBRequest).result;

            console.log("db", db);
            var mileageEntry = db.createObjectStore("Mileage");
            mileageEntry.createIndex("Date", "Date");
            mileageEntry.add("Mileage", "Mileage");
            mileageEntry.add("Date", "Date");
            mileageEntry.add("Fuel", "Fuel");
            mileageEntry.add("TotalCost", "TotalCost");
        }

        //db.results
        return {};
    }
}


interface DatabaseTable {
    Name: string;

}