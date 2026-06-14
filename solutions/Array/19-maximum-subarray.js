//Brute force
class Solution {
    public int maxSubArray(int[] nums) {
        int maximum = Integer.MIN_VALUE;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            int sum = 0;

            for (int j = i; j < n; j++) {
                sum += nums[j];
                maximum = Math.max(maximum, sum);
            }
        }

        return maximum;
    }
}

//OPTIMAL
class Solution {
    public int maxSubArray(int[] nums) {
        int sum = 0;
        int maximum = Integer.MIN_VALUE;

        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            maximum = Math.max(maximum, sum);

            if (sum < 0) {
                sum = 0;
            }
        }

        return maximum;
    }
}