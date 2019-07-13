function gettextMultiply(){
    var the1st = parseInt(document.getElementById("txt1st").value);
    var the2nd = parseInt(document.getElementById("txt2nd").value);
    var n = the1st * the2nd;
    document.getElementById("result1").innerHTML = the1st + "*" + the2nd + "=" + n;
}
function gettextDevice(){
    var the1st = parseInt(document.getElementById("txt1st").value);
    var the2nd = parseInt(document.getElementById("txt2nd").value);
    var n = the1st / the2nd;
    document.getElementById("result1").innerHTML = the1st + "/" + the2nd + "=" + n;
}
function gettextCreatArray(){
    var the1st = parseInt(document.getElementById("txt1st").value);
    var the2nd = parseInt(document.getElementById("txt2nd").value);
    document.getElementById("result2").innerHTML = "(" + the1st + "," + the2nd + ") ==>" + "[" + Array2(the1st,the2nd) +"]";
}
function Array2(a, b){
        var c = [];
        for(var i = a; i <= b; i++ )
        {
            c.push(i);
        }
        return c;
}
function checkNumber(){
    var a = parseInt(prompt("Nhập số cần kiểm tra:"));
    var cont = 0;
    for(var i=2; i <= a; i++)
    {
        if (a % i == 0)
        cont++;
    }
    if(cont == 1) alert("số vừa nhập là số nguyên tố.");
    else alert("số vừa nhập không phải là số nguyên tố.")
}
function Bai4(){
    var b = parseInt(prompt("Bạn muốn tạo mảng có mấy phần tử: "));
    var array4 = [];
    for(var i = 0; i< b; i++)
    {
        array4.push(Math.floor(Math.random() * 101));
    }
    alert("các phần tử trong mảng được tạo là:" + array4)
    document.getElementById("bai41").innerHTML= "Mảng được tạo [" + array4 + "]";
    var c = parseInt(prompt("Bạn muốn xóa phần tử nào trong mảng vừa tạo?"));
    for(var i = 0; i< b; i++)
    {
        if(array4[i] == c) 
            {
                array4.splice(i,1);
                alert("đã xóa số " + c);
            }
    }
    document.getElementById("bai42").innerHTML= "Mảng sau khi xóa :[" + array4 + "]";
}
function Bai5(){
    var a = parseInt(prompt("Bạn muốn tạo mảng 1 có mấy phần tử: "));
    var array1 = [];
    for(var i = 0; i< a; i++)
    {
        array1.push(Math.floor(Math.random() * 15));
    }
    var b = parseInt(prompt("Bạn muốn tạo mảng 2 có mấy phần tử: "));
    var array2 = [];
    for(var i = 0; i< b; i++)
    {
        array2.push(Math.floor(Math.random() * 15));
    }
    alert("2 mảng được tạo là a1 = " + array1 + "và a2 = " + array2);
    var newArray = [array1[0]];
    for(var i = 1; i < a; i++)
        {
            var count = 0;
            for(var j = 0; j <= i; j++)
            {              
                if(array1[i] == newArray[j]) count++;
            }
            if(count == 0) newArray.push(array1[i]);
        }
    for(var i = 0; i < b; i++)
        {
            var count = 0;
            for(var j = 0; j < newArray.length; j++)
            {   
                if(array2[i] == newArray[j]) count++;             
            }
            if(count == 0) newArray.push(array2[i]);
        }

    document.getElementById("mang1").innerHTML = "<p> Mảng 1: " + array1 + "</p>";
    document.getElementById("mang2").innerHTML = "<p> Mảng 2: " + array2 + "</p>"
    document.getElementById("mangnew").innerHTML ="<p> Mảng mới: " + newArray + "</p>";   
}
