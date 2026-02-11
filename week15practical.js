// Create a binary tree and calculate its height.
// Implement a binary tree (not BST) and show how the insert function works
class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class BT{
    constructor(){
        this.root=null
    }
    insert(data){
        let newNode=new Node(data)
        if(!this.root){
            this.root=newNode
            return
        }
        let queue=[this.root]
        while(queue.length){
            let current=queue.shift()
            if(current.left===null){
                current.left=newNode
                return
            }
            queue.push(current.left)
            if(current.right===null){
                current.right=newNode
                return
            }
            queue.push(current.right)
        }
    }
    LOT(){
        
        let res=[]
        if(!this.root) return res
        let queue=[this.root]
        while(queue.length){
            let current=queue.shift()
            res.push(current.data)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        return res
    }
    height(node){
        if(node===null) return -1
        let leftHight=this.height(node.left)
        let rightHight=this.height(node.right)
        return 1+Math.max(leftHight,rightHight)
    }
    print(){
        console.log(this.LOT())
    }
}
let bt=new BT()
bt.insert(10)
bt.insert(20)
bt.insert(55)
bt.insert(90)
bt.insert(35)
bt.insert(66)
bt.insert(4)
bt.insert(2)
console.log(bt.height(bt.root))
bt.print()



class Tree {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    insert(child) {
        this.children.push(child);
    }

    // DFS print
    print(node = this, res = []) {
        res.push(node.data);
        for (let child of node.children) {
            this.print(child, res);
        }
        return res;
    }
}

// Create nodes
let html = new Tree('html');
let head = new Tree('head');
let body = new Tree('body');
let div1 = new Tree('div');
let div2 = new Tree('div');
let div3 = new Tree('div');

// Build structure
html.insert(head);
html.insert(body);
body.insert(div1);
div1.insert(div2);
div2.insert(div3);

// Display elements
console.log(html.print());





// html
// ├── head
// └── body
//     ├── div
//     │   ├── p
//     │   └── div
//     └── span

// 1) create a tree
//  2) countTag(domRoot, 'span') // 1
class Tree{
    constructor(tag){
        this.tag=tag
        this.children=[]
    }
    insert(data){
        this.children.push(data)
    }
}
let html=new Tree('html')
let head=new Tree('head')
let body=new Tree('body')
let div1=new Tree('div')
let p=new Tree('p')
let div2=new Tree('div')
let span=new Tree('span')
html.insert(head)
html.insert(body)
body.insert(div1)
body.insert(span)
div1.insert(p)
div1.insert(div2)
function countTages(node,targetTag){
    let count=0
    if(node.tag===targetTag){
        count++
    }
    for(let t of node.children){
       count+=countTages(t,targetTag)
    }
    return count
    
}
console.log(countTages(html,'body'))




