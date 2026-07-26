/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    
    let res = []

    function helper(s, no, nc) {
        if(nc == n) {
            res.push(s);
            return;
        }
        
        if(no<n) helper(s+"(", no+1, nc)

        if(nc<no) helper(s+")", no, nc+1)
    }

    helper("", 0, 0)
    return res
};