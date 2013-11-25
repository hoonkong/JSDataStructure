var Common;
(function (Common) {
    "use strict";
    
    var DataNode = function (data) {
        this.getData = function () { return data; };
    };
    
    Common.DataNode = DataNode;
})(Common || (Common = {}));