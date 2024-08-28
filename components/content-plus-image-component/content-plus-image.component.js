function loadContentPlusImage() {
    let slideIndex = 0;
    const container = document.getElementById('content-plus-image-container');

    loadHTML(container).then(() => {

        const screenWidth = window.innerWidth
        var sliderIndicator = document.getElementById('slider-indicator');
        var prevNextButtons = document.getElementById('prev-next-buttons');

        // Initial slider according to screen width
        if (screenWidth <= 768) {
            activeElement(sliderIndicator)
            deactiveElement(prevNextButtons)
        } else {
            deactiveElement(sliderIndicator)
            activeElement(prevNextButtons)
        }

        // Slider type on resize screen
        window.addEventListener('resize',  () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                activeElement(sliderIndicator)
                deactiveElement(prevNextButtons)
            } else {
                deactiveElement(sliderIndicator)
                activeElement(prevNextButtons)
            }
        })

        // Slide with buttons parameters
        showSlides(slideIndex);

        const prevButton = container.querySelector('.slider-left');
        const nextButton = container.querySelector('.slider-right');

        prevButton.addEventListener('click', () => plusSlides(-1, "next"));
        nextButton.addEventListener('click', () => plusSlides(1, "prev"));

        //Slide with touch parameters
        const slider = document.querySelector('.slider');
        let startX = 0;
        let endX = 0;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        });

        slider.addEventListener('touchend', () => {
        const threshold = 50;

            if (startX - endX > threshold) {
                // Slide to left
                plusSlides(1, 'prev')
            } else if (endX - startX > threshold) {
                // Slide to rigth
                plusSlides(-1, 'next')
            }
        });
    })

    // Slider movement
    function plusSlides(n, direction) {
        showSlides(slideIndex += n,direction);
    }

    function showSlides(n, direction) {
        const slides = container.getElementsByClassName("slide");
        const indicators = container.getElementsByClassName("indicator");

        // Define new slider position
        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }

        // Change slides styles
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('fadeOut', 'slideInRight', 'slideInLeft', 'active');
            slides[i].classList.add('deactive');
            indicators[i].classList.remove('active-indicator');
        }

        slides[slideIndex].classList.add('fadeOut');

        if (direction == "next") {
            slides[slideIndex].classList.add('slideInLeft');
        } else {
            slides[slideIndex].classList.add('slideInRight');
        }
        
        slides[slideIndex].classList.remove('fadeOut');
        slides[slideIndex].classList.remove('deactive');
        slides[slideIndex].classList.add('active');
        indicators[slideIndex].classList.add('active-indicator');
    }
}

// Ativate/deactivate element function
function activeElement(element) {
    element.classList.remove('deactive-element')
    element.classList.add('active-element');
}

function deactiveElement(element) {
    element.classList.remove('active-element'); 
    element.classList.add('deactive-element')
}

// Load component on index.html
function loadHTML(container) {
    return fetch('./components/content-plus-image-component/content-plus-image.component.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
        });
}

export default loadContentPlusImage;
