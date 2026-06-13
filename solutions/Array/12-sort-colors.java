class Solution {
    public void sortColors(int[] nums) {
        int nonZero = 0, nonTwo = nums.length-1;

        while(nums[nonZero] == 0) {
            nonZero++;
            if(nonZero == nums.length) {
                return;
            }
        }
        while(nums[nonTwo] == 2) {
            nonTwo--;
            if(nonTwo < 0) {
                return;
            }
        }

        for(int i = nonZero; i<=nonTwo; i++) {
            if(nums[i] == 0) {
                int temp = nums[i];
                nums[i] = nums[nonZero];
                nums[nonZero] = temp;
                nonZero++;
            } else if(nums[i] == 2) {
                int temp = nums[i];
                nums[i] = nums[nonTwo];
                nums[nonTwo] = temp;
                nonTwo--;
                while(nums[nonTwo] == 2) {
                    nonTwo--;
                }
                if(nums[i] == 0) {
                    temp = nums[i];
                    nums[i] = nums[nonZero];
                    nums[nonZero] = temp;
                    nonZero++;
                }
            }
        }
    }
}