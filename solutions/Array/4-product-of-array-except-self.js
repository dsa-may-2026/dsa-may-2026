//Brute force TC: O(N2), SC: O(1)
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int ans[] = new int [nums.length];
        for (int i = 0; i < nums.length; i++) {
            int p = 1;
            for (int j = 0; j < nums.length; j++) {
                if (i != j) {
                    p *= nums[j];
                }
            }
            ans[i] = p;
        }
        return ans;
    }
}


//Optimal TC: O(N), SC: O(N)
class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] prefix = new int[n];
        int[] suffix = new int[n];
        int[] ans = new int[n];
        prefix[0] = 1;
        suffix[n - 1] = 1;
        int p = 1;
        for (int i = 0; i < n; i++) {
            prefix[i] = p;
            p = p * nums[i];
        }
        p = 1;
        for (int i = n - 1; i >= 0; i--) {
            suffix[i] = p;
            p = p * nums[i];
        }
        for (int i = 0; i < n; i++) {
            ans[i] = prefix[i] * suffix[i];
        }
        return ans;
    }
}
