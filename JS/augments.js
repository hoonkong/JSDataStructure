Object.prototype.extends = function (Func)
{
    if (Func && typeof Func === "function")
    {
        var F = new Func(arguments[1]);
        for (var k in F)
        {
            if (F.hasOwnProperty(k))
            {
                this[k] = F[k];
            }
        }
        this.prototype = F.prototype;
    }
}