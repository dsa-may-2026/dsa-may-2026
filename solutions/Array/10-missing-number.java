class Solution {
    public int missingNumber(int[] nums) {
        int XOR = 0;

        for(int i = 1; i<=nums.length; i++) {
            XOR = XOR ^ i;
        }

        for(int num : nums) {
            XOR = XOR ^ num;
        }
        return XOR;
    }
}

//Other approach is n*(n+1)/2 formula