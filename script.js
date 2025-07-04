// Toggle between Light and Dark mode
function toggleMode() {
  document.body.classList.toggle('dark');

  const btn = document.querySelector('.toggle-btn');
  if (document.body.classList.contains('dark')) {
    btn.innerText = "☀️ Light Mode";
  } else {
    btn.innerText = "🌙 Dark Mode";
  }
}

// Open the Membership Plans popup modal
function openPopup() {
  document.getElementById("membershipModal").style.display = "block";
}

// Close the popup modal
function closePopup() {
  document.getElementById("membershipModal").style.display = "none";
}
