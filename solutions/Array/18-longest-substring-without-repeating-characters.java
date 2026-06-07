class Solution {
    public int lengthOfLongestSubstring(String s) {
        int i = 0, j = 0;
        int longest = 0;

        Set<Character> seen = new HashSet<>();

        while (j < s.length()) {
            if (!seen.contains(s.charAt(j))) {
                seen.add(s.charAt(j));
                longest = Math.max(longest, j - i + 1);
                j++;
            } else {
                while (seen.contains(s.charAt(j))) {
                    seen.remove(s.charAt(i));
                    i++;
                }
            }
        }

        return longest;
    }
}

//A little bit more better with extra space for index position
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charMap = new HashMap<>();

        int i = 0;
        int longest = 0;

        for (int j = 0; j < s.length(); j++) {
            char c = s.charAt(j);

            if (charMap.containsKey(c)) {
                i = Math.max(i, charMap.get(c) + 1);
            }

            charMap.put(c, j);
            longest = Math.max(longest, j - i + 1);
        }

        return longest;
    }
}