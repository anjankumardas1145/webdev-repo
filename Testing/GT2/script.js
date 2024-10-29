function showNotification() {
  const notification = document.getElementById("notification");
  notification.classList.remove("hidden");
  notification.style.display = "block";
  
  setTimeout(() => {
    notification.style.display = "none";
  }, 5000);
}
