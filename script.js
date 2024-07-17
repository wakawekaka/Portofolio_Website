document.addEventListener("DOMContentLoaded", function () {
  const words = ["Determined", "Positive", "Detailed", "Productive"];
  let wordIndex = 0;
  let charIndex = 0;
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const typingDelay = 100;
  const erasingDelay = 100;
  const newWordDelay = 2000;

  function type() {
    if (charIndex < words[wordIndex].length) {
      typedTextSpan.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newWordDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      wordIndex++;
      if (wordIndex >= words.length) wordIndex = 0;
      setTimeout(type, typingDelay);
    }
  }

  setTimeout(type, newWordDelay);

  // Tab functionality
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname, event) {
    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }

  // Add event listeners to tab links
  for (let tablink of tablinks) {
    tablink.addEventListener("click", function (event) {
      opentab(this.getAttribute("tab-contents"), event);
    });
  }

  // Scroll functionality
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");
  const nandoLogo = document.querySelector(".logo");

  function changeActiveLink() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);

  // Handle home link click
  const homeLink = document.querySelector('.navbar a[href="#home"]');
  homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  nandoLogo.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Change header font color when scrolling to contact section
  window.addEventListener("scroll", function () {
    var header = document.getElementById("page-header");
    var contactSection = document.getElementById("contact");
    var contactSectionTop = contactSection.offsetTop;
    var contactSectionHeight = contactSection.offsetHeight;
    var scrollPosition = window.scrollY;

    if (
      scrollPosition >= contactSectionTop &&
      scrollPosition < contactSectionTop + contactSectionHeight
    ) {
      header.classList.add("color-change");
    } else {
      header.classList.remove("color-change");
    }
  });
});
