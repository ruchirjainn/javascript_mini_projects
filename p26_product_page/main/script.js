let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

for (let i = 0; i < 3; i++) {
    btn[i].onclick = function () {
        productImg.src = "../images/432 product-img/image" + (i+1) + ".png";
        for (bt of btn) {
            bt.classList.remove("active");
        }
        this.classList.add("active");
    }
}