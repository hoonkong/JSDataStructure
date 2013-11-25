var LinkedList;
(function (LinkedList) 
 {
    "use strict"
    
    var Node = function (data) 
    {
        this.extends(DataNode, data);
        var _this = this;
        var next;
        //var data = data;
        
        var appendNodeToTail = function(data) 
        {
            var end = _this;
            while (end.next)
            {
                end = end.next;
            }
            end.next = new Node(data);
        }
        
        this.appendNodeToTail = appendNodeToTail;
        //this.getData = function () { return data; };
    }
    
    var DataNode = function (data)
    {
        var data;
        
        this.getData = function () { return data; };
    }
    
    //Node.extends(DataNode, data);
    
    var print = function (node)
    {
        while (node)
        {
            var block = document.createElement("p");
            block.appendChild(document.createTextNode(node.getData()));
            block.className = "block";
            
            var display = document.getElementById("display");
            display.appendChild(block);
            
            node = node.next;
        }
    }
    
    var reverse = function (node)
    {
        var tempNode;
        var previous = null;
        
        while (node)
        {
            tempNode = node.next;
            node.next = previous;
            previous = node;
            node = tempNode;
        } 
        
        return previous;
    }
    
    LinkedList.Node = Node;
    LinkedList.print = print;
    LinkedList.reverse = reverse;
    
 })(LinkedList || (LinkedList = {}));

var head = new LinkedList.Node(3);
head.appendNodeToTail(4);
head.appendNodeToTail(5);
head.appendNodeToTail(9);
LinkedList.print(head);

var newHead = LinkedList.reverse(head);
LinkedList.print(newHead);

//Object.create(LinkedList.node.prototype);