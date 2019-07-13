// function Sum(a, b){
//     //return a + b;
//     console.log(a + b);
// }

// function helloWorld(callback){
//     var now = new Date();
//     console.log('Hê lô everyone, now is ', now.getMonth(),now.getDate(),now.getDay());
//     callback();
// }

// var result = Sum(4,5);
// console.log(result);

// var bye = goodBye;
// var hello = helloWorld;
// hello(bye);

// function totalNumber(a,b){
//     return function(){
//         var total = a + b;
//         console.log("total :" , total);
//     };
// }

// var totalNumberfunc = totalNumber(4,5);
// totalNumberfunc();

// var notify = "variable global";
// function shownotification(){
//     //var notify = "variable of outer function";
//     return function(){
//         //var notify = "variable of inter function";
//         console.log(notify);
//     }
// }
// var notifyfunc = shownotification();
// notifyfunc();

// function goodBye(){
//     console.log("goodbye mn");
// }

// function tangQua(){
//     console.log("Đã tặng: " + qua);
// }
// function moHopQua(tangQua){
//     var qua = "Hoa";
//     tangQua(qua);
// }
// moHopQua(tangQua);
// function tangQua(qua){
//     console.log("Đã tặng: " + qua);
// }
// function moHopQua(callback){
//     var qua = "Hoa";
//     callback(qua);
// }
//moHopQua(tangQua);
function callAnimal(){
    console.log("Animal 1");
    console.log("Animal 2");
}
console.log("cat1");
console.log("cat2");
callAnimal();
console.log("cat3");
console.log("cat4");

function callAnimal(){
    console.log("Animal 1");
}
console.log("cat1");
console.log("cat2");
callAnimal();
setTimeout(function(){
    console.log("Time 1");
    console.log("Time 2");
},3000);
console.log("cat3");
console.log("cat4");
console.log("cat5");