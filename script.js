const phone = "0552309068";

// PRODUCTS DATA
const perfumes = [
    {
        name: "Dior Sauvage",
        price: 450,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231693"
    },
    {
        name: "YSL Y",
        price: 420,
        image: "https://images.unsplash.com/photo-1523292562811-8fa7962a78c8"
    },
    {
        name: "Bleu de Chanel",
        price: 500,
        image:  "https://images.unsplash.com/photo-1594035910387-fea47794261f"
    }
];

const container = document.getElementById("productContainer");

// RENDER PRODUCTS
perfumes.forEach((perfume, index) => {
    container.innerHTML += `
    <div class="product-card">
        <img src="${perfume.image}" alt="${perfume.name}">
        <h3>${perfume.name}</h3>
        <p class="price">${perfume.price} cedis</p>
        
        <label class="input-label">Quantity</label>
        <input type="number" min="1" value="1" id="qty-${index}" placeholder="Quantity">

        <label class="input-label">Delivery Location</label>
        <input type="text" id="loc-${index}" placeholer="Your Location">
        
        <button onclick="orderPerfume(${index})">Order on WhatsApp</button>
    </div>
    `;
});

// GENERAL HERO ORDER
function generalOrder() {
    const message = `
    Hello Noir Essence,
    
    I would like to make an enquiry or order a perfume.
    
    My location is:
    `;

    openWhatsApp(message);
}

//PRODUCT ORDER
function orderPerfume(index) {
    const perfume = perfumes[index];
    const qty = document.getElementById(`qty-${index}`).value;
    const location = document.getElementById(`loc-${index}`).value;

    const message = `
    Hello Noir Essence,
    
    I want to order:
    Perfume: ${perfume.name}
    Price: ${perfume.price} cedis
    Quantity: ${qty}
    Location: ${location || "Not provided"}
    `;

    openWhatsApp(message);
}

//WHATSAPP HANDLER
function openWhatsApp(message) {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
