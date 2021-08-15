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
var reverseBetween = function (head, left, right) {
  let successor = null;
  function reverseList(head, n) {
    if (!head.next || n === 1) {
      successor = head.next;
      return head;
    }
    let last = reverseList(head.next, n - 1);
    head.next.next = head;
    head.next = successor;
    return last;
  }
  if (left === 1) {
    return reverseList(head, right);
  } else {
    head.next = reverseBetween(head.next, left - 1, right - 1)
    return head;
  }
};

// Iteration
// var reverseBetween = function (head, left, right) {
//   function reverseList(head, n) {
//     let pre = null;
//     let cur = head;
//     while (cur && n > 0) {
//       const next = cur.next;
//       cur.next = pre;
//       pre = cur;
//       cur = next;
//       n--;
//     }
//     head.next = cur;
//     return pre;
//   }
//   if (left === 1) {
//     return reverseList(head, right);
//   } else {
//     let joiner = head;
//     while (left-- > 2) {
//       joiner = joiner.next;
//       right--;
//     }
//     joiner.next = reverseList(joiner.next, right - 1);
//     return head;
//   }
// };

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

console.log(reverseBetween(list, 2, 4));
