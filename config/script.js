    function ajustarFonte() {
      const largura = window.innerWidth;
      document.body.style.fontSize = largura < 500 ? '14px' : '16px';
    }

    window.addEventListener('resize', ajustarFonte);
    window.addEventListener('load', ajustarFonte);