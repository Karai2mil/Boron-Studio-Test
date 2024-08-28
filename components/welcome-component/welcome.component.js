function loadWelcome() {

     const container = document.getElementById('welcome-container');

     loadHTML(container).then(() => {
          const screenWidth = window.innerWidth;

          var textLargeScreen = document.getElementsByClassName('underlined-text-large-screen');
          var textSmallScreen = document.getElementsByClassName('underlined-text-small-screen');

          // Initial underline text conditions
          if (screenWidth <= 768) {
               activeElement(textSmallScreen);
               deactiveElement(textLargeScreen);
          }else {
               deactiveElement(textSmallScreen);
               activeElement(textLargeScreen);
          }

          // Underline text on resize
          window.addEventListener('resize', () => {
               const screenWidth = window.innerWidth;
               if (screenWidth <= 768) {
                    activeElement(textSmallScreen);
                    deactiveElement(textLargeScreen);
               }else {
                    deactiveElement(textSmallScreen);
                    activeElement(textLargeScreen);
               }
          })
     })
}

// Ativate/deactivate element function
function activeElement(elements) {
     for (let element of elements) {
          element.classList.remove('welcome-deactive-element');
          element.classList.add('welcome-active-element');
     }
}

function deactiveElement(elements) {
     for (let element of elements) {
          element.classList.remove('welcome-active-element'); 
          element.classList.add('welcome-deactive-element');
     }
}

// Load component on index.html
function loadHTML(container){
     return fetch('./components/welcome-component/welcome.component.html')
     .then(response => response.text())
     .then(html => {
          container.innerHTML = html;
     })
}

export default loadWelcome;