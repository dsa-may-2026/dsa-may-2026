//TC: O(3n)
var getIntersectionNode = function(headA, headB) {
    let c1 = 0,c2=0;
    let curr1 = headA, curr2=headB;

    while(curr1) {
        c1++;
        curr1 = curr1.next;
    }
    while(curr2) {
        c2++;
        curr2 = curr2.next;
    }

    let diff = Math.abs(c1-c2);

    curr1 = headA, curr2=headB;
    if(c1 > c2) {
        while(diff) {
            curr1 = curr1.next;
            diff--;
        }
    } else {
        while(diff) {
            curr2 = curr2.next;
            diff--;
        }
    }

    while(curr1 && curr2) {
        if(curr1 == curr2) {
            return curr1;
        }
        curr1=curr1.next;
        curr2 = curr2.next;
    }

    return null
};

//Better optimal
var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;

    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }

    return p1;
};