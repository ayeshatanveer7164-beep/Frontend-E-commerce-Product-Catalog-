
const products = [
  // ELECTRONICS
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 4500, rating: 4.8, discount: 15, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Smartphone", category: "Electronics", price: 45000, rating: 4.9, discount: 10, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Laptop", category: "Electronics", price: 125000, rating: 4.7, discount: 12, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Digital Camera", category: "Electronics", price: 65000, rating: 4.6, discount: 8, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Bluetooth Speaker", category: "Electronics", price: 5500, rating: 4.5, discount: 10, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Smart Watch", category: "Electronics", price: 8500, rating: 4.7, discount: 15, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80" },
  { id: 7, name: "Tablet", category: "Electronics", price: 35000, rating: 4.4, discount: 5, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80" },
  { id: 8, name: "Gaming Controller", category: "Electronics", price: 7000, rating: 4.5, discount: 10, image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=600&q=80" },

  // FASHION
  { id: 9, name: "Running Sneakers", category: "Fashion", price: 5500, rating: 4.6, discount: 20, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80" },
  { id: 10, name: "Classic T-Shirt", category: "Fashion", price: 1500, rating: 4.3, discount: 10, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80" },
  { id: 11, name: "Denim Jacket", category: "Fashion", price: 4500, rating: 4.4, discount: 15, image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=600&q=80" },
  { id: 12, name: "Casual Hoodie", category: "Fashion", price: 3200, rating: 4.6, discount: 10, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80" },
  { id: 13, name: "Summer Dress", category: "Fashion", price: 3800, rating: 4.5, discount: 20, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80" },
  { id: 14, name: "Casual Sneakers", category: "Fashion", price: 4200, rating: 4.2, discount: 10, image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=600&q=80" },
  { id: 15, name: "Formal Shirt", category: "Fashion", price: 2800, rating: 4.4, discount: 5, image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80" },
  { id: 16, name: "Winter Coat", category: "Fashion", price: 8500, rating: 4.7, discount: 15, image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=600&q=80" },

  // HOME
  { id: 17, name: "Modern Table Lamp", category: "Home", price: 2800, rating: 4.5, discount: 10, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80" },
  { id: 18, name: "Coffee Maker", category: "Home", price: 6500, rating: 4.6, discount: 12, image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80" },
  { id: 19, name: "Comfortable Sofa", category: "Home", price: 45000, rating: 4.8, discount: 15, image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80" },
  { id: 20, name: "Modern Chair", category: "Home", price: 12000, rating: 4.4, discount: 10, image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=600&q=80" },
  { id: 21, name: "Decorative Vase", category: "Home", price: 1800, rating: 4.2, discount: 5, image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=600&q=80" },
  { id: 22, name: "Wall Art", category: "Home", price: 3500, rating: 4.3, discount: 10, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80" },
  { id: 23, name: "Indoor Plant", category: "Home", price: 1200, rating: 4.7, discount: 0, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80" },
  { id: 24, name: "Bedside Table", category: "Home", price: 7500, rating: 4.1, discount: 8, image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=600&q=80" },

  // ACCESSORIES
  { id: 25, name: "Classic Wrist Watch", category: "Accessories", price: 3200, rating: 4.8, discount: 15, image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80" },
  { id: 26, name: "Travel Backpack", category: "Accessories", price: 2500, rating: 4.5, discount: 10, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80" },
  { id: 27, name: "Leather Handbag", category: "Accessories", price: 4800, rating: 4.6, discount: 20, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80" },
  { id: 28, name: "Sunglasses", category: "Accessories", price: 1800, rating: 4.3, discount: 10, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80" },
  { id: 29, name: "Leather Wallet", category: "Accessories", price: 1200, rating: 4.4, discount: 5, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80" },
  { id: 30, name: "Baseball Cap", category: "Accessories", price: 900, rating: 4.2, discount: 0, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80" }
];

const STORAGE_KEY = "shopease-shopping-cart";

const productGrid = document.getElementById("productGrid");
const productCount = document.getElementById("productCount");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const clearCart = document.getElementById("clearCart");

function getDiscountedPrice(product) {
  return Math.round(product.price * (1 - product.discount / 100));
}

function formatPrice(price) {
  return "Rs. " + price.toLocaleString("en-PK");
}

// Load the saved cart from Local Storage.
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (!Array.isArray(saved)) return [];

    return saved
      .filter(item =>
        products.some(product => product.id === item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0
      )
      .map(item => ({
        id: item.id,
        quantity: item.quantity
      }));
  } catch (error) {
    console.warn("Could not load saved cart:", error);
    return [];
  }
}

let cart = loadCart();

// Display products, apply search, category and price filters.
function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedPrice = priceFilter.value;
  const sortOption = sortFilter.value;

  let filtered = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const currentPrice = getDiscountedPrice(product);
    let matchesPrice = true;

    if (selectedPrice === "50000-plus") {
      matchesPrice = currentPrice > 50000;
    } else if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      matchesPrice = currentPrice >= min && currentPrice <= max;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (sortOption === "low-high") {
    filtered.sort((a, b) =>
      getDiscountedPrice(a) - getDiscountedPrice(b)
    );
  } else if (sortOption === "high-low") {
    filtered.sort((a, b) =>
      getDiscountedPrice(b) - getDiscountedPrice(a)
    );
  } else if (sortOption === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  productGrid.replaceChildren();
  productCount.textContent = `${filtered.length} products found`;
  document.getElementById("emptyMessage").hidden = filtered.length > 0;

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image;
    image.alt = product.name;
    image.loading = "lazy";

    image.onerror = () => {
      image.onerror = null;
      image.src = "https://placehold.co/600x400?text=Product";
    };

    imageWrap.appendChild(image);

    if (product.discount > 0) {
      const badge = document.createElement("span");
      badge.className = "discount-badge";
      badge.textContent = `${product.discount}% OFF`;
      imageWrap.appendChild(badge);
    }

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("p");
    category.className = "product-category";
    category.textContent = product.category;

    const name = document.createElement("h3");
    name.textContent = product.name;

    const rating = document.createElement("p");
    rating.className = "product-rating";
    rating.textContent =
      "★".repeat(Math.round(product.rating)) +
      "☆".repeat(5 - Math.round(product.rating));

    const ratingValue = document.createElement("span");
    ratingValue.textContent = `${product.rating.toFixed(1)} / 5`;
    rating.appendChild(ratingValue);

    const priceDetails = document.createElement("div");
    priceDetails.className = "price-details";

    if (product.discount > 0) {
      const oldPrice = document.createElement("span");
      oldPrice.className = "old-price";
      oldPrice.textContent = formatPrice(product.price);
      priceDetails.appendChild(oldPrice);
    }

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = formatPrice(getDiscountedPrice(product));
    priceDetails.appendChild(price);

    const addButton = document.createElement("button");
    addButton.className = "add-button";
    addButton.type = "button";
    addButton.textContent = "Add to Cart";
    addButton.addEventListener("click", () => addToCart(product.id));

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";
    bottom.append(priceDetails, addButton);

    info.append(category, name, rating, bottom);
    card.append(imageWrap, info);
    productGrid.appendChild(card);
  });
}

// Save cart data in Local Storage.
function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("Could not save cart:", error);
    alert("Could not save your cart. Check browser storage settings.");
  }
}

function addToCart(productId) {
  const item = cart.find(entry => entry.id === productId);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  updateCart();
}

function changeQuantity(productId, amount) {
  const item = cart.find(entry => entry.id === productId);
  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.id !== productId);
  }

  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  saveCart();
  renderCart();

  cartCount.textContent = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
}

function renderCart() {
  cartItems.replaceChildren();
  let total = 0;

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "cart-empty";
    empty.textContent = "🛒 Your cart is empty. Start shopping!";
    cartItems.appendChild(empty);
  }

  cart.forEach(item => {
    const product = products.find(entry => entry.id === item.id);
    if (!product) return;

    const unitPrice = getDiscountedPrice(product);
    total += unitPrice * item.quantity;

    const row = document.createElement("div");
    row.className = "cart-item";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;

    image.onerror = () => {
      image.onerror = null;
      image.src = "https://placehold.co/100x100?text=Product";
    };

    const details = document.createElement("div");

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent =
      `${formatPrice(unitPrice)} × ${item.quantity}`;

    const controls = document.createElement("div");
    controls.className = "quantity-controls";

    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.textContent = "−";
    decrease.setAttribute("aria-label", `Decrease ${product.name}`);
    decrease.addEventListener("click", () =>
      changeQuantity(product.id, -1)
    );

    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;

    const increase = document.createElement("button");
    increase.type = "button";
    increase.textContent = "+";
    increase.setAttribute("aria-label", `Increase ${product.name}`);
    increase.addEventListener("click", () =>
      changeQuantity(product.id, 1)
    );

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () =>
      removeFromCart(product.id)
    );

    controls.append(decrease, quantity, increase, remove);
    details.append(name, price, controls);
    row.append(image, details);
    cartItems.appendChild(row);
  });

  cartTotal.textContent = formatPrice(total);
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  closeCart.focus();
}

function hideCart() {
  cartPanel.classList.remove("open");
  overlay.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
}

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", hideCart);
overlay.addEventListener("click", hideCart);

document.addEventListener("keydown", event => {
  if (event.key === "Escape") hideCart();
});

clearCart.addEventListener("click", () => {
  if (cart.length === 0) return;

  if (confirm("Are you sure you want to clear your cart?")) {
    cart = [];
    updateCart();
  }
});

// Update the catalog whenever a filter changes.
searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
priceFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);

// Initial page setup.
renderProducts();
updateCart();
