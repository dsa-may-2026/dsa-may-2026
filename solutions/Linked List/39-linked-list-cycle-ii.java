public class Solution {
    public ListNode detectCycle(ListNode head) {
        if(head == null) return null;
        
        ListNode slow = head, fast = head;

        boolean isCycle = false;

        while(fast.next!=null && fast.next.next!=null) {
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow) {
                isCycle = true;
                fast = head;
                break;
            }
        }
        if(!isCycle) {
            return null;
        }

        //second part where both pointers move one step. Where they meet again is start of cycle
        while(fast!=slow) {
            fast = fast.next;
            slow = slow.next;
        }
        return fast;
    }
}