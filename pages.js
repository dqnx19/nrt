import { importCSSFromList, importJSFromList, getURLParam, setTitle, setFavicon, setAttribute, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter } from "https://js.nether.click/nether.js";

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

setContentOfFooter(`
    <button onclick="showHome()" title="Shows Home Page">
        <img src="img/icons/logo.svg" alt="NRT Logo">
    </button>
    <button onclick="showConnectionTypes()" title="Shows Connection Types Page">
        <img src="img/links-icons/connection-types.svg" alt="Connection Types icon">
    </button>
    <button onclick="showVehicles()" title="Shows Vehicles Page">
        <img src="img/links-icons/vehicles.svg" alt="Vehicles icon">
    </button>
    <button onclick="showServices()" title="Shows Services Page">
        <img src="img/links-icons/services.svg" alt="Services icon">
    </button>
    <button onclick="showFare()" title="Shows Fare Page">
        <img src="img/links-icons/fare.svg" alt="Fare icon">
    </button>
    <button onclick="showAbout()" title="Shows About Page">
        <img src="img/links-icons/about.svg" alt="About icon">
    </button>
    <button onclick="showTechnicalDetails()" title="Shows Technical Details Page">
        <img src="img/links-icons/technical-details.svg" alt="Technical Details icon">
    </button>
`)

window.showHome = showHome;
window.showConnectionTypes = showConnectionTypes;
window.showVehicles = showVehicles;
window.showServices = showServices;
window.showFare = showFare;
window.showAbout = showAbout;
window.showTechnicalDetails = showTechnicalDetails;

function showHome() {
    scrollUp();
    setTitle("Nether Republic Transport");
    setContentOfMain(`
        <h1>Nether Republic Transport</h1>
        <div class="cards">
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/connection-types.svg" alt="Connection Types page link icon">
                    Connection Types
                </div>
                <div class="body">
                    <span>List of all connection types</span>
                    <button onclick="showConnectionTypes()">Open link</button>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/vehicles.svg" alt="Vehicles page link icon">
                    Vehicles
                </div>
                <div class="body">
                    <span>List of all vehicles</span>
                    <button onclick="showVehicles()">Open link</button>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/services.svg" alt="Services page link icon">
                    Services
                </div>
                <div class="body">
                    <span>List of all services</span>
                    <button onclick="showServices()">Open link</button>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/fare.svg" alt="Fare page link icon">
                    Fare
                </div>
                <div class="body">
                    <span>Information about fares and ticket prices</span>
                    <button onclick="showFare()">Open link</button>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/about.svg" alt="About page link icon">
                    About
                </div>
                <div class="body">
                    <span>Information about this project</span>
                    <button onclick="showAbout()">Open link</button>
                </div>
            </div>
            <div class="card">
                <div class="header">
                    <img src="img/links-icons/technical-details.svg" alt="Technical Details page link icon">
                    Technical Details
                </div>
                <div class="body">
                    <span>Technical information and implementation details</span>
                    <button onclick="showTechnicalDetails()">Open link</button>
                </div>
            </div>
        </div>
    `)
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
            <h2>${element.name}</h2>
            <p>Stops at: ${element.stops_at}
            <p>Route Type: ${element.route_type}
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
            <p>Vehicles class: ${element.vehicles_class}</p>
            <p>Maximum speed: ${element.maximum_speed}</p>
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

    showTab(tab)
}

function showFare() {
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
                            <tr>
                                <td>1 zone / 30 min</td>
                                <td>0,10€</td>
                                <td>0,30€</td>
                                <td>0,05€</td>
                                <td>0,15€</td>
                            </tr>
                            <tr>
                                <td>2 zones / 1 h</td>
                                <td>0,20€</td>
                                <td>0,60€</td>
                                <td>0,10€</td>
                                <td>0,30€</td>
                            </tr>
                            <tr>
                                <td>3 zones / 1.5 h</td>
                                <td>0,30€</td>
                                <td>0,90€</td>
                                <td>0,15€</td>
                                <td>0,45€</td>
                            </tr>
                            <tr>
                                <td>4 zones / 2 h</td>
                                <td>0,40€</td>
                                <td>1,20€</td>
                                <td>0,20€</td>
                                <td>0,60€</td>
                            </tr>
                            <tr>
                                <td>5 zones / 2.5 h</td>
                                <td>0,50€</td>
                                <td>1,50€</td>
                                <td>0,25€</td>
                                <td>0,75€</td>
                            </tr>
                            <tr>
                                <td>6 zones / 3 h</td>
                                <td>0,60€</td>
                                <td>1,80€</td>
                                <td>0,30€</td>
                                <td>0,90€</td>
                            </tr>
                            <tr>
                                <td>7 zones / 3.5 h</td>
                                <td>0,70€</td>
                                <td>2,10€</td>
                                <td>0,35€</td>
                                <td>1,05€</td>
                            </tr>
                            <tr>
                                <td>8 zones / 4 h</td>
                                <td>0,80€</td>
                                <td>2,40€</td>
                                <td>0,40€</td>
                                <td>1,20€</td>
                            </tr>
                            <tr>
                                <td>9 zones / 4.5 h</td>
                                <td>0,90€</td>
                                <td>2,70€</td>
                                <td>0,45€</td>
                                <td>1,35€</td>
                            </tr>
                            <tr>
                                <td>10 zones / 5 h</td>
                                <td>1,00€</td>
                                <td>3,00€</td>
                                <td>0,50€</td>
                                <td>1,50€</td>
                            </tr>
                            <tr>
                                <td>All zones / 24 h</td>
                                <td>2,00€</td>
                                <td>6,00€</td>
                                <td>1,00€</td>
                                <td>3,00€</td>
                            </tr>
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
                            <tr>
                                <td>Kid</td>
                                <td>Free</td>
                                <td>ID card needed</td>
                            </tr>
                            <tr>
                                <td>Senior</td>
                                <td>Free</td>
                                <td>ID card needed</td>
                            </tr>
                            <tr>
                                <td>Adult</td>
                                <td>Full</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Student</td>
                                <td>Discounted</td>
                                <td>ISIC card required</td>
                            </tr>
                            <tr>
                                <td>EDC</td>
                                <td>Discounted</td>
                                <td>EDC card required</td>
                            </tr>
                            <tr>
                                <td>EDC Guide</td>
                                <td>Free</td>
                                <td>EDC guide note</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    `)
}

function showAbout() {
    scrollUp();
    setTitle("About - Nether Republic Transport");
    setContentOfMain(`
    <h1>About</h1>
    <section>
        <div class="tabs-switching">
            <div class="tabs">
                <button class="tab active" onclick="showTab('what_is_nether_republic_transport')" data-tab="what_is_nether_republic_transport">What is Nether Republic Transport</button>
                <button class="tab" onclick="showTab('build_on')" data-tab="build_on">Build On</button>
                <button class="tab" onclick="showTab('history')" data-tab="history">History</button>
            </div>
            <div class="tab-content active" id="what_is_nether_republic_transport">
                <h2>What is Nether Republic Transport</h2>
                <p>The backbone of transportation in the Nether Republic.</p>
                <ul>
                    <li>National operator of train, metro and tram tracks</li>
                    <li>National carrier of trains, metro and trams</li>
                    <li>Public roads operator</li>
                    <li>Only NRT-operated vehicles are considered official</li>
                </ul>
            </div>
            <div class="tab-content" id="build_on">
                <h2>Build On</h2>
                <div class="grouped-list">
                    <button class="item" onclick="window.location.href = 'https://html.spec.whatwg.org'">
                        <img src="img/brands/html-logo.png" alt="HTML5 Logo">
                        HTML
                    </button>
                    <button class="item" onclick="window.location.href = 'https://www.w3.org/Style/CSS/'">
                        <img src="img/brands/css-logo.png" alt="CSS3 Logo">
                        CSS
                    </button>
                    <button class="item" onclick="window.location.href = 'https://www.ecma-international.org/publications-and-standards/standards/ecma-262/'">
                        <img src="img/brands/js-logo.png" alt="JS Logo">
                        JS
                    </button>
                    <button class="item" onclick="window.location.href = 'https://js.nether.click'">
                        <img src="img/brands/nether-js-logo.png" alt="Nether.js Logo">
                        Nether.js
                    </button>
                    <button class="item" onclick="window.location.href = 'https://python.org'">
                        <img src="img/brands/python-logo.png" alt="Python Logo">
                        Python (future backend)
                    </button>
                </div>
            </div>
            <div class="tab-content" id="history">
                <h2>History</h2>
                <div class="timeline">
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">November 2024</span>
                        <span class="description">Created</span>
                    </div>
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">April 2025</span>
                        <span class="description">Created Website on google sites</span>
                    </div>
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">July 2025</span>
                        <span class="description">Rebuilt the entire website from scratch using custom HTML and CSS
                            and
                            publishing to netlify, replacing the Google Sites</span>
                    </div>
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">August 2025</span>
                        <span class="description">Added support for phones</span>
                    </div>
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">April 2026</span>
                        <span class="description">Changed url from srt0.netlify.app to
                            sigma-republic-transport.netlify.app</span>
                    </div>
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">16 May 2026</span>
                        <span class="description">Joined nether ecosystem and changed domain from
                            sigma-republic-transport.netlify.app to srt.nether.click</span>
                    </div>
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">30 May 2026</span>
                        <span class="description"></span>
                    </div>
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">20 June 2026</span>
                        <span class="description">Changed name from Sigma Republic Transport to Nether Republic
                            Transport</span>
                    </div>
                    <div class="event">
                        <span class="marker"></span>
                        <span class="date">June 2026</span>
                        <span class="description">Started using Nether.js as page main and only framework</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `)
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

const style = document.createElement("style");
style.innerText = `
.services-icons img, .tab img {
    filter: brightness(0);
}

@media (prefers-color-scheme: dark) {
    .services-icons img, .tab img {
        filter: brightness(0) invert(1);
    }
}
`

document.head.appendChild(style)