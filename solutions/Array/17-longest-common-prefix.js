//Best approach

class Solution {
    public String longestCommonPrefix(String[] strs) {
        StringBuilder finalString = new StringBuilder();
        String word = strs[0];

        for (int i = 0; i < word.length(); i++) {
            boolean isValid = false;
            int count = 0;

            for (int j = 1; j < strs.length; j++) {
                if (i >= strs[j].length() || word.charAt(i) != strs[j].charAt(i)) {
                    isValid = false;
                    break;
                }
                count++;
            }

            if (count == strs.length - 1) {
                finalString.append(word.charAt(i));
                isValid = true;
            }

            if (!isValid) {
                break;
            }
        }

        return finalString.toString();
    }
}

//Alternate but not best

class Solution {
    public String longestCommonPrefix(String[] strs) {
        Arrays.sort(strs);

        String first = strs[0];
        String last = strs[strs.length - 1];

        int i = 0;

        while (i < first.length() && i < last.length()) {
            if (first.charAt(i) != last.charAt(i)) {
                break;
            }
            i++;
        }

        return first.substring(0, i);
    }
}