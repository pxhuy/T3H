function Bai2(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++)
            {
                if(arr[j] != -1 && arr[i] > arr[j] && i < j){
                    var a = arr[i];
                    arr[i] = arr[j];
                    arr[j] = a;
                }
                else continue;
            }
    }
}
var arr = [ 5, -1, 2 , -1 , -1 , 10 , 8 , 7 , -1 , 1 ];
Bai2(arr);
console.log(arr);