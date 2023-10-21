let resultw = document.getElementById('result')
let numm = document.getElementById('num1')
let numm2 = document.getElementById('num2')
let prib = document.getElementById('plus')
let vichisl = document.getElementById('minus')
let cnopca = document.getElementById('submit')
let ymnozhit = document.getElementById('ultiply')
let razdelit = document.getElementById('share')

let visn;

prib.onclick = function () {
    visn = '+'
}

vichisl.onclick = function () {
    visn = '-'
}

ymnozhit.onclick = function () {
    visn = '*'
}

razdelit.onclick = function () {
    visn = '/'
}

function ColEll(retr) {
    if (retr < 0) {
        resultw.style.color = 'red'
    } else {
        resultw.style.color = 'black'
    }
    resultw.textContent = retr
}


function ResetAll(pip1, pip2, vis) {
    let impym = Number(pip1.value)
    let impym2 = Number(pip2.value)
    if (vis == '+') {
        return impym + impym2
    } else if (vis == '-') {
        return impym - impym2
    } else if (vis == '*') {
        return impym * impym
    } else if (vis == '/') {
        return impym / impym2
    }
}

cnopca.onclick = function () {
    let resuult = ResetAll(numm, numm2, visn)
    ColEll(resuult)
}