////////////////////Variables//////////////////////////////////////
const $=document
const input=_id('input')
const colors=_qAll('.color')
const addBtn=_id('add-btn')
const removeBtn=_id('remove-btn')
const cardGroup=_id('card-group')
const errorMessage=_q('.error-message')
/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  $.getElementById(tag)
}
function _class(tag) {
    return $.getElementsByClassName(tag)
}
function _q(tag) {
    return $.querySelector(tag)
}
function _qAll(tag) {
    return $.querySelectorAll(tag)
}
////////////////////////////////////////////////////////////////////////
(function () {
    input.value=''
}())
/////////////////////////// fire on input //////////////////////////////
input.addEventListener('keydown',keydownHandler)
addBtn.addEventListener('click',addCardHandler)
function createCard() {
    let newCardDiv=$.createElement('div')
    let newCardP=$.createElement('P')
    newCardDiv.className='card w-25 text-center shadow-sm d-flex align-items-center'
    newCardDiv.style.backgroundColor=`${input.style.backgroundColor}`
    newCardP.className='m-0 h-100 w-100 p-3'
    newCardP.innerHTML=input.value
    newCardDiv.append(newCardP)
    cardGroup.append(newCardDiv)
    input.value=''
}
function addCardHandler() {
    if(!input.value.trim()){
        errorMessage.style.display='block'
    }else{
        errorMessage.style.display='none'
        createCard()
        input.style.backgroundColor='white'
    }
}
function keydownHandler(event) {
    if(event.key==='Enter'){
        if(!input.value.trim()){
            errorMessage.style.display='block'
        }else{
            errorMessage.style.display='none'
            createCard()
            input.style.backgroundColor='white'
        }
    }
}
////////////////////// fire on color ///////////////////////
colors.forEach(function (item) {
    item.addEventListener('click',function () {
        let colorCode=item.getAttribute('data-color')
        input.style.backgroundColor=`${colorCode}`
    })
})
//////////////////// fire on card container //////////////////////
cardGroup.addEventListener('click',function (e) {
    if(e.target.tagName==='P'){
        e.target.parentElement.remove()
    }
})

///////////////////////// fire on remove btn /////////////////////////
removeBtn.addEventListener('click',function () {
    input.value=''
    input.style.backgroundColor='white'
})
