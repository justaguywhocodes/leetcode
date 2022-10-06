var addOneRow = function(root, val, depth) {
    if(depth === 1) {
        let newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    
    let queue = [root];
    let currDepth = 1;
    
    while(queue.length) {
        let size = queue.length;
        
        for(let i = 0; i < size; i++) {
            let curr = queue.shift();
            
            if(currDepth === depth - 1) {
               
                let left = curr.left;
                let right = curr.right;
                
                curr.left = new TreeNode(val);
                curr.right = new TreeNode(val);
                
                curr.left.left = left;
                curr.right.right = right;
            } else {
                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
            }
        }
        
        currDepth++;
    }
    
    return root;
};