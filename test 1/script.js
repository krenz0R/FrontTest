"use strict"

// let persone = {
//     name: "Kirill",
//     age: 25,
//     isMaried: false
// }

// console.log(persone.name)


// let arr = ['plum.png', 'orange.jpg', 'apple.bmp']

// console.log(arr[3])



// for (let i = 1; i < 8; i++) {
//     console.log(i)
// }


// function showFirtsText(a, b) {
//     return (a + b)
// }

// console.log(showFirtsText(5, 6))

// let calc = (a, b) => a + b
// console.log(calc(3, 5))



// let timerId = setTimeout(sayHello, 3000)

// clearTimeout(timerId)

// let timerId = setInterval(sayHello, 3000)

// clearTimeout(timerId)

// function sayHello() {
//     console.log('Hello world')
// }

// let timerId = setTimeout(function log() {
//     console.log('Hello')
//     setTimeout(log, 3000)
// })


let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box')


function myAnimation() {
    let pos = 0
    let id = setInterval(frame, 10)
    function frame() {
        if (pos == 300) {
            clearInterval(id)
        } else {
            pos++
            elem.style.top = pos + 'px'
            elem.style.left = pos + 'px'
        }
    }
}

btn.addEventListener('click', myAnimation)

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('buttons')

btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('first')) {
        console.log('Hello')
    }
})