const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const body = document.body;

const i18n = {
    en: {

        electric_locomotives: "Electric locomotives",
        electric_units: "Electric units",
        non_traction: "Non-traction vehicles",

        announcements: "Announcements",

        next_station: "Next station",
        next_station_request: "Next station (request)",
        next_station_requested: "Next station (requested)",
        next_station_terminus: "Next station (terminus)",
        this_station: "This station",
        this_station_terminus: "This Station Terminus"
    },
};

const lang = navigator.language.slice(0, 2);
const t = i18n[lang] || i18n.en;

header.innerHTML = `
    <div class="app-drawer-wrapper">
    </div>
    <button onclick="showHome()"   class="logo">
        <img src="img/icons/logo.svg" alt="">
    </button>
`;

footer.innerHTML = `
    <button onclick="showHome()">
        <img src="img/links-icons/home-page.svg" alt="">
    </button>
    <button onclick="showConnectionTypes()">
        <img src="img/links-icons/connection-types.svg" alt="">
    </button>
    <button onclick="showVehicles()">
        <img src="img/links-icons/vehicles.svg" alt="">
    </button>
    <button onclick="showFare()">
        <img src="img/links-icons/fare.svg" alt="">
    </button>
    <button onclick="showAbout()">
        <img src="img/links-icons/about.svg" alt="">
    </button>
    <button onclick="showTechnicalDetails()">
        <img src="img/links-icons/technical-details.svg" alt="">
    </button>
`

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

function showHome() {
    scrollUp();
    document.title = "Home Page - SRT";
    main.innerHTML = `
        <h1>Home</h1>
    `;
}

function showConnectionTypes() {
    scrollUp();
    document.title = "Connection Types - SRT";
    main.innerHTML = `
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
    `;
}

function showVehicles() {
    scrollUp();
    document.title = "Vehicles - SRT";
    main.innerHTML = `
        <h1>Vehicles</h1>
        <section>
            <h2>Skoda 18Ev (2 cars)</h2>
            <p>Class: EU 1000</p>
            <p>Maximum Speed: 160 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>EU 1000</p>
                </span>
                <span class="unit-right">
                    <p>EU 1001</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Skoda 18Ev (3 cars)</h2>
            <p>Class: EU 1010</p>
            <p>Maximum Speed: 160 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
            </div>
            <div class="services-icons">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>EU 1010</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1011</p>
                </span>
                <span class="unit-right">
                    <p>EU 1012</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Skoda 18Ev (4 cars)</h2>
            <p>Class: EU 1020</p>
            <p>Maximum Speed: 160 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>EU 1020</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1021</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1022</p>
                </span>
                <span class="unit-right">
                    <p>EU 1023</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Skoda 26Ev (5 cars)</h2>
            <p>Class: EU 1030</p>
            <p>Maximum Speed: 200 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/002-1st-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>EU 1030</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1031</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1032</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1033</p>
                </span>
                <span class="unit-right">
                    <p>EU 1034</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Siemens Viaggio Comfort (9 cars)</h2>
            <p>Class: 1000</p>
            <p>Maximum Speed: 230 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/002-1st-class-icon.png" alt="">
                <img src="img/services/003-dining-car-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>1000</p>
                    <img src="img/services/002-1st-class-icon.png" alt="">
                </span>
                <span class="unit-middle">
                    <p>1001</p>
                    <img src="img/services/002-1st-class-icon.png" alt="">
                </span>
                <span class="unit-middle">
                    <p>1002</p>
                    <img src="img/services/001-2nd-class-icon.png" alt="">
                    <img src="img/services/003-dining-car-icon.png" alt="">
                </span>
                <span class="unit-middle">
                    <p>1003</p>
                    <img src="img/services/001-2nd-class-icon.png" alt="">
                    <img src="img/services/006-wheelchair-icon.png" alt="">
                </span>
                <span class="unit-middle">
                    <p>1004</p>
                    <img src="img/services/001-2nd-class-icon.png" alt="">
                </span>
                <span class="unit-middle">
                    <p>1005</p>
                    <img src="img/services/001-2nd-class-icon.png" alt="">
                </span>
                <span class="unit-middle">
                    <p>1006</p>
                    <img src="img/services/001-2nd-class-icon.png" alt="">
                </span>
                <span class="unit-middle">
                    <p>1007</p>
                    <img src="img/services/001-2nd-class-icon.png" alt="">
                </span>
                <span class="unit-middle">
                    <p>1008</p>
                    <img src="img/services/001-2nd-class-icon.png" alt="">
                    <img src="img/services/005-bicycle-icon.png" alt="">
                </span>
                <span class="locomotive">
                    <p>EL 1000</p>
                </span>
            </div>
        </section>
        <section>
            <h2>81-71 M (5 cars)</h2>
            <p>Class: EU 1040</p>
            <p>Maximum Speed: 80 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>EU 1040</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1041</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1042</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1043</p>
                </span>
                <span class="unit-right">
                    <p>EU 1044</p>
                </span>
            </div>
        </section>
        <section>
            <h2>M1 (5 cars)</h2>
            <p>Class: EU 1050</p>
            <p>Maximum Speed: 80 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>EU 1050</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1051</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1052</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1053</p>
                </span>
                <span class="unit-right">
                    <p>EU 1054</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Skoda 40T (3 cars)</h2>
            <p>Class: EU 1060</p>
            <p>Maximum Speed: 70 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>EU 1060</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1061</p>
                </span>
                <span class="unit-right">
                    <p>EU 1062</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Skoda 45T (5 cars)</h2>
            <p>Class: EU 1070</p>
            <p>Maximum Speed: 70 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>EU 1070</p>
                </span>
                <span class="unit-middle">
                    <p>EU 1071</p>
                </span>
                <span class="unit-right">
                    <p>EU 1072</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Siemens Vectron (1 car)</h2>
            <p>Class: EL 1000</p>
            <p>Maximum Speed: 230 km/h</p>
            <br>
            <div class="services-icons">
                <img src="img/services/001-2nd-class-icon.png" alt="">
                <img src="img/services/005-bicycle-icon.png" alt="">
                <img src="img/services/006-wheelchair-icon.png" alt="">
                <img src="img/services/007-power-socket-icon.png" alt="">
                <img src="img/services/008-usb-icon.png" alt="">
                <img src="img/services/009-air-conditioning-icon.png" alt="">
                <img src="img/services/010-wifi-icon.png" alt="">
            </div>
            <br>
            <div class="formation">
                <span class="locomotive">
                    <p>EL 1000</p>
                </span>
            </div>
        </section>
    `;
}

function showFare() {
    scrollUp();
    document.title = "Fare - SRT";
    main.innerHTML = `
        <h1>Fare</h1>
        <section id="tickets">
            <h2>Tickets</h2>
            <table>
                <thead>
                    <tr>
                        <th>Zones Validiry</th>
                        <th>Time Validity</th>
                        <th>Full 2nd Class</th>
                        <th>Full 1st Class</th>
                        <th>Discounted 2nd Class</th>
                        <th>Discounted 1st Class</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1 zone</td>
                        <td>0.5 hours</td>
                        <td>0,10€</td>
                        <td>0,30€</td>
                        <td>0,05€</td>
                        <td>0,15€</td>
                    </tr>
                    <tr>
                        <td>2 zones</td>
                        <td>1 hour</td>
                        <td>0,20€</td>
                        <td>0,60€</td>
                        <td>0,10€</td>
                        <td>0,30€</td>
                    </tr>
                    <tr>
                        <td>3 zones</td>
                        <td>1.5 hours</td>
                        <td>0,30€</td>
                        <td>0,90€</td>
                        <td>0,15€</td>
                        <td>0,45€</td>
                    </tr>
                    <tr>
                        <td>4 zones</td>
                        <td>2 hours</td>
                        <td>0,40€</td>
                        <td>1,20€</td>
                        <td>0,20€</td>
                        <td>0,60€</td>
                    </tr>
                    <tr>
                        <td>5 zones</td>
                        <td>2.5 hours</td>
                        <td>0,50€</td>
                        <td>1,50€</td>
                        <td>0,25€</td>
                        <td>0,75€</td>
                    </tr>
                    <tr>
                        <td>6 zones</td>
                        <td>3 hours</td>
                        <td>0,60€</td>
                        <td>1,80€</td>
                        <td>0,30€</td>
                        <td>0,90€</td>
                    </tr>
                    <tr>
                        <td>7 zones</td>
                        <td>3.5 hours</td>
                        <td>0,70€</td>
                        <td>2,10€</td>
                        <td>0,35€</td>
                        <td>1,05€</td>
                    </tr>
                    <tr>
                        <td>8 zones</td>
                        <td>4 hours</td>
                        <td>0,80€</td>
                        <td>2,40€</td>
                        <td>0,40€</td>
                        <td>1,20€</td>
                    </tr>
                    <tr>
                        <td>9 zones</td>
                        <td>4.5 hours</td>
                        <td>0,90€</td>
                        <td>2,70€</td>
                        <td>0,45€</td>
                        <td>1,35€</td>
                    </tr>
                    <tr>
                        <td>10 zones</td>
                        <td>5 hours</td>
                        <td>1,00€</td>
                        <td>3,00€</td>
                        <td>0,50€</td>
                        <td>1,50€</td>
                    </tr>
                    <tr>
                        <td>All zones</td>
                        <td>24 hours</td>
                        <td>2,00€</td>
                        <td>6,00€</td>
                        <td>1,00€</td>
                        <td>3,00€</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section>
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
        </section>
    `;
}

function showAbout() {
    scrollUp();
    document.title = "About";
    main.innerHTML = `
        <h1>About</h1>
        <section>
            <h2>What is SRT?</h2>
            <ul>
                <li>Founded in November 2024.</li>
                <li>Transportation system of the sigma republic</li>
                <li>National operator of Railway, metro, and tram tracks, depots and public roads</li>
                <li>National Carrier of trains, u-bahns, trams and buses</li>
                <li>Anything else except SRT vehicles is NOT real.</li>
            </ul>
        </section>
    `;
}

function showTechnicalDetails() {
    scrollUp();
    document.title = t.technical_details_title;
    main.innerHTML = `
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
    `;
}

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

showHome();