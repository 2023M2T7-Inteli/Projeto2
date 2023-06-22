const style = new CSSStyleSheet();

style.replaceSync(`
    :host {
        width: 273px;
        height: 100vh;
    }

    nav {
        background: var(--color-white);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        max-width: 100%;
        min-height: 100%;
    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 40px 40px 16px;
        cursor: pointer;
    }

    .menu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px 24px;
        gap: 24px;
    }

    .footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px 40px 40px;
    }

    .footer button {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 16px;
        padding: 0;

        text-decoration-line: underline;
    }
`);

export default style;
