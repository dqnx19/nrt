function checkLoadingPreference() {
    if (localStorage.getItem("loading_preference") === "setup") {
        showSetup();
    } else {
        if (localStorage.getItem("lastPage") === "home") {
            showHome();
        } else if (localStorage.getItem("lastPage") === "s") {
            showSetup();
        } else {
            showHome();
        }
    }
}