class CustomFooter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `<section class="a-footer">
            <section class="row">
                <h4>Odkazy</h4>
                <ul>
                    <li><a href="./../htmls/index.html">Domů</a></li>
                    <li><a href="./../htmls/info.html">Informace</a></li>
                    <li><a href="./../htmls/support.html">Podpora</a></li>
                </ul>
            </section>
            <section class="row">
                <h4>Soukromí</h4>
                <ul>
                    <li><a href="">GDPR</a></li>
                    <li><a href="./../htmls/documentation.html">Dokumentace</a></li>
                    <li><a href="">Spotřebitelská práva</a></li>
                </ul>
            </section>
            <section class="row">
                <h4>Novinky</h4>
                <ul>
                    <li><a href="./../htmls/update.html">Update-log</a></li>
                    <li><a href="">Vize do budoucna</a></li>
                    <li><a href="">O Aplikaci</a></li>
                </ul>
            </section>
        </section>
        <p class="copyright">Všechna práva vyhrazena &copy;<span id="year"></span> EVA </p>`
    }
}
customElements.define('custom-footer', CustomFooter);

class CustomHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `<a class="home" href="./../htmls/index.html"><img src="./../img/logo2.png"></img></a>
        <nav class="navbar">
            <ul>
                <a id="home-2" href="./../htmls/index.html">Domů</a>
                <a id="info" href="./../htmls/info.html">Informace</a>
                <a id="aboutUs" href="./../htmls/about.html">O nás</a>
                <a id="products" href="./../htmls/products.html">Produkt</a>
            </ul>
        </nav>
        <button class="profile">Můj Účet</button>`
        
    }
}

customElements.define('custom-header', CustomHeader);

class CustomAccount extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `<section class="form-background"></section>
        <form action="">
                <section class="close-window"><i class="fa-solid fa-xmark"></i></section>
                <section class="form-login">
                    <h2>Přihlašte se</h2>
                    <section class="form-inputs">
                        <input type="text" name="name" id="name" placeholder="Jméno">
                        <label for="password"></label>
                        <input type="password" name="password" id="password" placeholder="Heslo">
                    </section>
                    <section class="button-row">
                        <button>Přihlásit</button>
                        <p>Nemáš účet? <a class="sign-up">Zaregistruj se!</a></p>
                    </section>
                </section>
                <section class="form-register none">
                    <h2>Registrujte se</h2>
                    <section class="form-inputs">
                        <section class="input-line">
                            <input type="text" name="name" id="name" placeholder="Jméno">
                            <input type="text" name="surname" id="surname" placeholder="Přijmení">
                        </section>
                        <input type="email" name="email" id="email" placeholder="E-mail">
                        <input type="text" name="phonenum" id="phonenum" placeholder="Telefonní číslo">
                        <section class="input-line">
                            <input type="text" name="password" id="password" placeholder="Heslo">
                            <input type="text" name="password-confirm" id="password-confirm" placeholder="Potvrďte heslo">
                        </section>
                        </section>
                    <section class="button-row">
                        <button>Registrovat</button>
                        <p>Máš účet? <a class="sign-up">Přihlaš se!</a></p>
                    </section>
                </section>
            </form>`
        
    }
}

customElements.define('custom-account', CustomAccount);