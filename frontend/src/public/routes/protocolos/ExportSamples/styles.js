const style = new CSSStyleSheet();

style.replaceSync(/*css*/`
:host {
    width: 100%;
}
section {
    width: 100%;
    height: 100vh;
    background: white;

    padding: 24px;

    display: flex;
    flex-direction: column;
    gap: 40px;

    border-radius: 5px;

    margin-top: 24px;
}

.formatos {
    display: flex;
    flex-direction: column;
    gap: 24px 0;
}

.formatos > div {
    width: 100%;
    height: 249px;

    /* Auto layout */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.botao {
    width: 100%;
    height: 40px;

    /*ta o certo agr*/
    background: #111827;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    /* 
      O button vem com 3 propriedades com estilo por padrão:
      
      - background
      - outline
      - border
      
      Se não for usa-las, normalmente é bom setar-las como none 
      */
    outline: none;

    border: 1px solid #555;
    border-radius: 5px;

    /* Flex */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;

    /* Text */
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    color: #FFFFFF;
}
`);

export default style;