var preorderTraversal = function (root) {
    let res = []
    function helper(node) {
        if (!node) return;
        res.push(node.val);
        helper(node.left);
        helper(node.right);
    }

    helper(root);
    return res
};