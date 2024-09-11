function colorMode() {
    const lightCSS = "css/light.css";
    const darkCSS = "css/dark.css";

    const currentCSS = document.querySelector("link[href='" + lightCSS + "']") ? lightCSS : darkCSS;

    if (currentCSS === lightCSS) {
        document.querySelector("link[href='" + lightCSS + "']").href = darkCSS;
    } else if (currentCSS === darkCSS) {
        document.querySelector("link[href='" + darkCSS + "']").href = lightCSS;
    }
}