
// A binary search tree is a binary tree in which the left subtree contains values smaller than the node, and the right subtree contains values greater than the node.
// This property allows efficient searching, insertion, and deletion operations.

// binary Search tree

class Node{
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }
}
class BST{
    constructor(){
        this.root=null
    }
    insert(data){
        let newNode=new Node(data)
        if(!this.root){
            this.root=newNode
            return;
        }
        let current=this.root
        while(true){
            if(data<current.data){
                if(!current.left){
                    current.left=newNode
                    return
                }
                current=current.left
            }else{
                if(!current.right){
                    current.right=newNode
                    return;
                }
                current=current.right
            }
        }
    }
    levelOrderTraversal(){
        let res=[]
        let queue=[]
        if(this.root){
            queue=[this.root]
        }
        while(queue.length){
            let current=queue.shift()
            res.push(current.data)
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }
        return res
    }
    search(value){
        if(!this.root) return false
        let current=this.root
        while(current){
            if(current.data===value) return true
            if(value<current.data){
                current=current.left
            }else{
                current=current.right
            }
        }
        return false
    }
    inOrderT(node=this.root,res=[]){
        if(node){
            this.inOrderT(node.left,res)
            res.push(node.data)
            this.inOrderT(node.right,res)
        }
        return res
    }
    preOrderT(node=this.root,res=[]){
        if(node){
            res.push(node.data)
            this.preOrderT(node.left,res)
            this.preOrderT(node.right,res)
        }
        return res
    }
    postOrderT(node=this.root,res=[]){
        if(node){
            this.postOrderT(node.left,res)
            this.postOrderT(node.right,res)
            res.push(node.data)
        }
        return res
    }
    getLeaves(node=this.root,leaves=[]){
        if(!node) return
        
        if(node.left===null && node.right===null){
            leaves.push(node.data)
                return leaves;
        }
        this.getLeaves(node.left,leaves)
         this.getLeaves(node.right,leaves)
        return leaves;
    }
    closest(target){
        let current=this.root
        let closest=current.data
        while(current){
            if(Math.abs(target-current.data)<Math.abs(target-closest)){
                closest=current.data
            }
            if(target<current.data){
                current=current.left
            }else{
                current=current.right
            }
        }
        return closest
    }
    findMin(min=this.root){
        while(min.left){
            min=min.left
        }
        return min.data
    }
        findMax(max=this.root){
        while(max.right){
            max=max.right
        }
        return max.data
    }
    delete(value,node=this.root){
        if(!node) return null
        if(value<node.data){
            node.left= this.delete(value,node.left)
        }else if(value>node.data){
            node.right= this.delete(value,node.right)
        }else{
            if(!node.left&& !node.right) return null
            if(!node.left) return node.right
            if(!node.right) return node.left
            let successor=this.findMin(node.right)
            node.data=successor.data
            node.right=this.delete(successor.data,node.right)
        }
        return node
    }
    isBST(node=this.root,min=-Infinity,max=Infinity){
        if(!node) return true
        if(node.data<=min || node.data>=max){
            return false
        }
        return (
            this.isBST(node.left,min,node.data)&&
            this.isBST(node.right,node.data,max)
        )
    }
    print(){
        return this.levelOrderTraversal()
    }
}

let treeA=new BST()
treeA.insert(55)
treeA.insert(50)
treeA.insert(60)
treeA.insert(40)
treeA.insert(51)
treeA.insert(58)
treeA.insert(70)
treeA.insert(1)

let treeB=new BST()
treeB.insert(40)
treeB.insert(1)


function isSubTree(treeA,treeB){
    if(treeA.data===null || treeB.data===null) return false
    if(treeA.data===null && treeB.data===null) return true

    let Broot=treeB.root
    let Aroot=treeA.root
    if(Broot.data!==Aroot.data) return false
    return (isSubTree(Aroot.left,Broot.left)&&isSubTree(Aroot.right,Broot.right))

}
console.log(isSubTree(treeA,treeB))


















// let tree=new BST()
// tree.insert(10)
// tree.insert(20)
// tree.insert(30)
// tree.insert(8)
// tree.insert(7)
// tree.insert(11)
// tree.delete(7)
// console.log('isHave:',tree.search(302))
// console.log('BST:',tree.print())
// console.log('inOrderT:',tree.inOrderT())
// console.log('preOrderT:',tree.preOrderT())
// console.log('postOrderT:',tree.postOrderT())
// console.log('Leaves:',tree.getLeaves())
// console.log('Closest:',tree.closest(21))
// console.log('MinNode:',tree.findMin())
// console.log('MaxNode:',tree.findMax())
// console.log('isBST:',tree.isBST())