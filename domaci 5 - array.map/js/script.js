let polaznici = [
    {
        name: 'Marko Markovic',
        score: 90
    },
    {
        name: 'Petar Petrovic',
        score: 30
    },
    {
        name: 'Stefan Stefanovic',
        score: 50
    }
]

//? ZADATAK 1 (sa predavanja)

/* let polazniciIzbacen = polaznici.map(polaznik => {
    if (polaznik.score < 50) {
        polaznik.name = 'IZBACEN'
        return polaznik
    } else {
        return polaznik
    }
}) 

polazniciIzbacen.forEach(polaznik => {
    document.write(`<li>${polaznik.name} ${polaznik.score}</li>`)
}) */

//? ZADATAK 2 


/* let polazniciUppercase = polaznici.map(polaznik => {
    let polaznikUppercase = polaznik.name.toUpperCase();
    return polaznikUppercase
})

polazniciUppercase.forEach(polaznik => {
    document.write(`<li>${polaznik}</li>`)
})  */

//? ZADATAK 3 

 let polazniciString = polaznici.map(polaznik => {
    let polaznikString = polaznik.name;
    return polaznikString
})

console.log(polazniciString); 

//? ZADATAK 4

/* let nizBrojeva = [1,2,3,4]

let nizPomnozenihBrojeva = nizBrojeva.map(broj => {
    let noviBroj = broj * 2
    return noviBroj
})

console.log(nizBrojeva)
console.log(nizPomnozenihBrojeva) */

//? ZADATAK 5

/* let niz = [1,2,3,4]

let noviNiz = niz.map(brojString => {
    let string = brojString.toString();
    return string
})

console.log(niz)
console.log(noviNiz) */





