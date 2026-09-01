// // Find the first non-repeating character in a string.
// let s='zaibaaaaaaz'
// for(let i=0i<S.length;i++){
//     if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
//         console.log(s[i])
//         break;
//     }
// }

// // Find the last non-repeating character in a string.
// let s='zaibaaaaaaz'
// for(let i=s.length-1;i>=0;i--){
//     if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
//         console.log(s[i])
//         break;
//     }
// }

// // Check if two strings are anagrams of each other.
// let a='zaiba'
// let b='abiaz'

// function isAna(a,b){
//     let freA={}
//     let freB={}
//     if(a.length!==b.length){
//         return false
//     }else{
//         for(ch of a){
//             freA[ch]=(freA[ch]||0)+1
//         }
//          for(ch of b){
//             freB[ch]=(freB[ch]||0)+1
//         }
//         for(let ch in freA){
//             if(freA[ch]!==freB[ch]) return false
//         }
//     }
//     return true
// }
// console.log(isAna(a,b))

// // Reverse a string without using built-in methods.
// let s='zaiba'
// let res=''
// for(let i=s.length-1;i>=0;i--){
//     res+=s[i]
// }
// console.log(res)

// // Reverse each word in a string without using built-in methods (e.g., "HELLO WORLD" → "OLLEH DLROW").
// let s="HELLO WORLD"
// let ans=''
//   let wrd=''
// for(let i=0;i<=s.length;i++){
  
//     if(s[i]===' ' || i===s.length){
//         for(let j=wrd.length-1;j>=0;j--){
//             ans+=wrd[j]
//         }
//         if(s[i]===' '){
//             ans+=' '
//         }
//         wrd=''
//     }else{
//         wrd+=s[i]
//     }
// }
// console.log(ans)

// // Remove extra whitespaces between words in a string.

// let s='   zaiba is          fantalaastic          girl'
//  let res=''
//  let space=false
// for(let i=0;i<s.length;i++){
//     if(s[i]!==' '){
//         res+=s[i]
//         space=false
//     }else{
//         if(!space && res!==''){
//             res+=' '
//             space=true
//         }
//     }
// }
// console.log(res)

// // Convert a string to Title Case.
// let s='i am zaiba'
// let res=s[0].toUpperCase()
// for(let i=1;i<s.length;i++){
//     if(s[i-1]===' '){
//         res+=s[i].toUpperCase()
//     }else{
//         res+=s[i]
//     }
// }
// console.log(res)

// // Ensure a string begins with uppercase and ends with a period.
// let s='am zaiba.'
// function check(s){
//     if(s[0]>='A' && s[0]<='Z' && s[s.length-1]==='.') return true
    
//     return false
// }
// console.log(check(s))



// // Find the longest substring palindrome in a given string.

// let s='hello world'
// let sub=[]
// for(let i=0;i<s.length;i++){
//     let temp=''
//     for(let j=i;j<s.length;j++){
//         temp+=s[j]
//         sub.push(temp)
//     }
// }
// let pal=[]
// for(let i=0;i<sub.length;i++){
//     if(sub[i].split('').reverse().join('')===sub[i]){
//         pal.push(sub[i])
//     }
// }

// let max=0
// let maxstr=''
// for(let i=0;i<pal.length;i++){
//     if(pal[i].length>max){
//         max=pal[i].length
//         maxstr=pal[i]
//     }
// }
// console.log(maxstr)

// // Check if parentheses are balanced in a string (e.g., areBracesBalanced("{{}}{}{}") → true).
// let s='{{{{}}}'
// function braceBalance(s){
//     let count=0
// for(let i=0;i<s.length;i++){
//     if(s[i]==='{'){
//         count++
//     }else if(s[i]==='}') count--
   
//    if(count<0) return false 
// }
// if(count===0){
//     return true
// }else{
//     return false
// }
// }
// console.log(braceBalance(s))

// //  Find the longest substring without vowels from a string.

// let vow='aeiou'
// let s='i am kadeeja'
// let long=''
// let curr=''
// for(let i=0;i<s.length;i++){
//     if(!vow.includes(s[i])){
//         curr+=s[i]
//         if(curr.length>long.length){
//             long=curr
//         }
//     }else{
//         curr=''
//     }
// }
// console.log(long)


// // Find the longest consecutive repeating characters in a string

// let s='i amzaibbbbaa'
// let long=''
// let ans=''
// for(let i=1;i<s.length;i++){
//     if(ans.includes(s[i])){
//         ans+=s[i]
//        if(ans.length>long.length){
//            long=ans
//        }
//     }else{
//         ans=s[i]
//     }
// }
// console.log(long)

// //  Find the shortest word in a string

// let s='aam cc cute'

// let sl=s.length
// let st=''
// let curr=''
// for(let i=0;i<=s.length;i++){
//     if(s[i]!==' ' && i!==s.length){
//         curr+=s[i]
        
//     }else{
//         if(sl>curr.length && curr.length>0){
            
//             sl=curr.length
//             st=curr
//         }
//         curr=''
//     }
// }
// console.log(st)


// //  Extract digits from a string.
// let s='za3iba123kk'
// let ans=''
// for(let i=0;i<s.length;i++){
//     if(!isNaN(s[i])){
//         ans+=s[i]
//     }
// }
// console.log(ans)


// //  Remove all occurrences of a specific character from a string (e.g., hide "l" from "hello")

// function removeOccu(s,t){
//     let ans=''
//     for(let i=0;i<s.length;i++){
//         if(s[i]!==t){
//             ans+=s[i]
//         }
//     }
//     return ans
// }
// console.log(removeOccu('zzaaiba','z'))


// //  Remove a character from a string using recursion.

// let s='zaiba'
// function removeChar(str, c) {
//     if (str.length === 0) {
//         return '';
//     }
//     let first = str[0];
//     if (first === c) {
//         return removeChar(str.slice(1), c);
//     } else {
//         return first + removeChar(str.slice(1), c);
//     }
// }
// console.log(removeChar(s, 'a')); 


// //  Count words in a sentence without using built-in functions

// let s= 'i am zaiba'
// let count=1;
// for(let i=0;i<s.length;i++){
//     if(s[i]===' '){
//         count++
//     }
// }
// console.log(count)


// //  Find the palindromic prefix in a string
// let s='zaziba'
// function isPalindrom(s){
//     left=0
//     right=s.length-1
//     while(left<right){
//         if(s[left]!==s[right]) return false
//         left++
//         right--
//     }
//     return true
// }


// function palPrefix(s){
//     longest=''
//     for(let i=1;i<=s.length;i++){
//     let prefix=s.slice(0,i)
//     if(isPalindrom(prefix)){
//         longest=prefix
//     }
//     }
//     return longest
// }

// console.log(palPrefix(s))

// //  Convert PascalCase to snake_case

// let s='KadeejaZaiba'
// let ans=''
// if(s[0]<='Z'&&s[0]>='A'){
//         ans+=s[0].toLowerCase()
//     }
// for(let i=1;i<s.length;i++){
//     if(s[i]<='Z'&&s[i]>='A'){
//         ans=ans+'_'+s[i].toLowerCase()
//     }else{
//         ans+=s[i]
//     }
    
// }
// console.log(ans)


// // 4. Find the most frequent character in a string

// // let str='hello world'
// // let fre={}
// // for(let i=0;i<str.length;i++){
// //     fre[str[i]]=(fre[str[i]]||0)+1
// // }
// // let max=0
// // let ans;
// // for(let key in fre){
// //     if(fre[key]>max){
// //         max=fre[key]
// //         ans=key
// //     }
// // }

// // console.log(ans)

// // 5. Check if two strings are anagrams
// let s1='zaiba'
// let s2='baiza'


// function isAna(s1,s2){
//     let map={}

//     if(s1.length!==s2.length){
//         return false
//     }
//     for(let s of s1){
//     map[s]=(map[s]||0)+1
// }
// for(let ch of s2){
//     if(!map[ch]){
//         return false
//     }else{
//         map[ch]--
//     }
// }  
// return true
// }
// console.log(isAna(s1,s2))

// // frst non rpting chrtr in str

// let str='i am very happii'
// let fre={}
// for(let i=0;i<str.length;i++){
//     fre[str[i]]=(fre[str[i]]||0)+1
// }
// for(let key in fre){
//     if(fre[key]===1){
//         console.log(key)
//         break;
//         }
// }

// // remove dublicate ch in str

// let s='zaibabss'
// let res=''
// for(let i=0;i<s.length;i++){
//     if(!res.includes(s[i])){
//         res+=s[i]
//     }
// }
// console.log(res)


// function isAna(){
//     let s='(())]'
//     let stack=[]
// let pair={
//     ')':'(',
//     ']':'[',
//     '}':'{'
// }
//   for(let i=0;i<s.length;i++){
//     if(s[i]==='('||s[i]==='{'||s[i]==='['){
//         stack.push(s[i])
//     }else {
        
//         if(pair[s[i]]!==stack.pop()){
            
//             return false
//         }
//     }
// }  
// return stack.length===0
// }

// console.log(isAna())


// // captalize frst ltr
// let s='hello i am zaiba'
// let res=''
// for(let i=0;i<s.length;i++){
//     if(i===0|| s[i-1]===' '){
//         res+=s[i].toUpperCase()
//     }else{
//         res+=s[i]
//     }
// }
// console.log(res)



// // longest palindromic substring
// let s='kadeejabayaba'
// let longest=''
// for(let i=0;i<s.length;i++){
//     let subStr=''
//     for(let j=i;j<s.length;j++){
//         subStr+=s[j]
//         if(isPal(subStr)){
//             if(subStr.length>longest.length){
//                 longest=subStr
//             }
//         }
//     }
// }
// console.log(longest)

// function isPal(s){
//     let start=0
//     let end=s.length-1
//     while(start<end){
//         if(s[start]!==s[end]){
//             return false
//         }
//         start++
//         end--
//     }
//     return true
// }

// *==================================================================================
// *==================================================================================

// 18. Reverse a string (using recursion and without built-in methods).
//    ^with buildin
let s='zaiba'
// function rev(s){
    // if(s.length===0) return ''
    // return s[s.length-1]+rev(s.slice(0,s.length-1))
// }
// console.log(rev(s))
//^ without

function rev(s,i=s.length-1){
    if(i<0) return ''
    return s[i]+rev(s,i-1)
}
console.log(rev(s))

// ^19. Reverse each word in a string in place (e.g., "HELLO WORLD" -> "OLLEH DLROW").

// let s='HELLO WORLD'
// // let res=s.split(' ').map((wrd)=>wrd.split('').reverse().join('')).join(' ')
// let res=''
//   let wrd=''
// for(let i=0;i<=s.length;i++){
//     if (i===s.length || s[i]===' ') { 
//         for (let j = wrd.length-1; j >=0; j--) {
//             res+=wrd[j]
//         }
//         res+=' '
//         wrd=''
//     }else{
//         wrd+=s[i]
//     }
// }
// console.log(res)

//^ 20. Remove all instances of a specific character from a string (using recursion).
// let s='zaibabab'
// function removech(s,ch) {
//     if(s.length===0){
//         return ''
//     }
//     if(s[0]===ch){
//         return removech(s.slice(1),ch)
//     }
//     return s[0]+removech(s.slice(1),ch)
// }
// console.log(removech(s,'i'))
    
//^ 21. Remove extra whitespaces between words.
// let s='i am               zaiba                   aak a  ajjjjh'
// let splited=s.split(' ')
// let resArr=[]

// for(let i=0;i<splited.length;i++){
//     if(splited[i]!==''){
//         resArr.push(splited[i])
//     }
// }
//     console.log(resArr.join(' '))


//^ Find the first non-repeating character.
// let s='zaibaahhz'
// for(let i=0;i<s.length;i++){
//     if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
//         console.log(s[i])
//         break;
//     }
// }


// ^ Find the last non-repeating character.
// let s='zaibaahhz'
// for (let i = s.length-1; i >=0; i--) {
//         if(s.indexOf(s[i])===s.lastIndexOf(s[i])){
//         console.log(s[i])
//         break;
//     }
// }

//^ 24. Check if two strings are anagrams.
// let s1='zaiba'
// let s2='abiaz'

// function isAna(s1,s2) {
//     if(s1.length!==s2.length) return false
//     let map={}
//     for (let ch of s1) {
//     map[ch]=(map[ch]||0)+1
// }
//     for(let ch of s2){
//         if(!map[ch]) return false
//         map[ch]--
//     }
//     return true
// }
// console.log(isAna(s1,s2))

// ^25. Check if a string is a palindrome.
// let s='malayalam'
// function isPal(s) {
//    for(let i=0;i<Math.floor(s.length/2);i++){
//     if(s[i]!==s[s.length-1-i]){
//         return 'Not Palindrome'
//     }
// } 
//     return 'Palindrome'
// }
// console.log(isPal(s))

// ^26Find the longest substring without repeating characters.

// let s='zibakwhhhhhhhhhhhhhhhhhhhhyyyyy4hjhj'
// let res=''
// let wrd=''
// for (let i = 0; i<s.length; i++) {
//     while (wrd.includes(s[i])) {
//         wrd=wrd.slice(1)
//     }
//     wrd=wrd+=s[i]
//     if(res.length<wrd.length){
//         res=wrd
//     }
// }
// console.log(res)


//^ 27. Find the longest substring without vowels.

// let s='zzaibksazj'
// let wrd=''
// let res=''
// let vow='aeiouAEIOU'
// for (let i = 0; i<=s.length; i++) {
//     if(vow.includes(s[i])|| i===s.length) {
//          if(res.length<wrd.length){
//         res=wrd
//     }
//         wrd=''
//     }else{
//       wrd=wrd+=s[i]       
//     }
    
   
// }
// console.log(res)

//^ 28. Find all words that start with a vowel.

// let s='i am zaiba in my   village'
// let vow='aeiouAEIOU'
// let res=s.split(' ').filter((wrd)=>vow.includes(wrd[0]))
// console.log(res)

//^ 29. Convert a string to Title Case / PascalCase to snake_case.

// let s='Hello World'
// let res=''
// for(let i=0;i<s.length;i++){
//     if(i===0||s[i-1]===' '){
//         res+=s[i].toLowerCase()
//     }else if(s[i]===' '){
//         res+='_'
//     }else{
//         res+=s[i]
//     }
// }
// console.log(res)

// let s='HelloWorld'
// let res=s[0].toLowerCase()
// for(let i=1;i<s.length;i++){
//     if(s[i]===s[i].toUpperCase()){
//         res+='_'+s[i].toLowerCase()
//     }else{
//         res+=s[i]
//     }
// }
// console.log(res)

//^ 31. Extract digits/numbers from a string.
// let s='i am 2in m6 gjo900 from k5g'
// for (let i = 0; i < s.length; i++) {
//     if (!isNaN(Number(s[i])) && s[i]!==' ') {
//         console.log(s[i])
//     }
// }
32. Implement string permutations.


//^33. Find the longest/shortest word in a string.

// let s='isdkdo am kadeejatu zaiba kkhhhhhhhhhhhhj'
// let longest=s.split(' ').reduce((acc,curr)=>acc.length>curr.length?acc:curr)
// let shortest=s.split(' ').reduce((acc,curr)=>acc.length<curr.length?acc:curr)
// console.log(longest)
// console.log(shortest)


// ^34. Find the longest consecutive repeating character.
// let s = 'aazzibbbnnnn'
// let res = ''
// let ch = s[0]
// for (let i = 1; i < s.length; i++) {
//     if (s[i] === s[i - 1]) {
//         ch += s[i]
//     } else {
//         if (ch.length > res.length) {
//             res = ch
//         }
//         ch = s[i]
//     }
// }
// if (ch.length > res.length) {
//     res = ch
// }
// console.log(res) 

//^ 35. Find the longest palindromic substring.

// let s='zaibabab'
// let res=''
// for(let i=0;i<s.length;i++){
// for(let j=i+1;j<=s.length;j++){
//     sub=s.slice(i,j)
//     if (sub.split('').reverse().join('')===sub) {
//         if(res.length<sub.length){
//             res=sub
//         }
//     }
// }
// }
// console.log(res)
















