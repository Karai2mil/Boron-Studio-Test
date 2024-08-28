// Load component on index.html
function loadNews() {
    fetch('./components/news-component/news.component.html')
        .then(response => response.text())
        .then(html => {

            document.getElementById('news-container').innerHTML = html;
            
        })
}

export default loadNews;