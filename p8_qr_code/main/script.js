const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let imgBox = document.getElementById("img-box");
let qrImg = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQrCode() {
    if (qrText.value.length > 0) {
        qrImg.src = apiUrl + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        qrText.classList.add("error");
        setTimeout(function () {
            qrText.classList.remove("error");
        }, 1000);
    }
}

