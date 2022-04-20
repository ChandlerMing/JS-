/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let str = '';
  function _serialize(root) {
    if (root === null)  {
      str += '#,';
      return
    }
    _serialize(root.left);
    _serialize(root.right);
    str += root.val + ',';
  }
  _serialize(root);
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const nodes = data.split(',');
  nodes.pop();
  function _deserialize(nodes) {
    if (!nodes.length) {
      return null;
    }
    const rootVal = nodes.pop();
    if (rootVal === '#') {
      return null;
    }
    const root = new TreeNode(rootVal);
    root.right = _deserialize(nodes);
    root.left = _deserialize(nodes);
    return root;
  }
  return _deserialize(nodes);
};

console.log(deserialize('#,#,2,#,#,4,#,#,5,3,1,'));

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */