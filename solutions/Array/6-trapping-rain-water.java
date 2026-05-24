//Brute force TC: O(n2) SC: O(1)
class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int maxCount = 0;
        for (int i = 0; i < n; i++) {
            int count = 0;
            int rmax = 0;
            int lmax = 0;
            for (int l = i; l >= 0; l--) {
                lmax = Math.max(lmax, height[l]);
            }
            for (int r = i; r < n; r++) {
                rmax = Math.max(rmax,height[r]);
            }
            count = Math.min(lmax, rmax) - height[i];
            maxCount += count;
        }
        return maxCount;
    }
}

//Optimal: Pre computation just like prefix problem
//TC: O(n) SC: O(n)
class Solution {
    public int trap(int[] height) {
        int n = height.length;
        int maxSoFar = 0;
        int[] leftMax = new int[n];
        int[] rightMax = new int[n];

        for (int i = 0; i < n; i++) {
            leftMax[i] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, height[i]);
        }
        maxSoFar = 0;
        for (int i = n-1; i >=0; i--) {
            rightMax[i] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, height[i]);
        }

        int totalWater = 0;
        for (int i = 0; i < n; i++) {
            int currentWaterAtI = Math.min(leftMax[i], rightMax[i]) - height[i];
            if(currentWaterAtI > 0) {
                totalWater+=currentWaterAtI;
            }
        }
        return totalWater;
    }
}