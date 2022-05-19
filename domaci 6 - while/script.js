let budzet = 1000
let trosak = 0

while (budzet > 0) {
    trosak = prompt(`Koliko zelite da potrosite ? (Stanje na racunu je ${budzet}) `)
    budzet -= trosak

    if (budzet == 0) {
        console.log("Potrosili ste sav novac!")
    } else if (budzet < 0) {
        console.log(`Usli ste u minus! Stanje na racunu je ${budzet}`)
    } else {
        console.log(`Stanje na racunu je ${budzet}`) // Da li je problem ako nemamo else ?
    }
}