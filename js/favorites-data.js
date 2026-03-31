const islandData = {
    "Jamaica": {
        ageRestriction: "Maximum 5 years old (some exemptions for Classic/Commercial)",
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
};

const favoritesData = [
    {
        island: "Jamaica",
        brand: "Toyota",
        model: "Vitz / Yaris",
        image: "images/vitz2.jpeg",
        caption: "Hot Favorite",
        description: "Extremely fuel-efficient and reliable compact car. A staple on Jamaican roads.",
        engine: "1300cc - 1500cc",
        transmission: "Auto",
        badgeColor: "var(--primary)"
    },
    {
        island: "Jamaica",
        brand: "Toyota",
        model: "Corolla Axio",
        image: "images/axio.jpeg",
        caption: "Family Choice",
        description: "The benchmark for sedan reliability. Exceptional resale value and spacious interior.",
        engine: "1500cc",
        transmission: "Auto",
        badgeColor: "var(--secondary)"
    },
    {
        island: "Jamaica",
        brand: "Honda",
        model: "Fit / Jazz",
        image: "images/fit.jpeg",
        caption: "Economy",
        description: "Incredible interior space management with Magic Seats. Sporty drive feel.",
        engine: "1300cc",
        transmission: "Auto",
        badgeColor: "var(--primary)"
    },
    {
        island: "Trinidad & Tobago",
        brand: "Nissan",
        model: "X-Trail",
        image: "images/hero.png",
        caption: "Top SUV",
        description: "Robust SUV that handles varied terrain perfectly. Great for larger families.",
        engine: "2000cc",
        transmission: "Auto",
        badgeColor: "var(--secondary)"
    },
    {
        island: "Bahamas",
        brand: "Toyota",
        model: "Prius",
        image: "images/auction.png",
        caption: "Hybrid King",
        description: "Unmatched fuel efficiency with a proven hybrid drivetrain. Great for island driving.",
        engine: "1800cc Hybrid",
        transmission: "Auto",
        badgeColor: "#25d366",
    },
    {
        island: "Jamaica",
        brand: "Toyota",
        model: "RAV4",
        image: "images/rav4.jpeg",
        caption: "Popular SUV across Jamaica",
        description: "Unmatched fuel efficiency for a family trip or daily commute.",
        engine: "2000cc Petrol",
        transmission: "Auto",
        badgeColor: "#f2f2f2"
    }
];

function renderIslandFavorites() {
    const container = document.getElementById('dynamic-favorites-container');
    if (!container) return;

    // Group cars by island
    const carsByIsland = {};
    favoritesData.forEach(car => {
        if (!carsByIsland[car.island]) carsByIsland[car.island] = [];
        carsByIsland[car.island].push(car);
    });

    // Generate HTML
    let html = '';

    Object.keys(carsByIsland).forEach(islandName => {
        const islandRule = islandData[islandName] || { ageRestriction: "Check local regulations", icon: "fa-map-pin" };
        const cars = carsByIsland[islandName];

        html += `
        <section class="section ${html === '' ? '' : 'section-light'}">
            <div class="container">
                <div style="margin-bottom: 30px; border-bottom: 2px solid var(--border-color); padding-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 15px;">
                        <h2 style="font-size: 2rem;">Top Picks for <span style="color: var(--primary);">${islandName}</span></h2>
                        <span style="color: var(--secondary); background: #f0f2f5; padding: 8px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">
                            <i class="fa-solid fa-file-contract" style="color: var(--primary); margin-right: 5px;"></i> 
                            Age Rules: ${islandRule.ageRestriction}
                        </span>
                    </div>
                </div>

                <div class="grid-3">
        `;

        cars.forEach((car, index) => {
            const delay = index * 0.1;
            html += `
                    <div class="card fade-up" style="transition-delay: ${delay}s;">
                        <div style="position: relative;">
                            <img src="${car.image}" alt="${car.brand} ${car.model}" class="card-img" onerror="this.src='images/hero.png'">
                            <span class="badge" style="background-color: ${car.badgeColor};">${car.caption}</span>
                        </div>
                        <div class="card-body">
                            <h3 class="card-title">${car.brand} ${car.model}</h3>
                            <p style="color: var(--text-grey); margin-bottom: 15px; font-size: 0.95rem;">${car.description}</p>
                            <div class="card-specs">
                                <span><i class="fa-solid fa-gas-pump"></i> ${car.engine}</span>
                                <span><i class="fa-solid fa-gears"></i> ${car.transmission}</span>
                            </div>
                            <a href="contact.html" class="btn btn-outline" style="width: 100%; display: block;">Request This Model</a>
                        </div>
                    </div>
            `;
        });

        html += `
                </div>
            </div>
        </section>
        `;
    });

    container.innerHTML = html;

    // Trigger intersection observer for newly added fade-up elements
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
