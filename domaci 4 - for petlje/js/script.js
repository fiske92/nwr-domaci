let niz = [1, 2 ,3];

let prazanNiz;

function mapirajNiz(nekiNiz) {
    if (Array.isArray(nekiNiz) == false) {
        nekiNiz = [];
        console.log(nekiNiz);
        return nekiNiz;  // iz nekog razloga ne vraca niz, pa sam morao preko console.log
    }

    let noviNiz = [];
    for(let i = 0; i < nekiNiz.length; i++){
        let noviClan = nekiNiz[i] + "IZMENJENO";
        noviNiz.push(noviClan);
    }

    console.log(noviNiz);

}
console.log(niz);

mapirajNiz(niz);

mapirajNiz(prazanNiz);


///////////////////////////////////////////////

function zbirOpsega(odBroja, doBroja) {
    let ukupniZbir = odBroja;
    for(let i = (odBroja + 1); i < doBroja; i++) {
        ukupniZbir = ukupniZbir + i;
    }
    console.log(ukupniZbir);
    return ukupniZbir; // return ne vraca, negde gresim ?
}
zbirOpsega(4,7);

/////////////////////////////////////////////

let niz1 = [1,2,3];
let niz2 = [4,5,6];

function myFunction(prviNiz, drugiNiz) {
    let noviNiz = [];
     for (let i = 0; i < 3; i++) {
         let clanNovogNiza = prviNiz[i] + drugiNiz[i];
         noviNiz.push(clanNovogNiza);
     }
     console.log(noviNiz)
}

myFunction(niz1, niz2);
