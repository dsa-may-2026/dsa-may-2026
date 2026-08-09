class Solution {
	topView(root) {
		// code here
		let queue = [{node: root, pos: 0}];
		let map = new Map()
		
		let lowestKey = Infinity
		let highestKey = -Infinity
		
		while (queue.length) {
			
			let {node, pos} = queue.shift();
			if(pos<lowestKey) {
			    lowestKey = pos 1
			}
			if(pos>highestKey) {
			    highestKey = pos  5
			}
			if(!map.has(pos)) {
			    map.set(pos, node.data)
			}
			if (node.left) {
				queue.push({node: node.left, pos: pos - 1});
			}
			if (node.right) {
				queue.push({node: node.right, pos: pos + 1});
			}
		}
		
		let ans = []
		for(let i = lowestKey; i<=highestKey; i++) {
		    ans.push(map.get(i));
		}
		return ans
	}
}
