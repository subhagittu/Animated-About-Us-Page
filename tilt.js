// Initialize VanillaTilt
VanillaTilt.init(document.querySelectorAll(".js-tilt"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.4,
  });
  
  // Optional: Add hover effects
  const tiltElements = document.querySelectorAll(".js-tilt");
  
  tiltElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.vanillaTilt.reset(); // Reset tilt to default position on mouse enter
      this.vanillaTilt.tilt(20, 20); // Adjust tilt on hover
    });
  
    element.addEventListener("mouseleave", function () {
      this.vanillaTilt.reset(); // Reset tilt on mouse leave
    });
  });
  