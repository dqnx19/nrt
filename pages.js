import { importCSSFromList, redirect, importJSFromList, getURLParam, setTitle, setFavicon, setAttribute, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter } from "https://js.nether.click/nether.js";

setAttribute("html", "lang", "en")

setFavicon("img/icons/favicon.svg")

await importCSSFromList([
    "https://web-ui.nether.click/fonts/lexend/lexend.css",

    "https://web-ui.nether.click/components/css/all.css",
    "https://web-ui.nether.click/components/css/app-drawer.css",

    "https://web-ui.nether.click/components/css/body.css",
    "https://web-ui.nether.click/components/css/button.css",

    "https://web-ui.nether.click/components/css/cards.css",

    "https://web-ui.nether.click/components/css/footer.css",
    "https://web-ui.nether.click/components/css/form.css",

    "https://web-ui.nether.click/components/css/grouped-list.css",

    "https://web-ui.nether.click/components/css/header.css",
    "https://web-ui.nether.click/components/css/headings.css",

    "https://web-ui.nether.click/components/css/lists.css",

    "https://web-ui.nether.click/components/css/main.css",

    "https://web-ui.nether.click/components/css/section.css",
    "https://web-ui.nether.click/components/css/services-icons.css",

    "https://web-ui.nether.click/components/css/table.css",

    "https://web-ui.nether.click/components/css/tabs-switching.css",
    "https://web-ui.nether.click/components/css/timeline.css",

    "https://web-ui.nether.click/components/css/train-formation.css",
])

await importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "https://nether.click/js/import-app-check.js",

    "https://web-ui.nether.click/components/js/app-drawer.js",
    "https://web-ui.nether.click/components/js/tabs-switching.js"
])

setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button onclick="showHome()" class="logo">
        <img src="img/icons/logo.svg" alt="">
    </button>
`)

const maindb = await fetch("json/pages.json").then(r => r.json());

await setContentOfFooter(
    `<button onclick="showHome()" title="shows home page">
        <img src="img/icons/logo.svg" alt="home page link icon">
    </button>`
    +
    maindb.map(element => `
        <button onclick="${element.func}()" title="shows ${element.name} page">
            <img src="img/links-icons/${element.techname}.svg" alt="${element.name} page link icon">
        </button>
    `).join("")
);

window.showHome = showHome;
window.showConnectionTypes = showConnectionTypes;
window.showVehicles = showVehicles;
window.showServices = showServices;
window.showFare = showFare;
window.showAbout = showAbout;
window.showTechnicalDetails = showTechnicalDetails;
window.redirect = redirect;

async function showHome() {
    scrollUp();
    setTitle("Nether Republic Transport");
    setContentOfMain(`
        <h1>Welcome to NRT!</h1>
        <div class="cards"></div>
    `)

    const db = await fetch("json/pages.json").then(r => r.json());

    const cards = document.querySelector(".cards");

    db.forEach(element => {
        const card = document.createElement("div");

        card.className = "card"
        card.innerHTML = `
            <div class="header">
                <img src="img/links-icons/${element.techname}.svg" alt="${element.name} page link icon">
                <span class="heading">${element.name}</span>
            </div>
            <div class="body">
                <span>${element.desc}</span>
                <button onclick="${element.func}()">Open link</button>
            </div>
        `

        cards.appendChild(card)
    });
}

async function showConnectionTypes(tab = 'regional_bahn_train') {
    scrollUp();
    setTitle("Connection Types - Nether Republic Transport");
    setContentOfMain(`
        <h1>Connection Types</h1>
        <section>
            <div class="tabs"></div>
        </section>
    `)

    const section = document.querySelector("section")

    const db = await fetch("json/connection-types.json").then(r => r.json());

    db.forEach(element => {
        const tab = document.createElement("button")
        tab.className = "tab"
        tab.onclick = () => {
            showTab(element.techname);
        };
        tab.dataset.tab = element.techname
        tab.innerText = element.name
        tab.innerHTML = `
            <img src="img/connections/${element.techname}.svg">
            <span>${element.name}</span>`

        document.querySelector(".tabs").appendChild(tab)
    });

    db.forEach(element => {
        const tab_content = document.createElement("div")
        tab_content.className = "tab-content"
        tab_content.id = element.techname
        tab_content.innerHTML = `
            <div class="details-panel">
                <p class="detail">
                    <img src="img/connection-icons/stops-at.svg">
                    <span>Stops at: ${element.stops_at}</span>
                </p>
                <p class="detail">
                    <img src="img/connection-icons/route-type.svg">
                    <span>Route Type: ${element.route_type}</span>
                </p>
                <p class="detail">
                    <img src="img/connection-icons/frequency.svg">
                    <span>Frequency: ${element.frequency}</span>
                </p>
            </div>
        `
        section.appendChild(tab_content)
    });

    showTab(tab)
}

async function showVehicles(tab = 'skoda_18ev_2_cars') {
    scrollUp();
    setTitle("Vehicles - Nether Republic Transport");
    setContentOfMain(`
        <h1>Vehicles</h1>
        <section>
            <div class="tabs"></div>
        </section>
    `)

    const section = document.querySelector("section")

    const db = await fetch("json/vehicles.json").then(r => r.json());

    db.forEach(element => {
        const tab_button = document.createElement("button")
        tab_button.className = "tab"
        tab_button.onclick = () => {
            showTab(element.techname);
        };
        tab_button.dataset.tab = element.techname
        tab_button.innerText = element.name

        document.querySelector(".tabs").appendChild(tab_button)
    });

    db.forEach(element => {
        const tab_content = document.createElement("div");
        tab_content.className = "tab-content";
        tab_content.id = element.techname;

        tab_content.innerHTML = `
            <div class="details-panel">
                <p class="detail">
                    <img src"">
                    <span>Vehicles class: ${element.vehicles_class}</span>
                </p>
                <p class="detail">
                    <img src="">
                    <span>Maximum speed: ${element.maximum_speed}</span>
                </p>
            </div>
            <br>
            <div class="services-icons"></div>
            <br>
            <div class="formation"></div>
    `;

        section.appendChild(tab_content);

        const iconsDiv = tab_content.querySelector(".services-icons");

        element.services.forEach(service => {
            const img = document.createElement("img");
            img.src = `img/services/${service}.svg`;
            img.alt = service;
            img.dataset.service = service;
            img.onclick = () => showServices(service);
            iconsDiv.appendChild(img);
        });

        const formationDiv = tab_content.querySelector(".formation")

        element.formation.forEach(unit => {
            const div = document.createElement("div");
            div.className = unit.type
            div.textContent = unit.text
            formationDiv.appendChild(div)
        })
    });

    showTab(tab)
}

async function showServices(tab = 'second_class') {
    scrollUp();
    setTitle("Services - Nether Republic Transport");
    setContentOfMain(`
        <h1>Services</h1>
        <section> 
        </section>
    `)
    showTab(tab)

    const db = await fetch("json/services.json").then(r => r.json())

    const tabs_switching = document.createElement("div")
    tabs_switching.className = "tabs-switching"
    document.querySelector("section").appendChild(tabs_switching)

    const tabs = document.createElement("div")
    tabs.className = "tabs"
    tabs_switching.appendChild(tabs)

    db.forEach(element => {
        const tab = document.createElement("button");
        tab.classList = "tab"
        tab.onclick = () => {
            showTab(element.techname)
        }
        tab.dataset.tab = element.techname
        tab.innerHTML = `
            <img src="img/services/${element.techname}.svg">
            <span>${element.name}</span>`

        tabs.appendChild(tab)
    });

    db.forEach(element => {
        const tab_content = document.createElement("div");
        tab_content.id = element.techname
        tab_content.className = "tab-content"
        tab_content.innerHTML = `
            <h2>${element.name}</h2>
        `

        const list = document.createElement("ul");

        element.description.forEach(element => {
            const list_item = document.createElement("li")
            list_item.innerText = element
            list.appendChild(list_item)
        })
        tab_content.appendChild(list)
        tabs_switching.appendChild(tab_content)
    })

    const formats = ["docx", "pdf"]
    const dining_car = document.querySelector(".tab-content#dining_car");

    formats.forEach(element => {
        const button = document.createElement("button");
        button.innerText = `Display dining car menu (${element})`;
        button.onclick = () => { redirect(`documents/dining-car-menu.${element}`) }

        dining_car.appendChild(button)
    });

    showTab(tab)
}

async function showFare() {
    scrollUp();
    setTitle("Fare - Nether Republic Transport");
    setContentOfMain(`
        <h1>Fare</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('tickets')" data-tab="tickets">Tickets</button>
                    <button class="tab" onclick="showTab('tickets_types')" data-tab="tickets_types">Tickets Types</button>
                </div>
                <div class="tab-content active" id="tickets">
                    <h2>Tickets</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Zones / Time Validity</th>
                                <th>Full 2nd class</th>
                                <th>Full 1st class</th>
                                <th>Discounted 2nd class</th>
                                <th>Discounted 1st class</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="tab-content" id="tickets_types">
                    <h2>Ticket Types</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Passenger</th>
                                <th>Ticket Type</th>
                                <th>Note</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    `)

    const prices = document.querySelector("#tickets table tbody")

    for (let row = 1; row < 16; row++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row} zones / ${(row * 0.5).toFixed(1)} h</td>
            <td>${(row * 0.1).toFixed(2)}€</td>
            <td>${(row * 0.3).toFixed(2)}€</td>
            <td>${(row * 0.05).toFixed(2)}€</td>
            <td>${(row * 0.15).toFixed(2)}€</td>
        `;
        prices.appendChild(tr);
    }

    const all_zones = document.createElement("tr");
    all_zones.innerHTML = `
        <td>All zones / 24 h</td>
        <td>2,00€</td>
        <td>6,00€</td>
        <td>1,00€</td>
        <td>3,00€</td>
    `;

    prices.appendChild(all_zones)

    const db = await fetch("json/fare.json").then(r => r.json());

    const types = document.querySelector("#tickets_types table tbody");
    db.tickets_types.forEach(element => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${element.passenger}</td>
            <td>${element.type}</td>
            <td>${element.note}</td>
        `;

        types.appendChild(tr)
    });
}

async function showAbout() {
    scrollUp();
    setTitle("About - Nether Republic Transport")
    setContentOfMain(`
        <h1>About</h1>
        <div class="tabs-switching">
            <div class="tabs">
                <button class="tab active" onclick="showTab('what_is_nether_republic_transport')" data-tab="what_is_nether_republic_transport">What is Nether Republic Transport</button>
                <button class="tab" onclick="showTab('build_on')" data-tab="build_on">Build On</button>
                <button class="tab" onclick="showTab('history')" data-tab="history">History</button>
            </div>
            <div class="tab-content active" id="what_is_nether_republic_transport">
                <h2>What is Nether Republic Transport</h2>
                <ul></ul>
            </div>
            <div class="tab-content" id="build_on">
                <h2>Build On</h2>
                <ul></ul>
            </div>
            <div class="tab-content" id="history">
                <div class="timeline"></div>
            </div>
        </div>
    `);
    
    const db = await fetch("json/about.json").then(r => r.json());

    const what_is = document.querySelector("#what_is_nether_republic_transport ul");
    const build_on = document.querySelector("#build_on ul");
    const history = document.querySelector("#history .timeline");

    what_is.innerHTML = db.what_is_nrt.data.map(element => `
        <li>${element}</li>
    `).join("")

    build_on.innerHTML = db.build_on.data.map(element => `
        <li>${element}</li>
    `).join("")

    history.innerHTML = db.history.map(element => `
        <div class="event">
            <span class="marker"></span>
            <span class="date">${element.date}</span>
            <span class="description">${element.description}</span>
        </div>
    `).join("")
}

function showTechnicalDetails() {
    scrollUp();
    setTitle("Technical Details - Nether Republic Transport");
    setContentOfMain(`
        <h1>Technical Details</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('rolling_stock_classes')" data-tab="rolling_stock_classes">Rolling stock
                        classes</button>
                    <button class="tab" onclick="showTab('announcements')" data-tab="announcements">Announcements</button>
                </div>
                <div class="tab-content active" id="rolling_stock_classes">
                    <h2>Rolling Stock Classes</h2>
                    <table>
                        <thead>
                            <th>Type of Vehicle</th>
                            <th>Designation From</th>
                            <th>Designation To</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Electric Locomotives</td>
                                <td>EL 1000 0000-0</td>
                                <td>EL 9999 9999-9</td>
                            </tr>
                            <tr>
                                <td>Electric Units</td>
                                <td>EU 1000 0000-0</td>
                                <td>EU 9999 9999-9</td>
                            </tr>
                            <tr>
                                <td>Non-Traction Vehicles</td>
                                <td>0000 0000-0</td>
                                <td>9999 9999-9</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-content" id="announcements">
                    <h2>Announcements</h2>
                    <p>Next station</p>
                    <li>{gong} Next station {station name}.</li>
                    <br>
                    <p>Next station (Request)</p>
                    <li>{gong} Next station {station name} request stop press button for exit.</li>
                    <br>
                    <p>Next stop (Requested)</p>
                    <li>{gong} Next station {station name} the vehicle will stop.</li>
                    <br>
                    <p>Next station (Terminus)</p>
                    <li>{gong} Next station {station name} terminus station.</li>
                    <br>
                    <p>This station</p>
                    <li>{gong} {station name}.</li>
                    <br>
                    <p>This station (Terminus)</p>
                    <li>{gong} {station name} terminus station please exit the vehicle.</li>
                </div>
            </div>
        </section>
    `)
}

showHome();