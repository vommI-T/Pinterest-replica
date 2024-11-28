
// Toggle Notification Dropdown
const notification_button = document.getElementById("notification_button");
const notification_dropdown = document.getElementById("nav-notif-dropdown");

notification_button.addEventListener("click", function () {
	notification_dropdown.classList.toggle("dropdown-active");
});



