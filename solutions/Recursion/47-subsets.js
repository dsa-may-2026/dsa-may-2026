//works but polluted bag
function subsets(nums){
  let trolly = []

  function helper(i, bag) {
    if(i == nums.length) {
      trolly.push([...bag])
      return
    }
    bag.push(nums[i])
    helper(i+1, bag)
    bag.pop()
    helper(i+1, bag)
  }

  helper(0, [])
  return trolly
}


//ideal way
function subsets(nums){

  function helper(i) {
    if(i==nums.length) {
        return [[]];
    }
    let trolly = helper(i+1);
    let newTrolly = [];
    for(let bag of trolly) {
        newTrolly.push([...bag]);
        newTrolly.push([...bag, nums[i]]);
    }
    return newTrolly;
  }

  return helper(0)
}


//For loop method
function subSets(arr) {
    let trolly = [[]]

    function helper(i, bag) {

        for(let j = i; j<arr.length; j++) {
            bag.push(arr[j]);
            trolly.push([...bag])
            helper(j+1, bag);
            bag.pop();
        }
        
    }

    helper(0, [])
    return trolly
}

subSets([1,2,3])