const snowflake_url = "/christmas-update/flake.svg";
const snowContainer = document.querySelector(".snow-container");

const snowflake_class = "snowflake";

window.onload = () => {
  // createSnowflakes();

  interval = setInterval(() => {
    createSnowflakes();
    removeSnowflakes();
  }, 800);

  // setTimeout(() => {
  //   clearInterval(interval);
  // }, 500 * 50);
};

const createSnowflakes = () => {
  let flakeSize = (Math.floor(Math.random() * 100) + 1) / 100;
  let flakeRotation = Math.floor(Math.random() * 50);
  let flakePosition = Math.floor(Math.random() * 90) + 4;
  let fallDuration = Math.floor(Math.random() * 15) + 10;

  // console.log(flakePosition);

  let snowflake = document.createElement("img");
  snowflake.src = snowflake_url;
  snowflake.className = snowflake_class;

  snowflake.style.transform = `scale(${flakeSize}) rotateZ(${flakeRotation}deg)`;
  snowflake.style.left = `${flakePosition}%`;
  snowflake.style.animationDuration = `${fallDuration}s`;

  snowContainer.appendChild(snowflake);
};

const removeSnowflakes = () => {
  let allSnowflakes = document.querySelectorAll(`.${snowflake_class}`);

  allSnowflakes.forEach((snowflake) => {
    if (snowflake.offsetTop > window.innerHeight + 100) {
      snowflake.remove();
      // console.log("flake gone");
    }
  });
};
