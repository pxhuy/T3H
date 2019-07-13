var array = [1,2,45,7];

console.log(array.join()); // print all element of array
// insert element in array
array [4] = 10; //insert in index 4 
array.push(100); // thêm 6 vào cuối mảng
array.unshift(-1);//thêm phần tử vào vị trí đầu tiên
array.splice(2,0,33,44);// thêm, xóa phần tử ở vị trí bất kỳ

array.pop(); //tự động xóa phần tử cuối cùng
array.shift();//auto xóa phần tử đầu tiên của mảng

console.log(array);
//Bài tập: cho array=[6,1,2,5,10,5,6,9]
//tìm ra phần tử lớn nhất,2,bé nhất
//tìm ra phần tử lớn nhất
var array=[6,1,2,5,10,5,6,9];
var a = array[0];
for(var i = 0; i < array.length; i++)
{
   if(array[i] > a) a=array[i];
}
console.log(a);

array.sort(function(a,b){return(a-b)});
console.log(array);

var str = "Hello any frends";
console.log(str);
console.log(str.length);
console.log(str[1]);
console.log(str.indexOf('e'));
console.log(str.lastIndexOf('e'));
var strSlice = str.slice(0,4)
console.log(strSlice);
//Bài tập
var str = "  NGuYen   vAn   a  ";
console.log(str);
str = str.trim();
str = str.toLowerCase();
str = str.replace("   "," ");
str = str.replace("   "," ");
console.log(str);
var array =str.split(" ");
console.log(array)


