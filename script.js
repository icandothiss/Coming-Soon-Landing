const countdown = document.querySelector(".countdown");

//Set Launch Date
const LaunchDate = new Date("Jan 1 , 2023 13:00:00").getTime();

// Update every second
const intvl = setInterval(() => {
  const now = new Date().getTime();

  // Distance from now to Laungh data
  const distance = LaunchDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  // If launch date is upon us
  if (distance < 0) {
    // Stop countodwn
    clearInterval(intvl);
    // Style and output text
    countdown.getElementsByClassName.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
