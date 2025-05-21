document.getElementById('logo').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function abrirImagem(img) {
    const lightbox = document.getElementById("lightbox");
    const imagemGrande = document.getElementById("imagemGrande");
    imagemGrande.src = img.src;
    lightbox.style.display = "flex";
  }

  function fecharImagem() {
    document.getElementById("lightbox").style.display = "none";
  }