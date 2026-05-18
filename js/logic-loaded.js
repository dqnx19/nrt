const body = document.body;
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

document.querySelector("header").innerHTML = `
<div class="app-drawer-wrapper"></div>
<button onclick="showHome()">
    <img src="img/icons/logo.svg" alt="" class="logo">
</button>
`;

document.querySelector("footer").innerHTML = `
    
        <button onclick="showHome()">
            <img src="img/links-icons/home-page.svg" alt="">
        </button>
        <button onclick="showAccount()">
            <img src="img/links-icons/account.svg" alt="">
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
    document.title = t.home_title;
    main.innerHTML = `
    <h1>${t.home}</h1>
    
    `
}

function showConnectionTypes() {
    document.title = t.connection_types_title;
    scrollUp();
    main.innerHTML = `
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
    `
}

function showVehicles() {
    document.title = t.vehicles_title;
    scrollUp();
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
            <h2>Skoda 18Ev ${t.cars_3}</h2>
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
            <h2>Skoda 18Ev ${t.cars_4}</h2>
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
            <h2>Skoda 26Ev ${t.cars_5}</h2>
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
            <div class="formation">
                <span class="locomotive">
                    <p>EL 1000</p>
                </span>
        </section>
    `
}

function showFare() {
    document.title = t.fare_title;
    scrollUp();
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
    `
}

function showAbout() {
    document.title = t.about_title;
    scrollUp();
    main.innerHTML = `
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
    `;
}

function showTechnicalDetails() {
    document.title = t.technical_details_title;
    scrollUp();
    main.innerHTML = `
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
}

const BIN_ID = "69e506ab36566621a8cd6ac0";
const API_KEY = "$2a$10$TocawYMNB.KMjjn2ISFy9ecxge8ja9EHy3PPq75uApN/56cCRaJwq";


window.logic = {};
window.logic.currentUser = JSON.parse(localStorage.getItem('srtUser') || 'null');

// --- HASH ---
async function sha256(str) {
    const msgUint8 = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// --- LOGIN OR REGISTER ---
window.logic.loginOrRegister = async function (username, password) {
    const passwordHash = await sha256(password);

    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY }
    });

    const data = await res.json();
    let users = Array.isArray(data.record) ? data.record : [];

    let user = users.find(u => u.username === username);

    if (user) {
        if (user.passwordHash === passwordHash) {
            window.logic.currentUser = user;
            localStorage.setItem('srtUser', JSON.stringify(user));
            alert("Logged in!");
            showAccount();
        } else {
            alert("Wrong password!");
        }
    } else {
        const newUser = {
            username,
            passwordHash,
            balance: 0,
            tickets: {}
        };

        users.push(newUser);

        await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": API_KEY
            },
            body: JSON.stringify(users)
        });

        window.logic.currentUser = newUser;
        localStorage.setItem('srtUser', JSON.stringify(newUser));

        alert("Registered!");
        showAccount();
    }
};

// --- SAVE USER ---
async function saveUser(user) {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: { "X-Master-Key": API_KEY }
    });

    const data = await res.json();
    let users = data.record || [];

    const index = users.findIndex(u => u.username === user.username);
    if (index !== -1) users[index] = user;

    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Master-Key": API_KEY
        },
        body: JSON.stringify(users)
    });
}

// --- ADD MONEY ---
window.logic.addMoney = async function () {
    if (!window.logic.currentUser) {
        alert("Login first!");
        return;
    }

    window.logic.currentUser.balance += 1;

    await saveUser(window.logic.currentUser);
    localStorage.setItem('srtUser', JSON.stringify(window.logic.currentUser));

    alert("Added 1€");
    showAccount();
};

// --- PRICE ---
const priceTable = {
    '1': 0.10, '2': 0.20, '3': 0.30, '4': 0.40, '5': 0.50,
    '6': 0.60, '7': 0.70, '8': 0.80, '9': 0.90, '10': 1.00, 'all': 2.00
};

function calculatePrice(zones, type) {
    let base = priceTable[zones] || 0.10;

    switch (type) {
        case 'full1': return base * 3;
        case 'discounted2': return base * 0.5;
        case 'discounted1': return base * 1.5;
        default: return base;
    }
}

// --- BUY TICKET ---
window.logic.buyTicket = async function (e) {
    e.preventDefault();

    if (!window.logic.currentUser) {
        alert("Login first!");
        return;
    }

    const form = e.target;

    const zones = form.querySelector('#zones').value;
    const type = form.querySelector('#type').value;
    const zoneMarked = form.querySelector('[name="zone-marked"]').value;
    const date = form.querySelector('[name="date-marked"]').value || new Date().toISOString().split('T')[0];
    const time = form.querySelector('[name="time-marked"]').value || new Date().toTimeString().slice(0, 5);

    const validityMap = {
        '1': '0.5', '2': '1', '3': '1.5', '4': '2', '5': '2.5',
        '6': '3', '7': '3.5', '8': '4', '9': '4.5', '10': '5', 'all': '24'
    };

    const price = calculatePrice(zones, type);

    if (window.logic.currentUser.balance < price) {
        alert("Not enough money!");
        return;
    }

    const ticketId = "TKT_" + Date.now();

    const ticket = {
        zones,
        validityHours: validityMap[zones],
        type,
        zoneMarked,
        date,
        time,
        price: price.toFixed(2)
    };

    window.logic.currentUser.tickets[ticketId] = ticket;
    window.logic.currentUser.balance -= price;

    await saveUser(window.logic.currentUser);
    localStorage.setItem('srtUser', JSON.stringify(window.logic.currentUser));

    alert(`Ticket ${ticketId.slice(-4)} bought!`);
    showAccount();
};

// --- UI ---
function showAccountLoggedIn() {
    const user = window.logic.currentUser;

    main.innerHTML = `
        <h1>Account</h1>

        <section>
            <p>Balance: ${user.balance.toFixed(2)} €</p>
            <button onclick="window.logic.addMoney()">Add 1€</button>
            <button onclick="logout()">Logout</button>
        </section>

        <section>
            <h2>Buy Ticket</h2>
            <form id="buy-ticket">
                <select id="zones">
                    <option value="1">1 zone / 0.5h</option>
                    <option value="2">2 zones / 1h</option>
                    <option value="3">3 zones / 1.5h</option>
                    <option value="4">4 zones / 2h</option>
                    <option value="5">5 zones / 2.5h</option>
                    <option value="6">6 zones / 3h</option>
                    <option value="7">7 zones / 3.5h</option>
                    <option value="8">8 zones / 4h</option>
                    <option value="9">9 zones / 4.5h</option>
                    <option value="10">10 zones / 5h</option>
                    <option value="all">All zones / 24h</option>
                </select>

                <select id="type">
                    <option value="full2">Full 2nd class</option>
                    <option value="full1">Full 1st class</option>
                    <option value="discounted2">Discounted 2nd class</option>
                    <option value="discounted1">Discounted 1st class</option>
                </select>

                <input type="text" name="zone-marked" placeholder="Zone Marked">
                <input type="date" name="date-marked">
                <input type="time" name="time-marked">

                <button type="submit">Buy Ticket</button>
            </form>
        </section>
    `;

    initEvents();
}

function showAccountLoggedOut() {
    main.innerHTML = `
        <h1>Account</h1>

        <form id="login">
            <input type="text" placeholder="Username">
            <input type="password" placeholder="Password">
            <button type="submit">Login / Register</button>
        </form>
    `;

    initEvents();
}

function showAccount() {
    if (window.logic.currentUser) {
        showAccountLoggedIn();
    } else {
        showAccountLoggedOut();
    }
}

function logout() {
    window.logic.currentUser = null;
    localStorage.removeItem('srtUser');
    showAccountLoggedOut();
}

// --- EVENTS ---
function initEvents() {
    const loginForm = document.getElementById("login");
    const buyForm = document.getElementById("buy-ticket");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;
            window.logic.loginOrRegister(username, password);
        });
    }

    if (buyForm) {
        buyForm.addEventListener("submit", window.logic.buyTicket);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.altKey && event.shiftKey) {
        showSetupWarning();
    }
});

function showSetupWarning() {
    body.innerHTML = `
        <h1>Setup Warning</h1>
        <p>Are you sure you want to setup the app?</p>
        <button onclick="showSetup()">Yes</button>
        <button onclick="showHome()">No</button>
    `
}