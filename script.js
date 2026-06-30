let count = 10;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  countdownEl.textContent = count;

  if (count === 0) {
    clearInterval(timer);
   countdownEl.innerHTML = "<img src='PinkHeartimg.png' class='heart-img'>";

    setTimeout(() => {
      window.location.href = "surprise.html";
    }, 1500);
  }

  count--;
}, 1000);