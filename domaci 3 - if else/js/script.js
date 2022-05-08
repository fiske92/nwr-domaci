function najveciBroj(a,b,c) {
    if (a > b && a > c) {
        console.log("Najveci broj je", a);
    }else if (b > a && b > c) {
        console.log("Najveci broj je", b);
    }else {
        console.log("Najveci broj je", c);
    }
}

najveciBroj(100, 5, 3344);

/////

function opsegBrojeva(broj,start,end) {
    if (broj > start && broj < end) {
        console.log("Broj se nalazi u zadatom opsegu");
    } else {
        console.log("Broj se ne nalazi u zadatom opsegu");
    }
}

opsegBrojeva(15, 10, 30);

function even(num) {
    if(isNaN(num)) {
        console.log("Uneta vrednost nije broj");
    }else if (num % 2 == 0) {
        console.log("Uneta vrednost je paran broj");
    }else {
        console.log("Uneta vrednost je neparan broj");
    }
}

even(5);