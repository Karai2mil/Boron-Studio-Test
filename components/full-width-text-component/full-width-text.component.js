// Load component on index.html
function loadFullWidthText() {
    fetch('./components/full-width-text-component/full-width-text.component.html')
        .then(response => response.text())
        .then(html => {

            document.getElementById('full-width-text-container').innerHTML = html;

        });
}

export default loadFullWidthText;
