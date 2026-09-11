document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("global-footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <img class="footer-logo" src="logo.svg" alt="${CONFIG.namaSitus}">
    <div class="footer-tagline">Sewa villa terpercaya di seluruh Indonesia</div>

    <div class="footer-ig">
      <a href="https://instagram.com/${CONFIG.instagramUsername}" target="_blank" rel="noopener noreferrer">Instagram · @${CONFIG.instagramUsername}</a>
    </div>

    <nav class="footer-nav">
      <a href="privacy.html">Kebijakan Privasi</a>
      <span>|</span>
      <a href="terms.html">Syarat &amp; Ketentuan</a>
      <span>|</span>
      <a href="disclaimer.html">Disclaimer</a>
    </nav>

    <div class="footer-copy">&copy; ${new Date().getFullYear()} ${CONFIG.namaSitus}. Semua hak dilindungi.</div>
  `;
});
