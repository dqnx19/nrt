/*const header = document.createElement("header")
const main = document.createElement("main")
const footer = document.createElement("footer")

document.body.appendChild(header)
document.body.appendChild(main)
document.body.appendChild(footer)*/

const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const body = document.body;

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

        /* Account */
        account_info: "Account Info",
        tickets: "Tickets",
        buy_ticket: "Buy Ticket",

        balance: "Balance",
        add_money: "Add Money",
        logout: "Logout",

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
        every_station: "Every Station",
        some_stations: "Some Stations",
        important_stations: "Important Stations",
        most_important_stations: "Most Important Stations",

        route_type: "Route Type",
        domestic: "Domestic",
        interstate: "Interstate",

        /* Vehicles */
        cars_1: "(1 car)",
        cars_2: "(2 cars)",
        cars_3: "(3 cars)",
        cars_4: "(4 cars)",
        cars_5: "(5 cars)",
        cars_9: "(9 cars)",

        class: "Class",
        maximum_speed: "Maximum Speed",

        /* Fare */
        tickets: "Tickets",
        tickets_types: "Tickets Types",

        zones_valid: "Zones Validity",
        time_valid: "Time Validity",
        full_2nd_class: "Full (2nd class)",
        full_1st_class: "Full (1st class)",
        discounted_2nd_class: "Discounted (2nd class)",
        discounted_1st_class: "Discounted (1st class)",

        zone: "Zone",
        zones: "Zones",
        hour: "hour",
        hours: "hours",

        zone_1: "1 zone",
        zone_2: "2 zones",
        zone_3: "3 zones",
        zone_4: "4 zones",
        zone_5: "5 zones",
        zone_6: "6 zones",
        zone_7: "7 zones",
        zone_8: "8 zones",
        zone_9: "9 zones",
        zone_10: "10 zones",
        zone_all: "All zones",

        time_0_5: "0,5 hours",
        time_1: "1 hour",
        time_1_5: "1,5 hours",
        time_2: "2 hours",
        time_2_5: "2,5 hours",
        time_3: "3 hours",
        time_3_5: "3,5 hours",
        time_4: "4 hours",
        time_4_5: "4,5 hours",
        time_5: "5 hours",
        time_24: "24 hours",

        passenger: "Passenger",
        ticket_type: "Ticket Type",
        note: "Note",

        kid: "Kid 0 - 18",
        senior: "Senior 60 - 99",
        adult: "Adult 18 - 60",
        student: "Student",
        edc: "EDC/EDC With Guide",
        edc_guide: "EDC guide",

        full: "Full",
        discounted: "Discounted",
        free: "Free",

        id_card_needed: "ID card needed",
        isic_card_required: "ISIC card required",
        edc_card_required: "EDC card required",
        edc_guide_note: "EDC guide must be with the EDC passenger",

        /* About */
        what_is_srt: "What Is SRT",

        founded: "Founded in November 2024.",
        transport_system: "Transportation system of the sigma republic",
        national_operator: "National operator of Railway, metro, and tram tracks, depots and public roads",
        national_carrier: "National Carrier of trains, u-bahns, trams and buses",
        anything_else: "Anything else except SRT vehicles is NOT real.",

        /* Technical Details */
        rolling_stock_classes: "Rolling Stock Classes",

        type_of_vehicle: "Type of vehicle",
        designation_from: "Designation from",
        designation_to: "Designation to",

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

        /* Account */
        account_info: "Inofrmace o účtu",
        tickets: "Jízdenky",
        buy_ticket: "Koupit Jízdenku",

        balance: "Zůstatek",
        add_money: "Přidat peníze",
        logout: "Odhlásit se",

        /* Connection Types */
        regional_bahn_train: "Regionální vlak",
        regional_express_train: "Regionální expres",
        interregio_train: "Inter-Regionální vlak",
        intercity_train: "InterCity vlak",
        eurocity_train: "EuroCity vlak",
        u_bahn: "Metro",
        tram: "Tramvaj",
        local_bus: "Místní autobus",

        stops_at: "Zastaví na",
        every_station: "Každé stanici",
        some_stations: "Nekterých stanicích",
        important_stations: "Důležitých stanicích",
        most_important_stations: "Nejvíce důležitých stanicích",

        route_type: "Typ trasy",
        domestic: "Vnitrostátní",
        interstate: "Mezistatátní",
        urban: "Městská",
        suburban: "Meziměstská",

        /* Vehicles */
        cars_1: "(1 vůz)",
        cars_2: "(2 vozy)",
        cars_3: "(3 vozy)",
        cars_4: "(4 vozy)",
        cars_5: "(5 vozů)",
        cars_9: "(9 vozů)",

        class: "Řada",
        maximum_speed: "Maximální Rychlost",

        /* Fare */
        tickets: "Jízdenky",
        ticket_types: "Typy jízdenek",

        zones_valid: "Zónová Platnost",
        time_valid: "Časová Platnost",
        full_2nd_class: "Plnocenný (2. třída)",
        full_1st_class: "Plnocenný (1. třída)",
        discounted_2nd_class: "Zlevněný (2. třída)",
        discounted_1st_class: "Zlevněný (1. třída)",

        zone: "Zóna",
        zones: "Zóny",
        hour: "hodina",
        hours: "hodiny",

        zone_1: "1 zóna",
        zone_2: "2 zóny",
        zone_3: "3 zóny",
        zone_4: "4 zóny",
        zone_5: "5 zón",
        zone_6: "6 zón",
        zone_7: "7 zón",
        zone_8: "8 zón",
        zone_9: "9 zón",
        zone_10: "10 zón",
        zone_all: "Všechny zóny",

        time_0_5: "0,5 hodiny",
        time_1: "1 hodina",
        time_1_5: "1,5 hodiny",
        time_2: "2 hodiny",
        time_2_5: "2,5 hodiny",
        time_3: "3 hodiny",
        time_3_5: "3,5 hodiny",
        time_4: "4 hodiny",
        time_4_5: "4,5 hodiny",
        time_5: "5 hodin",
        time_24: "24 hodin",

        passenger: "Cestující",
        ticket_type: "Typ jízdenky",
        note: "Poznámka",

        kid: "Dítě 0 - 18",
        senior: "Senior 60 - 99",
        adult: "Dospělý 18 - 60",
        student: "Student",
        edc: "EDC/EDC s průvodcem",
        edc_guide: "EDC průvodce",

        full: "Plnocenný",
        discounted: "Zlevněný",
        free: "Bezplatný",

        id_card_needed: "Je potřeba občanský průkaz",
        isic_card_required: "Je potřeba ISIC karta",
        edc_card_required: "Je potřeba EDC karta",
        edc_guide_note: "EDC průvodce musí být s EDC cestujícím",

        /* About */
        what_is_srt: "Co je SRT",
        founded: "Založeno v listopadu 2024.",
        transport_system: "Dopravní systém Sigma republiky",
        national_operator: "Národní provozovatel železničních, metra a tramvajových tratí, depa a veřejných komunikací",
        national_carrier: "Národní dopravce vlaků, metra, tramvají a autobusů",
        anything_else: "Cokoliv jiného kromě vozidel SRT není skutečné.",

        electric_locomotives: "Elektrické lokomotivy",
        electric_units: "Elektrické jednotky",
        non_traction: "Netrakční vozidla",

        /* Technical Details */
        rolling_stock_classes: "Třídy kolejových vozidel",
        type_of_vehicle: "Typ vozidla",
        designation_from: "Značení od",
        designation_to: "Značení do",

        push_pull_locomotives: "Push-Pull Lokomotivy",

        announcements: "Hlášení",

        next_station: "Příští stanice",
        next_station_request: "Příští stanice (na znamení)",
        next_station_requested: "Příští stanice (Požádano o zastavení)",
        next_station_terminus: "Příští stanice (terminus)",
        this_station: "Tato stanice (Konečná)",
        this_station_terminus: "Tato stanice (Konečná)"
    }
};

const lang = navigator.language.slice(0, 2);
const t = i18n[lang] || i18n.en;

header.innerHTML = `
    <div class="app-drawer-wrapper">
    </div>
    <button onclick="showHome()">
        <img src="img/icons/logo.svg" alt="" class="logo">
    </button>
`;

footer.innerHTML = `
    <button onclick="showPage('home')">
        <img src="img/links-icons/home-page.svg" alt="">
    </button>
    <button onclick="showPage('connection_types')">
        <img src="img/links-icons/connection-types.svg" alt="">
    </button>
    <button onclick="showPage('vehicles')">
        <img src="img/links-icons/vehicles.svg" alt="">
    </button>
    <button onclick="showPage('fare')">
        <img src="img/links-icons/fare.svg" alt="">
    </button>
    <button onclick="showPage('about')">
        <img src="img/links-icons/about.svg" alt="">
    </button>
    <button onclick="showPage('technical_details')">
        <img src="img/links-icons/technical-details.svg" alt="">
    </button>
`

function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "auto"
    });
}

const pages = {
    home: `
        <h1>Home</h1>
    `,
    connection_types: `
        <h1>${t.connection_types}</h1>
            <section>
                <h2>${t.regional_bahn_train}</h2>
                <p>${t.stops_at}: ${t.every_station}</p>
                <p>${t.route_type}: ${t.domestic}/${t.interstate}</p>
            </section>
            <section>
                <h2>${t.regional_express_train}</h2>
                <p>${t.stops_at}: ${t.some_stations}</p>
                <p>${t.route_type}: ${t.domestic}/${t.interstate}</p>
            </section>
            <section>
                <h2>${t.interregio_train}</h2>
                <p>${t.stops_at}: ${t.important_stations}</p>
                <p>${t.route_type}: ${t.domestic}/${t.interstate}</p>
            </section>
            <section>
                <h2>${t.intercity_train}</h2>
                <p>${t.stops_at}: ${t.most_important_stations}</p>
                <p>${t.route_type}: ${t.domestic}</p>
            </section>
            <section>
                <h2>${t.eurocity_train}</h2>
                <p>${t.stops_at}: ${t.most_important_stations}</p>
                <p>${t.route_type}: ${t.interstate}</p>
            </section>
            <section>
                <h2>${t.u_bahn}</h2>
                <p>${t.stops_at}: ${t.every_station}</p>
                <p>${t.route_type}: ${t.urban}/${t.suburban}<</p>
            </section>
            <section>
                <h2>${t.tram}</h2>
                <p>${t.stops_at}: ${t.every_station}</p>
                <p>${t.route_type}: ${t.urban}/${t.suburban}</p>
            </section>
            <section>
                <h2>${t.local_bus}</h2>
                <p>${t.stops_at}: ${t.every_station}</p>
                <p>${t.route_type}: ${t.urban}/${t.suburban}</p>
            </section>
    `,

    vehicles: `
        <h1>Vehicles</h1>
        <section>
            <h2>Skoda 18Ev ${t.cars_2}</h2>
            <p>${t.class}: EU 1000</p>
            <p>${t.maximum_speed}: 160 km/h</p>
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
            <h2>Skoda 18Ev ${t.cars_3}</h2>
            <p>${t.class}: EU 1010</p>
            <p>${t.maximum_speed}: 160 km/h</p>
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
            <h2>Skoda 18Ev ${t.cars_4}</h2>
            <p>${t.class}: EU 1020</p>
            <p>${t.maximum_speed}: 160 km/h</p>
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
            <h2>Skoda 26Ev ${t.cars_5}</h2>
            <p>${t.class}: EU 1030</p>
            <p>${t.maximum_speed}: 200 km/h</p>
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
            <h2>Siemens Viaggio Comfort ${t.cars_9}</h2>
            <p>${t.class}: 1000</p>
            <p>${t.maximum_speed}: 230 km/h</p>
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
            <h2>81-71 M ${t.cars_5}</h2>
            <p>${t.class}: EU 1040</p>
            <p>${t.maximum_speed}: 80 km/h</p>
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
            <h2>M1 ${t.cars_5}</h2>
            <p>${t.class}: EU 1050</p>
            <p>${t.maximum_speed}: 80 km/h</p>
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
            <h2>Skoda 40T ${t.cars_3}</h2>
            <p>${t.class}: EU 1060</p>
            <p>${t.maximum_speed}: 70 km/h</p>
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
            <h2>Skoda 45T ${t.cars_5}</h2>
            <p>${t.class}: EU 1070</p>
            <p>${t.maximum_speed}: 70 km/h</p>
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
            <h2>Siemens Vectron ${t.cars_1}</h2>
            <p>${t.class}: EL 1000</p>
            <p>${t.maximum_speed}: 230 km/h</p>
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
    `,
    fare: `
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
                            <td>${t.zone_1}</td>
                            <td>${t.time_0_5}</td>
                            <td>0,10€</td>
                            <td>0,30€</td>
                            <td>0,05€</td>
                            <td>0,15€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_2}</td>
                            <td>${t.time_1}</td>
                            <td>0,20€</td>
                            <td>0,60€</td>
                            <td>0,10€</td>
                            <td>0,30€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_3}</td>
                            <td>${t.time_1_5}</td>
                            <td>0,30€</td>
                            <td>0,90€</td>
                            <td>0,15€</td>
                            <td>0,45€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_4}</td>
                            <td>${t.time_2}</td>
                            <td>0,40€</td>
                            <td>1,20€</td>
                            <td>0,20€</td>
                            <td>0,60€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_5}</td>
                            <td>${t.time_2_5}</td>
                            <td>0,50€</td>
                            <td>1,50€</td>
                            <td>0,25€</td>
                            <td>0,75€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_6}</td>
                            <td>${t.time_3}</td>
                            <td>0,60€</td>
                            <td>1,80€</td>
                            <td>0,30€</td>
                            <td>0,90€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_7}</td>
                            <td>${t.time_3_5}</td>
                            <td>0,70€</td>
                            <td>2,10€</td>
                            <td>0,35€</td>
                            <td>1,05€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_8}</td>
                            <td>${t.time_4}</td>
                            <td>0,80€</td>
                            <td>2,40€</td>
                            <td>0,40€</td>
                            <td>1,20€</td>
                        </tr>                        
                        <tr>
                            <td>${t.zone_9}</td>
                            <td>${t.time_4_5}</td>
                            <td>0,90€</td>
                            <td>2,70€</td>
                            <td>0,45€</td>
                            <td>1,35€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_10}</td>
                            <td>${t.time_5}</td>
                            <td>1,00€</td>
                            <td>3,00€</td>
                            <td>0,50€</td>
                            <td>1,50€</td>
                        </tr>
                        <tr>
                            <td>${t.zone_all}</td>
                            <td>${t.time_24}</td>
                            <td>2,00€</td>
                            <td>6,00€</td>
                            <td>1,00€</td>
                            <td>3,00€</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <h2>${t.ticket_types}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>${t.passenger}</th>
                            <th>${t.ticket_type}</th>
                            <th>${t.note}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${t.kid}</td>
                            <td>${t.free}</td>
                            <td>${t.id_card_needed}</td>
                        </tr>
                        <tr>
                            <td>${t.senior}</td>
                            <td>${t.free}</td>
                            <td>${t.id_card_needed}</td>
                        </tr>
                        <tr>
                            <td>${t.adult}</td>
                            <td>${t.full}</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>${t.student}</td>
                            <td>${t.discounted}</td>
                            <td>${t.isic_card_required}</td>
                        </tr>
                        <tr>
                            <td>${t.edc}</td>
                            <td>${t.discounted}</td>
                            <td>${t.edc_card_required}</td>
                        </tr>
                        <tr>
                            <td>${t.edc_guide}</td>
                            <td>${t.free}</td>
                            <td>${t.edc_guide_note}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
    `,

    about: `
        <h1>${t.about}</h1>
        <section>
            <h2>${t.what_is_srt}</h2>
            <ul>
                <li>${t.founded}</li>
                <li>${t.transport_system}</li>
                <li>${t.national_operator}</li>
                <li>${t.national_carrier}</li>
                <li>${t.anything_else}</li>
            </ul>
        </section>
    `,

    technical_details: `
        <h1>${t.technical_details}</h1>
            <section>
                <h2>${t.rolling_stock_classes}</h2>
                <table>
                    <thead>
                        <th>${t.type_of_vehicle}</th>
                        <th>${t.designation_from}</th>
                        <th>${t.designation_to}</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${t.electric_locomotives}</td>
                            <td>EL 1000 0000-0</td>
                            <td>EL 9999 9999-9</td>
                        </tr>
                        <tr>
                            <td>${t.electric_units}</td>
                            <td>EU 1000 0000-0</td>
                            <td>EU 9999 9999-9</td>
                        </tr>
                        <tr>
                            <td>${t.non_traction}</td>
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
    `

};

function showPage(pageNameLowerCase, pageNameUpperCase) {
    scrollUp();
    setLastPage(pageNameLowerCase);
    document.title = pageNameUpperCase;
    main.innerHTML = pages[pageNameLowerCase];
}

function showLastPage() {
    const lastPage = localStorage.getItem('lastPage') || 'home';
    const pageNameUpperCase = lastPage.charAt(0).toUpperCase() + lastPage.slice(1).replace('_', ' ');
    showPage(lastPage, pageNameUpperCase);
}

function setLastPage(pageName) {
    localStorage.setItem('lastPage', pageName);
}

showLastPage();