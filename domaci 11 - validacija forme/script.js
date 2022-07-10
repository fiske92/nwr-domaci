let inputField = document.getElementsByClassName('input-field') // input fields
let btnSend = document.getElementById("send-comment");
let charCount = document.getElementById("charCount"); // char counter
let spanAlert = document.getElementsByClassName('spanAlert') // input alerts

let btnClose = document.getElementById("closeAlert"); // close backdrop
let alerts = document.getElementsByClassName("absolute"); // backdrop divs
let backdropSpans = document.getElementsByClassName('spanAlertSuccess') // backdrop dialog spans

let pattern = /[0-9]/; // pattern for input-name test if there is a number
let charMore; // span alert comment - how many char more

btnSend.addEventListener("click", () => {
  for (let x of spanAlert) {
    x.innerText = ''
  }
  charCount.value = ''

  if (inputField[0].value == "" || pattern.test(inputField[0].value)) {
    spanAlert[0].innerText = "(Please fill in the Name field correctly)"
  }
  if (!inputField[1].value.includes("@") || inputField[1].value == "") {
    spanAlert[1].innerText = "(Please fill in the Mail field correctly)"
  } 
  if (inputField[2].value < 0 || inputField[2].value > 10 || inputField[2].value == "") {
    spanAlert[2].innerText = "Please fill in the Rate with number between 1 - 10"
  }
  if (inputField[3].value == "" || inputField[3].value.length < 200) {
    if(inputField[3].value.length < 200){
      charMore = 200 - inputField[3].value.length
      charCount.value = inputField[3].value.length;
      spanAlert[3].innerText = `(Add ${charMore} char more)`
      charCount.style.transform = 'scale(2) translateX(10px)'
      charCount.style.color = 'red'
      setTimeout(function(){charCount.style.transform = 'scale(1)'; charCount.style.color = 'grey'}, 300)
    }
  }

  // if all alerts is empty, validation is successfully
  if (spanAlert[0].innerText == '' && spanAlert[1].innerText == '' && spanAlert[2].innerText == '' && spanAlert[3].innerText == '') {
    for (let alert of alerts) {
      alert.classList.remove("invisible");
    }
    for(let i = 0; i < backdropSpans.length; i++){
      backdropSpans[i].innerText = inputField[i].value
    }
  }
});

btnClose.addEventListener("click", () => {
  closeAlert();
});

alerts[0].addEventListener("click", () => {
  closeAlert();
});

// input comment char counter
inputField[3].addEventListener("input", () => {
  charCount.value = inputField[3].value.length;
  if (inputField[3].value.length >= 200) {
    charCount.style.color = "green";
  } else {
    charCount.style.color = "grey";
  }
  if (spanAlert[3].innerText != ''){
    if (200 - inputField[3].value.length > 0) {
      charMore = 200 - inputField[3].value.length
      spanAlert[3].innerText = `(Add ${charMore} char more)`
    } else {
      spanAlert[3].innerText = ''
    }
  }

});

function closeAlert() {
  for (let alert of alerts) {
    alert.classList.add("invisible");
  }
  for (let i = 0; i < inputField.length; i++) {
    inputField[i].value = ''
  }
}
