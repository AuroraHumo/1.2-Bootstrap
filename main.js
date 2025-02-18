document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".navbar-toggler");
    const menu = document.querySelector("#navbarNavAltMarkup");
    const closeButton = document.createElement("span");
  
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-menu");
    menu.appendChild(closeButton);
  
    menuButton.addEventListener("click", function () {
      if (window.innerWidth <= 991) { // Només en mòbils i tauletes
        menu.classList.toggle("show");
      }
    });
  
    closeButton.addEventListener("click", function () {
      menu.classList.remove("show");
    });
  
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 991) { 
          menu.classList.remove("show");
        }
      });
    });
  
    // Si la pantalla és gran, assegurar-se que el menú es comporta normalment
    window.addEventListener("resize", function () {
      if (window.innerWidth > 991) {
        menu.classList.remove("show");
      }
    });
  });
  