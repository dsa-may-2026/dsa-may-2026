class Solution {
    public int longestConsecutive(int[] nums) {
        int max = 0;
        int count = 0;

        Set<Integer> s = Arrays.stream(nums)
                                 .boxed()
                                 .collect(Collectors.toSet());

        for(int num: s) {
            if(s.contains(num-1)) {
                continue;
            }
            int next = num+1;
            count = 1;
            while(s.contains(next)) {
                count++;
                next++;
            }
            max = Math.max(max, count);
        }
        return max;
    }
}