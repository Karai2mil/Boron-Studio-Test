// Load component on index.html
function loadMarquee() {
    fetch('./components/marquee-component/marquee.component.html')
        .then(response => response.text())
        .then(html => {

            document.getElementById('marquee-container').innerHTML = html;

        });
}

export default loadMarquee;
