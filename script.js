const imgbox = document.querySelector(".imgbox")
const btn = document.querySelector(".btn")
const qrtext = document.querySelector("#qrtext")
const qrimage = document.querySelector("#qrimage")
let data = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="


function generateQR() {
    if (qrtext.value.length > 0) {
        qrimage.src = data + qrtext.value;
        imgbox.classList.add("show-img")
    }
    else {
        qrtext.classList.add("error")
        qrtext.value = "Please enter some Text or URL !!"
        setTimeout(() => {
            qrtext.value="";
            qrtext.classList.remove("error")
        }, 2000);
    }
}
btn.addEventListener("click", generateQR)
