var deleteDuplicates = function(head) {
    if(!head) return head;

    let p1 = head, p2 = head.next;

    while(p2) {
        while(p2 && p2.val == p1.val) {
            p2 = p2.next;
        }
        p1.next = p2
        p1 = p2;
    }
    return head
};