// 1 ngày có 24 giờ, 1 giờ có 60 phút, 1 phút có 60s, 1s có 1000 mili giây
const ONE_DAY = 24*60*60*1000; //khái báo 1 ngày tính bằng mili giây
//khai báo hàm có tên calender có tham số truyền vào là 1 Date
function calender(selectedDate){
    let calenderData = [] //khai báo 1 mang chứa thông tin lịch

    // lấy ra ngày đầu tiên của tháng
    const firstDayOfMonth = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1);
    //New Date(year,month,date): Tạo ra 1 ngày có ngày tháng năm truyền vào
    //selectedDate.getFullYear: Lấy ra năm của ngày nhập vào
    //selectedDate.getMonth: Lấy ra tháng của ngày nhập vào
    //1 đại diện cho ngày đầu tiên của tháng, 0 là ngày cuối cùng của tháng Sau.
    //ngày chạy từ 1 ==> 31.
    //tháng chạy từ 0-> 12.
    
    const firstDayOfWeek = new Date(firstDayOfMonth.getTime() - (firstDayOfMonth.getDay() * ONE_DAY));
    console.log(firstDayOfMonth.getTime());
    //gettime(): trả về mili giây của ngày đó.
    //getDate(): trả về ngày ví dụ 27.
    //getDay() : trả về thứ của ngày từ 0 -> 6 (chủ nhật -> thứ 2).
    //ví dụ: ngày đầu tiên của tháng là thứ 4 tìm ngày chủ nhật.
    console.log("firsDayOfMonth", firstDayOfMonth, firstDayOfWeek);
    let dateLong = firstDayOfWeek.getTime();
        for (let i = 0; i< 42; i++){
            let d = new Date(dateLong);
            dateLong += ONE_DAY;
            calenderData.push(d);
        }
        console.log(calenderData);
    
}
calender(new Date(2019,4,1));