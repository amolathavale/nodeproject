class Node {
    left = null; right = null;
    constructor(k, v) {
        this.key = k
        this.val = v
    }
    toString() {
        return 'Node {key: ' + this.key + '}'
    }
}

let root = null

function addNode(parent, node) {
    if (parent == null) {
        if (root == null)
            root = node;
        else
            addNode(root, node);
    } else {
        if (node.key < parent.key) {
            if (parent.left == null)
                parent.left = node;
            else
                addNode(parent.left, node);
        } else {
            if (parent.right == null)
                parent.right = node;
            else
                addNode(parent.right, node);
        }
    }
}
function inOrderTraverseTree(node) {
    if (node != null) {
        inOrderTraverseTree(node.left);
        console.log(node);
        inOrderTraverseTree(node.right);
    }
}

addNode(null, new Node(35, "Hello World"));
addNode(null, new Node(20, "Hello World"));
addNode(null, new Node(30, "Hello World"));
addNode(null, new Node(40, "Hello World"));
addNode(null, new Node(50, "Hello World"));
addNode(null, new Node(10, "Hello World"));

inOrderTraverseTree(root)
