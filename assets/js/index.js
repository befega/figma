function scrollFn() {
  if (window.scrollY > 100) {
    document.getElementById("menu").classList.add("menu-scroll");
  } else {
    document.getElementById("menu").classList.remove("menu-scroll");
  }
}
