/**
 * Definition for a binary tree node.
*/
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// Recursion
// var isSymmetric = function (root) {
//   function judge(leftNode, rightNode) {
//     if (!leftNode && !rightNode) {
//       return true;
//     } else if (!leftNode || !rightNode) {
//       return false;
//     } else {
//       return leftNode.val === rightNode.val && judge(leftNode.left, rightNode.right) && judge(leftNode.right, rightNode.left);
//     }
//   }
//   return judge(root, root);
// };

// Iteration
var isSymmetric = function (root) {
  let stack = [];
  stack.push([root, root])
  while (stack.length) {
    let cur = stack.pop();
    let [leftNode, rightNode] = cur;
    // one of nodes is null || the nodes are different
    if (!leftNode && !rightNode) {
      continue;
    }
    if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
      return false;
    }
    stack.push([leftNode.left, rightNode.right], [leftNode.right, rightNode.left]);
  }
  return true;
};

function buildTree(arr) {
  function buildNode(index) {
    if (index < arr.length && arr[index] !== null) {
      return new TreeNode(arr[index], buildNode(2 * index + 1), buildNode(2 * index + 2));
    } else {
      return null;
    }
  }
  return buildNode(0);
}

// let arr = [1, 2, 2, null, 3, null, 3];
let arr = [1, 2, 3]

let root = buildTree(arr);

console.log(isSymmetric(root));
