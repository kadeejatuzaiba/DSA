// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class SLinkedlist{
//     constructor(){
//         this.head=null
//     }
//     addEnd(data){
//         let newNode=new Node(data)
//         if(!this.head) {
//             this.head=newNode
//             return;
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//     }
//     print(){
//         if(!this.head) return 
//         let current=this.head
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
// }
// let list=new SLinkedlist()
// list.addEnd(10)
// list.addEnd(20)
// list.print()


// <------DLL------>

// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//         this.prev=null
//     }
// }
// class DLinkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addEnd(data){
//         let newNode=new Node(data)
//         if(!this.head){
``
//             this.head=newNode
//             this.tail=newNode
//             return;
//         }
//         this.tail.next=newNode
//         newNode.prev=this.tail
//         this.tail=newNode
//     }
//     printBackward(){
//         let current=this.tail
//         while(current){
//             console.log(current.data)
//             current=current.prev
//         }
//     }


// }
// let list=new DLinkedlist()
// list.addEnd(10)
// list.addEnd(20)
// list.printBackward()


// <-----Delete node with value specified----->

// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class SLinkedlist{
//     constructor(){
//         this.head=null
//     }
    
//     addEnd(data){
//         let newNode=new Node(data)
//         if(!this.head) {
//             this.head=newNode
//             return;
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//     }
//     delete(data){
//         if(!this.head) return
//         if(this.head.data===data){
//             this.head=this.head.next
//             return
//         }
//         let current=this.head
//         while(current.next&&current.next.data!==data){
//             current=current.next
//         }
//         current.next=current.next.next
//     }
//     print(){
//         if(!this.head) return 
//         let current=this.head
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
// }
// let list=new SLinkedlist()
// list.addEnd(10)
// list.addEnd(20)
// list.addEnd(30)
// list.addEnd(40)
// list.delete(20)
// list.print()


// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class Linkedlist{
//     constructor(){
//         this.head=null
//     }
//     addLast(data){
//         let newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             return 
//         }
//         let current=this.head
//         while(current.next){
//             current=current.next
//         }
//         current.next=newNode
//     }
//     size(){
//         let count=0
//         let current=this.head
//         while(current){
//             count++
//             current=current.next
//         }
//         return count;
//     }
//     addAt(index,data){
//         if(index<0 || index>this.size()){
//             console.error('Invalid index')
//             return;
//         }
//         let newNode=new Node(data)
//         if(index===0){
//             newNode.next=this.head
//             this.head=newNode
//             return 
//         }
//         let current=this.head
//         for(let i=0;i<index-1;i++){
//             current=current.next
//         }
//         newNode.next=current.next
//         current.next=newNode
//     }
//     removeTop(){
//         if(!this.head) return
//         this.head=this.head.next
//     }
//     removeLast(){
        
//     }
//     isCircle(){
//         if(!this.head){
//             return
//         }
//        let slow=this.head
//        let fast=this.head
//        if(fast&&fast.next){
//            fast=fast.next.next
//            slow=slow.next
//            if(fast===slow) return true
//        }
//        return false
//     }
//     print(){
//         let current=this.head
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
// }
// let list =new Linkedlist()
// list.addLast(10)
// let a=[20,30,10]
// for(let i=0;i<a.length;i++){
//     list.addLast(a[i])
// }
// list.addAt(3,35)
// console.log(list.isCircle())
// list.print()



class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class Linkedlist{
    constructor(){
        this.head=null
    }
    addEnd(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        let current=this.head
        while(current.next){
            current=current.next
        }
        current.next=newNode
    }
    addFirst(data){
        let newNode=new Node(data)
        if(!this.head) {
            this.head=newNode
            return
        }
        newNode.next=this.head
        this.head=newNode
    }
    print(){
        if(!this.head) return 
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
    size(){
        let count=0
        let current=this.head
        while(current){
            count++
            current=current.next
        }
        return count
    }
    addAt(index,data){
        if(index<0 || index>this.size){
            return console.log('its not a valid index')
        }
        if(index===0){
            newNode.next=this.head
            this.head=newNode
        }
        let newNode=new Node(data)
        let current=this.head
        for(let i=0;i<index-1;i++){
            current=current.next
        }
        newNode.next=current.next
        current.next=newNode
    }
    removeTop(){
        if(!this.head) return
        this.head=this.head.next
    }
    removeLast(){
        if(!this.head) return
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        current.next=null
    }
    isCircular(){
        if(!this.head) return false
        let slow=this.head
        let fast=this.head
        while(fast&&fast.next){
            slow=slow.next
            fast=fast.next.next
        }
        if(slow===fast) return true
        
        return false
    }
    isPureCircular(){
        if(!this.head) return false
        let current=this.head
        while(current.next && current.next!==this.head){
            current=current.next
        }
        return current.next===this.head
    }
    deleteNode(data){
        if(!this.head) return
        let current=this.head
        if(current.data===data){
            this.head=this.head.next
            return
        }
        while(current.next&&current.next.data!==data){
            current=current.next
        }
        current.next=current.next.next
    }
}
let ll=new Linkedlist()
ll.addEnd(1)
ll.addEnd(2)
ll.addEnd(3)
ll.addEnd(4)
ll.addEnd(5)
ll.addFirst(0)
ll.addAt(2,11)
ll.deleteNode(11)
// ll.removeTop()
// ll.size()
// ll.removeLast()
ll.print()
// console.log(ll.isCircular())


class Node{
    constructor(data){
        this.data=data
        this.next=null
        this.prev=null
    }
}
class DoublyLinkedlist{
    constructor(){
        this.head=null
        this.tail=null
    }
    addFirst(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=this.tail=newNode
            return
        }
        newNode.next=this.head
        this.head.prev=newNode
        this.head=newNode
    }
    addLast(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=this.tail=newNode
        }else{
            newNode.prev=this.tail
            this.tail.next=newNode
            this.tail=newNode
        }
    }
    deleteFirst(){
        if(!this.head) return
        if(this.head===this.tail){
            this.head=this.tail=null
        }else{
            this.head=this.head.next
            this.head.prev=null
        }
    }
    deleteLast(){
        if(!this.head)return
        if(this.head===this.tail){
            this.head=this.tail=null
        }else{
            this.tail=this.tail.prev
            this.tail.next=null
        }
    }
    print(){
        if(!this.head)return 
        let current=this.head
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}
let dll=new DoublyLinkedlist()
dll.addFirst(10)
dll.addFirst(20)
dll.addFirst(30)
dll.addFirst(40)
dll.addLast(300)
dll.deleteLast()
dll.print()