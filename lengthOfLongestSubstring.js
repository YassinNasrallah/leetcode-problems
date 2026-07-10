




var lengthOfLongestSubstring = function(s) {
    let current = ''
    let result = 0

    for(let i = 0; i < s.length ; i++){
        while(current.indexOf(s[i]) !== -1){
            current = current.substring(1)
        }

        current += s[i]

        result = Math.max(result, current.length)
    }

    return result
}