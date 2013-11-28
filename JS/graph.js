var Graph;
(function (Graph) {
    "use strict";
     
    var Node = function (data) {
        this.inherits(Common.DataNode, data);
        var children;
         
        var addChind = function (node) {
            if (!children) {
                children = [];
            };
            
            children.push(node);
        };
         
        this.addChild = addChind;
        this.getChildren = function() { return children; };
    };
    
    var deapthFirstPrint = function(node) {
        var i;
        if (node) {
           
            console.log("[" + node.getData() + "]");
            var children = node.getChildren();
            
            if (children) {
                for(i = 0; i < children.length; i++) {
                    //console.log("[" + node.getData() + "]");
                    deapthFirstPrint(children[i]);
                };
            };
        };
    };
    
    var breadthFirstPrint = function(root) {
        var queue = [];
        var i, node, children;
        queue.push(root);
        console.log("[" + root.getData() + "]");
       
        while (queue.length > 0) {
            node = queue.shift();
            children = node.getChildren();
            if (children) {
                for(i = 0; i < children.length; i++) {
                    console.log("[" + children[i].getData() + "]");
                    queue.push(children[i]);
                }
            }
        }
    };
    
    var depthFirstDomNodeWalker = function (root) {
        //var root = document.getElementById("root");
        var divs, i;
        if (root) {
            root.className = "visitBg";
            console.log(root.querySelector("p").innerHTML);
            divs = root.querySelectorAll("#" + root.id + ">div");
            
            var helper = function (i) {
                return function (e) {
                    root.className = "";
                    console.log(i);
                    depthFirstDomNodeWalker(divs[i]);
                }
            };
            
            for (i = 0; i < divs.length; i++) {                
                setTimeout(helper(i), 1000);
            }
        }
    }
    
    var createGraphFromDom = function () {
        var root = document.getElementById("root");
        var divs = root.querySelectorAll("#root>div");
        console.log(divs.length);
    }
    
    Graph.Node = Node;
    Graph.deapthFirstPrint = deapthFirstPrint;
    Graph.breadthFirstPrint = breadthFirstPrint;
    Graph.depthFirstDomNodeWalker = depthFirstDomNodeWalker;
})(Graph || (Graph = {}));

var n1, n2, n3, n4;
var head = new Graph.Node("head");
head.addChild((n1 = new Graph.Node("head-1")));
head.addChild((n2 = new Graph.Node("head-2")));
head.addChild((n3 = new Graph.Node("head-3")));
head.addChild((n4 = new Graph.Node("head-4")));

n1.addChild(new Graph.Node("head-1-1"));
n1.addChild(new Graph.Node("head-1-2"));
n1.addChild(new Graph.Node("head-1-3"));
n1.addChild(new Graph.Node("head-1-4"));
n1.addChild(new Graph.Node("head-1-5"));
n1.addChild(new Graph.Node("head-1-6"));

n2.addChild(new Graph.Node("head-2-1"));
n2.addChild(new Graph.Node("head-2-2"));
n2.addChild(new Graph.Node("head-2-3"));

var n33;
n3.addChild(new Graph.Node("head-3-1"));
n3.addChild(new Graph.Node("head-3-2"));
n3.addChild((n33 = new Graph.Node("head-3-3")));
n3.addChild(new Graph.Node("head-3-4"));

n33.addChild(new Graph.Node("head-3-3-1"));
n33.addChild(new Graph.Node("head-3-3-2"));

n4.addChild(new Graph.Node("head-4-1"));
n4.addChild(new Graph.Node("head-4-2"));
n4.addChild(new Graph.Node("head-4-3"));
n4.addChild(new Graph.Node("head-4-4"));

Graph.breadthFirstPrint(head);

Graph.depthFirstDomNodeWalker(document.getElementById("root"));