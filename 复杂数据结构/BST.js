// binary search tree
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr) {
  if (arr.length < 1) {
    return null;
  }
  const root = new TreeNode(arr[0]);
  const quene = [];
  quene.push(root);
  let flag = 0;
  let cur;
  for (let i = 1; i < arr.length; i++) {
    let newNode = null;
    if (arr[i] !== null) {
      newNode = new TreeNode(arr[i]);
    }
    if (flag === 0) {
      cur = quene.shift();
      cur.left = newNode;
      flag++;
    } else {
      cur.right = newNode;
      flag = 0;
    }
    if (arr[i] !== null) {
      quene.push(newNode);
    }
  }
  return root;
}

function isValidBST(root, min = null, max = null) {
  if (!root) {
    return true;
  }
  if (min !== null && root.val <= min.val) return false;
  if (max !== null && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
}

function isValidBST(root) {
  let pre = -Number.MAX_VALUE;
  function dfs(root) {
    if (!root) {
      return true;
    }
    if (!dfs(root.left)) {
      return false;
    }
    if (root.val <= pre) {
      return false;
    }
    pre = root.val;
    return dfs(root.right);
  }
  return dfs(root);
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  }
  if (val > root.val) {
    return searchBST(root.right, val);
  }
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var insertIntoBST = function (root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (root.val === val) {
    return root;
  }
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function (root, key) {
  if (!root) {
    return root;
  }
  if (root.val === key) {
    if (!root.left && !root.right) {
      return null;
    } else if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      // let maxOfLeftNode = root.left;
      // while (maxOfLeftNode.right) {
      //   maxOfLeftNode = maxOfLeftNode.right;
      // }
      // root.val = maxOfLeftNode.val;
      // root.left = deleteNode(root.left, maxOfLeftNode.val);
      let minOfRightNode = root.right;
      while (minOfRightNode.left) {
        minOfRightNode = minOfRightNode.left;
      }
      root.val = minOfRightNode.val;
      root.right = deleteNode(root.right, minOfRightNode.val);
    }
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }
  return root;
};

const case1 = buildTree([5, 1, 4, null, null, 3, 6]);

console.log(isValidBST(case1));