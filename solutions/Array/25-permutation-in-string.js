/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = {};

    for(let ch of s1) {
        map[ch] = (map[ch] || 0) + 1;
    }

    

    let map2 = {};

    let i = 0, j=0;
    while( j<s2.length) {
        map2[s2[j]] = (map2[s2[j]] || 0) + 1;
        while(map2[s2[j]] > (map[s2[j]] || 0)) {
            map2[s2[i]] = map2[s2[i]]-1;
            if(map2[s2[i]] == 0) {
                delete map2[s2[i]];
            }
            i++;
        }
        if(j-i+1 == s1.length) {
            return true
        }
        j++;
    }
    
    return false;
};