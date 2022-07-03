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
    a = 30
    console.log(a)
    return (function () {
        console.log(a);
        a = 20;
    })()
})(59);
