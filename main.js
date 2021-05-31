const $ = id => document.getElementById(id)
let redirect = 'http://127.0.0.1:5500/other.html'
let timer
let sec = 5


const showBox = (second) => setInterval(() => {
    $('myModal').style.display = 'block'
    timer = wait(sec)
}, second * 1000);

const wait = (second) => setInterval(() => {
    document.location.href = redirect
}, second * 1000);

window.onload = function() {
    showBox(20)
}

$('yes').addEventListener('click', e => {
    e.preventDefault()
    clearInterval(timer)
    $('myModal').style.display = 'none'
})

$('no').addEventListener('click', e => {
    e.preventDefault()
    document.location.href = redirect
})