function loadFooter() {

    const container = document.getElementById('footer-container')

    loadHTML(container).then(() => {
        const screenWidth = window.innerWidth;

        var insideLogo = document.getElementById('inside-logo');
        var outsideLogo = document.getElementById('outside-logo');

        // Initial logo conditions acording screen width
        if (screenWidth <= 768) {
            activeElement(outsideLogo);
            deactiveElement(insideLogo);
        }else {
            deactiveElement(outsideLogo);
            activeElement(insideLogo);
        }

        // Logo acording screen resize
        window.addEventListener('resize', () => {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 768) {
                activeElement(outsideLogo);
                deactiveElement(insideLogo);
            }else {
                deactiveElement(outsideLogo);
                activeElement(insideLogo);
            }
        })
    })
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
    return fetch('./components/footer-component/footer.component.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
        });
}

export default loadFooter;