document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.querySelectorAll(".start-now").forEach(function (button) {
    button.addEventListener("click", function (event) {
    });
  });

  const togglerButton = document.querySelector("button")
  const mobileMenu = document.querySelector(".navbar-collapse")
  togglerButton.addEventListener("click",
  ()=>{
    if(mobileMenu.classList.contains("show")){
        console.log(mobileMenu.classList);
        mobileMenu.classList.remove("show")
    }else{
        mobileMenu.classList.add("show");
    }
    
  }

  )
});


