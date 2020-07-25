//Objective is to see whether two BST's have values that add up to a target value

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(11)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 36)
tree.addLeftNode(tree.root.right, 15)

let tree2 = new Tree()
tree2.createRoot(11)
tree2.addLeftNode(tree.root, 8)
tree2.addRightNode(tree.root, 20)
tree2.addRightNode(tree.root.right, 36)
tree2.addLeftNode(tree.root.right, 15)

let target = 28


//O(n + m) solution where n and m are the sizes of the two trees
//We traverse one tree, get the complements, and check if any of the complements
//exist in the other tree

let arr = []
let arr2 = []

function dfs(node, arr) {
    if (!node) {
        return
    }
    
    arr.push(node.val)
    dfs(node.left, arr)
    dfs(node.right, arr)
}
dfs(tree.root, arr)

let complements = []
for (let num of arr) {
    complements.push(target - num)
}

let set = new Set(complements)
let result = false
dfs(tree2.root, arr2)

for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
        result = true
    }
}

return result