/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1){
        return list2;
    }else if(!list2){
        return list1;
    }
    let dummy = new ListNode(-1);
    let curr;
    if(list1.val<=list2.val){
          dummy.next=list1;
          curr=dummy.next;
          list1=list1.next;
        }else{
            dummy.next=list2;
            curr=dummy.next;
            list2=list2.next;
    }
    
    while(list1 && list2){
        if(list1.val<=list2.val){
          curr.next=list1;
          list1=list1.next;
        }else{
            curr.next=list2;
            list2=list2.next;
        }
        curr=curr.next;
    }
    while(list1){
        curr.next=list1;
        list1=list1.next;
        curr=curr.next;
    }
    while(list2){
        curr.next=list2;
        list2=list2.next;
        curr=curr.next;
    }
    return dummy.next;
};