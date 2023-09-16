let num = 2
let numbers = [2]

function verificar(n) {
    if (numbers.indexOf(n) === -1) {
        return false
    }else{
        return true
    }
}

if (verificar(num)) {
    console.log('Número já está adicionado na lista')
} else {
    if ( num < 1 || num > 100) {
        console.log('Valor inválido!')
    }else {
        console.log('deu certo')
    }
}




