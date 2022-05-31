let controlsHeight = document.querySelector("#controls").offsetHeight;
/*let boomImg = document.getElementById("boom");

const boomEffect = () => {
  boomImg.style.left = carOne.left;
  boomImg.style.top = carOne.top;
  boomImg.style.visibility = "visible";
  boomImg.style.animation = "boom .7s";
  boomImg.addEventListener("animationend", (event) => {
    boomImg.style.visibility = "hidden";
    boomImg.style.animation = "unset";
  });
}; */

class MyCar {
  constructor(image, left, top) {
    this.left = left;
    this.top = top;

    this.car = document.createElement("div");
    this.car.setAttribute("class", "my-car");
    this.car.style.backgroundImage = `url(${image})`;
    this.car.style.left = this.left;
    this.car.style.top = this.top;
    document.body.appendChild(this.car);
  }

  goRight() {
    if (this.left < window.innerWidth - 90) {
      this.left += 10;
      this.car.style.left = this.left;
      this.car.style.transform = "rotate(180deg)";
    }
  }
  goLeft() {
    if (this.left > 0) {
      this.left -= 10;
      this.car.style.left = this.left;
      this.car.style.transform = "unset";
    }
  }
  goUp() {
    if (this.top > 0) {
      this.top -= 10;
      this.car.style.top = this.top;
      this.car.style.transform = "rotate(90deg)";
    }
  }
  goDown() {
    if (this.top < window.innerHeight - 90 - controlsHeight) {
      this.top += 10;
      this.car.style.top = this.top;
      this.car.style.transform = "rotate(270deg)";
    }
  }
}

let carOne = new MyCar("car.png", 0, 0);
let carTwo = new MyCar("car2.jpg", 100, 100);

let btnUp = document.getElementById("up");
let btnDown = document.getElementById("down");
let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");

let btnCarOne = document.getElementById("btn-car-one");
let btnCarTwo = document.getElementById("btn-car-two");

let carOneStatus = false;
let carTwoStatus = false;


//* click listener za dugmice za biranje auta

btnCarOne.addEventListener("click", (event) => {
  if (carOneStatus === false) {
    btnCarOne.classList.add("active-car");
    carOneStatus = true;
    btnCarOne.classList.remove('active-car-choose')
    btnCarTwo.classList.remove("active-car");
    btnCarTwo.classList.add('active-car-choose')
    carTwoStatus = false;
  } else {
    btnCarOne.classList.remove("active-car");
    btnCarOne.classList.add("active-car-choose");
    carOneStatus = false;
  }
});

btnCarTwo.addEventListener("click", (event) => {
  if (carTwoStatus === false) {
    btnCarTwo.classList.add("active-car");
    btnCarTwo.classList.remove('active-car-choose')
    carTwoStatus = true;
    btnCarOne.classList.remove("active-car");
    btnCarOne.classList.add('active-car-choose')
    carOneStatus = false;
  } else {
    btnCarTwo.classList.remove("active-car");
    btnCarTwo.classList.add('active-car-choose')
    carTwoStatus = false;
  }
});

//* funkcija za keyup listener

const keyListener = (btnDirection) => {
  document.addEventListener("keyup", (event) => {
    btnDirection.style.background = "black";
    btnDirection.addEventListener("mouseover", (event) => {
      btnDirection.style.background = "coral"; //* posle keyup eventa, dugme gubi hover efekat pa sam ubacio mouseover
    });
    btnDirection.addEventListener("mouseout", (event) => {
      btnDirection.style.background = "black";
    });
  });
}; 


//* keydownd listener 

document.addEventListener("keydown", (event) => {
  let keyName = event.key;
  if (btnCarOne.classList.contains("active-car")) {
    if (keyName === "ArrowRight") {
      btnRight.style.background = 'coral' //* Nisam stavljao u funkciju KeyListener, kao da pocne da koci posle nekog vremena
      carOne.goRight();
      keyListener(btnRight);
    } else if (keyName === "ArrowLeft") {
      btnLeft.style.background = 'coral'
      carOne.goLeft();
      keyListener(btnLeft);
    } else if (keyName === "ArrowUp") {
      btnUp.style.background = 'coral'
      carOne.goUp();
      keyListener(btnUp);
    } else if (keyName === "ArrowDown") {
      btnDown.style.background = 'coral'
      carOne.goDown();
      keyListener(btnDown);
    }
  } else if (btnCarTwo.classList.contains("active-car")) {
    if (keyName === "ArrowRight") {
      btnRight.style.background = 'coral'
      carTwo.goRight();
      keyListener(btnRight);
    } else if (keyName === "ArrowLeft") {
      btnLeft.style.background = 'coral'
      carTwo.goLeft();
      keyListener(btnLeft);
    } else if (keyName === "ArrowUp") {
      btnUp.style.background = 'coral'
      carTwo.goUp();
      keyListener(btnUp);
    } else if (keyName === "ArrowDown") {
      btnDown.style.background = 'coral'
      carTwo.goDown();
      keyListener(btnDown);
    }
  } else {
    alert("Please select your car !");
  }
});

//* kroz niz smo dodelili click listener svakom dugmetu za kretanje

let btnDirectionArr = [btnUp, btnDown, btnLeft, btnRight];
btnDirectionArr.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (btnCarOne.classList.contains("active-car")) {
      if (btn.id == "up") {
        carOne.goUp();
      } else if (btn.id == "down") {
        carOne.goDown();
      } else if (btn.id == "left") {
        carOne.goLeft();
      } else if (btn.id == "right") {
        carOne.goRight();
      }
    } else if (btnCarTwo.classList.contains("active-car")) {
      if (btn.id == "up") {
          carTwo.goUp();
      } else if (btn.id == "down") {
          carTwo.goDown();
      } else if (btn.id == "left") {
          carTwo.goLeft();
      } else if (btn.id == "right") {
          carTwo.goRight();
      }
    } else {
      alert("Please choose your car !");
    }
  });
});
