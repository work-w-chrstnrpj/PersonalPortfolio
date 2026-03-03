// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher) {
        if (styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    } else {
        console.log("Style switcher element not found.");
    }
}, true);



// Switch theme
function switchTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('color-theme', theme); // Save the selected theme to localStorage
}

// Day/night toggle
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");
    dayNight.querySelector("i").classList.toggle("fa-moon", !isDarkMode);
    dayNight.querySelector("i").classList.toggle("fa-sun", isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Save the selected theme to localStorage
});

// Apply the saved theme on page load
window.addEventListener("load", () => {
    const savedDNTheme = localStorage.getItem('theme');
    if (savedDNTheme) {
        if (savedDNTheme === 'dark') {
            document.body.classList.add("dark");
            dayNight.querySelector("i").classList.add("fa-sun");
        } else {
            document.body.classList.remove("dark");
            dayNight.querySelector("i").classList.add("fa-moon");
        }
    } else {
        // Default to light mode if no theme is saved
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    }  

    // Retrieve the saved theme from localStorage
    const savedColorTheme = localStorage.getItem('color-theme');    
    // Check if a saved theme exists and is not empty
    if (savedColorTheme) {
        // Apply the saved theme
        document.body.setAttribute('data-theme', savedColorTheme);
    } else {
        // Use the default theme if no saved theme is found
        const defaultTheme = 'color-1'; // Specify your default theme here
        document.body.setAttribute('data-theme', defaultTheme);
        // Optionally save the default theme to localStorage
        localStorage.setItem('color-theme', defaultTheme);
    }  
});
