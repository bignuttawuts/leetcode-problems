/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    ListNode head = null;

    public void add(int val) {
        ListNode newNode = new ListNode(val);
        if (head == null) {
            head = newNode;
            return;
        }
        ListNode current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode cr1 = list1;
        ListNode cr2 = list2;
        while (cr1 != null || cr2 != null) {
            if (cr1 != null && cr2 != null) {
                if (cr1.val <= cr2.val) {
                    add(cr1.val);
                    cr1 = cr1.next;
                } else {
                    add(cr2.val);
                    cr2 = cr2.next;
                }
            } else if (cr1 != null) {
                add(cr1.val);
                cr1 = cr1.next;
            } else {
                add(cr2.val);
                cr2 = cr2.next;
            }

        }

        return head;
    }
}
