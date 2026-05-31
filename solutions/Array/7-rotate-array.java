//Brute force: TC:O(n*k)
class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        int res[] = new int[n];
        int p = 0;

        for (int i = n - k; i < n; i++) {
            res[p] = nums[i];
            p++;
        }
        for (int i = 0; i < k; i++) {
            res[p] = nums[i];
            p++;
        }

        for (int i = 0; i < n; i++) {
            nums[i] = res[i];
        }
    }
}

//Optimal: TC:O(n)
class Solution {
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n;
        if (k == 0)
            return;
        reverse(nums, 0, n - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, n - 1);
    }

    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}