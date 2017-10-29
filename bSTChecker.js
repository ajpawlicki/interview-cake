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

    // return this.left.checkIfBST(lowerBound, this.val) || this.right.checkIfBST(this.val, upperBound);
  }
};

const root = new Tree(10);
const branch1 = new Tree(5);
const branch2 = new Tree(15);

root.left = branch1;
root.right = branch2;

branch1.left = new Tree(1);
branch1.right = new Tree(8);

branch2.left = new Tree(11);
branch2.right = new Tree(16);

console.log(root);
console.log(root.checkIfBST());

const checkBSTIterative = (node) => {
  const stack = [];
  
  stack.push({
    node: node,
    upper: Number.MAX_VALUE,
    lower: Number.MIN_VALUE
  });

  while (stack.length > 0) {
    let {node, upper, lower} = stack.pop();

     if (node.val >= upper || node.val <= lower) return false;

     if (node.left) {
       stack.push({
         node: node.left,
         upper: node.val,
         lower: lower
        });
     }

     if (node.right) {
      stack.push({
        node: node.right,
        upper: upper,
        lower: node.val
       });
     }
  }

  return true;
};

console.log(checkBSTIterative(root));

const inOrderTraversal = (tree, array = []) => {
  if (tree.left) inOrderTraversal(tree.left, array);
  array.push(tree.val);
  if (tree.right) inOrderTraversal(tree.right, array);

  for (let i = 0; i < array.length; i++) {
    if (array[i+1] <= array[i]) return false;
  }

  return true;
};

console.log(inOrderTraversal(root));