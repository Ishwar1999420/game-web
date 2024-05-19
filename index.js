
var createCounter = function(n) {
    var arr=["call","call","call"];
    var l=arr.length;
    for(let i=0;i<=l;i++){
        arr[i]=n;
        n=n+1;
    }
    console.log(arr);
    return function() {
        
    };
};

 
 const counter = createCounter(10)
 counter() // 10
 counter() // 11
 counter() // 12
