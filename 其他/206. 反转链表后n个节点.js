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
var reverseList = function (head, n) {
  if (n <= 0) {
    return head;
  }
  let unReversedEnd = null;
  function reverse(cur) {
    if (!cur.next) {
      return cur;
    }
    let last = reverse(cur.next)
    if (n > 1) {
      cur.next.next = cur;
      cur.next = null;
    } else if (n === 1) {
      unReversedEnd = cur;
    }
    n--;
    return last;
  }
  let reversedHead = reverse(head)
  if (unReversedEnd) {
    unReversedEnd.next = reversedHead;
    return head;
  } else {
    return reversedHead;
  }
};

// Iteration
var reverseList = function (head, n) {
  // find the reversing job`s start position
  let slow = head, fast = head;
  while (n-- && fast) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // fast can`t be null unless n >= list`s lenth
  let unReversedEnd, reverseStart;
  if (!fast) {
    unReversedEnd = null;
    reverseStart = head;
  } else {
    unReversedEnd = slow;
    reverseStart = slow.next;
  }
  let pre = null;
  let cur = reverseStart;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  if (unReversedEnd) {
    unReversedEnd.next = pre;
    return head;
  } else {
    return pre;
  }
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

console.log(reverseList(list, 8));
