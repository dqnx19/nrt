const main = document.querySelector("main");

const i18n = {
    en: {
        /* Titles */
        home_title: "Home Page - SRT",
        connection_types_title: "Connection Types - SRT",
        vehicles_title: "Vehicles - SRT",
        fare_title: "Fare - SRT",
        about_title: "About - SRT",
        technical_details_title: "Technical Details - SRT",

        /* Page Headings */
        home: "Home Page",
        connection_types: "Connection Types",
        vehicles: "Vehicles",
        fare: "Fare",
        about: "About",
        technical_details: "Technical Details",

        /* Connection Types */
        regional_bahn_train: "Regional Bahn Train",
        regional_express_train: "Regional Express Train",
        interregio_train: "InterRegio Train",
        intercity_train: "InterCity Train",
        eurocity_train: "Eurocity Train",
        u_bahn: "U-Bahn",
        tram: "Tram",
        local_bus: "Local Bus",

        stops_at: "Stops At",
        route_type: "Route Type",

        /* Vehicles */
        cars_2: "2 cars",
        cars_3: "3 cars",
        cars_4: "4 cars",
        cars_5: "5 cars",
        cars_9: "9 cars",

        class: "Class",
        maximum_speed: "Maximum Speed",

        /* Fare */
        tickets: "Tickets",
        tickets_types: "Tickets Types",

        zone: "Zone",
        zones: "Zones",




    },
    cs: {
        /* Titles */
        home_title: "Domovská Stránka - SRT",
        connection_types_title: "Typy Spojení - SRT",
        vehicles_title: "Vozidla - SRT",
        fare_title: "Tarif - SRT",
        about_title: "O nás - SRT",
        technical_details_title: "Technické detaily - SRT",

        /* Page Headings */
        home: "Domovská stránka",
        connection_types: "Typy spojení",
        vehicles: "Vozidla",
        fare: "Tarif",
        about: "O nás",
        technical_details: "Technické detaily",

        /* Connection Types */
        regional_bahn_train: "Regionální vlak",
        regional_express_train: "Regionální expres",
        interregio_train: "Inter-Regionální vlak",
        intercity_train: "InterCity vlak",
        eurocity_train: "EuroCity vlak",
        u_bahn: "Metro",
        tram: "Tramvaj",
        local_bus: "Místní autobus",

        stops_at: "Zastavuje v",
        route_type: "Typ trasy",

        /* Vehicles */
        cars_2: "2 vozy",
        cars_3: "3 vozy",
        cars_4: "4 vozy",
        cars_5: "5 vozů",
        cars_9: "9 vozů",

        class: "Řada",
        maximum_speed: "Maximalní Rychlost",

        /* Fare */
        tickets: "Jízdenky",
        tickets_types: "Typy jízdenek",

        zones_valid: "Zónová Platnost",
        time_valid: "Časová Platnost",
        full_2nd_class: "Plnocenný (2. třída)",
        full_1st_class: "Plnocenný (1. třída)",
        discounted_2nd_class: "Zlevněný (2. třída)",
        discounted_1st_class: "Zlevněný (1. třída)",
    }
};

const lang = navigator.language.slice(0, 2);
const t = i18n[lang] || i18n.en;

document.querySelector("header").innerHTML = `
<button onclick="showHome()">
    <img src="img/icons/logo.svg" alt="">
</button>
<button onclick="showHome()">${t.home}</button>
<button onclick="showConnectionTypes()">${t.connection_types}</button>
<button onclick="showVehicles()">${t.vehicles}</button>
<button onclick="showFare()">${t.fare}</button>
<button onclick="showAbout()">${t.about}</button>
<button onclick="showTechnicalDetails()">${t.technical_details}</button>
`;

document.querySelector("footer").innerHTML = `
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

function showHome() {
    document.title = t.home_title;
    main.innerHTML = `
    <h1>${t.home}</h1>
        <section class="links">
                
            </section>
    `
}

function showConnectionTypes() {
    document.title = t.connection_types_title;
    main.innerHTML = `
    <h1>${t.connection_types}</h1>
            <section>
                <h2>${t.regional_bahn_train}</h2>
                <p>${t.stops_at}: Every station</p>
                <p>${t.route_type}: Domestic/Interstate</p>
            </section>
            <section>
                <h2>${t.regional_express_train}</h2>
                <p>${t.stops_at}: Some stations and stops</p>
                <p>${t.route_type}: Domestic/Interstate</p>
            </section>
            <section>
                <h2>${t.interregio_train}</h2>
                <p>${t.stops_at}: Important stations</p>
                <p>${t.route_type}: Domestic/Interstate</p>
            </section>
            <section>
                <h2>${t.intercity_train}</h2>
                <p>${t.stops_at}: Most Important stations</p>
                <p>${t.route_type}: Domestic</p>
            </section>
            <section>
                <h2>${t.eurocity_train}</h2>
                <p>${t.stops_at}: Most Important stations</p>
                <p>${t.route_type}: Interstate</p>
            </section>
            <section>
                <h2>${t.u_bahn}</h2>
                <p>${t.stops_at}: Every station</p>
                <p>${t.route_type}: Urban/Suburban</p>
            </section>
            <section>
                <h2>${t.tram}</h2>
                <p>${t.stops_at}: Every station</p>
                <p>${t.route_type}: Urban/Suburban</p>
            </section>
            <section>
                <h2>${t.local_bus}</h2>
                <p>${t.stops_at}: Every station</p>
                <p>${t.route_type}: Urban/Suburban</p>
            </section>
    `
}

function showVehicles() {
    document.title = t.vehicles_title;
    main.innerHTML = `
    <h1>Vehicles</h1>
        <section>
            <h2>Skoda 18Ev ${t.cars_2}</h2>
            <p>${t.class}: EU 1000</p>
            <p>${t.maximum_speed}: 160 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
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
            <p>${t.class}: EU 1010</p>
            <p>${t.maximum_speed}: 160 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
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
            <p>${t.class}: EU 1020</p>
            <p>${t.maximum_speed}: 160 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
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
            <h2>Skoda 26Ev</h2>
            <p>${t.class}: EU 1030</p>
            <p>${t.maximum_speed}: 200 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/002-1st-class-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>Class EU 1030</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1031</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1032</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1033</p>
                </span>
                <span class="unit-right">
                    <p>Class EU 1034</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Siemens Viaggio Comfort</h2>
            <p>${t.class}: 1000</p>
            <p>${t.maximum_speed}: 230 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/002-1st-class-icon.png" alt="">
            <img src="img/services/003-dining-car-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>Class 1000</p>
                </span>
                <span class="unit-middle">
                    <p>Class 1001</p>
                </span>
                <span class="unit-middle">
                    <p>Class 1002</p>
                </span>
                <span class="unit-middle">
                    <p>Class 1003</p>
                </span>
                <span class="unit-middle">
                    <p>Class 1004</p>
                </span>
                <span class="unit-middle">
                    <p>Class 1005</p>
                </span>
                <span class="unit-middle">
                    <p>Class 1006</p>
                </span>
                <span class="unit-middle">
                    <p>Class 1007</p>
                </span>
                <span class="unit-middle">
                    <p>Class 1008</p>
                </span>
                <span class="locomotive">
                    <p>Class EL 1000</p>
                </span>
            </div>
        </section>
        <section>
            <h2>81-71 M</h2>
            <p>${t.class} 1040</p>
            <p>${t.maximum_speed}: 80 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>Class EU 1040</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1041</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1042</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1043</p>
                </span>
                <span class="unit-right">
                    <p>Class EU 1044</p>
                </span>
            </div>
        </section>
        <section>
            <h2>M1</h2>
            <p>${t.class} EU 1050</p>
            <p>${t.maximum_speed}: 80 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>Class EU 1050</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1051</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1052</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1053</p>
                </span>
                <span class="unit-right">
                    <p>Class EU 1054</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Skoda 40T</h2>
            <p>${t.class} EU 1060</p>
            <p>${t.maximum_speed}: 70 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>Class EU 1060</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1061</p>
                </span>
                <span class="unit-right">
                    <p>Class EU 1062</p>
                </span>
            </div>
        </section>
        <section>
            <h2>Skoda 45T</h2>
            <p>${t.class} EU 1070</p>
            <p>${t.maximum_speed}: 70 km/h</p>
            <br>
            <img src="img/services/001-2nd-class-icon.png" alt="">
            <img src="img/services/005-bicycle-icon.png" alt="">
            <img src="img/services/006-wheelchair-icon.png" alt="">
            <img src="img/services/007-power-socket-icon.png" alt="">
            <img src="img/services/008-usb-icon.png" alt="">
            <img src="img/services/009-air-conditioning-icon.png" alt="">
            <img src="img/services/010-wifi-icon.png" alt="">
            <br>
            <div class="formation">
                <span class="unit-left">
                    <p>Class EU 1070</p>
                </span>
                <span class="unit-middle">
                    <p>Class EU 1071</p>
                </span>
                <span class="unit-right">
                    <p>Class EU 1072</p>
                </span>
            </div>
        </section>
    `
}

function showFare() {
    document.title = "Fare - SRT"
    main.innerHTML = `
    <h1>${t.fare}</h1>
            <section id="tickets">
                <h2>${t.tickets}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>${t.zones_valid}</th>
                            <th>${t.time_valid}</th>
                            <th>${t.full_2nd_class}</th>
                            <th>${t.full_1st_class}</th>
                            <th>${t.discounted_2nd_class}</th>
                            <th>${t.discounted_1st_class}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 zone</td>
                            <td>0,5 hour</td>
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
                            <td>1,5 hours</td>
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
                            <td>2,5 hours</td>
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
                            <td>3,5 hours</td>
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
                            <td>4,5 hours</td>
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
                <h2>Tickets Types</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Passenger</th>
                            <th>Ticket type</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Kid 0 - 18, Senior 60 - 99</td>
                            <td>Free</td>
                            <td>ID Card needed</td>
                        </tr>
                        <tr>
                            <td>Adult 18 - 60</td>
                            <td>Full</td>
                        </tr>
                        <tr>
                            <td>Student</td>
                            <td>Discounted</td>
                            <td>ISIC Card required</td>
                        </tr>
                        <tr>
                            <td>EDC/EDC With Guide</td>
                            <td>Discounted</td>
                            <td>EDC Card required</td>
                        </tr>
                        <tr>
                            <td>EDC guide</td>
                            <td>Free</td>
                            <td>Must travel with person who has EDC Card</td>
                        </tr>
                    </tbody>
                </table>
            </section>
    `
}
function showAbout() {
    document.title = "About - SRT"
    main.innerHTML = `
    <h1>About</h1>
        <section id="what-is-srt">
            <h2>What Is SRT</h2>
            <ul>
                <li>Founded in November 2024.</li>
                <li>Transport system for the entire Sigma Republic</li>
                <li>National operator of Railway, metro, and tram tracks, depots and public roads</li>
                <li>National Carrier of trains, u-bahns, trams and buses</li>
            </ul>
        </section>
        <section id="important-info">
            <h2>What is important to keep in mind</h2>
            <ul>
                <li>SR isn't a real republic.</li>
                <li>SRT isn't a real transport system.</li>
                <li>SRT vehicles are real.</li>
                <li>SRT Tickets aren't real.</li>
                <li>SRT eshop isn't real.</li>
            </ul>
        </section>
    `;
}

function showTechnicalDetails() {
    document.title = "Technical Details - SRT"
    main.innerHTML = `
    <h1>Technical Details</h1>
            <section>
                <h2>Rolling Stock Classes</h2>
                <table>
                    <thead>
                        <th>Type of vehicle</th>
                        <th>Designation from</th>
                        <th>Designation to</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Electric locomotives</td>
                            <td>EL 1000 0000-0</td>
                            <td>EL 9999 9999-9</td>
                        </tr>
                        <tr>
                            <td>Electric units</td>
                            <td>EU 1000 0000-0</td>
                            <td>EU 9999 9999-9</td>
                        </tr>
                        <tr>
                            <td>Non-traction units/vagons</td>
                            <td>0000 0000-0</td>
                            <td>9999 9999-9</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Push-Pull Locomotives</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Vehicle Type</th>
                            <th>Maximum speed</th>
                            <th>Class</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Siemens Vectron<br>(1 car)</td>
                            <td>200 km/h</td>
                            <td>EL 1000</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>Announcements</h2>
                <!-- <table>
                    <thead>
                        <tr>
                            <th>Type of stop</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                </table> -->
                <p>Next station</p>
                <li>{gong} Next station {station name}.</li>
                <p>Next station (Request)</p>
                <li>{gong} Next station {station name} request stop press button for exit.</li>
                <p>Next stop (Requested)</p>
                <li>{gong} Next station {station name} the vehicle will stop.</li>
                <p>Next station (Terminus)</p>
                <li>{gong} Next station {station name} terminus station.</li>
                <p>This station</p>
                <li>{gong} {station name}.</li>
                <p>This station (Terminus)</p>
                <li>{gong} {station name} terminus station please exit the vehicle.</li>
            </section>
    `
}