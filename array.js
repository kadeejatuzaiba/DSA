// //  Find the kth largest element in an array
// let a=[2,3,4,1,6]
// function kth(a,k){
//     let maxInd=0
    
//     for(let t=0;t<k;t++){
//         let max=0
//         for(let i=0;i<a.length;i++){
//             if(a[i]>max){
//                 max=a[i]
//                 maxInd=i
//             }
//         }
//         if(t===k-1){
//             return a[maxInd]
//         }
//         for(let j=maxInd;j<a.length;j++){
//             a[j]=a[j+1]
//         }
//         a.length--;
//     }
// }
// console.log(kth(a,1))

// // OR

// let a=[2,3,4,1,6]
// function kth(a,k){
//     let maxInd=0
    
//     for(let t=0;t<k;t++){
//         let max=0
//         for(let i=0;i<a.length;i++){
//             if(a[i]>max){
//                 max=a[i]
//                 maxInd=i
//             }
//         }
//         if(t===k-1){
//             return a[maxInd]
//         }
//        a[maxInd]=-Infinity
//     }
// }
// console.log(kth(a,3))


// //  Find the frequency of occurrence of each number in an array.

// let a=[1,2,3,4,5,2,3,4,2]
// let fre={}
// for(let i=0;i<a.length;i++){
//     fre[a[i]]=(fre[a[i]] ||0)+1
// }
// console.log(fre)

// //  Create a function to find the average of even numbers in an array

// let a=[1,2,3,4,5]
// function avg(a){
//     let count=0
//     let sum=0
//     let avg;
//     for(let i=0;i<a.length;i++){
//         if(a[i]%2===0){
//             sum+=a[i]
//             count++
//         }
//     }
//     avg=sum/count
//     return avg
// }
// console.log(avg(a))

// //  Find the common element between arrays
// let a=[1,2,3,4,5]
// let b=[5,6,2,9,2]
// let res=[]
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//         if(a[i]===b[j] && !res.includes(a[i])){
//             res.push(a[i])
//         }
//     }
// }
// console.log(res)

// //  Find the last occurrence of an element in a sorted array with duplicate values.
// let a=[1,2,3,4,2,3,2,1]
// let t=2
// for(let i=a.length-1;i>=0;i--){
//     if(a[i]===t){
//         console.log(i)
//         break
//     }
// }
// // OR
// //  Find the last occurrence of an element in a sorted array with duplicate values.
// let a=[1,2,2,2,3,3,4,5,6,7,8,]
// let t=3
// function lastOcc(a,t){
//     let result;
//     let start=0
//     let end=a.length-1
//     while(start<=end){
//     let mid=Math.floor((start+end)/2)
//     if(a[mid]===t){
//         result=mid
//         start=mid+1
//     }else if(a[mid]<t){
//         start=mid+1
//     }else{
//         end=mid-1
//     }
//     }
//     return result
// }
// console.log(lastOcc(a,t))






// // ^remove odd duplicates using
// const arr=[1,4,2,1,3,2,5,3,7,7,5,4]
// let res=arr.filter((num,index)=>{
//     if(num%2===0){
//         return num
//     }else if(num%2===1&&index===arr.indexOf(num)){
//         return num
//     }
// })
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]%2===1 && res.includes(arr[i])){
// //         continue
// //     }else{
// //         res.push(arr[i])
// //     }
// // }
// console.log(res)


// // Move all zeros to the end without changing order of other elements
// let arr = [3, 0, 1, 0, 0, 2, 3, 6, 0];
// let pos=0

// for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         arr[pos]=arr[i]
//         pos++
//     }
// }
// for(let i=pos;i<arr.length;i++){
//     arr[i]=0
// }
// console.log(arr);



// // Find the missing number in array [1..n]
// let arr=[1,2,3,4,5,7,9,12]
// for(let i=1;i<arr[arr.length-1];i++){
//     if(!arr.includes(i)){
//         console.log(i)
//     }
// }


// //  Find all pairs in array that sum to a target value
// let arr=[2,3,4,5,6,1,9,3,3]
// function findPair(arr,t){
//     let pair=[]
// //     for(let i=0;i<arr.length;i++){
// //         for(let j=i+1;j<arr.length;j++){
// //             if(arr[i]+arr[j]===t){
// //                 pair.push([arr[i],arr[j]])
// //             }
// //         }
// //     }
// //   return  pair
// let set=new Set()
// for(let num of arr){
//     let dist=t-num
//     if(set.has(dist)){
//         console.log(dist,num)
//     }
//     set.add(num)
// }
// }
// findPair(arr,6)





// let a=[3,2,1,5,6]
// let k=2
// let count=0
// while(count<k){
//     let val=a[0]
//     for(let i=0;i<a.length-1;i++){
//         a[i]=a[i+1]
//     }
//     a[a.length-1]=val
//     count++
// }
// console.log(a)


// function reverse(arr, start, end) {
//     while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//     }
// }

// function leftRotate(arr, k) {
//     k = k % arr.length;

//     reverse(arr, 0, k - 1);
//     reverse(arr, k, arr.length - 1);
//     reverse(arr, 0, arr.length - 1);

//     return arr;
// }

// let arr = [3,2,1,5,6];
// console.log(leftRotate(arr, 2));













// ^1
// ☐ Reverse a string
// let s='zaiba'
// let res=''
// for(let i=s.length-1;i>=0;i--){
//     res+=s[i]
// }
// console.log(res)

// ☐ Check palindrome
// let s='maam'
// function isPal(s){
//     for(let i=0;i<Math.floor(s.length)/2;i++){
//         if(s[i]!==s[s.length-1-i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPal(s))

// ☐ Find maximum element
// let ar=[2,3,5,2222,5]
// let res=ar.reduce((acc,curr)=>curr>acc?curr:acc)
// console.log(res)

// ☐ Find second largest element
// let ar=[2,3,5,2222,77,5]
// let max=-Infinity
// let secMax=-Infinity
// for(let i=0;i<ar.length;i++){
//     if(ar[i]>max){
//         secMax=max
//         max=ar[i]
//     }else if(ar[i]!==max && ar[i]>secMax){
//         secMax=ar[i]
//     }
// }
// console.log(secMax)

// ☐ Remove duplicates from an array
// let ar=[2,3,5,2222,77,5,77,33]
// let res=[...new Set(ar)]
// console.log(res)




// ^2
// ☐ Find frequency of every element
// let arr=[3,4,3,5,6,2,4,2,4,7]
// let fre={}
// for(let n of arr){
//     fre[n]=(fre[n]||0)+1
// }
// console.log(fre)

// ☐ Find first non-repeating element
// let arr=[3,4,3,5,6,2,4,2,4,7]
// let fre={}
// for(let n of arr){
//     fre[n]=(fre[n]||0)+1
// }
// for(let i=0;i<arr.length;i++){
//     if(fre[arr[i]]===1){
//         console.log(arr[i])
//         break;
//     }
// }

// ☐ Find missing number
// let arr=[1,2,3,4,5,7]
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i+1]!==arr[i]+1){
//         console.log(arr[i]+1)
//     }
// }


// ☐ Rotate array
// let a=[1,2,3,4,5]
// let n=2
// for(let i=0;i<n;i++){
//     let curr=a[0]
//     for(let j=1;j<a.length;j++){
//         a[j-1]=a[j]
//     }
    
//     a[a.length-1]=curr
// }
// console.log(a)

// ☐ Merge two sorted arrays
// let a=[5,7,9]
// let b=[3,4,5,6]
// let j=0
// let i=0
// let res=[]
// while(i<a.length || j<b.length){
//     if(a[i]<b[j]){
//         res.push(a[i])
//         i++
//     }else if(a[i]>b[j]){
//         res.push(b[j])
//         j++
//     }else{
//         if(i!==a.length){
//             res.push(a[i])
//             i++
//         }else if(j!==b.length){
//             res.push(b[j])
//             j++
//         }
//     }
// }
// console.log(res)


// ^3

// ☐ Count vowels
// let s='zaiba'
// let vow='aeiouAEIOU'
// let count=0
// for(let i=0;i<s.length;i++){
//     if(vow.includes(s[i])){
//         count++
//     }
// }
// console.log(count)

// //******OR
// let s='zaiba'
// let vow='aeiouAEIOU'
// let count=0
// for(let i=0;i<s.length;i++){
//     if(s[i]==='a'|| s[i]==='e'||s[i]==='i'|| s[i]==='o'||s[i]==='u'){
//         count++
//     }
// }
// console.log(count)

// ☐ Count words
// let s='i am kadeejatu zaiba kk'
// let res=s.split(' ').length
// console.log(res)

// OR
// let s=' i am kadeejatu  zaiba kk '
// let ss=s.trim()
// let count=1
// for(let i=0;i<ss.length;i++){
//     if(ss[i-1]===' '&&ss[i]!==' '){
//         count++
//     }
// }
// console.log(count)

// ☐ Find longest word
// let s='i am kadeejatu zaiba'
// let res=s.split(' ').reduce((acc,curr)=>curr.length>acc.length?curr:acc,'')
// console.log(res)

// OR //

// let s='i am kadeejatu zaiba'
// let long=''
// let word=''
// for(let i=0;i<=s.length;i++){
//     if(s[i]===' '||i===s.length){
//         if(word.length>long.length){
//             long=word
//         }
//         word=''
//     }else{
//         word+=s[i]
//     }
// }
// console.log(long)

// ☐ Find longest consecutive repeating character (This is in your pending list.)
// let s='zzzaaaaijoo'
// let long=''
// let wrd=''
// for(let i=0;i<=s.length;i++){
//   if(wrd[0]!==s[i]||i===s.length){
//         if(wrd.length>long.length){
//             long=wrd
//         }
//         wrd=s[i]
//     }else{
//         wrd+=s[i]
//     }
// }
// console.log(long[0])

// OR

// let s='zzztttttttoo'
// let max=1
// let count=1
// let res=''
// for(let i=1;i<=s.length;i++){
//     if(s[i-1]===s[i]){
//         count++
//     }else{
//         if(count>max){
//             max=count
//             res=s[i-1]
//         }
//         count=1
//     }
// }
// console.log(max)
// console.log(res)



// ^4






// ☐ Convert object → query string (name=hi&age=20) (Very important—it's in your pending list.)

// let obj={
//     name:'hi',
//     age:20
// }
// let res=[]
// for(let key in obj){
//     res.push(`${key}=${obj[key]}`)
// }
// console.log(res.join('&&'))

// ☐ Swap keys and values
// let obj={
//     name:'hi',
//     age:20
// }
// let ans={}
// for(let key in obj){
//     ans[obj[key]]=key
// }

// console.log(ans)


// ☐ Deep clone an object

// let obj={
//     name:'zaiba'
// }
// ☐ Remove one key without modifying the original object









// *=============================================================================================
// *=============================================================================================






// // // Find the second/third largest element in an unsorted array.

// // kth largest
// let a=[3,5,2,8,1,99,3,67,4,44]
// let k=4
// function kth(a,k){
//     for (let j=1;j<=k;j++){
//         let max=Math.max(...a)
//         if(j===k){
//             return max
//         }else{
//           for(let i=0;i<a.length;i++){
//            if(a[i]===max){
//             a.splice(i,1) 
//         }
//     }
//  }
// }
// }
// console.log(kth(a,k))


// // reverse an arr
// let a=[3,5,2,8,1,99,3,67,4,44]

// function rev(a){
//     let mid=Math.floor(a.length/2)
//     for(let i=0;i<mid;i++){
//         [a[i],a[a.length-1-i]]=[a[a.length-1-i],a[i]]
//     }
//     return a
// }
// console.log(rev(a))



// // Move all zeroes to the end while maintaining the order of non-zero elements.

// let a=[1,2,0,3,4,0,5,0,0,6,0]
// let count=0
// for(let i=0;i<a.length-count;i++){
//     if(a[i]===0){
//         [a[i],a[a.length-1-count]]=[a[a.length-1-count],a[i]]
//         count++
//         i--
//     }
// }
// console.log(a)


// // Find the first/last occurrence of an element in a sorted array (with duplicates).

// let a=[1,2,2,3,3,4,4,5]
// let ele=2
// for(let i=0;i<a.length;i++){
//     if(a[i]===ele){
//         console.log(i)
//         break;
//     }
// }
// let a=[1,2,2,3,3,4,4,5]
// let ele=2
// for(let i=a.length-1;i>=0;i--){
//     if(a[i]===ele){
//          console.log(i)
//        break
//     }
// }

// // Find the minimum element in a rotated sorted array.
// let a=[5,6,7,1,2,3]

// let low=0
// let high=a.length-1
// while(low<high){
//     let mid=Math.floor((low+high)/2)
//     if(a[mid]>a[high]){
//         low=mid+1
//     }else{
//         high=mid
//     }
// }
// console.log(a[low])



// // Find the sum of all elements using recursion.
// let a=[2,1,4,5]
// function sum(a){
//     if(a.length===1){
//         return a[0]
//     }
//     return a[0]+sum(a.slice(1))
// }
// console.log(sum(a))


// // 8. Find the frequency/count of each number in an array.

// let a=[3,4,5,3,4,7,8]
// let fre={}
// for(let i=0;i<a.length;i++){
//     fre[a[i]]=(fre[a[i]]||0)+1
// }
// console.log(fre)


// // Find all combinations of two numbers that sum to a target (Two Sum).
// let t=6
// let comb=[]
// let a=[2,3,4,1,5,3,3]
// for(let i=0;i<a.length-1;i++){
//     for(let j=i+1;j<a.length;j++){
//         if(a[i]+a[j]===t){
//                 comb.push(`${a[i]}-${a[j]}`)       
//         }
//     }
// }
// let res=new Set([...comb])
// console.log(Array.from(res))



// // Flatten a multi-dimensional/nested array (using recursion).

// let arr=[1,2,2,3,[4,5,[6,7,8]]]
// function flatten(a){
//     let res=[]
//     if(a.length===0) return []
//     for(let ele of a){
//         if(Array.isArray(ele)){
//            return res.concat(flatten(ele))
//         }
//         res.push(ele)
//     }
//     return res
// }
// console.log(flatten(arr))

// Find a subarray with the maximum number of continuously increasing elements.

arr=[1,2,2,3,1,3,5,6,2,3,4]  //[1,3,5,6]
let store=[arr[0]]
let max=[]
for(let i=1;i<arr.length;i++){
    if(arr[i]>arr[i-1]){
        store.push(arr[i])
    }else{
        if(store.length>max.length){
            max=store
            
        }
        store=[arr[i]]
    }
}
console.log(max)
// 15. Check if a target exists in a 2D array and return its indices.

let arr=[
    [2,3,4],
    [1,5,9],
    [7,66,99]
]
let t=9
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]===t){
            console.log(i+' '+j)
        }
    }
}


// 16. Find the sum of a column and add it as a new last column in a 2D array.

let arr=[
    [2,3,4],
    [1,5,9],
    [7,66,99]
]
for(let i=0;i<arr.length;i++){
    let sum=0
    for(let j=0;j<arr[i].length;j++){
        sum+=arr[i][j]
    }
    arr[i].push(sum)
}
console.log(arr)


// 17. Remove a subarray containing the largest number from a 2D array.

let arr=[
    [2,3,4],
    [1,5,9999],
    [7,66,99]
]
let max=0
let maxInd=0
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]>max){
            max=arr[i][j]
            maxInd=i
        }
    }
}
arr.splice(maxInd,1)
console.log(arr)