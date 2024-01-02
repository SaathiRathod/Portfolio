/////////////////////////////////////////////////////// Project Images //////////////////////////////////////////////////////////////////////////

function openModal(imageSrc) {
  const modal = document.querySelector('.modal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imageSrc;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}


/////////////////////////////////////////////////////// Browser Popup Disable //////////////////////////////////////////////////////////////////////////

if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}


/////////////////////////////////////////////////////// Contact Me //////////////////////////////////////////////////////////////////////////

var formSubmitted = false; // Flag to track whether the form is submitted

// Check if the form is filled when attempting to reload the page
window.addEventListener('beforeunload', function (e) {
  if (!formSubmitted && isFormFilled()) {
    // Display a confirmation message
    var confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
    (e || window.event).returnValue = confirmationMessage; // Standard
    return confirmationMessage; // For old browsers
  }
});

function isFormFilled() {
  // Add your form-filled check logic here
  // For demonstration purposes, assume the form is filled if the name field is not empty
  return document.getElementById('name').value.trim() !== '';
}

function checkValidations() {
  // Add your form validation logic here

  // For demonstration purposes, assume the form is valid
  var isValid = true;

  if (isValid) {
    // If the form is valid, set the flag to true
    formSubmitted = true;

    // Show a thank you message
    alert('Thank you for contacting Saathi Rathod!');

    // You can also remove the beforeunload event listener if needed
    window.removeEventListener('beforeunload', function (e) {
      if (!formSubmitted && isFormFilled()) {
        // Display a confirmation message
        var confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
        (e || window.event).returnValue = confirmationMessage; // Standard
        return confirmationMessage; // For old browsers
      }
    });
  }

  // Return false to prevent the form from submitting if needed
  return isValid;
}


/////////////////////////////////////////////// Scroll-button to top //////////////////////////////////////////////////////////////////////////

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});

// Add smooth scrolling behavior
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});



/////////////////////////////////////////////////////// Nav Scroll //////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  // Select all links with hashes
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Scroll to the target section
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

/////////////////////////////////////////////////////// Progress Bar ///////////////////////////////////////

let  numberPercent = document.querySelectorAll('.countbar')
let getPercent = Array.from(numberPercent)

getPercent.map((items) => {
    let startCount = 0
    let progressBar = () => {
        startCount ++
        items.innerHTML = `<h3>${startCount}%</h3>`
        items.style.width = `${startCount}%`
        if(startCount == items.dataset.percentnumber) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        progressBar()
    },25)
})
