 setTimeout(() => {
      const welcome = document.getElementById("welcome");
      welcome.style.animation = "fadeOut 1s ease-out forwards";

      // Remove o elemento da tela após a animação
      setTimeout(() => {
        welcome.style.display = "none";
      }, 1000);
    }, 3000);