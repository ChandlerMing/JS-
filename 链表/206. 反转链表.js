/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Recursion
var reverseList = function (head) {
  let newHead = null;
  function reverse(head) {
    if (head.next === null) {
      newHead = head;
      return head;
    }
    reverse(head.next).next = head;
    head.next = null;
    return head;
  }
  reverse(head);
  return newHead;
};

// Iteration
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};

let arr = [1, 2, 3, 4, 5]

function buildList(arr) {
  function buildNode(index) {
    if (index < arr.length) {
      return new ListNode(arr[index], buildNode(index + 1))
    }
  }
  return buildNode(0);
}

// function buildList(arr) {
//   let head = new ListNode();
//   let cur = head;
//   for (let i = 0; i < arr.length; i++) {
//     cur.val = arr[i];
//     if (i + 1 < arr.length) {
//       cur.next = new ListNode();
//       cur = cur.next;
//     } else {
//       cur.next = null;
//     }
//   }
//   return head;
// }

let list = buildList(arr);

console.log(reverseList(list));
