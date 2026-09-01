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


//^ Recursion Problems

//^ 1. Calculate the factorial of a number.
function factorial(num) {
    if(num===1){
        return 1
    }
    return num*factorial(num-1)
}
console.log(factorial(5))


//^ 2. Print the first N elements of the Fibonacci series.

function fibonacci(n){
    if(n===0){
        return 0
    }
    if(n===1){
        return 1
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
for(let i=0;i<9;i++){
    console.log(fibonacci(i))
}
//^ 3. Find the sum of digits of a number.

function sum(num){
    if(num>0&&num<10){
        return num
    }
         let number=Math.floor(num/10)
        return (num%10)+sum(number)
}
console.log(sum(230129))

//^ 4. Find the sum of prime numbers in an array.


function primeSum(arr) {
    if(arr.length===0){
        return 0
    }
    if(arr[0]===2){
         return arr[0]+primeSum(arr.slice(1))
    }
    if(arr[0]%2===0 || arr[0]===1){
        return primeSum(arr.slice(1))
    }
    let isPrime=true
    for(let i=2;i<=arr[0]/2;i++){
            if(arr[0]%i===0){
        isPrime=false
        break;
    }
    }
if(isPrime){
    return arr[0]+primeSum(arr.slice(1))
}else{
    return primeSum(arr.slice(1))
}
}
console.log(primeSum([2,3,4,5,1]))


//^ 5. Remove even numbers from an array.

function removeEven(arr) {
    if(arr.length===0){
        return []
    }
    if(arr[0]%2===0){
        return removeEven(arr.slice(1))
    }else{
        return [arr[0],...removeEven(arr.slice(1))]
    }
}
console.log(removeEven([2,3,4,5,6]))
//^ 6. Implement binary search using recursion.

function binarySearch(arr,t,start=0,end=arr.length-1) {
    if(start>end){
         return -1
    }
    let mid=Math.floor((start+end)/2)
    if(arr[mid]===t){
        return mid
    }else if(arr[mid]<t){
        return binarySearch(arr,t,mid+1,end)
    }else{
      return  binarySearch(arr,t,start,mid-1)
    }
   
}
let arr=[2,3,4,5,6,7]
console.log(binarySearch(arr,2))
//^ 7. Check for balanced parentheses in a string.

function isBalanced(str) {
    if (str.length === 0) {
        return true;
    }

    if (str.includes("()")) {
        return isBalanced(str.replace("()", ""));
    }

    if (str.includes("{}")) {
        return isBalanced(str.replace("{}", ""));
    }

    if (str.includes("[]")) {
        return isBalanced(str.replace("[]", ""));
    }

    return false;
}

console.log(isBalanced("({})[]"));   // true
console.log(isBalanced("({})[])"));  // false

//^ 8. Find all file names in a given filesystem structure (simulate with nested objects/arrays).

const data = [
    {
        name: "main",
        children: [
            {
                name: "docs",
                children: [
                    { file: "resume.pdf" },
                    { file: "notes.txt" }
                ]
            },
            {
                name: "projects",
                children: [
                    { file: "app.js" },
                    {
                        name: "backend",
                        children: [
                            { file: "server.js" },
                            { file: "database.js" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "media",
        children: [
            { file: "photo.jpg" },
            { file: "profile.png" }
        ]
    }
];
function printFiles(data){
    let res=[]
    for(let obj of data){
        if(obj.file){
            res.push(obj.file)
        }
        if(obj.children){
            res.push(...printFiles(obj.children))
        }
    }
    return res
}
console.log(printFiles(data))

//^ 9. Find if an HTML tag exists in a given DOM structure (simulate with nested objects).

const dom = {
    tag: "div",
    children: [
        {
            tag: "h1",
            children: []
        },
        {
            tag: "section",
            children: [
                {
                    tag: "p",
                    children: []
                },
                {
                    tag: "button",
                    children: []
                }
            ]
        }
    ]
};
function isTagExist(dom,t) {
    for(let data in dom){
        if(dom[data]===t){
            return true
        }else if(Array.isArray(dom[data])){
            for(let ch of dom[data]){
                if(isTagExist(ch,t))return true
            }
        }
    }
    return false
}

console.log(isTagExist(dom,'sction'))
