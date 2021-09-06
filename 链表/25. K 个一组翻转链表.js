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
var reverseKGroup = function (head, n) {
  let end = head;
  for (let i = 0; i < n; i++) {
    if (!end) {
      return head;
    }
    end = end.next;
  }
  // let curStart = head;
  function reverse(head, end) {
    if (head.next === end) {
      return head;
    }
    let last = reverse(head.next, end);
    head.next.next = head
    head.next = null;
    return last;
  }
  let res = reverse(head, end)
  head.next = reverseKGroup(end, n);
  return res;
};

// Iteration
var reverseKGroup = function (head, k) {
  // why define dummy?
  // using dummy.next to store the first reversed list`s head
  let dummy = new ListNode();
  dummy.next = head;
  let lastEnd = dummy; // last reversed list`s end (to join next list)
  let curStart = head; // cur list`s start (to be lastEnd when cur list reversed)
  let pre = null;
  let cur = head;
  let count = 0;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
    count++;
    if (count % k === 0) {
      lastEnd.next = pre;
      lastEnd = curStart;
      curStart = cur;
      pre = null; // necessary, avoiding circle list
    }
  }
  if (count % k !== 0) {
    cur = pre
    pre = null
    while (cur) {
      const next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }
    lastEnd.next = pre;
  }
  return dummy.next;
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

console.log(reverseKGroup(list, 2));
