
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
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) {
    return null;
  }
  let root = new TreeNode(postorder[postorder.length - 1]);
  let pivot = inorder.indexOf(postorder.pop());
  root.right = buildTree(inorder.slice(pivot + 1), postorder);
  root.left = buildTree(inorder.slice(0, pivot), postorder);
  return root;
};

console.log(buildTree(
  [9, 3, 15, 20, 7],
  [9, 15, 7, 20, 3]))

console.log(buildTree(
  [1, 2],
  [1, 2]))

console.log(buildTree(
  [-1],
  [-1]))