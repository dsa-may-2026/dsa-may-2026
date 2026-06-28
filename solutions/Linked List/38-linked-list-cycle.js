//TC: O(n), SC: O(n)
public class Solution {
    public boolean hasCycle(ListNode head) {
        Set<ListNode> set = new HashSet<>();

        ListNode curr = head;

        while(curr!=null) {
            if(set.contains(curr)) {
                return true;
            }
            set.add(curr);
            curr = curr.next;
        }
        return false;
    }
}

//TC: O(n), SC: O(1)
public class Solution {
    public boolean hasCycle(ListNode head) {
        if(head == null) return false;
        
        ListNode slow = head, fast = head;

        while(fast.next!=null && fast.next.next!=null) {
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow) {
                return true;
            }
        }

        return false;
    }
}