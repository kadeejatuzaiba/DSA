
// A Trie is a tree-based data structure used to store and search strings efficiently.
// Each node represents a character, and words are formed by following paths from the root.
// It is mainly used for fast prefix search, autocomplete, and dictionary operations.



class Node{
    constructor(){
        this.children={}
        this.isEnd=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new Node()
            }
            node=node.children[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char]) return false
            node=node.children[char]
        }
        return node.isEnd
    }
    startWith(pre){
        let node=this.root
        for(let char of pre){
            if(!node.children[char]) return false
            node=node.children[char]
        }
        return true
    }

    delete(word,node=this.root,i=0){
        if(i===word.length){
            if(!node.isEnd) return false
            node.isEnd=false
            return Object.keys(node.children).length===0
        }
        let ch=word[i]
        if(!node.children[ch]) return false
        let shouldDlt=this.delete(word,node.children[ch],i+1)
        if(shouldDlt){
            delete node.children[ch]
        return Object.keys(node.children)===0 && node.isEnd===false
        }
        return false
    }
    LCP(){
        let prefix=''
        let node=this.root
        while(node && !node.isENd && Object.keys(node.children).length===1){
            let ch=Object.keys(node.children)[0]
            prefix+=ch
            node=node.children[ch]
        }
        return prefix
    }
}
let trie=new Trie()
trie.insert('apple')
trie.insert('applee')
trie.insert('apjcb')
trie.delete('applee')
console.log(trie.LCP())
console.log(trie.search('apple'))
console.log(trie.search('applee'))









class Node{
    constructor(){
        this.child={}
        this.end=false
    }
}
class Trie{
    constructor(){
        this.root=new Node()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                node.child[char]=new Node()
            }
            node=node.child[char]
        }
        node.end=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node.child[char]){
                return false
            }
            node=node.child[char]
        }
        return node.end
    }
    autocomplete(pre){
        let node=this.root
        for(let ch of pre){
            if(!node.child[ch]) return []
            node=node.child[ch]
        }
        let result=[]
        this.dfs(node,pre,result)
        return result
    }
    dfs(node,currentwrd,result){
        if(node.end){
            result.push(currentwrd)
        }
        for(let ch in node.child){
            this.dfs(node.child[ch],currentwrd+ch,result)
        }
        
    }
}
let trie=new Trie()
trie.insert('apple')
trie.insert('car')
trie.insert('cardriver')
trie.insert('cart')
trie.insert('cartaxi')
// console.log(trie.search('car'))
// console.log(trie.search('app'))
console.log(trie.autocomplete('car'))