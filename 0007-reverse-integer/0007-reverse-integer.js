/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     let reversed = 0;
    let sign = Math.sign(x);
    x = Math.abs(x);
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    if (reversed > 2147483647) {
        return 0;
    }
    return reversed * sign;
};