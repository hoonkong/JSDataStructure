var LinkedList;
(function (LinkedList) 
 {
    "use strict"
    
    var node = function(data) 
    {
        var _this = this;
        var next;
        var data = data;
        
        var appendNodeToTail = function(data) 
        {
            var end = _this;
            while (end.next)
            {
                end = end.next;
            }
            end.next = new node(data);
        }
        
        this.appendNodeToTail = appendNodeToTail;
        this.data = data;
    }
    
    var print = function (node)
    {
        while (node)
        {
            var block = document.createElement("p");
            block.appendChild(document.createTextNode(node.data));
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
    
    LinkedList.node = node;
    LinkedList.print = print;
    LinkedList.reverse = reverse;
    
 })(LinkedList || (LinkedList = {}));

var head = new LinkedList.node(3);
head.appendNodeToTail(4);
head.appendNodeToTail(5);
head.appendNodeToTail(9);
LinkedList.print(head);

var newHead = LinkedList.reverse(head);
LinkedList.print(newHead);

Object.create(LinkedList.node.prototype);