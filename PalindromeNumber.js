// Palindrome Number solution

var PalindromeNumber = function(x){
   let original = x
   let degit = 0
   let reverse = 0
   if(x < 0){
    return false
   }

   while(x > 0){
    degit = x % 10
    x = Math.floor(x / 10)
    reverse = reverse * 10 + degit
   }

    if(original === reverse){
        return true
    } else return false
    
}