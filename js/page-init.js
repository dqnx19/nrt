function checkLoadingPreference() {
    if (localStorage.getItem("loading_preference") === "setup") {
        showSetup();
    } else {
        showHome();
    }
}