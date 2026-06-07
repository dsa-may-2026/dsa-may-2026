class Solution {
    public List<Integer> majorityElement(int[] nums) {
        if(nums.length == 1) {
            return Arrays.asList(nums[0]);
        }
        int s1 = 0, s2 = 0, c1 = 0, c2 = 0;

        s1 = nums[0];
        c1++;

        int i = 1;
        for(; i<nums.length; i++) {
            if(nums[i] == s1) {
                c1++;
            } else {
                s2 = nums[i];
                c2++;
                i++;
                break;
            }
        }

        while(i<nums.length) {
            if(nums[i] == s1) {
                c1++;
            } else if(nums[i] == s2) {
                c2++;
            } else if(c1 == 0) {
                s1 = nums[i];
                c1 = 1;
            } else if(c2 == 0) {
                s2 = nums[i];
                c2 = 1;
            } else {
                c1--;
                c2--;
            }
            i++;
        }

        List<Integer> res = new ArrayList<>();

        c1 = 0;
        c2 = 0;

        System.out.println(s1);
        System.out.println(s2);
        for(int it = 0; it<nums.length; it++) {
            if(nums[it] == s1) {
                c1++;
            } else if(nums[it] == s2) {
                c2++;
            }
        }

        if(c1 > nums.length/3) {
            res.add(s1);
        }

        if(c2 > nums.length/3) {
            res.add(s2);
        }

        return res;
    }
}