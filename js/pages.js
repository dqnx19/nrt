document.querySelector("header").innerHTML = `
<button onclick="showHome()">
    <img src="img/icons/logo.svg" alt="">
</button>
<button onclick="showHome()">Home Page</button>
<button onclick="showConnectionTypes()">Connection Types</button>
<button onclick="showVehicles()">Vehicles</button>
<button onclick="showFare()">Fare</button>
<button onclick="showAbout()">About</button>
<button onclick="showTechnicalDetails()">Technical Details</button>
`;

const main = document.querySelector("main");

function showHome() {
    document.title = "Home Page - SRT"
    main.innerHTML = `
    <h1>Home Page</h1>
        <section class="links">
                <button onclick="showHome()">
                    <img src="img/links-icons/home-page.svg" alt="">
                    <span>Home Page</span>
                </button>
                <button onclick="showConnectionTypes()">
                    <img src="img/links-icons/connection-types.svg" alt="">
                    <span>Connection Types</span>
                </button>
                <button onclick="showVehicles()">
                    <img src="img/links-icons/vehicles.svg" alt="">
                    <span>Vehicles</span>
                </button>
                <button onclick="showFare()">
                    <img src="img/links-icons/fare.svg" alt="">
                    <span>Fare</span>
                </button>
                <button onclick="showAbout()">
                    <img src="img/links-icons/about.svg" alt="">
                    <span>About</span>
                </button>
                <button onclick="showTechnicalDetails()">
                    <img src="img/links-icons/technical-details.svg" alt="">
                    <span>Technical Details</span>
                </button>
            </section>
    `
}

function showVehicles() {
    document.title = "Vehicles - SRT"
    main.innerHTML = `
    <h1>Vehicles</h1>
        <section>
            <h2>Skoda 18Ev (2 cars)</h2>
            <p>Class: EU 1000</p>
            <p>Maximum speed: 160 km/h</p>
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
            <p>Class: EU 1010</p>
            <p>Maximum speed: 160 km/h</p>
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
            <p>Class: EU 1020</p>
            <p>Maximum speed: 160 km/h</p>
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
            <p>Class EU 1030</p>
            <p>Maximum speed: 200 km/h</p>
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
            <p>Class 1000</p>
            <p>Maximum speed: 230 km/h</p>
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
            <p>Class 1040</p>
            <p>Maximum speed: 80 km/h</p>
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
            <p>Class EU 1050</p>
            <p>Maximum speed: 80 km/h</p>
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
            <p>Class EU 1060</p>
            <p>Maximum speed: 70 km/h</p>
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
            <p>Class EU 1070</p>
            <p>Maximum speed: 70 km/h</p>
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
function showConnectionTypes() {
    document.title = "Connection Types - SRT"
    main.innerHTML = `
    <h1>Connection Types</h1>
            <section>
                <h2>Regional Bahn Train</h2>
                <p>Stops at: Every station</p>
                <p>Route type: Domestic/Interstate</p>
            </section>
            <section>
                <h2>Regional Express Train</h2>
                <p>Stops at: Some stations and stops</p>
                <p>Route Type: Domestic/Interstate</p>
            </section>
            <section>
                <h2>InterRegio Train</h2>
                <p>Stops at: Important stations</p>
                <p>Route type: Domestic/Interstate</p>
            </section>
            <section>
                <h2>InterCity Train</h2>
                <p>Stops at: Most Important stations</p>
                <p>Route type: Domestic</p>
            </section>
            <section>
                <h2>Eurocity Train</h2>
                <p>Stops at: Most Important stations</p>
                <p>Route type: Interstate</p>
            </section>
            <section>
                <h2>U-Bahn</h2>
                <p>Stops at: Every station</p>
                <p>Route type: Urban/Suburban</p>
            </section>
            <section>
                <h2>Tram</h2>
                <p>Stops at: Every station</p>
                <p>Route type: Urban/Suburban</p>
            </section>
            <section>
                <h2>Local Bus</h2>
                <p>Stops at: Every station</p>
                <p>Route type: Urban/Suburban</p>
            </section>
    `
}

function showFare() {
    document.title = "Fare - SRT"
    main.innerHTML = `
    <h1>Fare</h1>
            <section id="tickets">
                <h2>Tickets</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Zones</th>
                            <th>Valid for</th>
                            <th>Full (2nd class)</th>
                            <th>Full (1st class)</th>
                            <th>Discounted (2nd class)</th>
                            <th>Discounted (1st class)</th>
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