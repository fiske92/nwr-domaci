class Phone {
    constructor(model, garancija, godinaProizvodnje, procenatBaterije) {
        this.model = model
        this.garancija = garancija
        this.godinaProizvodnje = godinaProizvodnje
        this.procenatBaterije = procenatBaterije
        this.isTurnOn = false
    }

    turnOn() {
        if(this.procenatBaterije === 0) {
            console.log('Baterija telefona je prazna')
        }else if(this.isTurnOn === false) {
            console.log('Telefon je ukljucen')
            this.isTurnOn = true
        }else {
            console.log('Telefon je vec ukljucen')
        }
    }
    turnOff() {
        if (this.procenatBaterije === 0 || this.isTurnOn === false) {
            console.log('Telefon je vec iskljucen')
        } else {
            console.log('Telefon je iskljucen')
            this.isTurnOn = false
        }
    }
    istekGarancije(){
        let currentYear = new Date().getFullYear()
        if ((currentYear - this.godinaProizvodnje) > this.garancija) {
            console.log('Garancija ovog telefona je istekla')
        } else {
            console.log('Garancija ovog telefon je jos:', this.garancija - (currentYear - this.godinaProizvodnje),'godine')
        }
    }
    set setBattery(procenat){
        this.procenatBaterije = procenat
    }
}

let samsung = new Phone('samsung', 3, 2020, 20)

samsung.turnOn()
samsung.turnOn()

samsung.setBattery = 0

samsung.turnOff()
samsung.turnOff()

samsung.istekGarancije()