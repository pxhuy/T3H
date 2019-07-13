function hidehtml(){
    if(document.getElementById("texthtml").style.display == 'block'){
        document.getElementById("texthtml").style.display = 'none';
        document.getElementsByClassName("header")[0].style.background = 'rgb(190, 190, 190)';
        
    }
    else {
        document.getElementById("texthtml").style.display = 'block';
        document.getElementsByClassName("header")[0].style.background = 'rgb(223, 219, 219)';
    }
}
function hidecss(){
    if(document.getElementById("textcss").style.display == 'block'){
        document.getElementById("textcss").style.display = 'none';
        document.getElementsByClassName("header")[1].style.background = 'rgb(190, 190, 190)';
        
    }
    else {
        document.getElementById("textcss").style.display = 'block';
        document.getElementsByClassName("header")[1].style.background = 'rgb(223, 219, 219)';
    }
}
function hidejs(){
    if(document.getElementById("textjs").style.display == 'block'){
        document.getElementById("textjs").style.display = 'none';
        document.getElementsByClassName("header")[2].style.background = 'rgb(190, 190, 190)';
        
    }
    else {
        document.getElementById("textjs").style.display = 'block';
        document.getElementsByClassName("header")[2].style.background = 'rgb(223, 219, 219)';
    }
}