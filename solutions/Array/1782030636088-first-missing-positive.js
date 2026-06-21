var firstMissingPositive = function(nums) {
    let junk = nums.length+2; //because nums.length+1 can be missing

    //mark negatives and out of range nums with junk
    for(let i = 0; i<nums.length; i++) {
        if(nums[i]<=0||nums[i]>nums.length) {
            nums[i] = junk;
        }
    }

    //mark nums present at index-1 with negative
    for(let num of nums) {
        if(Math.abs(num)!=junk) {
            let index = Math.abs(num)-1
            if(nums[index]>0) {
                nums[index]*=-1
            }
        }
    }

    //find the first index with non negative
    for(let i = 0; i<nums.length; i++) {
        if(nums[i]>=0) {
            return i+1;
        }
    }
    return nums.length+1;

};