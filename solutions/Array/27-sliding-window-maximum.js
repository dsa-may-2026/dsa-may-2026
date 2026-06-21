class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int left = 0;
        Deque<Integer> dq = new ArrayDeque<>();
        List<Integer> result = new ArrayList<>();

        for (int right = 0; right < nums.length; right++) {
            while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[right]) {
                dq.pollLast();
            }

            dq.offerLast(right);

            if ((right - left + 1) > k) {
                if (dq.peekFirst() == left) {
                    dq.pollFirst();
                }
                left++;
            }

            if ((right - left + 1) == k) {
                result.add(nums[dq.peekFirst()]);
            }
        }

        int[] ans = new int[result.size()];
        for (int i = 0; i < result.size(); i++) {
            ans[i] = result.get(i);
        }

        return ans;
    }
}