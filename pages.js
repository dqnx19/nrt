import { importCSSFromList, importJSFromList, setTitle, setFavicon, setAttribute, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter } from "https://js.nether.click/nether.js";

setAttribute("html", "lang", "en")

setFavicon("img/icons/favicon.svg")

await importCSSFromList([
    "https://modern-web.nether.click/fonts/lexend/lexend.css",

    "https://modern-web.nether.click/components/css/all.css",
    "https://modern-web.nether.click/components/css/app-drawer.css",

    "https://modern-web.nether.click/components/css/body.css",
    "https://modern-web.nether.click/components/css/button.css",

    "https://modern-web.nether.click/components/css/footer.css",
    "https://modern-web.nether.click/components/css/form.css",

    "https://modern-web.nether.click/components/css/grouped-list.css",

    "https://modern-web.nether.click/components/css/header.css",
    "https://modern-web.nether.click/components/css/headings.css",

    "https://modern-web.nether.click/components/css/li.css",

    "https://modern-web.nether.click/components/css/main.css",

    "https://modern-web.nether.click/components/css/section.css",
    "https://modern-web.nether.click/components/css/services-icons.css",

    "https://modern-web.nether.click/components/css/table.css",

    "https://modern-web.nether.click/components/css/tabs-switching.css",
    "https://modern-web.nether.click/components/css/timeline.css",

    "https://modern-web.nether.click/components/css/train-formation.css",
])

await importJSFromList([
    "https://nether.click/js/import-app-drawer.js",

    "https://modern-web.nether.click/components/js/app-drawer.js",
    "https://modern-web.nether.click/components/js/tabs-switching.js"
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
                <button class="item" onclick="showConnectionTypes()">Connection Types</button>
                <button class="item" onclick="showVehicles()">Vehicles</button>
                <button class="item" onclick="showServices()">Services</button>
                <button class="item" onclick="showFare()">Fare</button>
                <button class="item" onclick="showAbout()">About</button>
                <button class="item" onclick="showTechnicalDetails()">Technical Details</button>
            </div>
        </section>
    `)
}

function showConnectionTypes() {
    scrollUp();
    setTitle("Connection Types - Nether Republic Transport");
    setContentOfMain(`
        <h1>Connection Types</h1>
        <section>
            <h2>Regional Bahn Train</h2>
            <p>Stops At: Every Station</p>
            <p>Route Type: Domestic/Interstate</p>
        </section>
        <section>
            <h2>Regional Express Train</h2>
            <p>Stops At: Some Stations</p>
            <p>Route Type: Domestic/Interstate</p>
        </section>
        <section>
            <h2>Interregio Train</h2>
            <p>Stops At: Important Stations</p>
            <p>Route Type: Domestic/Interstate</p>
        </section>
        <section>
            <h2>Intercity Train</h2>
            <p>Stops At: Most Important Stations</p>
            <p>Route Type: Domestic</p>
        </section>
        <section>
            <h2>Eurocity Train</h2>
            <p>Stops At: Most Important Stations</p>
            <p>Route Type: Interstate</p>
        </section>
        <section>
            <h2>U-Bahn</h2>
            <p>Stops At: Every Station</p>
            <p>Route Type: Urban/Suburban</p>
        </section>
        <section>
            <h2>Tram</h2>
            <p>Stops At: Every Station</p>
            <p>Route Type: Urban/Suburban</p>
        </section>
        <section>
            <h2>Local Bus</h2>
            <p>Stops At: Every Station</p>
            <p>Route Type: Urban/Suburban</p>
        </section>
    `)
}

function showVehicles() {
    scrollUp();
    setTitle("Vehicles - Nether Republic Transport");
    setContentOfMain(`
        <h1>Vehicles</h1>
        <section>
            <h2>Skoda 18Ev (2 cars)</h2>
            <p>Class: EU 1000</p>
            <p>Maximum Speed: 160 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">EU 1000</span>
                <span class="unit-right">EU 1001</span>
            </div>
        </section>
        <section>
            <h2>Skoda 18Ev (3 cars)</h2>
            <p>Class: EU 1010</p>
            <p>Maximum Speed: 160 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">EU 1010</span>
                <span class="unit-middle">EU 1011</span>
                <span class="unit-right">EU 1012</span>
            </div>
        </section>
        <section>
            <h2>Skoda 18Ev (4 cars)</h2>
            <p>Class: EU 1020</p>
            <p>Maximum Speed: 160 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">EU 1020</span>
                <span class="unit-middle">EU 1021</span>
                <span class="unit-middle">EU 1022</span>
                <span class="unit-right">EU 1023</span>
            </div>
        </section>
        <section>
            <h2>Skoda 26Ev (5 cars)</h2>
            <p>Class: EU 1030</p>
            <p>Maximum Speed: 200 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/002-1st-class-icon.png" alt="">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">EU 1030</span>
                <span class="unit-middle">EU 1031</span>
                <span class="unit-middle">EU 1032</span>
                <span class="unit-middle">EU 1033</span>
                <span class="unit-right">EU 1034</span>
            </div>
        </section>
        <section>
            <h2>Siemens Viaggio Comfort (9 cars)</h2>
            <p>Class: 1000</p>
            <p>Maximum Speed: 230 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/002-1st-class-icon.png" alt="">
                <img src="/img/services/003-dining-car-icon.png" alt="">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">1000</span>
                <span class="unit-middle">1001</span>
                <span class="unit-middle">1002    
                </span>
                <span class="unit-middle">1003    
                </span>
                <span class="unit-middle">1004</span>
                <span class="unit-middle">1005</span>
                <span class="unit-middle">1006</span>
                <span class="unit-middle">1007</span>
                <span class="unit-middle">1008</span>
                <span class="locomotive"></span>
            </div>
        </section>
        <section>
            <h2>81-71 M (5 cars)</h2>
            <p>Class: EU 1040</p>
            <p>Maximum Speed: 80 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">EU 1040</span>
                <span class="unit-middle">EU 1041</span>
                <span class="unit-middle">EU 1042</span>
                <span class="unit-middle">EU 1043</span>
                <span class="unit-right">EU 1044</span>
            </div>
        </section>
        <section>
            <h2>M1 (5 cars)</h2>
            <p>Class: EU 1050</p>
            <p>Maximum Speed: 80 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">EU 1050</span>
                <span class="unit-middle">EU 1051</span>
                <span class="unit-middle">EU 1052</span>
                <span class="unit-middle">EU 1053</span>
                <span class="unit-right">EU 1054</span>
            </div>
        </section>
        <section>
            <h2>Skoda 40T (3 cars)</h2>
            <p>Class: EU 1060</p>
            <p>Maximum Speed: 70 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">EU 1060</span>
                <span class="unit-middle">EU 1061</span>
                <span class="unit-right">EU 1062</span>
            </div>
        </section>
        <section>
            <h2>Skoda 45T (5 cars)</h2>
            <p>Class: EU 1070</p>
            <p>Maximum Speed: 70 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">EU 1070</span>
                <span class="unit-middle">EU 1071</span>
                <span class="unit-right">EU 1072</span>
            </div>
        </section>
        <section>
            <h2>Siemens Vectron (1 car)</h2>
            <p>Class: EL 1000</p>
            <p>Maximum Speed: 230 km/h</p>
            <br>
            <div class="services-icons">
                <img src="/img/services/001-2nd-class-icon.png" alt="2nd class icon">
                <img src="/img/services/005-bicycle-icon.png" alt="1st class icon">
                <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair Icon">
                <img src="/img/services/007-power-socket-icon.png" alt="Power Socket icon">
                <img src="/img/services/008-usb-icon.png" alt="USB icon">
                <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning icon">
                <img src="/img/services/010-wifi-icon.png" alt="WiFi icon">
            </div>
            <br>
            <div class="formation">
                <span class="locomotive">EL 1000</span>
            </div>
        </section>
    `)
}

function showServices() {
    scrollUp();
    setTitle("Services - Nether Republic Transport");
    setContentOfMain(`
        <h1>Services</h1>
        <section>
            <div class="tabs">
                <button class="tab active" onclick="showTab('second_class', this)">Second class</button>
                <button class="tab" onclick="showTab('first_class', this)">First class</button>
                <button class="tab" onclick="showTab('dining_car', this)">Dining car</button>
                <button class="tab" onclick="showTab('bicycle_transport', this)">Bicycle Transport</button>
                <button class="tab" onclick="showTab('wheelchair_accessibility', this)">Wheelchair Accesibility</button>
                <button class="tab" onclick="showTab('power_socket', this)">Power Socket</button>
                <button class="tab" onclick="showTab('usb_ports', this)">USB Ports</button>
                <button class="tab" onclick="showTab('air_conditioning', this)">Air Conditioning</button>
                <button class="tab" onclick="showTab('wifi', this)">WiFi</button>
            </div>
            <div class="tab-content active" id="second_class">
                <h2>Second class</h2>
                <div class="services-icons">
                    <img src="/img/services/001-2nd-class-icon.png" alt="2nd Class">
                </div>
                <ul>
                    <li>Classic second-class seating</li>
                    <li>Seats: 2 + 2</li>
                    <li>Face-to-face seating / Airline style seatings</li>
                </ul>
            </div>
            <div class="tab-content" id="first_class">
                <h2>First class</h2>
                <div class="services-icons">
                    <img src="/img/services/002-1st-class-icon.png" alt="1st Class">
                </div>
                <ul>
                    <li>Comfortable first-class seating</li>
                    <li>Seats: 2 + 1</li>
                    <li>Spacious and luxurious</li>
                </ul>
            </div>
            <div class="tab-content" id="dining_car">
                <h2>Dining car</h2>
                <div class="services-icons">
                    <img src="/img/services/003-dining-car-icon.png" alt="Dining Car">
                </div>
                <ul>
                    <li>Delicious meals</li>
                    <li>Refreshments</li>
                </ul>
                <button onclick="window.location.href=('documents/dining-car-menu.docx')">View Menu (docx)</button>
                <button onclick="window.location.href=('documents/dining-car-menu.pdf')">View Menu (pdf)</button>
            </div>
            <div class="tab-content" id="bicycle_transport">
                <h2>Bicycle transport</h2>
                <div class="services-icons">
                    <img src="/img/services/005-bicycle-icon.png" alt="Bicycle">
                </div>
                <ul>
                    <li>Transport of bicycles</li>
                </ul>
            </div>
            <div class="tab-content" id="wheelchair_accessibility">
                <h2>Wheelchair accessibility</h2>
                <div class="services-icons">
                    <img src="/img/services/006-wheelchair-icon.png" alt="Wheelchair">
                </div>
                <ul>
                    <li>Accessible seating for wheelchair users</li>
                </ul>
            </div>
            <div class="tab-content" id="power_socket">
                <h2>Power socket</h2>
                <div class="services-icons">
                    <img src="/img/services/007-power-socket-icon.png" alt="Power Socket">
                </div>
                <ul>
                    <li>Access to power outlets for charging devices</li>
                </ul>
            </div>
            <div class="tab-content" id="usb_ports">
                <h2>USB Ports</h2>
                <div class="services-icons">
                    <img src="/img/services/008-usb-icon.png" alt="USB Ports">
                </div>
                <ul>
                    <li>USB ports for charging devices</li>
                </ul>
            </div>
            <div class="tab-content" id="air_conditioning">
                <h2>Air Conditioning</h2>
                <div class="services-icons">
                    <img src="/img/services/009-air-conditioning-icon.png" alt="Air Conditioning">
                </div>
                <ul>
                    <li>Climate control for passenger comfort</li>
                </ul>
            </div>
            <div class="tab-content" id="wifi">
                <h2>Wi-Fi</h2>
                <div class="services-icons">
                    <img src="/img/services/010-wifi-icon.png" alt="Wi-Fi">
                </div>
                <ul>
                    <li>Free Wi-Fi access for passengers</li>
                    <li>Unlimited data usage</li>
                    <li>WiFi SSID (name): srt_free</li>
                </ul>
            </div>
        </section>
    `)
}

function showFare() {
    scrollUp();
    setTitle("Fare - Nether Republic Transport");
    setContentOfMain(`
        <h1>Fare</h1>
        <section>
            <div class="tabs-switching">
                <div class="tabs">
                    <button class="tab active" onclick="showTab('tickets', this)">Tickets</button>
                    <button class="tab" onclick="showTab('tickets_types', this)">Tickets Types</button>
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
                    <button class="tab active" onclick="showTab('what_is_nether_republic_transport', this)">What is
                        Nether Republic Transport</button>
                    <button class="tab" onclick="showTab('history', this)">History</button>
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
        </section>
        <section>
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
        </section>
    `)
}

router();