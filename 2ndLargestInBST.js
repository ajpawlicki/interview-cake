class BST {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  add(...values) {
    values.forEach(val => {
      if (val === this.val) {
        throw new Error('Value already exists in tree.');
  
      } else if (val < this.val) {
  
        if (!this.left) {
          this.left = new BST(val);
        } else {
          this.left.add(val);
        }
  
      } else if (val > this.val) {
  
        if (!this.right) {
          this.right = new BST(val);
        } else {
          this.right.add(val);
        }
  
      }
    });
  }

  findKthLargest(k) {
    let kthLargestNode = null;
    let count = k;
  
    (function inOrderTraverse(node) {
      if (node.right) inOrderTraverse(node.right);
      count--;
      if (count === 0) kthLargestNode = node;
      if (node.left) inOrderTraverse(node.left);
    })(this);
  
    return kthLargestNode;
  }

  find2ndLargestNaive() {
    return this.findKthLargest(2);
  }

  findLargest() {
    return this.right ? this.right.findLargest() : this;
  }

  find2ndLargest() {
    if (!this.left && !this.right) throw new Error('Tree needs at least 2 nodes.');

    if (this.left && !this.right) return this.left.findLargest();
    
    if (this.right && !this.right.left && !this.right.right) return this;
    
    return this.right.find2ndLargest();
  }

  findLargestIterative() {
    let node = this;

    while (node) {
      if (!node.right) return node;
      node = node.right;
    }
  }

  find2ndLargestIterative() {
    if (!this.left && !this.right) throw new Error('Tree needs at least 2 nodes.');
    
    let node = this;

    while (node) {
      if (node.left && !node.right) return node.left.findLargestIterative();
      if (node.right && !node.right.left && !node.right.right) return node;
      node = node.right;
    }

  }
};

const bst = new BST(5);
bst.add(1);
// console.log(bst.findLargest());
// console.log(bst.find2ndLargest());
// console.log(bst.findLargestIterative());
console.log(bst.find2ndLargestIterative());
console.log(bst.find2ndLargest());