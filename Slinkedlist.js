
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
//     addEnd(data){
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
//     addFirst(data){
//         let newNode=new Node(data)
//         if(!this.head) {
//             this.head=newNode
//             return
//         }
//         newNode.next=this.head
//         this.head=newNode
//     }
//     print(){
//         if(!this.head) return 
//         let current=this.head
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
//     size(){
//         let count=0
//         let current=this.head
//         while(current){
//             count++
//             current=current.next
//         }
//         return count
//     }
//     addAt(index,data){
//         if(index<0 || index>this.size){
//             return console.log('its not a valid index')
//         }
//         let newNode=new Node(data)
//         if(index===0){
//             newNode.next=this.head
//             this.head=newNode
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
//         if(!this.head) return
//         let current=this.head
//         while(current.next.next){
//             current=current.next
//         }
//         current.next=null
//     }
//     isCircular(){
//         if(!this.head) return false
//         let slow=this.head
//         let fast=this.head
//         while(fast&&fast.next){
//             slow=slow.next
//             fast=fast.next.next         
//         }
//         if(slow===fast) return true
        
//         return false
//     }
//     isPureCircular(){
//         if(!this.head) return false
//         let current=this.head
//         while(current.next && current.next!==this.head){
//             current=current.next
//         }
//         return current.next===this.head
//     }
//     deleteNode(data){
//         if(!this.head) return
//         let current=this.head
//         if(current.data===data){
//             this.head=this.head.next
//             return
//         }
//         while(current.next&&current.next.data!==data){
//             current=current.next
//         }
//         current.next=current.next.next
//     }
//         findMiddle(){
// let slow=this.head
// let fast=this.head
// while(fast&&fast.next){
//     slow=slow.next
//     fast=fast.next.next
// }
// return slow.data
//     }
// }
// let ll=new Linkedlist()
// ll.addEnd(1)
// ll.addEnd(2)
// ll.addEnd(3)
// ll.addEnd(4)
// ll.addEnd(5)
// ll.addFirst(0)
// ll.addAt(2,11)
// ll.deleteNode(11)
// // ll.removeTop()
// // ll.size()
// // ll.removeLast()
// ll.print()
// // console.log(ll.isCircular())




// *=============================================================================================================
// *=============================================================================================================

// Implement a Singly Linked List (with class, including append/prepend, insert/delete at index, search, traversal).

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    append(data){
        this.size++
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return 
        }
        let current=this.head
        while (current.next) {
            current=current.next
        }
        current.next=newNode
    }
    prepend(data){
        this.size++
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return 
        }
        newNode.next=this.head
        this.head=newNode
    }
    search(data){
        if(!this.head) return false
        let current=this.head
        while (current) {
            if(current.data===data) return true
            current=current.next
        }
        return false
    }
    traversal(){
        if(!this.head) return 
        let current=this.head
        while (current) {
            console.log(current.data)
            current=current.next
        }
    }
    deleteAt(ind){
        if(ind<0 || ind>=this.size) return console.log('Invalid Index')
        this.size--;
        if(ind===0){
            this.head=this.head.next
            return 
        }
        let current=this.head
        for(let i=0;i<ind-1;i++){
            current=current.next
        }
        current.next=current.next.next
    }
    insertAt(ind,data){
        if(ind<0 || ind>this.size) return console.log('Invalid Index')
        let newNode=new Node(data)
        this.size++
        if(!this.head && ind===0){
            this.head=newNode
            return 
        }
        let current=this.head
        for(let i=0;i<ind-1;i++){
            current=current.next
        }
         newNode.next=current.next
        current.next=newNode 
    }
//^ 2. Find the middle element of a linked list (Fast & Slow pointer).
    findMiddle(){
        if(!this.head) return 
        let slow=this.head
        let fast =this.head
        while (fast.next && fast.next.next) {
            slow=slow.next
            fast=fast.next.next
        }
        return slow.data
    }  

// ^ Reverse a linked list (iterative and recursive).
    iterativeReverse(){
        let prev=null
        let curr=this.head
        while (curr!==null) {
            let next=curr.next
            curr.next=prev

            prev=curr
            curr=next
        }
        return prev
    }

//^ Detect a cycle/loop in a linked list (Floyd's Cycle Detection).
    isCycle(){
        let slow=this.head
        let fast=this.head
        while(fast!==null && fast.next!==null){
            slow=slow.next
            fast=fast.next.next
            if(slow===fast){
                return true
            }
        }
        return false
    }
//^ Remove the N-th node from the end of the list (Two-pointer approach).
deleteNthFromEnd(n){
        let slow=this.head
        let fast=this.head
        for(let i=0;i<n;i++){
            fast=fast.next
        }
        while (fast.next!==null) {
            slow=slow.next
            fast=fast.next
        }
        slow.next=slow.next.next
    }
    // ^Remove the middle element of a linked list.
    removeAtMiddle(){
        if(!this.head) return 
        let slow=this.head
        let fast =this.head
        let temp=this.head
        while (fast.next && fast.next.next) {
            temp=slow
            slow=slow.next
            fast=fast.next.next
        }
        temp.next=slow.next
    }
     // ^Remove all nodes that hold a specific value / delete by value.
    removeNodes(data){
        while (data===this.head.data) {
            this.head=this.head.next
        }
        let currrent=this.head
        while (currrent!==null&&currrent.next!==null) {
            if(currrent.next.data===data){
                currrent.next=currrent.next.next
            }
            currrent=currrent.next
        }
    }
     //^ Remove the last instance of a specific value.
    removeLastInta(data){
        let current=this.head
        let last=null
        let prev=null
        let lastPrev=null
        while (current!==null) {
            if(current.data===data){
                last=current
                lastPrev=prev
            }
            prev=current
            current=current.next
        }
        if(last===null){
            return
        }
        if(lastPrev===null){
            this.head=this.head.next
            return
        }
        lastPrev.next=lastPrev.next.next
    }
    // ^Remove duplicate nodes from a sorted/unsorted list.
    // ^sorted
    removeDup(){
        let current=this.head
        while (current!==null && current.next!==null) {
            if(current.data===current.next.data){
                current.next=current.next.next
            }
            current=current.next
        }
    }
    // ^unsorted
    removeDupUn(){
        let seen=[]
        let current=this.head
        let prev=null
        while (current) {
            if(seen.includes(current.data)){
                prev.next=current.next
            }else{
                prev=current
                seen.push(current.data)
            }
             current=current.next
        }
    }
        // ^Find the smallest and largest element in a linked list.
        smallest(){
        let small=this.head.data
        let current=this.head
        while (current) {
            if(current.data<small){
                small=current.data
            }
            current=current.next
        }
        return small
    }
        //^ Kth element from the end.
    kthElemntFromLast(k){
        let slow=this.head
        let fast=this.head
        for(let i=0;i<k;i++){
            fast=fast.next
        }
        while(fast!==null){
            slow=slow.next
            fast=fast.next
        }
        return slow.data
    }

// ^Check if a linked list is a palindrome.
isPalindrome() {
    if (this.head === null || this.head.next === null) {
        return true;
    }

    let slow = this.head;
    let fast = this.head;

    // Find the middle
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half
    let prev = null;
    let current = slow;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Compare both halves
    let first = this.head;
    let second = prev;

    while (second !== null) {
        if (first.data !== second.data) {
            return false;
        }

        first = first.next;
        second = second.next;
    }

    return true;
}

 //^ Swap the first and last nodes.

    swapFirstAndLast(){
        if(!this.head && !this.head.next){
            return 
        }
        let first=this.head
        let current=this.head
        while (current.next.next!==null) {
            current=current.next
        }
        let secLast=current
        let last=current.next
        secLast.next=first
        last.next=first.next
        first.next=null
        this.head=last
        
    }
    //^ Print all elements in reverse order.
    // ^Reverse printing
    reversePrint(node=this.head){
        if(node===null) return 
        this.reversePrint(node.next)
        console.log(node.data);
    }
        //^ 22. Convert a Singly Linked List to a Doubly Linked List.
    convertToDoubly() {
    let current = this.head;
    let prev = null;

    while (current) {
        current.prev = prev;

        prev = current;
        current = current.next;
    }
}
}


let ll=new LinkedList()
ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
ll.append(50)
ll.prepend(60)
ll.insertAt(6,200)
ll.deleteAt(6)
ll.deleteNthFromEnd(4)
ll.traversal()
 ll.removeNodes(20)
console.log('middle :'+ll.findMiddle())
console.log('isHave :'+ll.search(140))
console.log(ll.iterativeReverse())

console.log(ll.isCycle())


