// widget.js
(() => {
  // Configurações padrão (caso o usuário não defina)
  const DEFAULT_CONFIG = {
    text: "Fragmento 1: A luzfacio desperta onde há escuta.",
    bgColor: "#ffffff",
    textColor: "#000000",
    border: "1px solid #ccc",
    fontSize: "16px",
    fontFamily: "sans-serif",
    showButton: true,
    buttonText: "Gerar novo fragmento"
  };

  // Pega parâmetros da URL (ex: ?text=Olá&bgColor=red)
  const params = new URLSearchParams(window.location.search);
  const config = {
    text: params.get('text') || DEFAULT_CONFIG.text,
    bgColor: params.get('bgColor') || DEFAULT_CONFIG.bgColor,
    textColor: params.get('textColor') || DEFAULT_CONFIG.textColor,
    border: params.get('border') || DEFAULT_CONFIG.border,
    fontSize: params.get('fontSize') || DEFAULT_CONFIG.fontSize,
    fontFamily: params.get('fontFamily') || DEFAULT_CONFIG.fontFamily,
    showButton: params.get('showButton') !== '000', // true por padrão
    buttonText: params.get('buttonText') || DEFAULT_CONFIG.buttonText
  };

  // Fragmentos disponíveis (pode ser carregado via API no futuro)
  const FRAGMENTOS = [
    "Fragmento 1: A luzfacio desperta onde há escuta.",
    "Fragmento 2: Toda partilha é reflexo do que se deseja libertar.",
    "Fragmento 3: Simceleridade manifesta-se aqui."
  ];

  // Gera o HTML do widget
  const widgetHTML = `
    <div id="simceleridade-widget" style="
      background: ${config.bgColor};
      color: ${config.textColor};
      border: ${config.border};
      padding: 15px;
      font-size: ${config.fontSize};
      font-family: ${config.fontFamily};
      border-radius: 5px;
      max-width: 300px;
      margin: 10px;
    ">
      <p>${config.text}</p>
      ${config.showButton ? `
        <button id="simceleridade-button" style="
          background: ${config.textColor};
          color: ${config.bgColor};
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 3px;
        ">
          ${config.buttonText}
        </button>
      ` : ''}
    </div>
  `;

  // Insere o widget no DOM
  document.write(widgetHTML);

  // Adiciona interatividade ao botão (se existir)
  if (config.showButton) {
    document.getElementById('simceleridade-button').addEventListener('click', () => {
      const randomFragment = FRAGMENTOS[Math.floor(Math.random() * FRAGMENTOS.length)];
      document.querySelector('#simceleridade-widget p').textContent = randomFragment;
    });
  }
})();