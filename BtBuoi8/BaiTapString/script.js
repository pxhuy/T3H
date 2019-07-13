function DaoKhongTV(){
    var rsStr = '';
    var str = document.getElementById("txtstr").value;
    for (var i = str.length ; i > 0; i--)
    {
        rsStr += str[i -1];
    }
    console.log(rsStr);
}
function Dem(){
    var str = document.getElementById("txtstr").value;
    str = str.toLowerCase();
    var arr = [];
    for(let i = 0; i < str.length; i++){
        let count = 0;
        for(let j = 0; j < arr.length; j++){
            if(str[i] == arr[j]) count++;
        }
        if (count == 0) arr.push(str[i]);
    }
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        for(let j = 0; j < str.length ; j++){
            if(arr[i] == str[j]) count++;
        }
        console.log(arr[i] + " Xuất hiện :" + count);
    }
    console.log(arr);
}