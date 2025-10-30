(() => {
  const STYLE_ID = "rcc-full-width-style";
  const css = `
    .bd-container__inner,
    .bd-page-width,
    .bd-main .bd-content .bd-article-container {
      max-width: 100% !important;
      width: 100% !important;
    }
  `;

  const inject = () => {
    if (document.getElementById(STYLE_ID)) {
      return;
    }
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject, { once: true });
  } else {
    inject();
  }
})();
