let time = 600000;
const timer = document.getElementById("timer");

function countdown() {
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(time % 1000);

  timer.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`;

  if (time > 0) {
    time -= 10;
    setTimeout(countdown, 10);
  } else {
    timer.textContent = "Time is Up!";
  }
}

countdown();

// function displayModal() {
//     setTimeout(function() {
//       document.getElementById('signupModal').style.display = 'flex';
//     },15000);
//   }

//   function closeModal() {
//     document.getElementById('signupModal').style.display = 'none';
//   }

//   window.onload = displayModal;
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("signupModal").style.display = "flex";
  }, 15000);

  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("signupModal").style.display = "none";
  });
});
