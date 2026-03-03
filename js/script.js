// typing animation

var typed = new Typed(".typing", {
    strings: ["", "Tech Enthusiast", "Web Developer", "Web Designer", "QA Tester", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var typed = new Typed(".typing-2", {
    strings: ["", "I'm here to help you.", "I'm here to provide solution.", "I'm excited to work with you.", "So, how can I help you?"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

// Aside

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i = 0; i<totalNavList; i++) 
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function() 
        {
            removeBackSection();
            for(let j = 0; j<totalNavList; j++) 
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if (window.innerWidth < 1200) 
            {
                asideSectionTogglerBtn();
            }
        })

    }

    function addBackSection(num) 
    {
        allSection[num].classList.add("back-section");
    }

    function removeBackSection() {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
    }

    function showSection(element) 
    {
        for(let i = 0; i<totalSection; i++) 
        {
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active");
    }


    function updateNav(element) {
        for (let i = 0; i < totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    document.querySelector(".hire-me").addEventListener("click", function()
    {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => 
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn() 
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i = 0; i<totalSection; i++) 
            {
                allSection[i].classList.toggle("open");
            }
        }


    // Personalization 
    document.getElementById("dl-cv").addEventListener("click", function() {
        var fileUrl = "cv/crp-cv.pdf"; // Replace with the actual file URL
        var fileName = "myCV.pdf"; // Replace with the desired file name
      
        var link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName;
        link.click();
      });


// Initialize EmailJS SDK
emailjs.init("SsIFlJQdwV4ZZXWJn");  // Use only the public key

function sendMail() {
    var params = {
        name: document.getElementById("name_f").value,
        email: document.getElementById("email_f").value,
        subject: document.getElementById("subject_f").value,
        message: document.getElementById("message_f").value
    };

    var serviceID = "service_ggsn44n";  
    var templateID = "template_b7c9ah4";  

    emailjs.send(serviceID, templateID, params)
    .then(function(res) {
        // Clear form fields on success
        document.getElementById("name_f").value = "";
        document.getElementById("email_f").value = "";
        document.getElementById("subject_f").value = "";
        document.getElementById("message_f").value = "";
        
        console.log("Email sent successfully:", res);
        alert("Email sent successfully!");
    })
    .catch(function(err) {
        console.error("Failed to send email:", err);
        alert("Error sending email. Check console for details.");
    });
}




// Age function
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

const myAge = calculateAge("2000-01-16");
document.getElementById("age").textContent = myAge;



// Logo Reload 
function updateAndReload() {
    // Update the URL fragment to #home
    history.replaceState(null, null, '#home');
    
    // Reload the page
    window.location.reload();
}

// Reload URL handler
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.hash !== '#home') {
    window.location.hash = '#home';
  }
});


// Carousel Animation for multiple carousels
document.querySelectorAll('.carousel').forEach(carousel => {
    const carouselImages = carousel.querySelector('.carousel-images');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    let currentIndex = 0;
    const totalImages = carouselImages.querySelectorAll('img').length;
  
    nextBtn.addEventListener('click', () => {
      if (currentIndex < totalImages - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    });
  
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalImages - 1;
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carouselImages.style.transform = `translateX(${offset}%)`;
    }
  });
  

  
//Fullscreen

// Select all clickable images within the carousel
const clickableImages = document.querySelectorAll('.clickable-img');

clickableImages.forEach(image => {
  image.addEventListener('click', () => {
    // If the image is not in fullscreen, request it
    if (!document.fullscreenElement) {
      image.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      // If already in fullscreen, exit fullscreen mode
      document.exitFullscreen();
    }
  });
});



