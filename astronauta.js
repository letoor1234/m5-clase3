const space = document.querySelector("#space");
const astronaut = document.querySelector("#space > img");

const moveBtn = document.querySelector(".button");
const colorBtn = document.querySelector(".colorBtn");
const floatBtn = document.querySelector(".floatBtn");
let blockMoveButton = false;

const moveAstronautToRight = () => {
  astronaut.style.left = "700px";
};

const decreaseSizeAstronaut = () => {
  astronaut.style.transform = "scale(0.6)";
};

const increaseSizeAstronaut = () => {
  astronaut.style.transform = "scale(1.2)";
};

const restoreMoveAstronaut = () => {
  astronaut.style.left = "0px";
  astronaut.style.top = "";
};

const moveAstronautToTop = () => {
  astronaut.style.top = "10px";
};

let colorIndex = 0;
const spaceIsTrippy = () => {
  if (colorIndex === 0) {
    space.style.backgroundColor = "#000";
    colorIndex = 1;
  } else {
    space.style.backgroundColor = "#420a8d";
    colorIndex = 0;
  }
};

const onMoveAstronaut = (to) => {
  if (to === "right") {
    moveAstronautToRight();
    decreaseSizeAstronaut();
  } else if (to === "top") {
    moveAstronautToTop();
    decreaseSizeAstronaut();
  }
};

const onRestoreAstronaut = () => {
  restoreMoveAstronaut();
  increaseSizeAstronaut();
};

window.addEventListener("keyup", (evt) => {
  if (evt.code === "Space") {
    onMoveAstronaut("right");
  }
  if (evt.code === "Enter") {
    alert("Hello Space!");
  }
  if (evt.code === "KeyR") {
    blockMoveButton = !blockMoveButton;
  }
});

moveBtn.addEventListener("click", (evt) => {
  evt.stopPropagation();
  if (!blockMoveButton) {
    onRestoreAstronaut();
  }
});

colorBtn.addEventListener("click", (evt) => {
  evt.stopPropagation();
  spaceIsTrippy();
});

floatBtn.addEventListener("click", (evt) => {
  evt.stopPropagation();
  onMoveAstronaut("top");
});

moveBtn.addEventListener("mousedown", (evt) => {
  evt.stopPropagation();
  if (!blockMoveButton) {
    onMoveAstronaut("right");
  }
});
