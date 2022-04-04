// Build 5 Projects With HTML, CSS & JavaScript

// Number one

let loadText = document.querySelector(".count-loading");
let page = document.querySelector(".bg");
let load = 0;
let interval = setInterval(blurring, 50);

function blurring() {
  // Frist method
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  page.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  // other solution
  // loadText.innerText = `${load}%`;
  // loadText.style.opacity = load/100;
  // page.style.cssText = `filter: blur(${100/load}px);`
  // if (load > 99) {
  //   clearInterval(interval);
  //   page.style.cssText = `filter: blur(0px);`
  // }
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// Number two

const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const butDown = document.querySelector(".down-button");
const butUp = document.querySelector(".up-button");

const slidesLeftLength = slideLeft.querySelectorAll("div").length;
const slidesRightLength = slideRight.querySelectorAll("div").length;

slideLeft.style.top = `-${(slidesLeftLength - 1) * 100}vh`;

butUp.addEventListener("click", () => changeSlide("up"));
butDown.addEventListener("click", () => changeSlide("down"));

// Frist method

// let j = slidesRightLength;

// let i = 2;

// const changeSlide = (direction) => {

//       j--;
//       if (j === 0) {
//         j = slidesRightLength;
//       }
//       slideRight.style.top = `-${(slidesRightLength - j) * 100}vh`;

//       slideLeft.style.top = `-${(slidesLeftLength - i) * 100}vh`;
//       i++;
//       if (i === slidesLeftLength + 1) {
//         i = 1;
//       }
// };

// other solution More updated

let activesSlideIndex = 0;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activesSlideIndex++;
    if (activesSlideIndex > slidesLeftLength - 1) {
      activesSlideIndex = 0;
    }
  } else if (direction === "down") {
    activesSlideIndex--;
    if (activesSlideIndex < 0) {
      activesSlideIndex = slidesLeftLength - 1;
    }
  }
  slideRight.style.transform = `translateY(-${
    activesSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activesSlideIndex * sliderHeight
  }px)`;
};

// Number three

const projectThree = document.querySelector(".third-project");
const myButThree = projectThree.querySelector(".bg-click");
const threeValueBg = projectThree.querySelector("#bg-value");
const changeOne = projectThree.querySelector("#chang-method .rgb");
const changeTwo = projectThree.querySelector("#chang-method .hex");
let arrColorOne = [
  "red",
  "gold",
  "#451e3e",
  "rgb(124, 252, 0)",
  "green",
  "#851e3e",
  "blue",
  "rgb(255,0,79)",
];
let arrColorTwo = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

// Default arrColor to array two
let arrColor = arrColorTwo;

// Change arrColor on click nav
changeOne.addEventListener("click", function () {
  arrColor = arrColorOne;
  projectThree.style.backgroundColor = `rgb(241,245,248)`;
  threeValueBg.textContent = `rgb(241,245,248)`;
});
changeTwo.addEventListener("click", function () {
  arrColor = arrColorTwo;
  projectThree.style.backgroundColor = `#F1F5F8`;
  threeValueBg.textContent = `#F1F5F8`;
});

// change bg
myButThree.addEventListener("click", function () {
  // Check for which array
  // direct for array one
  if (arrColor === arrColorOne) {
    let randomNumber = getRandomInt();
    projectThree.style.backgroundColor = arrColor[randomNumber];
    threeValueBg.textContent = arrColor[randomNumber];
  }
  // make color from array two
  else if (arrColor === arrColorTwo) {
    let bgColor = `#`;
    for (let i = 0; i < 6; i++) {
      bgColor += arrColor[getRandomInt()];
    }
    projectThree.style.backgroundColor = bgColor;
    threeValueBg.textContent = bgColor;
  }
});
function getRandomInt() {
  return Math.floor(Math.random() * arrColor.length);
}

// Number 3
let count = 0;
const projectFour = document.querySelector(".fourth-project ");
const butsFour = projectFour.querySelectorAll(".counter-buts");
const countValue = projectFour.querySelector("#count-value");
// console.log(countValue)

// console.log(projectFour);
// console.log(butsFour);

butsFour.forEach(function (but) {
  but.addEventListener("click", function () {
    if (but.classList.contains("increase")) {
      count++;
    } else if (but.classList.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    if (count > 0) {
      countValue.style.color = "green";
    } else if (count < 0) {
      countValue.style.color = "red";
    } else {
      countValue.style.color = "rgb(16,42,66)";
    }
    countValue.textContent = count;
  });
});

// Number 5

const projectFive = document.querySelector(".fifth-project");
const textFive = projectFive.querySelector(".my-text-five");

const myTextFive = "I'm a Frontend";
let indexInd = 0;
function autoWriteText() {
  textFive.textContent = myTextFive.slice(0, indexInd);
  indexInd++;
  if (indexInd > myTextFive.length) {
    indexInd = 0;
  }
}
autoWriteText();

setInterval(autoWriteText, 200);

// Number 6

const projectSix = document.querySelector(".sixth-project");
const sixImage = projectSix.querySelector(".img-review img");
const nameSix = document.querySelector(".sixth-project h4");
const jopSix = projectSix.querySelector(".sixth-project h5");
const parSix = projectSix.querySelector(".sixth-project p");
// const buttonSix = projectSix.querySelectorAll(".sixth-project button");
const prevSix = projectSix.querySelector(".sixth-project .prev-rev");
const nextSix = projectSix.querySelector(".sixth-project .next-rev");
const subSix = projectSix.querySelector(".radam-rev");

const arrSixReviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "images/team1.webp",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "images/team2.webp",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "images/team3.webp",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let countRevi = 0;

prevSix.addEventListener("click", function () {
  countRevi--;
  if (countRevi === -1) {
    countRevi = arrSixReviews.length - 1;
  }
  turnRiv();
});
nextSix.addEventListener("click", function () {
  countRevi++;
  if (countRevi === arrSixReviews.length) {
    countRevi = 0;
  }
  turnRiv();
});
subSix.addEventListener("click", function () {
  countRevi = Math.floor(Math.random() * arrSixReviews.length);
  turnRiv();
});
function turnRiv() {
  let myReSrc = arrSixReviews[countRevi];
  sixImage.src = myReSrc.img;
  nameSix.textContent = myReSrc.name;
  jopSix.textContent = myReSrc.job;
  parSix.textContent = myReSrc.text;
}
// start number 7

const projectSeven = document.querySelector(".seventh-project");
const toggleSeven = projectSeven.querySelector("button.toggle-seven");
const toggleIconeSeven = projectSeven.querySelector("button.toggle-seven i");
const linksSeven = projectSeven.querySelector(".links-sev");

toggleSeven.addEventListener("click", function () {
  if (!linksSeven.classList.contains("show-link-sev")) {
    linksSeven.classList.add("show-link-sev");
    toggleSeven.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    toggleSeven.classList.add("open-sev");
  } else if (linksSeven.classList.contains("show-link-sev")) {
    linksSeven.classList.toggle("show-link-sev");
    toggleSeven.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    toggleSeven.classList.add("open-sev");
  }
});

// Number 8

const projectEight = document.querySelector(".eighth-project");
const toggleEight = projectEight.querySelector(".close-eight i");
const fixedEight = projectEight.querySelector(".fixed-eight");
const closeEight = projectEight.querySelector(".logo-eight i");

toggleEight.addEventListener("click", fixedPlay);
closeEight.addEventListener("click", fixedPlay);

function fixedPlay() {
  fixedEight.classList.toggle("trans-fixed");
}


// Start Number 9

const projectNine = document.querySelector(".ninth-project");
const playOverlay = projectNine.querySelector(".overlay-eight");
const playButEight = projectNine.querySelector(".but-eight");
const displayButEight = projectNine.querySelector(".but-content");

playButEight.addEventListener("click", function () {
  playOverlay.classList.add("play-eight");
});
displayButEight.addEventListener("click", function () {
  playOverlay.classList.remove("play-eight");
});


// Start Number 10

const projectTen = document.querySelector(".tenth-project");
const playPar = projectTen.querySelectorAll(".play-ten");
const parTen = projectTen.querySelectorAll(".par-ten");

playPar.forEach(function(playItem, index) {
  playItem.addEventListener("click", function () {
    if (parTen[index].classList.contains("play-par-ten")) {
      parTen[index].classList.remove("play-par-ten");
      playItem.innerHTML = `<i class="fa-solid fa-plus"></i>`
    } 
    else {
      deletClass();
      playItem.innerHTML = `<i class="fa-solid fa-minus"></i>`
      parTen[index].classList.add("play-par-ten");
    }
  })
})

function deletClass () {
  parTen.forEach(function(playClass, index) {
    if (playClass.classList.contains("play-par-ten")) {
      playClass.classList.remove("play-par-ten");
      playPar[index].innerHTML = `<i class="fa-solid fa-plus"></i>`;
    }
  })
}
