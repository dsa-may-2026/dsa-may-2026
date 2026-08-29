/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    let map = new Map()

    function helper(node) {
        if(!node) return null
        if(map.has(node)) {
            return map.get(node)
        }

        let cloneNode = new Node(node.val)
        map.set(node,cloneNode)
        for(let neighbor of node.neighbors) {
           cloneNode.neighbors.push(helper(neighbor))
        }
        return cloneNode
    }

    return helper(node)
};