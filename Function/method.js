var obj = {
    a : 1,
    b : function bb() {
        console.log(this);
    },
    c : function() {
        console.log(this.a);
    }
}

obj.b();
obj.c();


console.dir(obj.b);
console.dir(obj.c);