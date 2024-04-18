class CustomFooter extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('custom-footer-template').content;
        this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
    }
}

customElements.define('custom-footer', CustomFooter);

class CustomHeader extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('custom-header-template').content;
        this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
    }
}

customElements.define('custom-header', CustomHeader);
