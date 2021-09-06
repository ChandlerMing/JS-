
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  let root = new TreeNode(preorder[0]);
  let pivot = inorder.indexOf(preorder.shift());
  root.left = buildTree(preorder, inorder.slice(0, pivot));
  root.right = buildTree(preorder, inorder.slice(pivot + 1));
  return root;
};

console.log(buildTree(
  [3, 9, 20, 15, 7],
  [9, 3, 15, 20, 7]))

console.log(buildTree(
  [1, 2],
  [1, 2]))

console.log(buildTree(
  [-1],
  [-1]))