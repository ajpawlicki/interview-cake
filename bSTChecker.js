class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  checkIfBST(lowerBound = Number.MIN_VALUE, upperBound = Number.MAX_VALUE) {
    if (this.val <= lowerBound || this.val >= upperBound) return false;

    return (this.left ? this.left.checkIfBST(lowerBound, this.val) : true)
      && (this.right ? this.right.checkIfBST(this.val, upperBound) : true);
  }
};

const root = new Tree(10);
const branch1 = new Tree(5);
const branch2 = new Tree(15);

root.left = branch1;
root.right = branch2;

branch1.left = new Tree(1);
branch1.right = new Tree(8);

branch2.left = new Tree(14);
branch2.right = new Tree(16);

console.log(root);
console.log(root.checkIfBST());