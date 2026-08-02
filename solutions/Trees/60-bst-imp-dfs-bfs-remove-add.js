class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(val) {
    let node = new Node(val);
    if (this.root == null) {
      this.root = node;
      return;
    }
    let curr = this.root;
    while (curr) {
      if (val > curr.val) {
        if (curr.right == null) {
          curr.right = node;
          return;
        }
        curr = curr.right;
      } else {
        if (curr.left == null) {
          curr.left = node;
          return;
        }
        curr = curr.left;
      }
    }
  }

  binarySearch(val) {
    let curr = this.root;
    while (curr) {
      if (curr.val == val) {
        return curr;
      }
      if (val > curr.val) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return null;
  }

  bfsTraversal() {
    let queue = [this.root];
    let ans = [];
    while (queue.length) {
      let levelSize = queue.length;
      let level = [];
      while (levelSize) {
        let curr = queue.shift();
        level.push(curr.val);
        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        }
        levelSize--;
      }
      ans.push(level);
    }
  }

  dfsInorder() {
    function helper(node) {
      if (!node) return;

      helper(node.left);
      console.log(node.val);
      helper(node.right);
    }

    helper(this.root);
  }

  dfsPreorder() {
    function helper(node) {
      if (!node) return;

      console.log(node.val);
      helper(node.left);
      helper(node.right);
    }

    helper(this.root);
  }

  dfsPostorder() {
    function helper(node) {
      if (!node) return;

      helper(node.left);
      helper(node.right);
      console.log(node.val);
    }

    helper(this.root);
  }

  deleteNode(key) {
    function helper(node, key) {
      if (node == null) {
        return null;
      }

      if (node.val == key) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        attachNodeToRightMostOfParent(node.left, node.right);
        return node.left;
      } else if (key > node.val) {
        node.right = helper(node.right, key);
        return node;
      } else {
        node.left = helper(node.left, key);
        return node;
      }
    }
    return helper(this.root, key);

    function attachNodeToRightMostOfParent(parent, node) {
      if (parent.right == null) {
        parent.right = node;
        return;
      }
      attachNodeToRightMostOfParent(parent.right, node);
    }
  }
}

let bst = new BST();

bst.add(5);
bst.add(3);
bst.add(7);
bst.add(2);
bst.add(4);
bst.add(6);
bst.add(8);
bst.add(1);

bst.deleteNode(7);

bst.dfsInorder();