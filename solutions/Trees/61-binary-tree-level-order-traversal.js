var levelOrder = function (root) {
    let ans = []
    if(!root) return ans
    let queue = [root]
    
    while(queue.length) {
      let levelSize = queue.length;
      let level = []
      while(levelSize) {
        let curr = queue.shift()
        level.push(curr.val)
        if(curr.left) {
          queue.push(curr.left)
        }
        if(curr.right) {
          queue.push(curr.right)
        }
        levelSize--;
      }
      ans.push(level)
    }
    return ans
};