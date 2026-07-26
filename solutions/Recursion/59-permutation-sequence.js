var getPermutation = function(n, k) {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    //[1,2,3....]

    function helper(arr, k) {
        if(arr.length == 0) return "";
        let f = fact(arr.length); //6
        let groupSize = f/arr.length; //2
        let index = Math.floor((k-1)/groupSize)
        let nextArr = [...arr];
        nextArr.splice(index, 1)
        let newK = k - index * groupSize;
        return ""+arr[index]+helper(nextArr, newK);
    }


    return helper(arr, k)


    function fact(num) {
        let ans = 1;
        for(let i = 1; i<=num; i++) {
            ans*=i
        }
        return ans
    }
};