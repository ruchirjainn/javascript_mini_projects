var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var ogImg = document.getElementById("originalImg");
var line = document.getElementById("line");

ogImg.style.width = imgBox.offsetWidth + "px"

var leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function (event) {
    var boxWidth = (event.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}

