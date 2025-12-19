const activityBtn = document.getElementById("get-activity");
const resetBtn = document.getElementById("reset-btn");

const activityDisplay = document.getElementById("activity-name");
const container = document.querySelector(".container");

activityBtn.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      activityDisplay.textContent = data.activity;

      container.classList.add("fun-mode");

      resetBtn.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("Oops, something went wrong:", error);
      activityDisplay.textContent = "Could not find an activity right now";
    });
});

//Reset btn

resetBtn.addEventListener("click", function () {
  activityDisplay.textContent = "Find something fun to do!";

  container.classList.remove("fun-mode");

  resetBtn.classList.add("hidden");
});
