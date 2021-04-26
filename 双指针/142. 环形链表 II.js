/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  if ( !head ) return null;
  let low = head;
  let fast = head;
  let hasCircle = false;
  while( fast.next && fast.next.next ) {
      low = low.next;
      fast = fast.next.next;
      if ( low === fast ) {
          hasCircle = true;
          break;
      }
  }
  if ( !hasCircle ) return null;
  fast = head;
  while ( fast !== low ) {
      fast = fast.next;
      low = low.next;
  }
  return low;
};