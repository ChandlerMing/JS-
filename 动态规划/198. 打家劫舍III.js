/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root) {
  const dfs = (root) => {
    if (!root) {
      return [0, 0];
    }
    const dp = [0, 0];
    const left = dfs(root.left);
    const right = dfs(root.right);
    dp[0] = root.val + left[1] + right[1]; // rob current node
    dp[1] = Math.max(...left) + Math.max(...right); // not rob current node
    return dp;
  }
  return Math.max(...dfs(root));
};
