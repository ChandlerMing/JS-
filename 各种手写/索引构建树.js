let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 },
]

// Recursion
function buildTree(arr, pid) {
  let res = [];
  function findChildren(pid, res) {
    for (let item of arr) {
      if (item.pid === pid) {
        let cur = { ...item, children: [] }
        res.push(cur);
        findChildren(item.id, cur.children);
      }
    }
  }
  findChildren(pid, res);
  return res;
}

function buildTree(arr, pid) {
  let res = [];
  function findChildren(pid, res) {
    for (let item of arr) {
      if (item.pid === pid) {
        let cur = { ...item, children: [] }
        res.push(cur);
        findChildren(item.id, cur.children);
      }
    }
  }
  findChildren(pid, res);
  return res;
}

console.log(buildTree(arr, 0));

