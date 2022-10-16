/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  
  return max;
};