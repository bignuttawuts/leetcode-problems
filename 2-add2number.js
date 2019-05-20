/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
	let dummyHead = new ListNode(0);
	let currL = dummyHead;
	let tempL1 = l1;
	let tempL2 = l2;
	let carry = 0;
	
	while (tempL1 || tempL2) {
		let x = tempL1 ? tempL1.val : 0;
		let y = tempL2 ? tempL2.val : 0;

		let sum = carry + x + y;
		let hasC = false
		if ((sum - 10) >= 0) {
			sum -= 10;
			carry = 1;
		} else {
			carry = 0;
		}
		
		currL.next = new ListNode(sum);
		currL = currL.next;

		if (tempL1) tempL1 = tempL1.next
		if (tempL2) tempL2 = tempL2.next
	}

	if (carry > 0) {
		currL.next = new ListNode(1);
	}
	return dummyHead.next
};

var ln1 = new ListNode(1);


var ln2 = new ListNode(9);
ln2.next = new ListNode(9);

console.log('result', addTwoNumbers(ln1, ln2));