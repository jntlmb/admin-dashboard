const toggle = document.getElementById("toggleLight");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon-fill");

  if (this.classList.contains("bi-sun")) {
    this.classList.remove("bi-sun");

    // Hintergrundfarben
    document.documentElement.style.setProperty("--header-bg-color", "#FFFFFF");
    document.documentElement.style.setProperty("--sidebar-bg-color", "#F4F4F4");
    document.documentElement.style.setProperty("--footer-bg-color", "#F4F4F4");
    document.documentElement.style.setProperty("--main-bg-color", "#FFFFFF");
    document.documentElement.style.setProperty("--card-bg-color", "#FAFAFA");
    document.documentElement.style.setProperty(
      "--announcement-bg-color",
      "#FAFAFA"
    );
    document.documentElement.style.setProperty(
      "--trending-bg-color",
      "#FAFAFA"
    );
    document.documentElement.style.setProperty("--btn-bg-color", "#1DB9C3");
    document.documentElement.style.setProperty(
      "--btn-bg-color-hover",
      "#17A1AD"
    );
    document.documentElement.style.setProperty("--search-bg-color", "#FFFFFF");
    document.documentElement.style.setProperty("--link-hover-bg", "#FAFAFA");

    // Textfarben
    document.documentElement.style.setProperty("--text-color", "#000000");
    document.documentElement.style.setProperty(
      "--sidebar-text-color",
      "#333333"
    );
    document.documentElement.style.setProperty("--logo-text-color", "#000000");
    document.documentElement.style.setProperty("--text-color-info", "#666666");
    document.documentElement.style.setProperty(
      "--search-text-color",
      "#333333"
    );
    document.documentElement.style.setProperty("--btn-text-color", "#FFFFFF");
    document.documentElement.style.setProperty(
      "--btn-text-color-hover",
      "#FFFFFF"
    );
    document.documentElement.style.setProperty("--card-text-color", "#333333");

    // Farben für spezifische Elemente
    document.documentElement.style.setProperty("--border-color", "#DDDDDD");
    document.documentElement.style.setProperty("--icon-color", "#1DB9C3");
  } else {
    this.classList.add("bi-sun");
    // Hintergrundfarben
    document.documentElement.style.setProperty("--header-bg-color", "#242529");
    document.documentElement.style.setProperty("--sidebar-bg-color", "#1C1D21");
    document.documentElement.style.setProperty("--footer-bg-color", "#1C1D21");
    document.documentElement.style.setProperty("--main-bg-color", "#242529");
    document.documentElement.style.setProperty("--card-bg-color", "#1C1D21");
    document.documentElement.style.setProperty(
      "--announcement-bg-color",
      "#1C1D21"
    );
    document.documentElement.style.setProperty(
      "--trending-bg-color",
      "#1C1D21"
    );
    document.documentElement.style.setProperty("--btn-bg-color", "#1C1D21");
    document.documentElement.style.setProperty(
      "--btn-bg-color-hover",
      "#242529"
    );
    document.documentElement.style.setProperty("--search-bg-color", "#1C1C1C");
    document.documentElement.style.setProperty("--link-hover-bg", "#242529");

    // Textfarben
    document.documentElement.style.setProperty("--text-color", "#DCDCDC");
    document.documentElement.style.setProperty(
      "--sidebar-text-color",
      "#DCDCDC"
    );
    document.documentElement.style.setProperty("--logo-text-color", "#DCDCDC");
    document.documentElement.style.setProperty("--text-color-info", "#969696");
    document.documentElement.style.setProperty(
      "--search-text-color",
      "#DCDCDC"
    );
    document.documentElement.style.setProperty("--btn-text-color", "#DCDCDC");
    document.documentElement.style.setProperty(
      "--btn-text-color-hover",
      "#DCDCDC"
    );
    document.documentElement.style.setProperty("--card-text-color", "#DCDCDC");

    // Farben für spezifische Elemente
    document.documentElement.style.setProperty("--border-color", "#2E2F33");
    document.documentElement.style.setProperty("--icon-color", "#76ABAE");
  }
});
