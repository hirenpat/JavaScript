//Create your own Hash Table

class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;

        for(let i = 0; i < key.length; i++){
            //The charCodeAt() method returns an integer between 0 and 65535
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
            this.data[address].push([key, value]);
            //console.log(this.data);
        }
        else{
            this.data[address].push([key, value]);
        }
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if(currentBucket.length){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined
    }

    // keys(){
    //     const keysArray = [];
    //     for(let i = 0; i < this.data.length; i++){
    //         if(this.data[i]){
    //             keysArray.push(this.data[i][0][0]);
    //         }
    //     }
    //     return keysArray;
    // }
}

const myHashTable = new HashTable(50);

myHashTable.set('California',1);
myHashTable.set('Chicago',2);
myHashTable.set('Miami', 10);
myHashTable.set('Michigan', 100);

myHashTable.get('Michigan');

// myHashTable.keys();