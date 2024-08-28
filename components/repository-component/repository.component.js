// Load component on index.html
function loadRepository() {
    fetch('./components/repository-component/repository.component.html')
        .then(response => response.text())
        .then(html => {

            document.getElementById('repository-container').innerHTML = html;

        });
}

export default loadRepository;
