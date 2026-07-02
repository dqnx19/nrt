import { importCSSFromList, importJSFromList, setTitle, setFavicon, setAttribute, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter } from "https://js.nether.click/nether.js";

setAttribute("html", "lang", "en")

setFavicon("img/icons/favicon.svg")

await importCSSFromList([
    "https://web-ui.nether.click/fonts/lexend/lexend.css",

    "https://web-ui.nether.click/components/css/all.css",
    "https://web-ui.nether.click/components/css/app-drawer.css",

    "https://web-ui.nether.click/components/css/body.css",
    "https://web-ui.nether.click/components/css/button.css",

    "https://web-ui.nether.click/components/css/footer.css",
    "https://web-ui.nether.click/components/css/form.css",

    "https://web-ui.nether.click/components/css/grouped-list.css",

    "https://web-ui.nether.click/components/css/header.css",
    "https://web-ui.nether.click/components/css/headings.css",

    "https://web-ui.nether.click/components/css/li.css",

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
        <img src="/img/icons/logo.svg" alt="NRT Logo">
    </button>
    <button onclick="showConnectionTypes()" title="Shows Connection Types Page">
        <img src="/img/links-icons/connection-types.svg" alt="Connection Types icon">
    </button>
    <button onclick="showVehicles()" title="Shows Vehicles Page">
        <img src="/img/links-icons/vehicles.svg" alt="Vehicles icon">
    </button>
    <button onclick="showServices()" title="Shows Services Page">
        <img src="/img/links-icons/services.svg" alt="Services icon">
    </button>
    <button onclick="showFare()" title="Shows Fare Page">
        <img src="/img/links-icons/fare.svg" alt="Fare icon">
    </button>
    <button onclick="showAbout()" title="Shows About Page">
        <img src="/img/links-icons/about.svg" alt="About icon">
    </button>
    <button onclick="showTechnicalDetails()" title="Shows Technical Details Page">
        <img src="/img/links-icons/technical-details.svg" alt="Technical Details icon">
    </button>
`)

window.showHome = showHome;
window.showConnectionTypes = showConnectionTypes;
window.showVehicles = showVehicles;
window.showServices = showServices;
window.showFare = showFare;
window.showAbout = showAbout;
window.showTechnicalDetails = showTechnicalDetails;

function router() {
    const page = new URLSearchParams(location.search).get("page");

    switch (page) {
        case "connection-types":
            return showConnectionTypes();

        case "vehicles":
            return showVehicles();

        case "services":
            return showServices();

        case "fare":
            return showFare();

        case "about":
            return showAbout();

        case "technical-details":
            return showTechnicalDetails();

        default:
            return showHome();
    }
}

function showHome() {
    scrollUp();
    setTitle("Nether Republic Transport");
    setContentOfMain(`
        <h1>Nether Republic Transport</h1>
        <section>
            <div class="grouped-list">
                <button class="item" onclick="showConnectionTypes()" title="Renders Connection Types page">
                    <img src="img/links-icons/connection-types.svg" alt="Connection Types page link icon">
                    Connection Types
                </button>
                <button class="item" onclick="showVehicles()" title="Renders Vehicles page">
                    <img src="img/links-icons/vehicles.svg" alt="Vehicles page link icon">
                    Vehicles
                </button>
                <button class="item" onclick="showServices()" title="Renders Services page">
                    <img src="img/links-icons/services.svg" alt="Services page link icon">
                    Services
                </button>
                <button class="item" onclick="showFare()" title="Renders Fare page">
                    <img src="img/links-icons/fare.svg" alt="Fare page link icon">
                    Fare
                </button>
                <button class="item" onclick="showAbout()" title="Renders About page">
                    <img src="img/links-icons/about.svg" alt="About page link icon">
                    About
                </button>
                <button class="item" onclick="showTechnicalDetails()" title="Renders Technical Details page">
                    <img src="img/links-icons/technical-details.svg" alt="Technical Details page link icon">
                    Technical Details
                </button>
            </div>
        </section>
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
            <h2>${element.name}</h2>
            <div class="services-icons"></div>
            <div class="formation"></div>
    `;

        section.appendChild(tab_content);

        const iconsDiv = tab_content.querySelector(".services-icons");

        element.services.forEach(service => {
            const img = document.createElement("img");
            img.src = `/img/services/${service}.png`;
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

function showServices(tab = 'second_class') {
    scrollUp();
    setTitle("Services - Nether Republic Transport");
    setContentOfMain(`
        <h1>Services</h1>
        <section>
            <div class="tabs">
                <button class="tab active" onclick="showTab('second_class')" data-tab="second_class">
                    <img src="img/services/second_class.png" alt="Second class icon">
                    Second class
                </button>
                <button class="tab" onclick="showTab('first_class')" data-tab="first_class">
                    <img src="img/services/first_class.png" alt="First class icon">
                    First class
                </button>
                <button class="tab" onclick="showTab('dining_car')" data-tab="dining_car">
                    <img src="img/services/dining_car.png" alt="Dining car icon">
                    Dining car
                </button>
                <button class="tab" onclick="showTab('bicycle_transport')" data-tab="bicycle_transport">
                    <img src="img/services/bicycle_transport.png" alt="Bicycle icon">
                    Bicycle Transport
                </button>
                <button class="tab" onclick="showTab('wheelchair_accessibility')" data-tab="wheelchair_accessibility">
                    <img src="img/services/wheelchair_transport.png" alt="Wheelchair icon">
                    Wheelchair Accesibility
                </button>
                <button class="tab" onclick="showTab('power_socket')" data-tab="power_socket">
                    <img src="img/services/power_socket.png" alt="Power socket icon">
                    Power Socket
                </button>
                <button class="tab" onclick="showTab('usb_ports')" data-tab="usb_ports">
                    <img src="img/services/usb_ports.png" alt="USB Ports icon">
                    USB Ports
                </button>
                <button class="tab" onclick="showTab('air_conditioning')" data-tab="air_conditioning">
                    <img src="img/services/air_conditioning.png" alt="Air conditioning icon">
                    Air Conditioning
                </button>
                <button class="tab" onclick="showTab('wifi')" data-tab="wifi">
                    <img src="img/services/wifi.png" alt="WiFi icon">
                    WiFi
                </button>
            </div>
            <div class="tab-content active" id="second_class">
                <h2>Second class</h2>
                <ul>
                    <li>Classic second-class seating</li>
                    <li>Seats: 2 + 2</li>
                    <li>Face-to-face seating / Airline style seatings</li>
                </ul>
            </div>
            <div class="tab-content" id="first_class">
                <h2>First class</h2>
                <ul>
                    <li>Comfortable first-class seating</li>
                    <li>Seats: 2 + 1</li>
                    <li>Spacious and luxurious</li>
                </ul>
            </div>
            <div class="tab-content" id="dining_car">
                <h2>Dining car</h2>
                <ul>
                    <li>Delicious meals</li>
                    <li>Refreshments</li>
                </ul>
                <button onclick="window.location.href=('documents/dining-car-menu.docx')">View Menu (docx)</button>
                <button onclick="window.location.href=('documents/dining-car-menu.pdf')">View Menu (pdf)</button>
            </div>
            <div class="tab-content" id="bicycle_transport">
                <h2>Bicycle transport</h2>
                <ul>
                    <li>Transport of bicycles</li>
                </ul>
            </div>
            <div class="tab-content" id="wheelchair_accessibility">
                <h2>Wheelchair accessibility</h2>
                <ul>
                    <li>Accessible seating for wheelchair users</li>
                </ul>
            </div>
            <div class="tab-content" id="power_socket">
                <h2>Power socket</h2>
                <ul>
                    <li>Access to power outlets for charging devices</li>
                </ul>
            </div>
            <div class="tab-content" id="usb_ports">
                <h2>USB Ports</h2>
                <ul>
                    <li>USB ports for charging devices</li>
                </ul>
            </div>
            <div class="tab-content" id="air_conditioning">
                <h2>Air Conditioning</h2>
                <ul>
                    <li>Climate control for passenger comfort</li>
                </ul>
            </div>
            <div class="tab-content" id="wifi">
                <h2>Wi-Fi</h2>
                <ul>
                    <li>Free Wi-Fi access for passengers</li>
                    <li>Unlimited data usage</li>
                    <li>WiFi SSID (name): srt_free</li>
                </ul>
            </div>
        </section>
    `)
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

router();