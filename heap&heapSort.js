// Max heap
class maxHeap{
    constructor(){
        this.heap=[]
    }
    getParentIndex(childIndex){
        return Math.floor((childIndex-1)/2)
    }
    getLeftChild(parantIndex){
        return  (2*parantIndex+1)
    }
     getRightChild(parantIndex){
        return  (2*parantIndex+2)
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    heapifyUp(){
        let index=this.heap.length-1
        while (index>0) {
            let parentInd=this.getParentIndex(index)
            if(this.heap[index]>this.heap[parentInd]){
                [this.heap[index],this.heap[parentInd]]=[this.heap[parentInd],this.heap[index]]
                index = parentInd;
            }else{
                break;
            }
        }
    }
    deleteRoot(){
        if(this.heap.length===0) return null
        if(this.heap.length===1) return this.heap.pop()

        let rootValue=this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown()
        return rootValue
    }
    heapifyDown(){
        let index=0
        let length=this.heap.length
        while(true){
            let left=this.getLeftChild(index)
            let right=this.getRightChild(index)
            let largest=index
            if(left<length && this.heap[left]>this.heap[largest]){
                largest=left
            }
            if(right<length&&this.heap[right]>this.heap[largest]){
                largest=right
            }
            if(largest===index) break;
            [this.heap[index],this.heap[largest]]=  [this.heap[largest],this.heap[index]]
            index=largest
        }
    }
    
    print(){
        console.log(this.heap)
    }
}
let heap=new maxHeap()
heap.insert(1)
heap.insert(5)
heap.insert(10)
heap.insert(2)
heap.deleteRoot()
heap.print()






function heapSort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }
    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr        
}

function heapify(arr,n,i) {
    let largest=i
    let left=2*i+1
    let right=2*i+2
    if(left<n && arr[left]>arr[largest]) largest=left
     if(right<n && arr[right]>arr[largest]) largest=right

    if(largest!==i){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,n,largest)
    }
}
let arr=[4,1,9,3,0,5]
console.log(heapSort(arr))