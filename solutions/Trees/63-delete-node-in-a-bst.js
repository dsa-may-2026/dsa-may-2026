
var deleteNode = function (root, key) {
    function helper(node, key) {
        if(node == null) {
            return null
        }

        if (node.val == key) {
            if (node.left == null && node.right == null) {
                return null
            }
            if (node.left == null) {
                return node.right
            }
            if (node.right == null) {
                return node.left
            }
            attachNodeToRightMostOfParent(node.left, node.right)
            return node.left
        } else if (key > node.val) {
            node.right = helper(node.right, key);
            return node;
        } else {
            node.left = helper(node.left, key);
            return node;
        }
    }
    return helper(root, key)

    function attachNodeToRightMostOfParent(parent, node) {
        if (parent.right == null) {
            parent.right = node
            return
        }
        attachNodeToRightMostOfParent(parent.right, node)
    }

};