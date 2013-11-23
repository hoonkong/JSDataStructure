var Graph;
(function(Graph)
{
    "use strict"
     
    var node = function (data)
    {
        var children;
        var data = data;
         
        var addChind = function (node)
        {
            if (!children)
            {
                children = [];
            }
            children.push(node);
        }
         
        this.addChild = addChind;
        this.data = data;
        this.children = children;
    }
    
    var print = function(node)
    {
        console.log("[" + node.data + "]");
        
        for(var i = 0; i < node.children.length; i++)
        {
            print(node.Children[i])
        }
    }
    
    Graph.node = node;
    Graph.print = print;
})(Graph || (Graph = {}));

var n1, n2, n3, n4;
var head = new Graph.node("head");
head.addChild((n1 = new Graph.node("head-1")));
head.addChild((n2 = new Graph.node("head-2")));
head.addChild((n3 = new Graph.node("head-3")));
head.addChild((n4 = new Graph.node("head-4")));

n1.addChild(new Graph.node("head-1-1"));
n1.addChild(new Graph.node("head-1-2"));
n1.addChild(new Graph.node("head-1-3"));
n1.addChild(new Graph.node("head-1-4"));

n2.addChild(new Graph.node("head-2-1"));
n2.addChild(new Graph.node("head-2-2"));
n2.addChild(new Graph.node("head-2-3"));
n2.addChild(new Graph.node("head-2-4"));

n3.addChild(new Graph.node("head-3-1"));
n3.addChild(new Graph.node("head-3-2"));
n3.addChild(new Graph.node("head-3-3"));
n3.addChild(new Graph.node("head-3-4"));

n4.addChild(new Graph.node("head-4-1"));
n4.addChild(new Graph.node("head-4-2"));
n4.addChild(new Graph.node("head-4-3"));
n4.addChild(new Graph.node("head-4-4"));

Graph.print(head);