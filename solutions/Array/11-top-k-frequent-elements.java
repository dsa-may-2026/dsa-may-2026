//TC: O(nlogn) SC: O(n)
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();

        // Count frequencies
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }

        // Convert map entries to a list and sort by frequency descending
        List<Map.Entry<Integer, Integer>> entries = new ArrayList<>(freq.entrySet());

        entries.sort((a, b) -> b.getValue() - a.getValue());

        // Collect top k elements
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = entries.get(i).getKey();
        }

        return result;
    }
}

//TC: O(n) SC: O(n)
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        Map<Integer, List<Integer>> revMap = new HashMap<>();

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (revMap.get(entry.getValue()) == null) {
                revMap.put(entry.getValue(), new ArrayList<>());
            }
            revMap.get(entry.getValue()).add(entry.getKey());
        }

        int[] res = new int[k];
        int pointer = 0;

        for (int i = nums.length; i > 0; i--) {
            if (revMap.get(i) == null)
                continue;

            for (int num : revMap.get(i)) {
                res[pointer++] = num;
            }
            if (pointer == k) {
                break;
            }
        }
        return res;
    }
}