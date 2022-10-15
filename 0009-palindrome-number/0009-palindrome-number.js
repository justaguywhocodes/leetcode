/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
 if(x < 0) return false;
    let str = x.toString();
    let len = str.length;
    for(let i = 0; i < len/2; i++){
        if(str[i] !== str[len-1-i]) return false;
    }
    return true;
};