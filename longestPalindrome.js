var longestPalindrome = function(s) {
 let longest = ''
 function getDrome(left, rigth, s){
    while(left >=0 && rigth < s.length && s[left]===s[rigth]){
        left--
        rigth++
    }
    return s.slice(left+1, rigth)
 }

 for(let i = 0 ;i<s.length;i++){
    let odd = getDrome(i, i, s)
    let evens = getDrome(i,i+1, s)
    let longestPal =odd.length > evens.length ?odd : evens
    if(longestPal.length>longest.length){
       longest = longestPal
    }
 }
 return longest

 
}