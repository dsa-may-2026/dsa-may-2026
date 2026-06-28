var reorderList = function (head) {
    let slow = head, fast = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //slow is the end of first half
    let secondHead = slow.next;
    slow.next = null;

    //reverse second list
    let prev = null;
    let curr = secondHead;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }


    //merge alternatively
    let firstHead = head;
    secondHead = prev;

    let curr1 = firstHead;
    let curr2 = secondHead;
    while (curr2) {
        let temp = curr1.next;
        curr1.next = curr2;
        curr1 = temp;
        temp = curr2.next
        curr2.next = curr1;
        curr2 = temp;
    }
};