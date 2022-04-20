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
  if (!root) {
    return str;
  }
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const cur = queue.shift();
    if (!cur) {
      str += '#,';
    } else {
      str += cur.val + ',';
      queue.push(cur.left);
      queue.push(cur.right);
    }
  }
  return str;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let nodes = data.split(',');
  nodes.pop();
  if (!nodes.length) {
    return null;
  }
  const root = new TreeNode(nodes[0]);
  const queue = [];
  queue.push(root);
  for (let i = 1; i < nodes.length;) {
    const parent = queue.shift();
    const left = nodes[i++];
    if (left === '#') {
      parent.left = null;
    } else {
      parent.left = new TreeNode(left);
      queue.push(parent.left);
    }
    const right = nodes[i++];
    if (right === '#') {
      parent.right = null;
    } else {
      parent.right = new TreeNode(right);
      queue.push(parent.right);
    }
  }
  return root;
};

console.log(deserialize(''))

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */