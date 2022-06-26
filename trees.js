class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class BinarySearchTree {
    constructor (){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
        }
        // next we check if it is to the right or to the left

        else{
            let currentNode = this.root;
            // going 
            while (true) {
                if (value < currentNode.value){
                    // left 

                    if (!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                    // we wnat this to loop continuously until it has a current node 
                    // that is vacant
                } else {
                    // right 
                    if (!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value){
        if (!this.root){
            return false;
        }
        let currentNode = this.root;
        while (currentNode){
            if (value < currentNode.value){
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                currentNode = currentNode.right;
            } else if (currentNode.value === value){
                return currentNode;
            }
        }
        return false;
    }

    remove(value){
        let currentNode = this.root;
        let parentNode = null;
        if(this.root === null){
            return null;
        }

        while (currentNode){
            if (value < currentNode.value){
                // left
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value){
                // option1: No right child 
                if (currentNode.right === null){
                    if (parentNode === null){
                        this.root = currentNode.left;
                    } else {
                        // if parent > current value, make 
                        // curret left child a child of parent
                        if (currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        } else if(currentNode.value > parentNode.value){
                            parentNode.right = currentNode.left;
                        }
                    }
                    // Option 2: Right child which dosen't have a left child
                } else if (currentNode.right.left === null){
                    if (parentNode === null){
                        this.root = currentNode.left;
                    } else {
                        currentNode.right.left = currentNode.left;

                        // if parent > current, make right child of the 
                        // left the parent 
                        if (currentNode.value < parentNode.value){
                            parentNode.left = currentNode.right;
                            // if parent < current, make right child a right
                            // child of the parent
                        } else if (currentNode.value > parentNode.value){
                            parentNode.right = currentNode.right;
                        }
                    } // option 3: Right child that has a left  child 
                } else {
                    // find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null){
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    // parent's left subtree is now leftmost's
                    // right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null){
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value){
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value){
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
}

const tree = new BinarySearchTree();
console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.insert(15));
console.log(tree.insert(1));
console.log(tree.lookup(99));
console.log(tree.remove(170));
console.log(tree.insert(170));