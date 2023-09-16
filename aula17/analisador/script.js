let numbers = []
let soma = 0
function verificar(n) {
    if (numbers.indexOf(n) === -1) {
        return false
    }else{
        return true
    }
}

function adicionar() {
    let num = window.document.getElementById('txtn')
    let n = window.document.getElementById('txtn')
    num = Number(num.value)

    let tab = window.document.getElementById('seltab')
    tab.innerHTML += ""
    let item = window.document.createElement('option')
    
    if (verificar(num)) {
        window.alert(`Número ${num} já está adicionado na lista`)
        
    } else {
        if ( num < 1 || num > 100) {
            window.alert('Valor inválido!')
        }else {
            numbers.push(num)
            soma += num
            item.text = `Valor ${num} adcionado`
            item.value = 'tab$(c)'
            tab.appendChild(item)
        }
        n.value = ''
        n.focus()
    }
}

let res = window.document.getElementById('res')
function finalizar() {
    if (numbers.length === 0) {
        window.alert(`Não há valores adicionados`)
    } else {
        res.innerHTML = `<p>Ao todo, há ${numbers.length} número(s) cadastrado(s)</p>`
        res.innerHTML += `<p>O maior valor informado foi ${Math.max(...numbers)}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${Math.min(...numbers)}</p>`
        res.innerHTML += `<p>Somando todos os valores, temo ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${soma/numbers.length}</p>`
    }
}