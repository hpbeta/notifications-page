const marker = document.getElementById("marker");
const notifications = document.querySelectorAll(".user-notification");
const number = document.querySelector(".number");

marker.addEventListener("click", () => {
  removeAndAddAllPointsAndBackGrounds();
});

function removeAndAddPointAndBackground() {
  notifications.forEach((notification) => {
    notification.addEventListener("click", () => {
      const isChecked = notification.classList.contains("background");
      if (isChecked) {
        notification.classList.remove("background");
      } else {
        notification.classList.add("background");
      }

      const point = notification.querySelector(".point");
      const containsPoint = point.classList.contains("opacity");
      if (containsPoint) {
        point.classList.remove("opacity");
      } else {
        point.classList.add("opacity");
      }

      const notBackground = document.querySelectorAll(".user-notification:not(.background)").length
      number.innerHTML = notBackground
    });
  });
}

function removeAndAddAllPointsAndBackGrounds() {
  notifications.forEach((notification) => {
    const isChecked = notification.classList.contains("background");
    if (isChecked) {
      notification.classList.remove("background");
    } else {
      notification.classList.add("background");
    }

    const point = notification.querySelector(".point");
    const containsPoint = point.classList.contains("opacity");
    if (containsPoint) {
      point.classList.remove("opacity");
    } else {
      point.classList.add("opacity");
    }
    
    const notBackground = document.querySelectorAll(".user-notification:not(.background)").length
      number.innerHTML = notBackground
      const notPoint = document.querySelectorAll(".point:not(.opacity)").length
      number.innerHTML = notPoint
  });
}

removeAndAddPointAndBackground();
