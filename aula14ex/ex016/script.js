function contar() {
    let ini = document.getElementById('num_ini')
    let fim = window.document.getElementById('num_fim')
    let pas = window.document.getElementById('num_pas')

    ini = Number(ini.value)
    fim = Number(fim.value)
    pas = Number(pas.value)

    if (ini == 0 && fim  == 0) {
        window.alert("ERRO - Dados errados")
    } else if (pas ==  0) {
        pas = 1
    }

    let res = window.document.getElementById('res')
    res.innerHTML = "Contando: "
   
    if (ini <= fim) {
        for (ini; ini <= fim; ini += pas) {
            res.innerHTML += `${ini} \u{1F449}`
        }
    }else if (ini >= fim) {
        for (fim; fim <= ini; ini -= pas) {
            res.innerHTML += `${ini} \u{1F449}`
        }
    }

    res.innerHTML += `\u{1F3C1}`
}