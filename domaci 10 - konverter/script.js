let inputRsd = document.getElementById("input-rsd");
let outputEur = document.getElementById("output-eur");
let changeConverter = document.getElementById('btn-change-converter')
let kurs = document.getElementById("trenutni-kurs").classList;
let firstInput = document.getElementById('first-input-div')
let secondInput = document.getElementById('second-input-div')
let inputContainer = document.getElementById('container')

outputEur.disabled = true
outputEur.classList.add('cursor-not-allowed')

let changeConverterStatus = true

inputRsd.addEventListener("input", () => {
  outputEur.value = parseFloat(inputRsd.value / 117.6).toFixed(2);
});
outputEur.addEventListener('input', ()=>{
    inputRsd.value = parseFloat(outputEur.value * 117.6).toFixed(2)
})

const kursColor = () => {
    if(kurs.contains('text-white')) {
        kurs.remove('text-white')
        kurs.add('text-lime-200')
    } else if (kurs.contains('text-lime-200')) {
        kurs.remove('text-lime-200')
        kurs.add('text-yellow-300')
    } else if (kurs.contains('text-yellow-300')) {
        kurs.remove('text-yellow-300')
        kurs.add('text-fuchsia-200')
    } else {
        kurs.remove('text-fuchsia-200')
        kurs.add('text-white')
    }
};
setInterval(kursColor, 1000)

changeConverter.addEventListener('click', ()=>{
    if (changeConverterStatus === false) {
        changeConverter.innerText = '€ u RSD'
        changeConverter.style.transform = 'rotate(360deg)'
        inputContainer.classList.remove('flex-col-reverse')
        outputEur.setAttribute('placeholder', 'Vrednost RSD u €')
        inputRsd.setAttribute('placeholder', 'Unesite iznos u RSD')
        outputEur.classList.add('cursor-not-allowed')
        inputRsd.classList.remove('cursor-not-allowed')
        inputRsd.value = ''
        outputEur.value = ''
        inputRsd.disabled = false
        outputEur.disabled = true
        changeConverterStatus = true
    } else {
        changeConverter.innerText = 'RSD u €'
        changeConverter.style.transform = 'rotate(-360deg)'
        inputContainer.classList.add('flex-col-reverse')
        outputEur.setAttribute('placeholder', 'Unesite iznos u €')
        inputRsd.setAttribute('placeholder', 'Vrednost € u RSD')
        inputRsd.classList.add('cursor-not-allowed')
        outputEur.classList.remove('cursor-not-allowed')
        inputRsd.value = ''
        outputEur.value = ''
        inputRsd.disabled = true
        outputEur.disabled = false
        changeConverterStatus = false
    }
})
