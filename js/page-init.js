const load_preference = localStorage.getItem("loading_preference");
const last_page = localStorage.getItem("lastPage");

const main = document.querySelector("main");
if (!main) {

    main = document.createElement("main");

    document.body.appendChild(main);
}

function HTTPS_failed_err() {
    main.innerHTML = `
        <h1>Error - HTTPS connection has failed</h1>
        <p>it is not recommended to enter sensitive data on this site such as:</p>
        <ul>
            <li>Passwords</li>
            <li>Credit card numbers</li>
            <li>etc.</li>
        </ul>
    `
}

function check_HTTPS() {
    if (window.location.protocol === "https:") {
        console.log("Běží na HTTPS");
    } else {
        console.log("Není HTTPS");
    }
}

function checkLoadPreference() {
    if (load_preference === ("setup")) {
        showSetup();
    } else {
        loadLastPage();
    }
}

function loadLastPage() {
    if (!last_page) {
        showPage(last_page);
    } else {
        showHome();
    }
}