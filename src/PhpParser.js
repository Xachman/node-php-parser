module.exports = function PhpParser(content) {
    this.content = content;
    this.classRegex = /\bclass\s+(.*)/g;
    this.classData = [];
    
    this.init = function () {
        this.getClasses();
        console.log(this.classData);
    }

    this.getClasses = function () {
        var rg = new RegExp(this.classRegex);

        while (rgArray = rg.exec(this.content)) {
            console.log(rgArray);
            var classname = rgArray[1].replace('{', '').trim();
            this.classData.push(classname);
            console.log(this.getBetweenClassBrackets(classname, this.content));
        }
    }
    
    this.getBetweenClassBrackets = function(classname, content) {
        var expression = '/'+classname+'\s{((.|\n)*)}\s/';
        var rg = new RegExp(expression, 'g');
        return rg.exec(content);
    }

    this.init();
}

