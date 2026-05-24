//Brute force TC: O(n2) SC: O(1)
var maxArea = function (height) {
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let width = j - i;
            let min = Math.min(height[i], height[j]);
            let area = width * h;
            max = Math.max(max, area);
        }
    }
    return max;

};

//Optimal TC: O(n) SC: O(1)
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        let area = width * h;
        max = Math.max(max, area);
        if (height[left] == height[right]) {
            left++;
            right--;
        }
        else if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;

};

            