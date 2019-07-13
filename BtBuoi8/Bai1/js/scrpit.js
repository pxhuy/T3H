var array = [6,1,2,5,10,5,6,9];
var max = array[0];
for(var i = 0; i< array.length;i++){
    if(array[i] > max) 
        max = array[i];   
}
document.getElementById("max").innerHTML = max;
var second = 0;
for(var i = 0; i< array.length;i++){
    if(array[i] > second && array[i] < max) 
        second = array[i];   
}
document.getElementById("second").innerHTML = second;
var min = max;
for(var i = 0; i< array.length;i++){
    if(array[i] < min) 
        min = array[i];   
}
document.getElementById("min").innerHTML = min;
