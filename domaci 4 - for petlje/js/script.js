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
    if (isNaN(odBroja) || isNaN(doBroja)) {
        console.log("Parametri moraju biti brojevi")
    }else if (odBroja >= doBroja) {
        console.log("Prvi parametar mora biti manji od drugog")
    } else {
        let ukupniZbir = odBroja;
    for(let i = (odBroja + 1); i < doBroja; i++) {
        ukupniZbir = ukupniZbir + i;
    }
    console.log(ukupniZbir);
    return ukupniZbir; // return ne vraca, negde gresim ?
    }
    
}
zbirOpsega(3,6);

/////////////////////////////////////////////

let niz1 = [1,2,3];
let niz2 = [4,5,6];

function myFunction(prviNiz, drugiNiz) {
    if (prviNiz.length != drugiNiz.length) {
        console.log("Nizovi moraju imati isti broj clanova")
    } else {
        let noviNiz = [];
        for (let i = 0; i < prviNiz.length; i++) {
            let clanNovogNiza = prviNiz[i] + drugiNiz[i];
            noviNiz.push(clanNovogNiza);
     }
     console.log(noviNiz)
    }
    
}

myFunction(niz1, niz2);
