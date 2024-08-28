function loadNavigation() {
    const container = document.getElementById('navigation-container')

    loadHTML(container).then(() => {
        const screenWidth = window.innerWidth;

        var expandedNav = document.getElementById('expanded-nav');
        var collapsedNav = document.getElementById('collapsed-nav');

        // Initial navbar type according to screen width
        if (screenWidth <= 768) {
            activeNav(collapsedNav);
            deactiveNav(expandedNav);
        }else {
            deactiveNav(collapsedNav);
            activeNav(expandedNav);
        }

        // Navbar type on resize screen
        window.addEventListener('resize', () => {
            if (getWindowWidth() <= 768) {
                activeNav(collapsedNav);
                deactiveNav(expandedNav);
            }else {
                deactiveNav(collapsedNav);
                activeNav(expandedNav);
            }
        })
        
        // Navbar type on scroll
        window.addEventListener('scroll', () => {

            let scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                deactiveNav(expandedNav);
                activeNav(collapsedNav);
            } else {
                if (getWindowWidth() <= 768) {
                    activeNav(collapsedNav);
                    deactiveNav(expandedNav);
                }else {
                    deactiveNav(collapsedNav);
                    activeNav(expandedNav);
                }
            }

        })

        // On open/close menu
        let openMenuButton = document.getElementById('nav-collapsed-menu')
        openMenuButton.addEventListener('click', () => {
            let menuOptions = document.getElementById('menu-options-container');
            menuOptions.classList.remove('nav-menu-closed')
            menuOptions.classList.add('nav-menu-open')
        })

        let closeMenuButton = document.getElementById('close-menu-button')
        closeMenuButton.addEventListener('click', () => {
            let menuOptions = document.getElementById('menu-options-container');
            menuOptions.classList.remove('nav-menu-open')
            menuOptions.classList.add('nav-menu-closed')
        })

    })
}

// Ativate/deactivate element function
function activeNav(element) {
    element.classList.remove('deactive-nav')
    element.classList.add('active-nav');
}

function deactiveNav(element) {
    element.classList.remove('active-nav'); 
    element.classList.add('deactive-nav')
}

// Get window width
function getWindowWidth() {
    return window.innerWidth;
}

// Load component on index.html
function loadHTML(container) {
    return fetch('./components/navigation-component/navigation.component.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;
        });
}

export default loadNavigation;
