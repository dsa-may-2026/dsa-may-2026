//Brute force TC: O(n*n*L) where L is max length among all words

var groupAnagrams = function(strs) {
    let res = []

    for(let str of strs) {
        let found = false
        for(let group of res) {
            if(isAna(group[0], str)) {
                group.push(str)
                found = true
            }
        }
        if(!found) {
            res.push([str])
        }
    }
    return res
};


function isAna(s1, s2) {
    if(s1.length != s2.length) {
        return false
    }
    let map = {}

    for(let i = 0; i<s1.length; i++) {
        map[s1[i]] = (map[s1[i]] || 0) + 1
    }
    for(let i = 0; i<s2.length; i++) {
        if(!map[s2[i]]) {
            return false
        }
        map[s2[i]]--
    }
    
    return true
}

// Optimal Approach TC: O(n * L)
function groupAnagrams (strs) {
    let map = {}

    for(let str of strs) {
        let key = convertASCIISortedKey(str)

        if(!map[key]) {
            map[key] = []
        }
        map[key].push(str)
    }

    return Object.values(map)
};

function convertASCIISortedKey(str) {
    let arr = new Array(26).fill(0)

    for(let i = 0; i < str.length; i++) {
        let index = str.charCodeAt(i) - 'a'.charCodeAt(0)
        arr[index]++;
    }
    return arr.join(',');
}