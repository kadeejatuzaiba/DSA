// A hash table is a data structure that stores data in key–value pairs for fast access.
// It uses a hash function to convert keys into index values in an underlying array.
// This allows efficient insertion, search, and deletion of data.

class HashTable{
    constructor(size){
        this.table=new Array(size)
    }
    
    hash(key){
        let total=0
        for(let char of key){
            total+=char.charCodeAt(0)
        }
        return total%this.table.length
    }
    set(key,value){
        const index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
        for(let pair of this.table[index]){
            if(pair[0]===key){
                pair[1]=value
                return 
            }
        }
        this.table[index].push([key ,value])
    }
    get(key){
        const index=this.hash(key)
       for(let pair of this.table[index]){
           if(pair[0]===key){
               return pair[1]
           }
       }
       return undefined
       
    }
}

let ht=new HashTable(10)
ht.set("name", "Zaiba");
ht.set("age", 21);
console.log(ht.get('name'))


// angram checking
function isAnagram(s1,s2){
    if(s1.length!==s2.length){
        return false
    }
    let map={}
    for(let ch of s1){
        map[ch]=(map[ch] || 0)+1
    }
    for(let ch of s2){
        if(!map[ch]){
            return false
        }
        map[ch]--
    }
    return true
}
let s1='zai'
let s2='aib'
console.log(isAnagram(s1,s2))