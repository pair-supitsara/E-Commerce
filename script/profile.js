const profileMain = document.getElementById("profileMain")
const shippingMain = document.getElementById("shippingMain")
const paymentMain = document.getElementById("paymentMain")

const profileBt = document.getElementById("profile")
profileBt.addEventListener('click', function() {
    console.log("profileBt")
    profileMain.classList.remove('invisible')
    shippingMain.classList.add('invisible')
    paymentMain.classList.add('invisible')
})

const shippingBt = document.getElementById("shipping")
shippingBt.addEventListener('click', function() {
    console.log("shippingBt")
    profileMain.classList.add('invisible')
    shippingMain.classList.remove('invisible')
    paymentMain.classList.add('invisible')
})

const paymentBt = document.getElementById("payment")
paymentBt.addEventListener('click', function() {
    console.log("paymentBt")
    profileMain.classList.add('invisible')
    shippingMain.classList.add('invisible')
    paymentMain.classList.remove('invisible')
})