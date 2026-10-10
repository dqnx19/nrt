import { importCSSFromList, setClass, setId, setHTML, setText, redirect, importJSFromList, getURLParam, setTitle, setFavicon, setAttribute, scrollUp, setContentOfHeader, setContentOfMain, setContentOfFooter } from "https://js.nether.click/nether.js";

setAttribute("html", "lang", "en")

setFavicon("img/icons/favicon.svg")

await importCSSFromList([
    "https://web-ui.nether.click/fonts/lexend/lexend.css",

    "https://web-ui.nether.click/components/css/all.css",
    "https://web-ui.nether.click/components/css/app-drawer.css",

    "https://web-ui.nether.click/components/css/body.css",
    "https://web-ui.nether.click/components/css/button.css",

    "https://web-ui.nether.click/components/css/cards.css",

    "https://web-ui.nether.click/components/css/details-panel.css",

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

    "https://web-ui.nether.click/components/css/tabs.css",
    "https://web-ui.nether.click/components/css/timeline.css",

    "https://web-ui.nether.click/components/css/train-formation.css",
])

await importJSFromList([
    "https://nether.click/js/import-app-drawer.js",
    "https://nether.click/js/import-app-check.js",

    "https://web-ui.nether.click/components/js/app-drawer.js",
    "https://web-ui.nether.click/components/js/tabs.js",
    "https://web-ui.nether.click/components/js/timeline.js",
    "https://web-ui.nether.click/components/js/headings.js",
    "https://web-ui.nether.click/components/js/cards.js",
    "https://web-ui.nether.click/components/js/details-panel.js",

    "https://web-ui.nether.click/lib/marked.js",
])

setContentOfHeader(`
    <div class="app-drawer-wrapper"></div>
    <button onclick="showHome()" class="logo">
        <img src="img/icons/logo.svg" alt="">
    </button>
`)

const pages = await fetch("json/pages.json").then(r => r.json());

await setContentOfFooter(
    `<button onclick="showHome()" title="shows home page">
        <img src="img/icons/logo.svg" alt="home page link icon">
    </button>`
    +
    pages.map(element => `
        <button onclick="${element.func}" title="shows ${element.name} page">
            <img src="img/links-icons/${element.techname}.svg" alt="${element.name} page link icon">
        </button>
    `).join("")
);

window.showHome = showHome;
window.showAccount = showAccount;
window.showConnectionTypes = showConnectionTypes;
window.showVehicles = showVehicles;
window.showServices = showServices;
window.showFare = showFare;
window.showAbout = showAbout;
window.showHelp = showHelp;

async function showHome() {
    scrollUp();
    setTitle("Nether Republic Transport");
    setContentOfMain("");

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "Welcome to NRT!"
    })

    nwui.cards.create({
        parent: "main",
        id: "links"
    })

    const db = await fetch("json/pages.json").then(r => r.json());

    db.forEach(element => {
        nwui.cards.addCard({
            onclick: element.func,
            image: `img/links-icons/${element.techname}.svg`,
            heading: `${element.name}`,
            parent: "#links"
        })
    });
}

async function showAccount() {
    scrollUp();
    setTitle("Account - Nether Republic Transport");
    setContentOfMain("");

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "Account"
    })
}

async function showConnectionTypes() {
    scrollUp();
    setTitle("Connection Types - Nether Republic Transport");
    setContentOfMain("");

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "Connection Types"
    });

    nwui.tabs.create({
        id: "connection-types",
        parent: "main"
    });

    const db = await fetch("json/connection-types.json").then(r => r.json());

    db.forEach(element => {
        nwui.tabs.addTab({
            id: element.techname,
            title: element.name,
            image: `img/connections/${element.techname}.svg`,
            parent: "#connection-types",
            innerHTML: ""
        });
    });

    db.forEach(element => {
        nwui.detailsPanel.create({
            parent: `#${element.techname}`,
            details: [
                {
                    image: "img/connection-icons/stops-at.svg",
                    text: element.stops_at
                },
                {
                    image: "img/connection-icons/route-type.svg",
                    text: element.route_type
                },
                {
                    image: "img/connection-icons/frequency.svg",
                    text: element.frequency
                }
            ]
        });
    });

    nwui.tabs.displayTab({
        selector: `#${db[0].techname}`
    });
}

async function showVehicles() {
    scrollUp();
    setTitle("Vehicles - Nether Republic Transport");
    setContentOfMain("");

    const db = await fetch("json/vehicles.json").then(r => r.json());
    const services = await fetch("json/services.json").then(r => r.json());

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "Vehicles"
    });

    nwui.tabs.create({
        id: "vehicles",
        parent: "main"
    });

    db.forEach(element => {
        nwui.tabs.addTab({
            id: element.techname,
            title: element.name,
            parent: "#vehicles",
            innerHTML: ``
        });
    });

    db.forEach(element => {
        nwui.detailsPanel.create({
            parent: `#${element.techname}`,
            details: [
                {
                    image: "img/vehicles-icons/vehicle-class.svg",
                    text: element.vehicles_class
                },
                {
                    image: "img/vehicles-icons/maximum-speed.svg",
                    text: element.maximum_speed
                }
            ]
        });
    });

    db.forEach(element => {
        nwui.detailsPanel.create({
            id: `${element.techname}-services`,
            parent: `#${element.techname}`
        })

        element.services.forEach(service => {
            const serviceData = services.find(s => s.techname === service);

            nwui.detailsPanel.addDetail({
                parent: `#${element.techname}-services`,
                image: `img/services/${service}.svg`,
                text: serviceData ? serviceData.name : service
            })
        })
    });

    db.forEach(element => {

        const formationDiv = document.createElement("div");
        formationDiv.className = "formation"
        document.querySelector(`#${element.techname}`).appendChild(formationDiv)

        element.formation.forEach(unit => {
            const div = document.createElement("div");
            div.className = unit.type
            div.textContent = unit.text
            formationDiv.appendChild(div)
        })
    })

    nwui.tabs.displayTab({
        selector: `#${db[0].techname}`
    });
}

async function showServices() {
    scrollUp();
    setTitle("Services - Nether Republic Transport");
    setContentOfMain("");

    const services = await fetch("json/services.json").then(r => r.json());

    nwui.headings.create({
        parent: "main",
        level: 1,
        content: "Services"
    });

    nwui.tabs.create({
        parent: "main",
        id: "services"
    });

    services.forEach(service => {
        nwui.tabs.addTab({
            id: service.techname,
            title: service.name,
            image: `img/services/${service.techname}.svg`,
            parent: "#services",
            innerHTML: ""
        })

        const list = document.createElement("ul");

        service.description.forEach(element => {
            const list_item = document.createElement("li")
            list_item.innerText = element
            list.appendChild(list_item)
        })

        const tab = document.querySelector(`#${service.techname}`);
        tab.appendChild(list);
    });


    nwui.tabs.displayTab({
        selector: `#${services[0].techname}`
    });
}

async function showFare() {
    scrollUp();
    setTitle("Fare - Nether Republic Transport");
    setContentOfMain("");

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "Fare"
    });

    nwui.tabs.create({
        parent: "main",
        id: "fare",
        tabs: [
            {
                id: "tickets",
                title: "Tickets",
                innerHTML: `
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
                `
            },
            {
                id: "tickets_types",
                title: "Tickets Types",
                innerHTML: `
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
                `
            }
        ]
    });

    const prices = document.querySelector("#tickets table tbody");

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


    nwui.tabs.displayTab({
        selector: ""
    })
}

async function showAbout() {
    scrollUp();
    setTitle("About - Nether Republic Transport");
    setContentOfMain("");

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "About"
    });

    nwui.tabs.create({
        id: "about",
        parent: "main",
        tabs: [
            {
                id: "what_is_nether_republic_transport",
                title: "What is Nether Republic Transport",
                innerHTML: `
                    <ul></ul>
                `
            },
            {
                id: "build_on",
                title: "Build On",
                innerHTML: `
                    <ul></ul>
                `
            },
            {
                id: "history",
                title: "History",
                innerHTML: `
                    <div class="timeline"></div>
                `
            }
        ]
    });

    const db = await fetch("json/about.json").then(r => r.json());

    const what_is = document.querySelector("#what_is_nether_republic_transport ul");
    const build_on = document.querySelector("#build_on ul");

    what_is.innerHTML = db.what_is_nrt.data.map(element => `
        <li>${element}</li>
    `).join("")

    build_on.innerHTML = db.build_on.data.map(element => `
        <li>${element}</li>
    `).join("")

    nwui.timeline.create({
        parent: "#history",
        id: "timeline"
    });

    db.history.forEach(event => {
        nwui.timeline.addEvent({
            parent: "#timeline",
            date: event.date,
            description: event.description
        })
    });
}

async function showHelp() {
    scrollUp();
    setTitle("Help - Nether Republic Transport");
    setContentOfMain(``);

    const help = await fetch("json/help.json").then(r => r.json());

    nwui.headings.create({
        level: 1,
        parent: "main",
        content: "Help"
    });

    nwui.tabs.create({
        id: "help",
        parent: "main"
    });

    for (const helpPage of help) {
        const file = await fetch(`help/${helpPage.techname}.md`).then(r => r.text());
        const html = marked.parse(file);

        nwui.tabs.addTab({
            id: helpPage.techname,
            title: helpPage.name,
            parent: "#help",
            innerHTML: html
        });
    };
}

showHome();