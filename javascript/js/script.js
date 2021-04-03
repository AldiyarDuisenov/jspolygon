
let line = document.getElementsByClassName('slider_block')[0]
var times = 0,
    nextBtn = document.querySelector('.control_next'),
    prevBtn = document.querySelector('.control_prev'),
    turn = 0,
    itemNum = document.querySelectorAll('.slider_block_item'),
    num = itemNum.length,
    blockWidth = itemNum[0].offsetWidth,
    points = document.querySelectorAll('ul.points li');


nextBtn.onclick = function (){
    points.forEach(item => item.classList.remove('active'))
    times++
    turn += blockWidth
    if(times >= num){turn = 0; times = 0 }
    if(turn > blockWidth * (num - 1)){turn = 0}
    line.style.marginLeft = `${-turn}px`;
    points[turn/blockWidth].classList.add('active')

}
prevBtn.onclick = function (){

    points.forEach(item => item.classList.remove('active'))
    times--
    turn -= blockWidth
    if(times <= -num){turn = 0; times = 0}
    if(turn < 0){turn = blockWidth * (num - 1) }
    line.style.marginLeft = `${-turn}px`
    points[turn/blockWidth].classList.add('active')
}


points.forEach(item => item.addEventListener('click', function (){
        do {
            nextBtn.onclick()
        }while (item.value != turn/blockWidth )
}))
var element = document.querySelector('#checkbox')
    setInterval(function () {
        if(element.checked){
            nextBtn.onclick()
        }
        }, 3000)

var firstPrice = 0
var secondPrice = 0
var thirdPrice = 0
var fourthPrice = 0
var priceBtns = document.querySelectorAll('.pricebtn')

priceBtns.forEach(item => item.addEventListener('click', function () {
    firstPrice = parseInt(this.textContent)
    colorize(item)
    showPrice ()
}))
function colorize(item){
    priceBtns.forEach(item => item.classList.remove('green'))
    item.classList.add('green')
}

var barData = document.getElementById('formControlRange')
var barPrice = document.querySelector('.rangenum')

barData.addEventListener('mousemove', function () {
    secondPrice = parseInt(barData.value) * 10
    barPrice.innerHTML = secondPrice
    showPrice ()
})
barData.addEventListener('touchmove', function () {
    secondPrice = parseInt(barData.value) * 10
    barPrice.innerHTML = secondPrice
    showPrice ()
})
var select = document.getElementById('inlineFormCustomSelectPref')
select.addEventListener('change', function () {
    thirdPrice = parseInt(select.value)
    showPrice ()
});

var box = document.querySelectorAll('.form-check-input')
box.forEach(item => item.addEventListener('click', function (){
    if(item.checked){
        fourthPrice += parseInt(item.value)
    }
    else {
            fourthPrice -= parseInt(item.value)
        }
    showPrice ()
    }

))
var prices = [firstPrice, secondPrice, thirdPrice, fourthPrice]
var showbtn  = document.querySelector('.show')
var finalPrice = document.querySelector('.finalPrice')

function showPrice (){
    finalPrice.innerHTML = firstPrice + secondPrice + thirdPrice + fourthPrice + '$'
}
var inputBox = document.querySelector('.inputText')
var createBtn = document.querySelector('.createBtn')
var messageBox = document.querySelector('.message')
createBtn.onclick = function () {
    if(inputBox.value) {
        adderwrap.innerHTML += `<div class="added"> ${inputBox.value} </div>`
        inputBox.value = ''
    }
    else {
        messageBox.style.display = 'block'
    }
}
var messageBtn = document.querySelector('.messagebtn')
messageBtn.addEventListener('click', function (){
    messageBox.style.display = 'none'
})
var adderwrap = document.querySelector('.adderwrap')


