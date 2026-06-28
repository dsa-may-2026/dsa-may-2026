class Solution {
    public int findDuplicate(int[] nums) {
        //Assume linked list
        int fast = 0, slow = 0;
        while(true) {
            slow = nums[slow];
            fast = nums[nums[fast]];

            if(slow == fast) {
                fast = 0;
                break;
            }
        }

        while(fast!=slow) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return fast;
    }
}