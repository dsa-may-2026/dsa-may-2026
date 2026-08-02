var isSameTree = function(p, q) {
    function helper(p,q) {
        if(p == null && q == null) return true
        if(p == null || q == null) return false
        if(p.val != q.val) return false

        return helper(p.left, q.left) && helper(p.right, q.right)
    }

    return helper(p, q)
};