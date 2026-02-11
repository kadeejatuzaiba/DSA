// Find the first non-repeating character in a string.
let s='zaibaaaaaaz'
for(let i=0i<S.length;i++){
    if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
        console.log(s[i])
        break;
    }
}

// Find the last non-repeating character in a string.
let s='zaibaaaaaaz'
for(let i=s.length-1;i>=0;i--){
    if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
        console.log(s[i])
        break;
    }
}

// Check if two strings are anagrams of each other.
let a='zaiba'
let b='abiaz'

function isAna(a,b){
    let freA={}
    let freB={}
    if(a.length!==b.length){
        return false
    }else{
        for(ch of a){
            freA[ch]=(freA[ch]||0)+1
        }
         for(ch of b){
            freB[ch]=(freB[ch]||0)+1
        }
        for(let ch in freA){
            if(freA[ch]!==freB[ch]) return false
        }
    }
    return true
}
console.log(isAna(a,b))

// Reverse a string without using built-in methods.
let s='zaiba'
let res=''
for(let i=s.length-1;i>=0;i--){
    res+=s[i]
}
console.log(res)

// Reverse each word in a string without using built-in methods (e.g., "HELLO WORLD" → "OLLEH DLROW").
let s="HELLO WORLD"
let ans=''
  let wrd=''
for(let i=0;i<=s.length;i++){
  
    if(s[i]===' ' || i===s.length){
        for(let j=wrd.length-1;j>=0;j--){
            ans+=wrd[j]
        }
        if(s[i]===' '){
            ans+=' '
        }
        wrd=''
    }else{
        wrd+=s[i]
    }
}
console.log(ans)

// Remove extra whitespaces between words in a string.

let s='   zaiba is          fantalaastic          girl'
 let res=''
 let space=false
for(let i=0;i<s.length;i++){
    if(s[i]!==' '){
        res+=s[i]
        space=false
    }else{
        if(!space && res!==''){
            res+=' '
            space=true
        }
    }
}
console.log(res)

// Convert a string to Title Case.
let s='i am zaiba'
let res=s[0].toUpperCase()
for(let i=1;i<s.length;i++){
    if(s[i-1]===' '){
        res+=s[i].toUpperCase()
    }else{
        res+=s[i]
    }
}
console.log(res)

// Ensure a string begins with uppercase and ends with a period.
let s='am zaiba.'
function check(s){
    if(s[0]>='A' && s[0]<='Z' && s[s.length-1]==='.') return true
    
    return false
}
console.log(check(s))



// Find the longest substring palindrome in a given string.

let s='hello world'
let sub=[]
for(let i=0;i<s.length;i++){
    let temp=''
    for(let j=i;j<s.length;j++){
        temp+=s[j]
        sub.push(temp)
    }
}
let pal=[]
for(let i=0;i<sub.length;i++){
    if(sub[i].split('').reverse().join('')===sub[i]){
        pal.push(sub[i])
    }
}

let max=0
let maxstr=''
for(let i=0;i<pal.length;i++){
    if(pal[i].length>max){
        max=pal[i].length
        maxstr=pal[i]
    }
}
console.log(maxstr)

// Check if parentheses are balanced in a string (e.g., areBracesBalanced("{{}}{}{}") → true).
let s='{{{{}}}'
function braceBalance(s){
    let count=0
for(let i=0;i<s.length;i++){
    if(s[i]==='{'){
        count++
    }else if(s[i]==='}') count--
   
   if(count<0) return false 
}
if(count===0){
    return true
}else{
    return false
}
}
console.log(braceBalance(s))

//  Find the longest substring without vowels from a string.

let vow='aeiou'
let s='i am kadeeja'
let long=''
let curr=''
for(let i=0;i<s.length;i++){
    if(!vow.includes(s[i])){
        curr+=s[i]
        if(curr.length>long.length){
            long=curr
        }
    }else{
        curr=''
    }
}
console.log(long)


// Find the longest consecutive repeating characters in a string

let s='i amzaibbbbaa'
let long=''
let ans=''
for(let i=1;i<s.length;i++){
    if(ans.includes(s[i])){
        ans+=s[i]
       if(ans.length>long.length){
           long=ans
       }
    }else{
        ans=s[i]
    }
}
console.log(long)

//  Find the shortest word in a string

let s='aam cc cute'

let sl=s.length
let st=''
let curr=''
for(let i=0;i<=s.length;i++){
    if(s[i]!==' ' && i!==s.length){
        curr+=s[i]
        
    }else{
        if(sl>curr.length && curr.length>0){
            
            sl=curr.length
            st=curr
        }
        curr=''
    }
}
console.log(st)


//  Extract digits from a string.
let s='za3iba123kk'
let ans=''
for(let i=0;i<s.length;i++){
    if(!isNaN(s[i])){
        ans+=s[i]
    }
}
console.log(ans)


//  Remove all occurrences of a specific character from a string (e.g., hide "l" from "hello")

function removeOccu(s,t){
    let ans=''
    for(let i=0;i<s.length;i++){
        if(s[i]!==t){
            ans+=s[i]
        }
    }
    return ans
}
console.log(removeOccu('zzaaiba','z'))


//  Remove a character from a string using recursion.

let s='zaiba'
function removeChar(str, c) {
    if (str.length === 0) {
        return '';
    }
    let first = str[0];
    if (first === c) {
        return removeChar(str.slice(1), c);
    } else {
        return first + removeChar(str.slice(1), c);
    }
}
console.log(removeChar(s, 'a')); 


//  Count words in a sentence without using built-in functions

let s= 'i am zaiba'
let count=1;
for(let i=0;i<s.length;i++){
    if(s[i]===' '){
        count++
    }
}
console.log(count)


//  Find the palindromic prefix in a string
let s='zaziba'
function isPalindrom(s){
    left=0
    right=s.length-1
    while(left<right){
        if(s[left]!==s[right]) return false
        left++
        right--
    }
    return true
}


function palPrefix(s){
    longest=''
    for(let i=1;i<=s.length;i++){
    let prefix=s.slice(0,i)
    if(isPalindrom(prefix)){
        longest=prefix
    }
    }
    return longest
}

console.log(palPrefix(s))

//  Convert PascalCase to snake_case

let s='KadeejaZaiba'
let ans=''
if(s[0]<='Z'&&s[0]>='A'){
        ans+=s[0].toLowerCase()
    }
for(let i=1;i<s.length;i++){
    if(s[i]<='Z'&&s[i]>='A'){
        ans=ans+'_'+s[i].toLowerCase()
    }else{
        ans+=s[i]
    }
    
}
console.log(ans)
