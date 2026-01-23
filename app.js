let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.getElementById("installBtn");
  if (installBtn) {
    installBtn.style.display = "block";

    installBtn.addEventListener("click", async () => {
      if (!deferredPrompt) return;

      deferredPrompt.prompt();

      const choiceResult = await deferredPrompt.userChoice;
      deferredPrompt = null;

      installBtn.style.display = "none";
    });
  }
});
