var isSubsequence = function(s, t) {
    let sPointer = 0, tPointer = 0;

    while(sPointer<s.length && tPointer<t.length) {
        if(s[sPointer] == t[tPointer]) {
            sPointer++;
        }
        tPointer++;
    }

    return sPointer == s.length
};