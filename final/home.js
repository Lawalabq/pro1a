/*var list = document.querySelector('#list')
var btn = document.querySelectorAll('button')
list.addEventListener('onclick', () => {
    btn.classList.toggle = 'active'
})*/
const dropdowns = document.querySelectorAll('.dropdown')


const select = document.querySelector('.select')
const caret = document.querySelector('.caret')
const menu = document.querySelector('.menu')
const options = document.querySelectorAll('.menu li')
const selected = document.querySelector('.selected')
select.addEventListener('click', () => {
    select.classList.toggle('select-clicked')
    menu.classList.toggle('menu-open')
})