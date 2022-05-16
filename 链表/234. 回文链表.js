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
// Fast & Slow Pointer
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
var isPalindrome = function (head) {
  // Loacate the mid of the linked list
  let slow = head, fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast !== null) {
    slow = slow.next;
  }
  function reverseList(head) {
    let pre = null;
    let cur = head;
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    return pre;
  }
  let p = head;
  let q = reverseList(slow);
  while (q) {
    if (p.val !== q.val) {
      return false;
    }
    p = p.next;
    q = q.next;
  }
  return true;
};
console.log(isPalindrome());