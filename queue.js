// queue with arr
class Queue{
    constructor(){
        this.arr=[]
    }
    enqueue(val){
        this.arr.push(val)
    }
    dequeue(){
        return console.log('removed :',+this.arr.shift())
    }
    isEmpty(){
        return console.log('isEmpty :',+this.arr.length===0 )
    }
    peek(){
        return console.log('peek :',+this.arr[0])
    }
    print(){
        console.log(this.arr)
    }
}
let queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.dequeue()
queue.isEmpty()
queue.peek()
queue.print()


// queue with linkedlist

class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }
    enqueue(data){
        const newNode=new Node(data)
        if(this.isEmpty()){
            this.front=newNode
            this.rear=newNode
        }else{
            this.rear.next=newNode
            this.rear=newNode
        }
        this.size++
    }
    dequeue(){
        if(this.isEmpty()){
            return 'no nodes available'
        }
        let deq=this.front.data
        this.front=this.front.next
        this.size--;
        return deq
    }
    isEmpty(){
        return this.size===0
    }
    print(){
        if(this.isEmpty()){
            return 'no elements'
        }
        let current=this.front
        while(current){
            console.log(current.data)
            current=current.next
        }
    }
    getSize(){
        return this.size
    }
    peek(){
        return this.front.data
    }
}
let queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log('peek:',+queue.peek())
console.log('removed :',+queue.dequeue())
queue.print()
console.log('size of queue :',+queue.getSize())



// generate binary numbers usin queue

function generateBinary(n){
    let queue=[]
    queue.push('1')
    for(let i=0;i<n;i++){
        let front=queue.shift()
        console.log(front)
        queue.push(front+'0')
        queue.push(front+'1')
    }
    
}
generateBinary(5)