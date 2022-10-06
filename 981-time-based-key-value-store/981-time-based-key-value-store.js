

var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map[key]){
        this.map[key] = [];
    }
    this.map[key].push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map[key]){
        return "";
    }
    let result = "";
    let index = this.map[key].length - 1;
    while(index >= 0){
        if(this.map[key][index][0] <= timestamp){
            result = this.map[key][index][1];
            break;
        }
        index--;
    }
    
    return result;
};
