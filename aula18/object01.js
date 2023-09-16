let amigo = {
    nome: 'José',
    peso: 62.2,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
let s = 'JavaScript'
s.toUpperCase()
console.log(s.toUpperCase())
// amigo.engordar(3)
// console.log(`${amigo.nome} pesa ${amigo.peso}`)