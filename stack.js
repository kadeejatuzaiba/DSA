
// A stack is a linear data structure that follows the Last In, First Out (LIFO) principle.
// In a stack, elements are added and removed only from one end called the top.
// It is commonly used to manage data where the most recently added item must be accessed first.



// stack with array

class Stack{
    constructor(){
        this.arr=[]
    }
    push(val){
        this.arr.push(val)
    }
    pop(){
        return console.log('poped:',+this.arr.pop())
    }
    isEmpty(){
        return console.log('isEmpty :',+this.arr.length===0 )
    }
    peek(){
        return console.log('peek :',+this.arr[this.arr.length-1])
    }
    print(){
        console.log(this.arr)
    }
}
let stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
stack.isEmpty()
stack.peek()
stack.print()

// stack implementation using linkedlist

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top=null
        this.size=0
    }
    push(value){
        const newNode=new Node(value)
        newNode.next=this.top
        this.top=newNode
        this.size++
    }
    pop(){
        if(this.size===0){
           return  console.log('stack underflow')
        }
        let top=this.top.data
        this.top=this.top.next
        this.size--
        return console.log('poped val ',+top)
    }
    isEmpty(){
        return console.log('isEmpty :',+this.size===0)
    }
    peek(){
        return this.size===0?'no elements':console.log('top val :',+this.top.data)
    }
    getSize(){
        return console.log('size is ',+ this.size)
    }
    print(){
        let current=this.top
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
}
let stack=new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.isEmpty()
stack.pop()
stack.peek()
stack.print()
stack.getSize()


// Ṛeverse a string 
let stack=[]
let str='zaiba'
for(let i=0;i<str.length;i++){
    stack.push(str[i])
}
let rev=''
for(let i=0;i<str.length;i++){
    rev+=stack.pop()
}
console.log(rev)

// OR
class stack{
    constructor(){
        this.arr=[]
    }
    push(ele){
        return this.arr.push(ele)
    }
    pop(){
        return this.arr.pop()
    }
}
let s=new stack()
let str='zaiba'
for(let i=0;i<str.length;i++){
    s.push(str[i])
}
let rev=''
for(let i=0;i<str.length;i++){
    rev+=s.pop()
}
console.log(rev)

// check paranthecis balance
let str='({})()'
let stack=[]
let pair={
    ')':'(',
    '}':'{',
    ']':'['
}
for(let i=0;i<str.length;i++){
    if(str[i]==='{' ||str[i]==='['|| str[i]==='('){
        stack.push(str[i])
    }else{
        if(stack.pop()!==pair[str[i]]){
            console.log('not balanced')
            return;
        }
    }

}
console.log(stack.length===0?'balanced':'not balanced')