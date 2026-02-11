//  Implement a recursive function to find the sum of elements in an array.
let a=[1,2,3,4]
function sum(a){
    if(a.length===0){
        return 0
    }
    return a[a.length-1]+sum(a.slice(0,a.length-1))
}
console.log(sum(a))

//  Implement a recursive function to find the largest element in an array
let a=[1,9,3]
function large(a){
    if(a.length===1){
        return a[0]
    }
    let frst=a[0]
    let max=large(a.slice(1))
    return frst>max?frst:max
}
console.log(large(a))

//  Print the first 10 elements of the Fibonacci series using recursion
let n=10
function fib(n){
    if(n===0){
        return 0
    }else if(n===1){
        return 1
    }
    let num= fib(n-1)+fib(n-2)
     return  num
}

for(let i=0;i<=n;i++){
    console.log(fib(i))
}


// Implement factorial using recursion.

function fac(n){
    if(n===1){
        return 1
    }
    return n*fac(n-1)
}
console.log(fac(5))


//  Implement a recursive function to reverse a string

function rev(s){
   
    if(s.length===1){
        return s[0]
    }
   
   return  rev(s.slice(1)) +s[0]
}

let s='zaiba'
console.log(rev(s))

// Remove a character from a string using recursion.

let s='zaiba'
function rem(s,t){
    if(s.length===0){
        return ''
    }else if(s[0]===t){
        return rem(s.slice(1),t)
    }else{
        return s[0]+rem(s.slice(1),t)
    }
}
console.log(rem(s,'a'))


// Remove even numbers from an array using recursion
function rem(a){
    if(a.length === 0) return [];

    if(a[0] % 2 === 0){
        return rem(a.slice(1));
    } else {
      
       return [a[0], ...rem(a.slice(1))];
    }
}

let a=[1,2,3,4,5]
console.log(rem(a))