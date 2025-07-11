function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.navbar').style.color="white";
    document.getElementById(".navbar").style.backgroundColor = "black"; 
}
function shopNow() {
        alert("Redirecting to Shop Page... (function active)");
}
function handleEmergency() {
    alert(" Emergency Alert Triggered!");
    // Optional: window.location.href = "emergency.html";
}
const sliderImages = [
  "img/shopping2.jpg",
 "img/shopping3.jpg",
  "img/shopping4.jpg",
  // "img/deals.jpg"
];

let currentImg = 0;

function changeHeroImage() {
  currentImg = (currentImg + 1) % sliderImages.length;
  document.getElementById("slider-img").src = sliderImages[currentImg];
}

setInterval(changeHeroImage, 4000);

function shopNow() {
    alert("Redirecting to Shop Page!");
}

const image = [
  'img/m1.jpg',
  'img/m2.jpg',
  'img/h1.jpg',
  'img/l1.jpg',
  'img/g4.jpg',
'img/m3.jpg',
  'img/h2.jpg',
  'img/m4.jpg'
];

let currentIndex = 0;
const visibleCount = 4;
const container = document.getElementById("imageContainer");

function showImages() {
  container.innerHTML = "";
  const visible = image.slice(currentIndex, currentIndex + visibleCount);
  visible.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
  });
}

function showNext() {
  if (currentIndex + visibleCount < image.length) {
    currentIndex += visibleCount;
    showImages();
  }
}

function showPrev() {
  if (currentIndex - visibleCount >= 0) {
    currentIndex -= visibleCount;
    showImages();
  }
}
function showProducts() {
      document.getElementById("productSection").style.display = "flex";
      document.getElementById("showBtn").style.display = "none";
      document.getElementById("imageContainer").style.animation=" scrollLeft 5s linear infinite";
    }
// Show first 4 images on page load
showImages();
const images = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,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"
];

function addToCart() {
    alert("Item added to cart!");
}

// Image sets for each product
const productImages = {
    1: [
        "https://images.unsplash.com/photo-1585386959984-a41552262c34",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    ],
    2: [
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
        "https://images.unsplash.com/photo-1606224475765-6d8bbf4e8e2f"
    ],
    3: [
        "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
        "https://images.unsplash.com/photo-1584467735871-174a6d4a7857"
    ]
};

let indexes = { 1: 0, 2: 0, 3: 0 };

function startProductSliders() {
    setInterval(() => {
        for (let id = 1; id <= 3; id++) {
            indexes[id] = (indexes[id] + 1) % productImages[id].length;
            document.getElementById(`product-img-${id}`).src = productImages[id][indexes[id]];
        }
    }, 2500); // change every 2.5 seconds
}
function showProducts() {
    const section = document.getElementById("products");
    section.style.display = "block";
    section.scrollIntoView({ behavior: "smooth" });
}

startProductSliders();

function addToCart(productId) {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    alert("Item added to cart!");
}

loadProducts(); // Load on page start

  const slider = document.querySelector('.image-slider');

  // Clone all items and append for seamless loop
  slider.innerHTML += slider.innerHTML;

  let position = 0;

  function autoScroll() {
    position += 1; // speed (higher = faster)

    if (position >= slider.scrollWidth / 2) {
      position = 0; // reset to start
    }

    slider.scrollLeft = position;
    requestAnimationFrame(autoScroll); // smooth loop
  }

  autoScroll(); // start loop
  // shop-page

// 

// function addToCart() {
//   // Create product object
//   const product = {
//     name: "Moblie",
//     price: 299,
//     image: "img/plus1.jpg", // your product img
//   };

//   // Get old cart or create new
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   // Add product
//   cart.push(product);

//   // Save back to localStorage
//   localStorage.setItem("cart", JSON.stringify(cart));

//   // Redirect to cart page
//   window.location.href = "cart.html";
// }

function addToCart(name, price, image) 
{
  const product = { name, price, image };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to cart page
  window.location.href = "cart.html";
}

function filterProducts() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".product-details");

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

 
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let location = document.getElementById("location").value;
    let message = document.getElementById("formMessage");

    // Empty field check
    if (name === "" || email === "" || location === "") {
      message.textContent = "Please fill in all fields.";
      message.style.color = "red";
      return;
    }

    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      message.textContent = "Enter a valid email address.";
      message.style.color = "red";
      return;
    }

    // ✅ Success
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";

    // ✅ Show alert popup
    alert("Thank you, " + name + "! Your form has been submitted successfully from " + location + ".");

    // Reset the form
    document.getElementById("contactForm").reset();
  });







// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   emailjs.sendForm("service_lx3dt8r", "YOUR_TEMPLATE_ID", this)
//     .then(() => {
//       alert("Email sent successfully!");
//     }, (error) => {
//       console.log("FAILED...", error);
//       alert("Something went wrong.");
//     });
// });
function filterProductsByCategory(category) {
  const products = document.querySelectorAll(".product-details");

  products.forEach((product) => {
    const productText = product.textContent.toLowerCase();

    if (category === 'all') {
      product.style.display = "block";
    } else if (productText.includes(category.toLowerCase())) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

const minSlider = document.getElementById('min-price');
const maxSlider = document.getElementById('max-price');
const minLabel = document.getElementById('minPriceVal');
const maxLabel = document.getElementById('maxPriceVal');

minSlider.addEventListener('input', () => {
  minLabel.textContent = minSlider.value;
});

maxSlider.addEventListener('input', () => {
  maxLabel.textContent = maxSlider.value;
});

function filterProducts() {
  const min = parseInt(minSlider.value);
  const max = parseInt(maxSlider.value);
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const price = parseInt(product.getAttribute('data-price'));
    if (price >= min && price <= max) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

