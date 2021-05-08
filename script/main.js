if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

// LITTLE SWITCHES

let switches = document.querySelectorAll('.switch');

function switchButton(event) {
    let element = event.target
    element.classList.toggle('switch--inactive');
    if ($(element).parent().siblings('.button').attr("disabled")) {
        $(element).parent().siblings('.button').attr("disabled", false)
    } else {
        $(element).parent().siblings('.button').attr("disabled", true)
    }
}

function addEventListener(element) {
    // console.log(element)
    element.addEventListener('click', switchButton)
} 

switches.forEach(addEventListener);

// HUGE SWITCH

const hugeSwitch = document.querySelector('.huge-switch');
const caution = document.querySelector('.sidebar > .section__text--smallest');
const profits = document.querySelectorAll('.profit-switch > .profit__image');

function toggleProfitClass(profit) {
    profit.classList.toggle('profit__image--inactive')
}

function switchConditions() {
    hugeSwitch.classList.toggle('huge-switch--inactive');
    caution.classList.toggle('section__text--inactive');
    profits.forEach(toggleProfitClass)
}

hugeSwitch.addEventListener('click', switchConditions)

// FIRST CAROUSEL

const c1ArrowLeft = document.getElementById('c1-al');
const c1ArrowRight = document.getElementById('c1-ar');
const c1Elements = document.querySelectorAll('.carousel__section')

function setOrderRight(element) {
        if (element.style.order == 1) {
            element.style.order = 3;
        }
        else if (element.style.order == 2) {
            element.style.order = 1;
            element.classList.remove('carousel__section--active')
        } 
        else if (element.style.order == 3) {
            element.style.order = 2;
            element.classList.add('carousel__section--active')
        }
}

function goRight() {
    c1Elements.forEach(setOrderRight)
}

// function goRight() {
//     [...c1Elements].map(element => {
//         if (element.style.order == 1) {
//             element.style.order = 3;
//         }
//         else if (element.style.order == 2) {
//             element.style.order = 1;
//             element.classList.remove('carousel__section--active')
//         } 
//         else if (element.style.order == 3) {
//             element.style.order = 2;
//             element.classList.add('carousel__section--active')
//         }
//     })
// }

function setOrderLeft(element) {
        if (element.style.order == 1) {
            element.style.order = 2;
            element.classList.add('carousel__section--active')
        }
        else if (element.style.order == 2) {
            element.style.order = 3;
            element.classList.remove('carousel__section--active')
        } 
        else if (element.style.order == 3) element.style.order = 1
}

function goLeft() {
    c1Elements.forEach(setOrderLeft)
}


c1ArrowRight.addEventListener('click', goRight)
c1ArrowLeft.addEventListener('click', goLeft)

// SECOND CAROUSEL

const c2ArrowLeft = document.getElementById('c2-al');
const c2ArrowRight = document.getElementById('c2-ar');
const c2Elements = document.querySelectorAll('.carousel__body > .carousel__element')

function setOrderRight2(element) {
    if (element.style.order == 1) {
        element.style.order = 3;
    }
    else if (element.style.order == 2) {
        element.style.order = 1;
        element.classList.remove('carousel__element--active')
    } 
    else if (element.style.order == 3) {
        element.style.order = 2;
        element.classList.add('carousel__element--active')
    }
}

function goRight2() {
    c2Elements.forEach(setOrderRight2)
}

function setOrderLeft2(element) {
    if (element.style.order == 1) {
        element.style.order = 2;
        element.classList.add('carousel__element--active')
    }
    else if (element.style.order == 2) {
        element.style.order = 3;
        element.classList.remove('carousel__element--active')
    } 
    else if (element.style.order == 3) element.style.order = 1
}

function goLeft2() {
    c2Elements.forEach(setOrderLeft2)
}


c2ArrowRight.addEventListener('click', goRight2)
c2ArrowLeft.addEventListener('click', goLeft2)