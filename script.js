(function () {
  "use strict";

  var cfg = window.AFE_CONFIG || {};
  var hasValidPhoneTel = typeof cfg.phoneTel === "string" && /^\+[1-9]\d{7,14}$/.test(cfg.phoneTel);
  var hasValidWhatsAppUrl = typeof cfg.whatsappUrl === "string" && /^https:\/\/wa\.me\/\d+$/.test(cfg.whatsappUrl);
  var hasValidPhoneDisplay = typeof cfg.phoneDisplay === "string" && cfg.phoneDisplay.trim() !== "" && /^[0-9 ]+$/.test(cfg.phoneDisplay);
  var warnedAboutConfig = false;

  function warnAboutInvalidConfig() {
    if (!warnedAboutConfig && (!hasValidPhoneTel || !hasValidWhatsAppUrl || !hasValidPhoneDisplay)) {
      console.warn("A.F.E contact config failed validation; baked-in links were preserved.");
      warnedAboutConfig = true;
    }
  }

  function applyLinks() {
    var telNodes = document.querySelectorAll("[data-afe-tel]");
    for (var i = 0; i < telNodes.length; i++) {
      var el = telNodes[i];
      if (hasValidPhoneTel) {
        el.setAttribute("href", "tel:" + cfg.phoneTel);
      }
      if (hasValidPhoneDisplay && el.hasAttribute("data-afe-tel-label")) {
        el.textContent = el.getAttribute("data-afe-tel-label").replace("{phone}", cfg.phoneDisplay);
      }
    }

    var waNodes = document.querySelectorAll("[data-afe-wa]");
    for (var j = 0; j < waNodes.length; j++) {
      if (hasValidWhatsAppUrl) {
        waNodes[j].setAttribute("href", cfg.whatsappUrl);
      }
    }

    warnAboutInvalidConfig();
  }

  function syncMobileBar() {
    var bar = document.querySelector(".mobile-call-bar");
    var footer = document.querySelector(".site-footer");
    if (!bar) return;

    if (footer) {
      var rect = footer.getBoundingClientRect();
      var nearFooter = rect.top < window.innerHeight;
      bar.classList.toggle("is-hidden", nearFooter);
    }
  }

  applyLinks();
  syncMobileBar();
  window.addEventListener("scroll", syncMobileBar, { passive: true });
  window.addEventListener("resize", syncMobileBar, { passive: true });
})();
