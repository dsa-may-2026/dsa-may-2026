var climbStairs = function(n) {
    function helper(i, map) {
        if(map[i] != undefined) {
            return map[i]
        }
        if(i == n) {
            return 1
        }
        if(i > n) {
            return 0;
        }
        map[i] = helper(i+1, map) + helper(i+2, map)
        return map[i]
    }

    return helper(0, {})
};


var climbStairs = function(n) {
    
    let arr = Array(n+1)

    arr[n] = 1
    arr[n-1] = 1

    for(let i = n-2; i>=0; i--) {
        arr[i] = arr[i+1] + arr[i+2]
    }
    return arr[0]
};