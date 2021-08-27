/**
 * Definition for a binary tree node.
*/
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
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

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum, curSum = 0) {
  let res = false;
  function dfs(root, curSum = 0) {
    if (res || !root) {
      return;
    }
    if (!root.left && !root.right) {
      res = curSum + root.val === targetSum;
      return;
    }
    curSum += root.val;
    if (root.left) {
      dfs(root.left, curSum);
    }
    if (root.right) {
      dfs(root.right, curSum);
    }
  }
  dfs(root);
  return res;
};

let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]

let root = buildTree(arr);

console.log(hasPathSum(root, 22));