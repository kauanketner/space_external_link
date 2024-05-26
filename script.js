document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle")
  const icon = document.getElementById("toggle-icon")

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    document.body.classList.toggle("light")
  })
})
