// //  Implement binary search.
// let a=[1,2,3,4,5,6,7,8]
// function find(a,t){
//     let start=0
//     let end=a.length-1
//     while(start<=end){
//         let mid=Math.floor((start+end)/2)
//         if(a[mid]===t){
//             return mid
//         }else if(a[mid]>t){
//             end=mid-1
//         }else{
//             start=mid+1
//         }
//     }
//     return -1
// }
// console.log(find(a,6))


// //  Implement binary search using recursion.

// function find(a,t,start=0,end=a.length-1){
//     if(start>end){
//         return -1
//     }
//      let mid=Math.floor((start+end)/2)
//      if(a[mid]===t){
//    return mid
//     }else if(a[mid]>t){
//         return find(a,t,start,end=mid-1)
//     }else{
//         return find(a,t,start=mid+1,end)
//     }
// }
// let a=[1,2,3,4,5]
// console.log(find(a,3))


// // const flights = ['06:30', '08:15', '09:00', '10:45', '13:20', '15:50', '18:10'];
// // console.log(findFlight(flights, '09:00')); // → "09:00"
// // console.log(findFlight(flights, '12:00')); // → "13:20"
// // console.log(findFlight(flights, '19:00')); // → "No flights available
// let a=[2,4,7,9,80]
// function isHave(a,n){
//     let start=0
//     let end=a.length-1
//     let result=null
//     while(start<=end){
//         let mid=Math.floor((start+end)/2)
//         if(a[mid]===n){
//             return n
//         }else if(a[mid]<n){
//             start=mid+1
//         }else{
//          result=a[mid]
//         end=mid-1
//         }
        
//     }
//     return result?result: 'no found'
// }
// console.log(isHave(a,3333))


















