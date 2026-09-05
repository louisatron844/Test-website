(function () {
  "use strict";

  var cfg = window.AFE_CONFIG;
  if (!cfg || !cfg.phoneTel || !cfg.whatsappUrl || !cfg.phoneDisplay) {
    return;
  }

  var telHref = "tel:" + cfg.phoneTel;
  var waHref = cfg.whatsappUrl;
  var display = cfg.phoneDisplay;

  function applyLinks() {
    var telNodes = document.querySelectorAll("[data-afe-tel]");
    for (var i = 0; i < telNodes.length; i++) {
      var el = telNodes[i];
      el.setAttribute("href", telHref);
      if (el.hasAttribute("data-afe-tel-label")) {
        el.textContent = el.getAttribute("data-afe-tel-label").replace("{phone}", display);
      }
    }

    var waNodes = document.querySelectorAll("[data-afe-wa]");
    for (var j = 0; j < waNodes.length; j++) {
      waNodes[j].setAttribute("href", waHref);
    }
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
