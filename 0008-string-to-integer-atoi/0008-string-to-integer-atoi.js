/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    
    let result = parseInt(s);
    if(isNaN(result)){
        return 0;
    }
    if(result > 2147483647){
        return 2147483647;
    }
    if(result < -2147483648){
        return -2147483648;
    }
    return result;
};