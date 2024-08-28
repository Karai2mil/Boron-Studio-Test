import loadNavigation from './components/navigation-component/navigation.component.js';
import loadWelcome from './components/welcome-component/welcome.component.js';
import loadMarquee from './components/marquee-component/marquee.component.js';
import loadFullWidthText from './components/full-width-text-component/full-width-text.component.js';
import loadContentPlusImage from './components/content-plus-image-component/content-plus-image.component.js';
import loadRepository from './components/repository-component/repository.component.js';
import loadNews from './components/news-component/news.component.js';
import loadFooter from './components/footer-component/footer.component.js';

// Load html component to index.html
document.addEventListener('DOMContentLoaded', () => {
    loadNavigation();
    loadWelcome();
    loadMarquee();
    loadFullWidthText();
    loadContentPlusImage();
    loadRepository();
    loadNews();
    loadFooter();
});
