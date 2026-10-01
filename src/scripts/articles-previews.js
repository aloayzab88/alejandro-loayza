/*
 * Ejercicio: define una clase que, al presionar “See All Insights”, muestre las
 * tarjetas ocultas inicialmente. Considera accesibilidad y rendimiento; luego
 * instancia la clase solo cuando el componente exista en la página.
 */

class ArticlesPreviews {
    constructor(container) {
        this.container = container;
        this.hiddenArticles = this.container.querySelectorAll('[hidden]');
        this.showButton = this.container.querySelector('.js-all-insights');
        this.showArticle = this.showArticle.bind(this);
        this.showButton?.addEventListener('click', this.showArticle)

    }

    showArticle() {
        if (!this.hiddenArticles.length) return;
        const first = this.hiddenArticles[0].querySelector('a');
        this.hiddenArticles.forEach((article) => article.hidden = false);
        first.focus();
        this.showButton.hidden = true;

    }
}


document.querySelectorAll('.c-articles-previews').forEach((container) => new ArticlesPreviews(container))