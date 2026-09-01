
// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//         this.prev=null
//     }
// }
// class DoublyLinkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//     }
//     addFirst(data){
//         let newNode=new Node(data)
//         if(!this.head){
//             this.head=this.tail=newNode
//             return
//         }
//         newNode.next=this.head
//         this.head.prev=newNode
//         this.head=newNode
//     }
//     addLast(data){
//         let newNode=new Node(data)
//         if(!this.head){
//             this.head=this.tail=newNode
//         }else{
//             newNode.prev=this.tail
//             this.tail.next=newNode
//             this.tail=newNode
//         }
//     }
//     deleteFirst(){
//         if(!this.head) return
//         if(this.head===this.tail){
//             this.head=this.tail=null
//         }else{
//             this.head=this.head.next
//             this.head.prev=null
//         }
//     }
//     deleteLast(){
//         if(!this.head)return
//         if(this.head===this.tail){
//             this.head=this.tail=null
//         }else{
//             this.tail=this.tail.prev
//             this.tail.next=null
//         }
//     }
//     print(){
//         if(!this.head)return 
//         let current=this.head
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
// }
// let dll=new DoublyLinkedlist()
// dll.addFirst(10)
// dll.addFirst(20)
// dll.addFirst(30)
// dll.addFirst(40)
// dll.addLast(300)
// dll.deleteLast()
// dll.print()




//^ 17. Implement a Doubly Linked List (with proper delete function).
//^ 18. Reverse a doubly linked list.
//^ 19. Delete a specific node (by value or position).
//^ 20. Add a node behind a node with particular data.
//^ 21. Delete front and back nodes where data == target.
//^ 22. Convert a Singly Linked List to a Doubly Linked List.
//^ 23. Convert a Doubly Linked List to a Circular Linked List.














//^ 17. Implement a Doubly Linked List (with proper delete function).
class Node {
    constructor(data) {
        this.data=data
        this.next=null 
        this.prev=null 
    }
}
class DlinkedList {
    constructor() {
         this.head=null
        this.tail=null 
    }
    append(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=this.tail=newNode
        }else{
            newNode.prev=this.tail
            this.tail.next=newNode
            this.tail=newNode
        }
    }
            prepend(data){
            let newNode=new Node(data)
            if (!this.head) {
                this.head=this.tail=newNode
            }else{
                this.head.prev=newNode
                newNode.next=this.head
                this.head=newNode
            }
        }
    reverseTraversal(){
        let node=this.tail
        while (node) {
            console.log(node.data)
            node=node.prev
        }
    }
    delete(data){
        let node=this.head
        while (node!==null) {
            if(node.data===data){
                if(this.head===this.tail){
                    this.head=this.tail=null
                }else if(node===this.head){
                    this.head=node.next
                    this.head.prev=null 
                }else if(node===this.tail){
                    this.tail=node.prev
                    this.tail.next=null 
                }else{
                    node.prev.next=node.next
                    node.next.prev=node.prev
                }
            }
            node=node.next
        }
    }
    traversal(){
        if(!this.head)return 
        let node=this.head
        while (node) {
            console.log(node.data)
            node=node.next
        }
    }
    //^ 18. Reverse a doubly linked list.
    reverse(){
        let current=this.head
        while(current){
            let temp=current.next
            
            current.next=current.prev
            current.prev=temp

            current=temp
        }
        let temp=this.head
        this.head=this.tail
        this.tail=temp
    }
    //^ 20. Add a node behind a node with particular data.
addNodeBehind(data,behind){
    let newNode=new Node(data)
    let  current=this.head
    while (current) {
        if (current.data === behind) {

            newNode.next = current;
            newNode.prev = current.prev;

            if (current.prev) {
                current.prev.next = newNode;
            } else {
                this.head = newNode;
            }

            current.prev = newNode;

            return;
        }

        current = current.next;
    }
    
}
    //^ 21. Delete front and back nodes where data == target.

//^ 23. Convert a Doubly Linked List to a Circular Linked List.
convertToCircular() {
    if (!this.head) {
        return;
    }

    this.head.prev = this.tail;
    this.tail.next = this.head;
}
}
let Dll=new DlinkedList()
Dll.append(10)
Dll.append(20)
Dll.append(30)
Dll.append(40)
Dll.append(50)
Dll.append(60)
// Dll.reverse()
// Dll.delete(50)
// Dll.prepend(200)
Dll.addNodeBehind(200,20)
Dll.traversal()

// Dll.reverseTraversal()









































