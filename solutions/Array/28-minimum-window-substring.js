var minWindow = function(s, t) {
    if(s.length < t.length) return "";

    let needMap = {}

    for(let ch of t) {
        needMap[ch] = (needMap[ch] || 0) + 1
    }

    let ans = ""
    let currentMap = {}

    let i = 0, j = 0

    let matchCount = 0;

    while(j<s.length) {
        if(s[j] in needMap) {
            currentMap[s[j]] = (currentMap[s[j]] || 0) + 1
            if(currentMap[s[j]] == needMap[s[j]]) {
                matchCount++;
            }

            //when the window has a match, try to shrink i pointer to find shorter window
            while(matchCount == Object.keys(needMap).length) {
                if(ans!="" && j-i+1 < ans.length || ans=="") {
                    ans = s.substring(i,j+1);
                }
                
                if(currentMap[s[i]]) {
                    currentMap[s[i]]--;
                    if(currentMap[s[i]] < needMap[s[i]]) {
                        matchCount--;
                    }
                }
                i++;
            }
        } 
        j++;
        
    }
    return ans;
};