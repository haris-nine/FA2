// Select elements
const burgerMenu = document.getElementById("burg-btn");
const menuContent = document.getElementById("menu");

// Toggle menu display on burger menu click
burgerMenu.addEventListener("click", () => {
  menuContent.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  if (!burgerMenu.contains(event.target) && !menuContent.contains(event.target)) {
    menuContent.classList.remove("active");
  }
});


// scroller 

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

function video() {
  const targetDiv = document.getElementById("video-overlay");
  const htmlContent = `
        <div id="overlay"></div>
        <div id="video">
            <video src="assets/fiaz.mp4" loop autoplay preload="auto" playsinline></video>
        </div>
        `;
  targetDiv.innerHTML = htmlContent;

  document.body.classList.add("no-scroll");

  // Add click event listeners to the elements inside targetDiv
  document.getElementById("overlay").addEventListener("click", removeContent);
}

function removeContent() {
  const targetDiv = document.getElementById("video-overlay");
  targetDiv.innerHTML = "";  // Clear the content
  document.body.classList.remove("no-scroll");
}



function resume() {
  const targetDiv = document.getElementById("resume-image");
  const htmlContent = `
        <div id="overlay"></div>
        <div id="image">
            <img src="assets/resume/resume.webp" alt="">
        </div>
        `;
  targetDiv.innerHTML = htmlContent;

  document.body.classList.add("no-scroll");

  // Add click event listeners to the elements inside targetDiv
  document.getElementById("overlay").addEventListener("click", removeContent);
}

function removeContent() {
  const targetDiv = document.getElementById("resume-image");
  targetDiv.innerHTML = "";  // Clear the content
  document.body.classList.remove("no-scroll");
}


var links = document.querySelectorAll('a');

[].forEach.call(links, function(link) {
    
  link.addEventListener("mouseenter", function() {
    
    var newPreLoadLink = document.createElement("link");
    newPreLoadLink.rel = "prerender";
    newPreLoadLink.href = link.href;
    
    document.head.appendChild(newPreLoadLink);
    
  })
  
});
