/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        
    let num = {}
    
    for(let i=0; i<nums.length; i++){
        const curr = nums[i]
        if(num[target-curr] !== undefined){
           return [i,num[target-curr]]
        }  
        num[curr] = i   
    }
};