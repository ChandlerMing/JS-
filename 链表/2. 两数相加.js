/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p1 = l1, p2 = l2, p3 = new ListNode(0), res = p3, addtion = 0;
  while (p1 || p2 || addtion) {
    let sum = ~~(p1 && p1.val) + ~~(p2 && p2.val) + addtion;
    let cur = sum % 10;
    addtion = ~~(sum / 10);
    p1 = p1 ? p1.next : p1;
    p2 = p2 ? p2.next : p2;
    p3.next = new ListNode(cur);
    p3 = p3.next;
  }
  return res.next;
};

let l1 = [2, 4, 3], l2 = [5, 6, 4]

function buildList(arr) {
  function buildNode(index) {
    if (index < arr.length) {
      return new ListNode(arr[index], buildNode(index + 1))
    }
  }
  return buildNode(0);
}

l1 = buildList(l1);
l2 = buildList(l2);

console.log(addTwoNumbers(l1, l2));