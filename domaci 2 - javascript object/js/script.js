const student = {
    ime: "Petar",
    prezime: "Peric",
    godine: 30,
    godinaRodjenja() {
        let godiste = 2022 - this.godine;
        return godiste;
    }
}
console.log(student.godinaRodjenja());
console.log(student);

// resenje je mozda Object.assign, nisam siguran sta tacno uradi, ali vidim da je resen problem :)

function godinaUpisa(objekat, godina) {
    let noviObjekat = Object.assign({}, objekat);
    noviObjekat.godinaUpisaFaxa = godina;

    return noviObjekat;
}

let student2 = godinaUpisa(student, 2018);

console.log(student2);
