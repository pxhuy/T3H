//hàm sử lý khi click vào button
function left_to_right(value){
    if(value === 1){
        var left = document.getElementById("right");
        var right = document.getElementById("left");
    }
    else{
        var left = document.getElementById("left");
        var right = document.getElementById("right");
    }
    changeData(left,right);
}
//hàm chuyển option được chọn từ trái sang phải
function changeData(left,right){
    var options = left.children; // lấy tất cả các option trong select left
    // mảng chứa các phần tử được chọn
    var tmp = [];
    //tìm các phần tử được chọn cho vào mảng
    for (var i = 0 ; i < options.length; i++){
        if(options[i].selected) tmp.push(options[i]);
    }
    //đưa options đã chọn sang right
    for(var i = 0; i < tmp.length; i++){
        right.appendChild(tmp[i]); // do của phần tử là duy nhất nên khi chuyển qua right bên left sẽ mất
    }
}