// 后序遍历树 
// case：
//   1.目标在根两边 =》 返回根（后序遍历是从下往上的，保证了是最近的祖先）
//   2.目标就是根 =》返回根
//   3.目标在根一侧 =》查找改侧子树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function dfs(root) {
    if (!root || root.val === p.val || root.val === q.val) {
      return root;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (!left) {
      return right;
    }
    if (!right) {
      return left;
    }
    return root;
  }
  return dfs(root);
};