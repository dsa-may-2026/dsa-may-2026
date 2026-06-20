class Solution {
    public int compress(char[] chars) {
        int w = -1, i = 0, j = 0;

        while(j<chars.length) {
            while(j<chars.length && chars[i] == chars[j] ) {
                j++;
            }
            w++;
            chars[w] = chars[i];
            if(j-i > 1) {
                String s = Integer.toString(j-i);
                char[] ss = s.toCharArray();
                for(char c : ss) {
                    w++;
                    chars[w] = c;
                }
            }
            i = j;
        }
        return w+1;
    }
}