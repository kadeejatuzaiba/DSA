

// A tree is a hierarchical data structure made of nodes connected by edges.
// It starts from a root node, and each node can have zero or more child nodes.
// Trees are used to represent parent-child relationships efficiently.




// A binary tree is a hierarchical data structure in which each node has at most two children, called the left and right child.
// It is used to organize data in a structured way that supports efficient traversal and problem solving.


// binary tree
class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class binaryTree{
    constructor(){
        this.root=null;
    }
    insert(data){
        const newNode=new Node(data)
        if(!this.root){ 
            this.root=newNode
            return;
        }
        const queue=[this.root]
        while(queue.length){
            let current=queue.shift()
        if(current.left===null){
            current.left=newNode;
            return;
        }else{
            queue.push(current.left)
        }
        if(current.right===null){
            current.right=newNode;
            return;
        }else{
            queue.push(current.right)
        }
            
        }
    }
    countNodes(node=this.root){
        if(node===null) return 0;
        return 1+this.countNodes(node.left)+this.countNodes(node.right)
    }
    countLeafNodes(node=this.root){
        if(node===null){
            return 0
        }
        if(node.left===null && node.right===null){
            return 1
        }
        return this.countLeafNodes(node.left)+this.countLeafNodes(node.right)
    }
    levelOrderTraversal(){
        let res=[]
        let queue=[]
        if(this.root){
            queue.push(this.root)
        }
        while(queue.length){
            let current=queue.shift() 
            res.push(current.data)
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return res
    }
    preOrderTraversal(node=this.root,res=[]){
        if(node){
            res.push(node.data)
            this.preOrderTraversal(node.left,res)
            this.preOrderTraversal(node.right,res)
        }
        return res
    }
    postOrderTraversal(node=this.root,res=[]){
        if(node){
            this.postOrderTraversal(node.left,res)
            this.postOrderTraversal(node.right,res)
            res.push(node.data)
        }
        return res;
    }
    inOrderTraversal(node=this.root,res=[]){
        if(node){
            this.inOrderTraversal(node.left,res)
            res.push(node.data)
            this.inOrderTraversal(node.right,res)
        }
        return res
    }
    maxDepth(node=this.root){
        if(node===null) return 0
        let leftHight=this.maxDepth(node.left)
        let rightHight=this.maxDepth(node.right)
        return Math.max(leftHight,rightHight)+1
    }
    
    search(value){
        if(!this.root) return false
        let queue=[this.root]
        while(queue.length){
            let current=queue.shift()
            if(current.data===value) return true
            if(current.left) queue.push(current.left)
             if(current.right) queue.push(current.right)
        }
        return false
    }
}



// tree.insert(10)
// tree.insert(20)
// tree.insert(30)
// tree.insert(40)
// tree.insert(50)
// console.log('isHave:',tree.search(100))
// console.log('Number of nodes:',+tree.countNodes())
// console.log('Number of leafNodes:',+tree.countLeafNodes())
// console.log('preOrderTraversal',tree.preOrderTraversal())
// console.log('postOrderTraversal',tree.postOrderTraversal())
// console.log('inOrderTraversal',tree.inOrderTraversal())
// console.log('levelOrderTraversal',tree.levelOrderTraversal())
// console.log('MaxDepth',tree.maxDepth())

