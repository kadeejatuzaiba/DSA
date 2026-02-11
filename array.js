//  Find the kth largest element in an array
let a=[2,3,4,1,6]
function kth(a,k){
    let maxInd=0
    
    for(let t=0;t<k;t++){
        let max=0
        for(let i=0;i<a.length;i++){
            if(a[i]>max){
                max=a[i]
                maxInd=i
            }
        }
        if(t===k-1){
            return a[maxInd]
        }
        for(let j=maxInd;j<a.length;j++){
            a[j]=a[j+1]
        }
        a.length--;
    }
}
console.log(kth(a,1))

// OR

let a=[2,3,4,1,6]
function kth(a,k){
    let maxInd=0
    
    for(let t=0;t<k;t++){
        let max=0
        for(let i=0;i<a.length;i++){
            if(a[i]>max){
                max=a[i]
                maxInd=i
            }
        }
        if(t===k-1){
            return a[maxInd]
        }
       a[maxInd]=-Infinity
    }
}
console.log(kth(a,3))


//  Find the frequency of occurrence of each number in an array.

let a=[1,2,3,4,5,2,3,4,2]
let fre={}
for(let i=0;i<a.length;i++){
    fre[a[i]]=(fre[a[i]] ||0)+1
}
console.log(fre)

//  Create a function to find the average of even numbers in an array

let a=[1,2,3,4,5]
function avg(a){
    let count=0
    let sum=0
    let avg;
    for(let i=0;i<a.length;i++){
        if(a[i]%2===0){
            sum+=a[i]
            count++
        }
    }
    avg=sum/count
    return avg
}
console.log(avg(a))

//  Find the common element between arrays
let a=[1,2,3,4,5]
let b=[5,6,2,9,2]
let res=[]
for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i]===b[j] && !res.includes(a[i])){
            res.push(a[i])
        }
    }
}
console.log(res)

//  Find the last occurrence of an element in a sorted array with duplicate values.
let a=[1,2,3,4,2,3,2,1]
let t=2
for(let i=a.length-1;i>=0;i--){
    if(a[i]===t){
        console.log(i)
        break
    }
}
// OR
//  Find the last occurrence of an element in a sorted array with duplicate values.
let a=[1,2,2,2,3,3,4,5,6,7,8,]
let t=3
function lastOcc(a,t){
    let result;
    let start=0
    let end=a.length-1
    while(start<=end){
    let mid=Math.floor((start+end)/2)
    if(a[mid]===t){
        result=mid
        start=mid+1
    }else if(a[mid]<t){
        start=mid+1
    }else{
        end=mid-1
    }
    }
    return result
}
console.log(lastOcc(a,t))