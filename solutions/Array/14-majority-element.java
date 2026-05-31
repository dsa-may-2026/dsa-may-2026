//TC: O(n) Boyre Moore Voting algorithm
class Solution {
    public int majorityElement(int[] nums) {
        int leader = nums[0];
        int count = 1;

        for(int i = 1; i<nums.length; i++) {
            if(count == 0) {
                leader = nums[i];
                count++;
            }
            else if(leader == nums[i]) {
                count++;
            } else {
                count--;
            }
        }
        return leader;
    }
}