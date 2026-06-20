var reverseWords = function(s) {
    s = s.split(' ');
    s = s.toReversed();
    s = s.filter(a=>a).join(' ');
    return s;
};