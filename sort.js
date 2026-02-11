// insertion sort
let a=[8,4,1,2,6]

for(let i=1;i<a.length;i++){
    let current=a[i]
    let j=i-1
    while(j>=0 && a[j]>current){
        a[j+1]=a[j]
        j--;
    }
    a[j+1]=current
}
console.log(a)

// selection sort
let a=[91,2,6,1]

for(let i=0;i<a.length-1;i++){
    let minInd=i
    for(let j=i+1;j<a.length;j++){
        if(a[j]<a[minInd]){
            minInd=j
        }
    }
    let temp=a[i]
    a[i]=a[minInd]
    a[minInd]=temp
}
console.log(a)

// Bubble sort
let a=[1,2,6,2,9,10,3,4,99]
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length-1;j++){
        if(a[j]>a[j+1]){
            [a[j],a[j+1]]=[a[j+1],a[j]]
        }
    }
}
console.log(a)

// merge sort
let a=[5,3,2,8,1,4,6,7]
function mergeSort(a){
    if(a.length<=1){
        return a
    }
    let mid=Math.floor(a.length/2)
    let left=a.slice(0,mid)
    let right=a.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sortar=[]
    let i=0
    let j=0
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
        sortar.push(left[i])
        i++
        }else{
            sortar.push(right[j])
            j++
        }
    }
  return sortar.concat(left.slice(i)).concat(right.slice(j))
}
console.log(mergeSort(a))


// QuickSort

let a=[6,5,4,3,2,1,89,66,1]
function quickSort(arr){
    if(arr.length<=1) return arr
    
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
console.log(quickSort(a))



// bubble sort desc order
function bubble(a){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length-i;j++){
            if(a[j]<a[j+1]){
                [a[j],a[j+1]]=[a[j+1],a[j]]
            }
        }
    }
    return a
}
let arr=[6,4,1,0,5,2]
console.log(bubble(arr))
// selection sort desc order
function selection(a){
    
    for(let i=0;i<a.length;i++){
        let min=i
        for(let j=i;j<a.length;j++){
            if(a[min]<a[j]){
                min=j
            }
        }
        [a[i],a[min]]=[a[min],a[i]]
    }
    return a
    
}
let arr=[6,4,8,2,1,0,5,88]
console.log(selection(arr))