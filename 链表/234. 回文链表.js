/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// To Array
var isPalindrome = function (head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// Recursion
var isPalindrome = function (head) {
  let left = head;
  function dfs(node) {
    if (!node) {
      return true;
    }
    let res = dfs(node.next);
    res = res && (node.val === left.val);
    left = left.next;
    return res;
  }
  return dfs(head);
};
// 
console.log(isPalindrome());