function booleanTestCase(){
    console.log(0 || 1); //1
    console.log(0 || 5); //5
    console.log(5 || 0); //5
    console.log(5 || 1); //5
    console.log(1 || 5); //1
    console.log(0 && 1); //0
    console.log(0 && 5); //0
    console.log(5 && 0); //0
    console.log(1 && 5); //5
    console.log(5 && 1); //1
    
}
// booleanTestCase();;

function isNaNTestCase(){
    console.log(isNaN('World'));
    console.log(isNaN('22'));
    console.log(isNaN(22));
    console.log(isNaN('_1'));
    console.log(isNaN('1'));
    console.log(isNaN(0));
    console.log(isNaN(true));
    console.log(isNaN(false));
}
// isNaNTestCase();

(function (a) {
    // a = 30
    // console.log(a)
    return (function () {
        console.log(a);
        a = 20;
    })()
})(59);

// 71
var obj = {
    name: "Nayemul",
    getName: function () {
        console.log(this.name);
    }
}
var getName = obj.getName;
var obj2 = { 
    name: "Omra Haque", 
    getName 
};
obj2.getName();

// 72 right code
var obj1 = {
    address: "Mohammadpur, Dhaka-Bangladesh",
    getAddress: function () {
        console.log(this.address);
    }
}

var getAddress = obj1.getAddress;
var obj2 = { address: "Nayemul saheb", getAddress };
obj2.getAddress();





