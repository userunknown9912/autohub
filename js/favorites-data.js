const islandData = {
    "Jamaica": {
        ageRestriction: "Maximum 6 years old (some exemptions for Classic/Commercial)",
        icon: "fa-sun"
    },
    "Trinidad & Tobago": {
        ageRestriction: "Maximum 4 years old strictly enforced",
        icon: "fa-umbrella-beach"
    },
    "Bahamas": {
        ageRestriction: "No strict limit, but vehicles over 10 years old attract much higher import duties.",
        icon: "fa-water"
    },
    "Barbados": {
        ageRestriction: "Typically maximum 4 years old",
        icon: "fa-anchor"
    },
    "Guyana": {
        ageRestriction: "Maximum 8 years old for passenger cars",
        icon: "fa-tree",
    },
    "Kenya": {
        ageRestriction: "Strict 8-year age rule (2019 or newer currently)",
        icon: "fa-earth-africa"
    },
    "Antigua & Barbuda": {
        ageRestriction: "No strict age limit on used car imports",
        icon: "fa-sun"
    }
};

const favoritesData = [
    // Jamaica Stock (Grouped by Body Type)
    {
        island: "Jamaica", brand: "Toyota", model: "Corolla Fielder", bodyType: "Station Wagons", year: "2021 - 2026",
        images: ["images/fielder2.jpeg", "images/fielder.jpeg"],
        caption: "Wagon", description: "Spacious estate car offering great fuel economy and reliability.", engine: "1500cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Jamaica", brand: "Toyota", model: "Corolla Axio", bodyType: "Sedans", year: "2021 - 2026",
        images: ["images/axio.jpeg", "images/axio2.jpg"], caption: "Premium Sedan", description: "Elegant and comfortable sedan with excellent reliability and efficiency.", engine: "1500cc/1800cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Jamaica", brand: "Honda", model: "Civic", bodyType: "Sedans", year: "2021 - 2026",
        images: ["images/civic.jpeg", "images/civic2.jpeg", "images/civic3.jpeg"], caption: "Sporty Sedan", description: "Dynamic handling and modern tech features for an engaging drive.", engine: "1500cc/1800cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Jamaica", brand: "Toyota", model: "Probox", bodyType: "Mini Station Wagons", year: "2021 - 2026",
        images: ["images/probox.jpeg"], caption: "Workhorse", description: "The ultimate commercial vehicle built purely for durability.", engine: "1500cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Jamaica", brand: "Mazda", model: "Demio", bodyType: "Hatchbacks", year: "2021 - 2026",
        images: ["images/demio.jpeg", "images/auction.png", "images/CX-5.jpeg"], caption: "Sporty", description: "A stylish and responsive hatchback with a premium interior feel.", engine: "1300cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Jamaica", brand: "Honda", model: "Vezel", bodyType: "SUVs", year: "2021 - 2026",
        images: ["images/vezel.jpg", "images/vezel2.jpg", "images/vezel3.jpg", "images/vezel4.jpg", "images/vezel5.jpg"], caption: "Crossover", description: "Stylish hybrid Crossover offering power and economy.", engine: "1500cc", transmission: "Auto", badgeColor: "#25d366"
    },
    {
        island: "Jamaica", brand: "Nissan", model: "X-Trail", bodyType: "SUVs", year: "2021 - 2026",
        images: ["images/X-Trail.jpeg"], caption: "Top SUV", description: "Reliable and spacious SUV handling all terrains smoothly.", engine: "2000cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Jamaica", brand: "Toyota", model: "Corolla Cross", bodyType: "SUVs", year: "2021 - 2026",
        images: ["images/cross1.jpg", "images/cross2.jpg", "images/cross3.jpg"], caption: "Premium", description: "Modern, elevated driving experience with Corolla reliability.", engine: "1800cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Jamaica", brand: "Toyota", model: "Aqua", bodyType: "Hatchbacks", year: "2021 - 2026",
        images: ["images/aqua2.jpg", "images/aqua.jpg"], caption: "Hybrid King", description: "Exceptionally economical hybrid hatchback.", engine: "1500cc Hybrid", transmission: "Auto", badgeColor: "#25d366"
    },
    {
        island: "Jamaica", brand: "Suzuki", model: "Swift", bodyType: "Hatchbacks", year: "2021 - 2026",
        images: ["images/swift.jpeg"], caption: "Fun Drive", description: "Lightweight, agile, and incredibly fun to drive hatchback.", engine: "1200cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Jamaica", brand: "Toyota", model: "Hiace", bodyType: "Vans", year: "2021 - 2026",
        images: ["images/Hiace.jpg"], caption: "Transport", description: "Unbreakable passenger and cargo transport legend.", engine: "2000cc / 3000cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Jamaica", brand: "Toyota", model: "RAV4", bodyType: "SUVs", year: "2021 - 2026",
        images: ["images/rav4.jpeg", "images/rav42.jpg"], caption: "Iconic SUV", description: "Dynamic, robust, and highly demanded SUV globally.", engine: "2000cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Jamaica", brand: "Toyota", model: "Mark X", bodyType: "Sedans", year: "2021 - 2026",
        images: ["images/markx.jpg", "images/markx2.jpg", "images/markx3.jpg", "images/markx4.jpg"], caption: "Luxury Sedan", description: "High-performance luxury sedan built for comfort and speed.", engine: "2500cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Jamaica", brand: "Toyota", model: "Vitz", bodyType: "Hatchbacks", year: "2021 - 2026",
        images: ["images/vitz3.jpg", "images/vitz2.jpeg", "images/vitz.png"], caption: "City Car", description: "Compact, reliable, and perfectly suited for city driving.", engine: "1000cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Jamaica", brand: "Honda", model: "Fit", bodyType: "Hatchbacks", year: "2021 - 2026",
        images: ["images/fit.jpeg", "images/fit2.jpg"], caption: "Compact", description: "Versatile and highly efficient subcompact car ideal for every day.", engine: "1300cc", transmission: "Auto", badgeColor: "var(--primary)"
    },

    // Old Trindad & Tobago
    {
        island: "Trinidad & Tobago",
        brand: "Nissan",
        model: "X-Trail",
        year: "2023 - 2026",
        images: ["images/X-Trail.jpeg"],
        caption: "Top SUV",
        description: "Robust SUV that handles varied terrain perfectly. Great for larger families.",
        engine: "2000cc",
        transmission: "Auto",
        badgeColor: "var(--secondary)"
    },
    // Old Bahamas
    {
        island: "Bahamas",
        brand: "Toyota",
        model: "Prius",
        year: "2017 - 2026",
        images: ["images/prius.jpeg"],
        caption: "Hybrid King",
        description: "Unmatched fuel efficiency with a proven hybrid drivetrain. Great for island driving.",
        engine: "1800cc Hybrid",
        transmission: "Auto",
        badgeColor: "#25d366",
    },
    // Old Kenya
    {
        island: "Kenya",
        brand: "Toyota",
        model: "Land Cruiser Prado",
        year: "2019 - 2026",
        images: ["images/prado.jpeg"],
        caption: "Ultimate SUV",
        description: "Unmatched durability and luxury. Perfect for navigating any terrain with comfort.",
        engine: "2700cc / 2800cc",
        transmission: "Auto",
        badgeColor: "var(--primary)"
    },
    {
        island: "Kenya",
        brand: "Mazda",
        model: "CX-5",
        year: "2019 - 2026",
        images: ["images/CX-5.jpeg"],
        caption: "Premium Crossover",
        description: "Sleek and highly efficient crossover featuring Mazda's signature Skyactiv technology.",
        engine: "2000cc / 2500cc",
        transmission: "Auto",
        badgeColor: "var(--secondary)"
    },
    // Antigua & Barbuda Stock (Grouped by Body Type)
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Allion", bodyType: "Sedans", year: "2017 - 2026",
        images: ["images/auction.png", "images/hero.png", "images/axio.jpeg"], caption: "Premium Sedan", description: "Elegant and comfortable sedan with excellent reliability.", engine: "1500cc/1800cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Corolla Axio", bodyType: "Sedans", year: "2017 - 2026",
        images: ["images/axio.jpeg", "images/hero.png", "images/auction.png"], caption: "Classic Sedan", description: "The gold standard for efficiency and durability in a compact sedan.", engine: "1500cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Honda", model: "Accord", bodyType: "Sedans", year: "2017 - 2026",
        images: ["images/hero.png", "images/auction.png", "images/fit.jpeg"], caption: "Luxury", description: "Sophisticated styling combined with powerful performance.", engine: "1500cc Turbo", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Honda", model: "Civic", bodyType: "Sedans", year: "2017 - 2026",
        images: ["images/auction.png", "images/hero.png", "images/note.jpeg"], caption: "Sporty Sedan", description: "Dynamic handling and modern tech features for an engaging drive.", engine: "1500cc/1800cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Vitz", bodyType: "Hatchbacks", year: "2017 - 2026",
        images: ["images/vitz2.jpeg", "images/hero.png", "images/auction.png"], caption: "City Car", description: "Perfect for narrow streets, offering great visibility and easy parking.", engine: "1000cc/1300cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Aqua (Prius C)", bodyType: "Hatchbacks", year: "2017 - 2026",
        images: ["images/prius.jpeg", "images/hero.png", "images/auction.png"], caption: "Hybrid Power", description: "Top-tier fuel efficiency in a compact, stylish package.", engine: "1500cc Hybrid", transmission: "Auto", badgeColor: "#25d366"
    },
    {
        island: "Antigua & Barbuda", brand: "Honda", model: "Fit", bodyType: "Hatchbacks", year: "2017 - 2026",
        images: ["images/fit.jpeg", "images/hero.png", "images/auction.png"], caption: "Versatile", description: "Incredible interior space flexibility with the famous Magic Seats.", engine: "1300cc/1500cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Mazda", model: "Demio", bodyType: "Hatchbacks", year: "2017 - 2026",
        images: ["images/CX-5.jpeg", "images/hero.png", "images/auction.png"], caption: "Stylish", description: "Premium interior feel with responsive and fun driving dynamics.", engine: "1300cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "RAV4", bodyType: "SUVs", year: "2017 - 2026",
        images: ["images/X-Trail.jpeg", "images/hero.png", "images/auction.png"], caption: "Top Choice", description: "The ultimate all-rounder SUV for family and adventure.", engine: "2000cc/2500cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Land Cruiser Prado", bodyType: "SUVs", year: "2017 - 2026",
        images: ["images/prado.jpeg", "images/hero.png", "images/auction.png"], caption: "Premium SUV", description: "Unbeatable off-road luxury and presence on any road.", engine: "2700cc/2800cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Rush", bodyType: "SUVs", year: "2017 - 2026",
        images: ["images/hero.png", "images/auction.png", "images/voxy.jpeg"], caption: "7-Seater", description: "Compact SUV with the added benefit of extra seating capacity.", engine: "1500cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Honda", model: "CR-V", bodyType: "SUVs", year: "2017 - 2026",
        images: ["images/auction.png", "images/hero.png", "images/fit.jpeg"], caption: "Family SUV", description: "Comfortable, spacious, and packed with safety features.", engine: "1500cc Turbo", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Nissan", model: "X-Trail", bodyType: "SUVs", year: "2017 - 2026",
        images: ["images/X-Trail.jpeg", "images/hero.png", "images/auction.png"], caption: "Adventurous", description: "Rugged and capable SUV for those who love to explore.", engine: "2000cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "HiAce Van", bodyType: "Vans", year: "2017 - 2026",
        images: ["images/voxy.jpeg", "images/hero.png", "images/auction.png"], caption: "Workhorse", description: "The legendary van for commercial or large group transport.", engine: "2000cc/3000cc", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Noah", bodyType: "Vans", year: "2017 - 2026",
        images: ["images/voxy.jpeg", "images/hero.png", "images/auction.png"], caption: "Family Van", description: "Comfortable and reliable family minivan with great features.", engine: "2000cc", transmission: "Auto", badgeColor: "#25d366"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Alphard", bodyType: "Vans", year: "2017 - 2026",
        images: ["images/hero.png", "images/auction.png", "images/voxy.jpeg"], caption: "Luxury Van", description: "The pinnacle of executive luxury in a large minivan.", engine: "2500cc/3500cc", transmission: "Auto", badgeColor: "var(--primary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Honda", model: "Stepwagon", bodyType: "Vans", year: "2017 - 2026",
        images: ["images/auction.png", "images/hero.png", "images/fit.jpeg"], caption: "Space King", description: "Innovative tail door and spacious interior for ultimate utility.", engine: "1500cc Turbo", transmission: "Auto", badgeColor: "var(--secondary)"
    },
    {
        island: "Antigua & Barbuda", brand: "Toyota", model: "Vitz (Sport)", bodyType: "Hatchbacks", year: "2017 - 2026",
        images: ["images/vitz2.jpeg", "images/hero.png", "images/auction.png"], caption: "Sporty Hatch", description: "Compact hatch with a premium sporty trim and enhanced features.", engine: "1500cc", transmission: "Auto", badgeColor: "var(--primary)"
    }
];

function parseYears(yearStr) {
    const years = [];
    if (yearStr.includes('-')) {
        const parts = yearStr.split('-');
        const start = parseInt(parts[0].trim());
        const end = parseInt(parts[1].trim());
        if (!isNaN(start) && !isNaN(end)) {
            for (let y = start; y <= end; y++) {
                years.push(y);
            }
        } else {
            years.push(yearStr);
        }
    } else {
        years.push(yearStr);
    }
    return years;
}

window.toggleYearSelection = function (btn) {
    const nextDiv = btn.nextElementSibling;
    if (nextDiv.style.display === "none" || !nextDiv.style.display) {
        nextDiv.style.display = "block";
        btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> Hide Years';
    } else {
        nextDiv.style.display = "none";
        btn.innerHTML = '<i class="fa-solid fa-calendar-days"></i> Select Year to Order';
    }
};

window.scrollList = function (btn, direction) {
    const container = btn.parentElement.querySelector('.scrollable-container');
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
};

function renderIslandFavorites() {
    const container = document.getElementById('dynamic-favorites-container');
    if (!container) return;

    const carsByIsland = {};
    favoritesData.forEach(car => {
        if (!carsByIsland[car.island]) carsByIsland[car.island] = [];
        carsByIsland[car.island].push(car);
    });

    let html = '';

    // Define sequence: Jamaica, Antigua, Bahamas, then the rest
    const islandSequence = ["Jamaica", "Antigua & Barbuda", "Bahamas"];
    const allIslands = Object.keys(carsByIsland);
    const sortedIslands = allIslands.sort((a, b) => {
        let ia = islandSequence.indexOf(a);
        let ib = islandSequence.indexOf(b);
        if (ia === -1) ia = 99;
        if (ib === -1) ib = 99;
        return ia - ib;
    });

    sortedIslands.forEach(islandName => {
        const islandRule = islandData[islandName] || { ageRestriction: "Check local regulations", icon: "fa-map-pin" };
        let cars = carsByIsland[islandName];

        html += `
        <section class="section ${html === '' ? '' : 'section-light'}" id="island-${islandName.replace(/\s+/g, '-').toLowerCase()}">
            <div class="container">
                <div style="margin-bottom: 40px; border-bottom: 4px solid var(--primary); padding-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                        <div>
                            <h2 style="font-size: 2.8rem; margin-bottom: 5px; color: var(--secondary);">Best Seller Cars for <span style="color: var(--primary);">${islandName}</span></h2>
                            <p style="color: var(--text-grey); font-weight: 600; text-transform: uppercase; letter-spacing: 1px;"><i class="fa-solid ${islandRule.icon || 'fa-location-dot'}"></i> Top Picks Found in Japanese Auctions</p>
                        </div>
                        <span style="color: var(--secondary); background: #FFF; border: 1px solid var(--border-color); padding: 12px 20px; border-radius: 8px; font-size: 1rem; font-weight: 600; box-shadow: var(--shadow-sm);">
                            <i class="fa-solid fa-file-shield" style="color: var(--primary); margin-right: 8px;"></i> 
                            Import Rule: ${islandRule.ageRestriction}
                        </span>
                    </div>
                </div>
        `;

        // If it's Jamaica or Antigua, group by body type
        let groups = [];
        if (islandName === "Jamaica" || islandName === "Antigua & Barbuda") {
            const bodyTypes = [...new Set(cars.map(c => c.bodyType || "Other"))];
            // Body Type Order
            const typeOrder = ["Sedans", "Hatchbacks", "Station Wagons", "Mini Station Wagons", "SUVs", "Pickups", "Vans", "Other"];
            bodyTypes.sort((a, b) => {
                let ia = typeOrder.indexOf(a);
                let ib = typeOrder.indexOf(b);
                if (ia === -1) ia = 99;
                if (ib === -1) ib = 99;
                return ia - ib;
            });
            bodyTypes.forEach(bt => {
                let sortedItems = cars.filter(c => (c.bodyType || "Other") === bt);
                // Within body type, keep brands together
                const brandOrder = ["Toyota", "Honda", "Nissan", "Mazda", "Suzuki"];
                sortedItems.sort((a, b) => {
                    let ia = brandOrder.indexOf(a.brand);
                    let ib = brandOrder.indexOf(b.brand);
                    if (ia === -1) ia = 99;
                    if (ib === -1) ib = 99;
                    return ia - ib;
                });
                groups.push({ title: bt, items: sortedItems });
            });
        } else {
            groups.push({ title: null, items: cars });
        }

        groups.forEach((group, groupIndex) => {
            if (group.title) {
                html += `<h3 style="margin: 20px 0 15px; font-size: 1.5rem; border-left: 4px solid var(--primary); padding-left: 10px;">${groupIndex + 1}) ${group.title}</h3>`;
            }

            html += `
                <div style="position: relative; margin-bottom: 40px;" class="list-wrapper">
                    <button class="scroll-toggle left" onclick="scrollList(this, -1)"><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="scroll-toggle right" onclick="scrollList(this, 1)"><i class="fa-solid fa-chevron-right"></i></button>
                    
                    <div class="scrollable-container horizontal-scroll" style="display: flex; overflow-x: auto; gap: 20px; padding-bottom: 20px; scroll-snap-type: x mandatory;">
            `;

            group.items.forEach((car, index) => {
                const delay = index * 0.1;

                const yearsList = parseYears(car.year);
                let yearButtonsHtml = '';

                yearsList.forEach(y => {
                    const message = encodeURIComponent(`Hi! I'm interested in ordering the ${y} ${car.brand} ${car.model} shown in the ${car.island} favorites section.`);
                    const waUrl = `https://wa.me/971557949017?text=${message}`;
                    yearButtonsHtml += `<a href="${waUrl}" target="_blank" class="btn btn-outline" style="padding: 5px 12px; margin: 4px; font-size: 0.9rem; flex: 1 1 calc(33% - 14px); min-width: 70px; text-align: center;"><i class="fa-brands fa-whatsapp"></i> ${y}</a>`;
                });

                // Handle images array with internal scroller toggles
                const images = car.images || [car.image || 'images/hero.png'];
                let imagesHtml = `
                    <div style="position: relative; width: 100%; height: 220px;" class="image-wrapper">
                        ${images.length > 1 ? `<button class="scroll-toggle img-left" onclick="scrollList(this, -1)" style="width: 30px; height: 30px;"><i class="fa-solid fa-chevron-left" style="font-size: 0.8rem;"></i></button>
                                               <button class="scroll-toggle img-right" onclick="scrollList(this, 1)" style="width: 30px; height: 30px;"><i class="fa-solid fa-chevron-right" style="font-size: 0.8rem;"></i></button>` : ''}
                        <div class="scrollable-container image-slider" style="display: flex; overflow-x: auto; scroll-snap-type: x mandatory; height: 100%; width: 100%;">
                `;
                images.forEach(img => {
                    imagesHtml += `<img src="${img}" alt="${car.brand} ${car.model}" onerror="this.src='images/hero.png'" style="flex: 0 0 100%; scroll-snap-align: start; object-fit: cover; width: 100%; height: 100%;">`;
                });
                imagesHtml += `
                        </div>
                    </div>
                `;

                html += `
                        <div class="card fade-up responsive-card" style="flex: 0 0 calc(33.333% - 14px); scroll-snap-align: start; transition-delay: ${delay}s;">
                            <div style="position: relative;">
                                ${imagesHtml}
                                <span class="badge" style="background-color: ${car.badgeColor || 'var(--primary)'}; z-index: 2;">${car.caption || 'Popular'}</span>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title">${car.brand} ${car.model}</h3>
                                <p style="color: var(--text-dark); font-weight: 600; margin-bottom: 5px;"><i class="fa-regular fa-calendar"></i> Year Options: ${car.year}</p>
                                <p style="color: var(--text-grey); margin-bottom: 15px; font-size: 0.95rem;">${car.description}</p>
                                <div class="card-specs">
                                    <span><i class="fa-solid fa-gas-pump"></i> ${car.engine}</span>
                                    <span><i class="fa-solid fa-gears"></i> ${car.transmission}</span>
                                </div>
                                
                                <button onclick="toggleYearSelection(this)" class="btn" style="width: 100%; display: block; border: 2px solid #25d366; color: #25d366; background: transparent; font-weight: bold; margin-top: 15px; cursor: pointer; transition: all 0.3s;">
                                    <i class="fa-solid fa-calendar-days"></i> Select Year to Order
                                </button>
                                
                                <div class="year-options-container" style="display: none; margin-top: 15px; text-align: center; border-top: 1px solid var(--border-color); padding-top: 15px;">
                                    <p style="font-size: 0.85rem; color: var(--text-grey); margin-bottom: 10px;">Which year model are you looking for?</p>
                                    <div style="display:flex; flex-wrap:wrap; justify-content:center;">
                                        ${yearButtonsHtml}
                                    </div>
                                </div>
                            </div>
                        </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        html += `
            </div>
        </section>
        `;
    });

    container.innerHTML = html;

    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        document.querySelectorAll('#dynamic-favorites-container .fade-up').forEach(el => observer.observe(el));
    }, 100);
}

document.addEventListener('DOMContentLoaded', renderIslandFavorites);
