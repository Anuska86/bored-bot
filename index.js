const activityBtn = document.getElementById("get-activity");
const activityDisplay = document.getElementById("activity-name");
const container = document.querySelector(".container");

activityBtn.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      activityDisplay.textContent = data.activity;

      container.classList.add("fun-mode");
    })
    .catch((error) => {
      console.error("Oops, something went wrong:", error);
      activityDisplay.textContent = "Could not find an activity right now";
    });
});
