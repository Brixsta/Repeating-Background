class Slide {
  constructor(x) {
    this.x = x;
    this.y = 0;
    this.width = 600;
    this.height = 600;
  }

  draw(src) {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const slide = new Image();
    slide.src = src;

    ctx.drawImage(slide, this.x, this.y);
  }

  animate() {
    this.x -= 2;
    console.log(this.x);
    if (this.x <= -600) {
      this.x = 600;
    }
  }
}

const slide0 = new Slide(600);
const slide1 = new Slide(0);

window.onload = () => {
  window.requestAnimationFrame(updateAll);
};

const updateAll = () => {
  drawCanvas();
  slide0.draw(`images/slide0.png`);
  slide0.animate();
  slide1.draw(`images/slide1.png`);
  slide1.animate();
  window.requestAnimationFrame(updateAll);
};

const drawCanvas = () => {
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};
