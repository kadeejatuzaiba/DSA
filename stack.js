
// // A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
// // In a stack, elements are added and removed only from one end called the top.
// // It is commonly used to manage data where the most recently added item must be accessed first.



// // stack with array

// class Stack{
//     constructor(){
//         this.arr=[]
//     }
//     push(val){
//         this.arr.push(val)
//     }
//     pop(){
//         return console.log('poped:',+this.arr.pop())
//     }
//     isEmpty(){
//         return console.log('isEmpty :',+this.arr.length===0 )
//     }
//     peek(){
//         return console.log('peek :',+this.arr[this.arr.length-1])
//     }
//     print(){
//         console.log(this.arr)
//     }
// }
// let stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.pop()
// stack.isEmpty()
// stack.peek()
// stack.print()

// // stack implementation using linkedlist

// class Node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null
//         this.size=0
//     }
//     push(value){
//         const newNode=new Node(value)
//         newNode.next=this.top
//         this.top=newNode
//         this.size++
//     }
//     pop(){
//         if(this.size===0){
//            return  console.log('stack underflow')
//         }
//         let top=this.top.data
//         this.top=this.top.next
//         this.size--
//         return console.log('poped val ',+top)
//     }
//     isEmpty(){
//         return console.log('isEmpty :',+this.size===0)
//     }
//     peek(){
//         return this.size===0?'no elements':console.log('top val :',+this.top.data)
//     }
//     getSize(){
//         return console.log('size is ',+ this.size)
//     }
//     print(){
//         let current=this.top
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
// }
// let stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.isEmpty()
// stack.pop()
// stack.peek()
// stack.print()
// stack.getSize()


// // Ṛeverse a string 
// let stack=[]
// let str='zaiba'
// for(let i=0;i<str.length;i++){
//     stack.push(str[i])
// }
// let rev=''
// for(let i=0;i<str.length;i++){
//     rev+=stack.pop()
// }
// console.log(rev)

// // OR
// class stack{
//     constructor(){
//         this.arr=[]
//     }
//     push(ele){
//         return this.arr.push(ele)
//     }
//     pop(){
//         return this.arr.pop()
//     }
// }
// let s=new stack()
// let str='zaiba'
// for(let i=0;i<str.length;i++){
//     s.push(str[i])
// }
// let rev=''
// for(let i=0;i<str.length;i++){
//     rev+=s.pop()
// }
// console.log(rev)

// // check paranthecis balance
// let str='({})()'
// let stack=[]
// let pair={
//     ')':'(',
//     '}':'{',
//     ']':'['
// }
// for(let i=0;i<str.length;i++){
//     if(str[i]==='{' ||str[i]==='['|| str[i]==='('){
//         stack.push(str[i])
//     }else{
//         if(stack.pop()!==pair[str[i]]){
//             console.log('not balanced')
//             return;
//         }
//     }

// }
// console.log(stack.length===0?'balanced':'not balanced')





// // stack using queue
// class Stack{
//     constructor(){
//         this.q=[]
//     }
//     push(data){
//         this.q.push(data)
//         for(let i=0;i<this.q.length-1;i++){
//             this.q.push(this.q.shift())
//         }
       
//     }
//     pop(){
//       return this.q.shift()
//     }
//     print(){
//         console.log(this.q)
//     }
// }
// let s=new Stack()
// s.push(10)
// s.push(20)
// s.push(30)
// s.push(40)
// s.print()
// console.log('poped',s.pop())
// s.print()



// // queue using stack 
// class Queue{
//     constructor(){
//         this.s1=[]
//         this.s2=[]
//     }
//     enqueue(data){
//        this.s1.push(data)
//     }
//     // dequeue(){
//     //     let l=this.s1.length
//     //     for(let i=0;i<l;i++){
//     //         this.s2.push(this.s1.pop())
//     //     }
//     //     let poped=this.s2.pop()
//     //     let ln=this.s2.length
//     //     for(let i=0;i<ln;i++){
//     //         this.s1.push(this.s2.pop())
//     //     }
        
//     //     return poped
//     // }
//     dequeue() {
//     if (this.s2.length === 0) {
//         while (this.s1.length) {
//             this.s2.push(this.s1.pop());
//         }
//     }
//     return this.s2.pop();
// }
//     print(){
//         console.log(this.s1)
//     }
// }
// let q=new Queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log('dequeue',q.dequeue())
// console.log('dequeue',q.dequeue())
// q.enqueue(90)
// q.print()








//^ 2. Implement a Stack using a Linked List.
class Node {
    constructor(data) {
        this.data=data
        this.next=null 
    }
}

class Stack{
    constructor(){
        this.head=null
    }
    push(data){
        let newNode=new Node(data)
        if(!this.head){
            this.head=newNode
            return
        }
        let node=this.head
        while (node.next) {
            node=node.next
        }
        node.next=newNode
    }
    pop(){
        if(!this.head) return 
        let node=this.head
        while (node.next.next) {
            node=node.next
        }
        let poped=node.next
        node.next=null 
        return poped
    }
    print(){
        if(!this.head) return 
        let node=this.head
        while (node) {
            console.log(node.data)
            node=node.next
        }
    }
}
let s=new Stack()
s.push(10)
s.push(20)
s.push(30)
console.log(s.pop())
s.print()





//^ 1. Implement a Stack using an Array.

class Stack {
    constructor() {
        this.stack=[]
    }
    push(data){
        this.stack.push(data)
    }
    pop(){
        this.stack.pop()
    }
    peak(){
        return this.stack[this.stack.length-1]
    }
    print(){
        console.log(this.stack)
    }
    // 3. Reverse a string using a stack.
reverseStr(str) {
    let stack = []

    for (let char of str) {
        stack.push(char)
    }
    let result = ''
    while (stack.length > 0) {
        result += stack.pop()
    }
    return result
}
}
let s=new Stack()
s.push(10)
s.push(20)
s.push(30)
// s.pop()
// console.log(s.peak())
s.print()
console.log(s.reverseStr('zaiba'))



//^ 4. Check for balanced parentheses `()`, `{}`, `[]`. *(LeetCode #20)*
// let str='({})()'
// let stack=[]
// let pair={
//     ')':'(',
//     '}':'{',
//     ']':'['
// }
// for(let i=0;i<str.length;i++){
//     if(str[i]==='{' ||str[i]==='['|| str[i]==='('){
//         stack.push(str[i])
//     }else{
//         if(stack.pop()!==pair[str[i]]){
//             console.log('not balanced')
//             return;
//         }
//     }

// }
// console.log(stack.length===0?'balanced':'not balanced')


//^ 5. Implement a MinStack that supports `push`, `pop`, `top`, and `getMin` in **O(1)** time. *(LeetCode #155)*

// class Stack {
//     constructor() {
//         this.stack=[]
//         this.minStack=[]
//     }
//     push(data){
//         this.stack.push(data)
//         if(this.minStack.length===0 || data<this.minStack[this.minStack.length-1]){
//             this.minStack.push(data)
//         }
//     }
//     pop(){
//         let removed=this.stack.pop()
//         if(removed===this.minStack[this.minStack.length-1]){
//             this.minStack.pop()
//         }
//     }
//     top(){
//         return this.stack[this.stack.length-1]
//     }
//     getMin(){
//        return this.minStack[this.minStack.length-1]
//     }
// }

// let stack=new Stack()
// stack.push(10)
// stack.push(4)
// stack.push(44)
// stack.pop()
// console.log(stack.top())
// console.log(stack.getMin())
// console.log(stack.stack)


//^ 6. Reverse a stack using recursion without using extra space apart from the call stack.

// class Stack{
//     constructor(){
//         this.stack=[]
//     }
//     push(data){
//         this.stack.push(data)
//     }
//     pop(){
//         this.stack.pop()
//     }
//     reverseStack(){
//         if(this.stack.length===0){
//             return 
//         }
//         let top=this.stack.pop()
//         this.reverseStack(this.stack)
//         this.insertAtBottom(this.stack,top)
//     }
//      insertAtBottom(stack,value){
//         if(stack.length===0){
//             this.stack.push(value)
//             return 
//         }
//          let top=this.stack.pop()
//          this.insertAtBottom(this.stack,value)
//          this.stack.push(top)
//     }
// }

// let stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.reverseStack()
// console.log(stack.stack)


//^ 7. Sort a stack using a temporary stack.
// class Stack {
//     constructor() {
//         this.stack = []
//     }

//     push(data) {
//         this.stack.push(data)
//     }

//     pop() {
//         return this.stack.pop()
//     }

//     sortStack() {
//         let temp=[]
//         while(this.stack.length>0){
//             let top=this.pop()
//             while(temp.length>0&&temp[temp.length-1]>top){
//                 this.stack.push(temp.pop())
//             }
//             temp.push(top)
//         }
//         this.stack=temp
//     }
// }

// let stack = new Stack()

// stack.push(3)
// stack.push(1)
// stack.push(4)
// stack.push(2)

// stack.sortStack()

// console.log(stack.stack)

//^ 8. Implement a stack that rejects duplicate values on `push`.
// class Stack {
//     constructor() {
//         this.stack = []
//     }

//     push(data) {

//         if (this.stack.includes(data)) {
//             console.log("Duplicate value is not allowed")
//             return
//         }

//         this.stack.push(data)
//     }

//     pop() {
//         return this.stack.pop()
//     }

//     top() {
//         return this.stack[this.stack.length - 1]
//     }
// }

// let stack = new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(20)

// console.log(stack.stack)


//^ 9. Implement Undo-Redo functionality for a text editor using two stacks.-padichittilla
// let text = ""
// let undoStack = []
// let redoStack = []

// function type(data) {
//     undoStack.push(text)
//     text += data
//     redoStack = []
// }

// function undo() {
//     if (undoStack.length === 0) return

//     redoStack.push(text)
//     text = undoStack.pop()
// }

// function redo() {
//     if (redoStack.length === 0) return

//     undoStack.push(text)
//     text = redoStack.pop()
// }

// type("I ")
// type("am ")
// type("Zaiba")

// console.log(text)

// undo()
// console.log(text)

// redo()
// console.log(text)


//^ 10. Check if a string is a palindrome using a stack.
// let str='madam'
// function isPal(str) {
//     let stack=[]
// for(let ch of str){
//     stack.push(ch)
// }
// for(let ch of stack){
//     if(ch!==stack.pop()){
//         return 'no palindrom'
//     }
// }
//     return 'palindrom'
// }
// console.log(isPal(str))

//^ 11. Next Greater Element using the Monotonic Stack pattern.