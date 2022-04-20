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
    str += root.val + ',';
    _serialize(root.left);
    _serialize(root.right);
  }
  _serialize(root);
  console.log(str);
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
    const rootVal = nodes.shift();
    if (rootVal === '#') {
      return null;
    }
    const root = new TreeNode(rootVal);
    root.left = _deserialize(nodes);
    root.right = _deserialize(nodes);
    return root;
  }
  return _deserialize(nodes);
};

console.log(deserialize('1,2,#,#,3,4,#,#,5,#,#,'));

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */