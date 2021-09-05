// 使用森林数据结构
class UnionFind {
  constructor(n) {
    this.count = n; // 树的个数
    this.parent = new Array(n).fill(1).map((v, i) => i); // 节点的父节点
    this.size = new Array(n).fill(1);  // 树的大小
  }
  union(i, j) {
    let iRoot = this.findRoot(i);
    let jRoot = this.findRoot(j);
    if (iRoot === jRoot) {
      return;
    }
    // 将节点数少的树接到节点数多的树下面 保持平衡
    if (this.size[iRoot] < this.size[jRoot]) {
      this.parent[iRoot] = jRoot;
      this.size[jRoot] += this.size[iRoot];
    } else {
      this.parent[jRoot] = iRoot;
      this.size[iRoot] += this.size[jRoot];
    }
    this.count--;
  }
  findRoot(x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]]; // 在从查找的过程中压缩路径，即尽量将parent指向根节点
      x = this.parent[x];
    }
    return x;
  }
  isConnected(i, j) {
    return this.findRoot(i) === this.findRoot(j);
  }
  count() {
    return this.count;
  }
}

let union = new UnionFind(1e7);

union.union(0,4);

console.log(union.count, union.isConnected(0,3), union.isConnected(0,4));