const bulb1 = document.getElementById("bulb1")
const bulb2 = document.getElementById("bulb2")
const para1 = document.getElementById("para1")
const para2 = document.getElementById("para2")
const changeImage = () => {
    bulb1.style.display = "none"
    bulb2.style.display = "block"
    document.body.style.boxShadow = '0px 0px 75px yellow inset'
    para1.style.display = "none"
    para2.style.display="block"
}
bulb1.addEventListener("click", changeImage)
const changeImage2 = () => {
    bulb1.style.display = "block"
    bulb2.style.display = "none"
    document.body.style.boxShadow ='none'
    para2.style.display = "none"
    para1.style.display="block"
}
bulb2.addEventListener("click",changeImage2)