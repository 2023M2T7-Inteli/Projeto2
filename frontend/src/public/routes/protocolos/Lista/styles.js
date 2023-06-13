const style = new CSSStyleSheet();
style.replaceSync(/*css*/`
    .protocolos {
        max-width: 352px;
        height: 100vh;

        overflow-y: scroll;

        padding: 24px;
        margin-top: 24px;

        border-radius: 5px;

        flex: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
        
        background-color: white;
    }

    .protocolos::-webkit-scrollbar {
        width: 6px;
    }

    .protocolos::-webkit-scrollbar-track {
        background: rgb(200, 200, 200);
    }

    .protocolos::-webkit-scrollbar-thumb {
        background-color: #666666;
        border-radius: 16px;
        border: 2px solid #666666;
    }

    .header {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .botoes {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }

    .link {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 150%;
        /* identical to box height, or 30px */
        
        display: flex;
        align-items: center;
        
        /* Gray 900 */
        
        color: var(--color-gray-900);

        text-decoration: none;

        opacity: 0.3;
    }

    .lista {
        display: flex;
        flex-direction: column;
        gap: 16px;

        padding: 0;
        margin: 0;
    }

    .link:hover {
        cursor: pointer;
    }

    .active {
        opacity: 1;
        border-bottom: 3px solid #111827;
    }

    h2 {
        margin: 0;

        color: var(--color-gray-900);
    }
`);

export default style;
