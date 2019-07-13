
// alert("hiển thị 1 đoạn thông báo");
// document.write("<h1>Hello JS</h1>"); // hiển thị ra màn hình một đoạn mã html

// document.getElementById("txtContent").innerHTML = "Một đoạn văn được thêm";

// console.log("debug kiểm tra lỗi của script");

// var age = parseInt(prompt("nhập số tuổi của bạn ?"));//hộp thoại cho phép chúng ta nhập dữ liệu vào js

// document.getElementById("txtContent").innerHTML= "Tuổi của bạn là: " + age;  //hiển thi dữ liệu vừa nhập ra màn hình

// var isMarried= confirm("Bạn đã lấy vợ chưa ?");
// if(isMarried == true){
//     document.getElementById("txtHoTen").innerHTML = "Đồ ngốc";
// }
// else{
//     document.getElementById("txtHoTen").innerHTML = "Đừng có lấy vợ nha !!!";
// }

// var theFirststr = prompt("Nhập số thứ nhất :");
// var theSecondstr = prompt("Nhập số thứ hai :");

// if(Number(theFirststr) && Number(theSecondstr))
// {
//     var theFirst = parseInt(theFirststr);
//     var theSecond = parseInt(theSecondstr);
//     var result = theFirst + theSecond;
//     alert("tổng của 2 số là: " + result);
// }
// else{
//     alert("bạn nhập sai định dạng");
// }
var n = prompt("nhập số n: ");
var TongChan = 0;
var TongLe = 0;

for(var i=0; i<= n; i++){
    if( i % 2 == 0){
        TongChan += i;
    }
    else
    {
        TongLe += i;
    }
}
document.write("Tổng số chẵn < " + n + " là: " +TongChan + "<br>");
document.write("Tổng số lẻ < " + n + " là: " +TongLe);


