const box = document.querySelector(".snikers__checkbox")
const img = document.querySelector(".snikers__ok")
box.addEventListener("click", function () {
    if (img.style.display == "none" || img.style.display == "") {
        img.style.display = "block"
    }
    else {
        img.style.display = "none"
    }
})
const box1 = document.querySelector(".snikers__checkbox1")
const img1 = document.querySelector(".snikers__ok1")
box1.addEventListener("click", function () {
    if (img1.style.display == "none" || img1.style.display == "") {
        img1.style.display = "block"
    }
    else {
        img1.style.display = "none"
    }
})