# ⚡ Urban Threads - Modern E-Commerce Web Application

**Urban Threads** is a trend-forward, highly responsive, and feature-rich e-commerce store built using clean Vanilla HTML5, CSS3, and ES6+ JavaScript. Designed with a premium aesthetic, it features seamless micro-animations, glassmorphic UI components, dynamic catalogs, and local state persistence.

---

## 🚀 Key Features

* **🌓 Dynamic Theme Toggle**: Persistent Dark and Light modes using modern HSL variable theme overrides. User choice is saved in `localStorage`.
* **🔍 Real-Time Catalog search**: Instant product updates as you type in the search bar.
* **🏷️ Category Filtering & Sorting**: Filter items dynamically by *Men's*, *Women's*, or *Accessories*, and sort by *Price (Low-to-High, High-to-Low)* or *Top Rated*.
* **🛒 Slide-Out Shopping Bag Drawer**: Sidebar drawer displaying cart items, quantities, subtotal, and dynamic shipping calculations (FREE shipping for orders over $75).
* **❤️ Slide-Out Favorites List**: Wishlist drawer allowing users to save apparel and transfer items directly to their shopping bag.
* **📦 Multi-Step Simulated Checkout**:
  1. *Bag Review & Coupon System*: Enter promo codes like `WELCOME10` (10% Off) or `TRENDY20` (20% Off) to adjust prices instantly.
  2. *Shipping Form*: Address collection with validation.
  3. *Secure Payment*: Visual interactive credit card preview that mirrors typed input (number formatting, cardholder name, and expiry).
  4. *Order Confirmation*: Renders custom UT tracking numbers and clears active carts.
* **⭐ Live Customer Reviews**: View historical feedback and submit new reviews inside the Quick View modal, instantly recalculating the product's average score.
* **📱 Responsive Hamburg Menu**: Designed mobile-first for fluid browsing down to 320px screens.

---

## 🛠️ Technology Stack

* **Structure**: HTML5
* **Styling**: Vanilla CSS3 (custom HSL tokens, backdrop blurs, keyframe animations, responsive grid system)
* **Logic**: Vanilla ES6+ JavaScript (DOM APIs, storage management, order state machine)

---

## 📂 Project Directory Structure

```text
Ecommerce website/
├── index.html   # Main structure, drawers, checkout wizard, and modals
├── styles.css   # HSL variables, theme configurations, transitions, and media queries
└── script.js   # Product database, drawer controls, checkout logic, and reviews
```

---

## 💻 How to Run Locally

Since this is a fully client-side static web application, it does not require database setups or heavy dependencies. You can run it locally with any simple static server:

### Option 1: Using `npx` (Requires Node.js)
In your terminal, navigate to the folder containing `index.html` and run:
```bash
npx http-server .
```
Open **`http://localhost:8080`** in your browser.

### Option 2: Using Python
If you have Python installed:
```bash
# Python 3
python -m http.server 8000
```
Open **`http://localhost:8000`** in your browser.

### Option 3: VS Code Extension
If you are using Visual Studio Code:
1. Install the **Live Server** extension.
2. Click **Go Live** at the bottom-right status bar of VS Code.

---

## 🎟️ Active Demo Promo Codes
Try these mock codes during Step 1 of the checkout flow:
* `WELCOME10` - 10% discount on cart subtotal
* `TRENDY20` - 20% discount on cart subtotal
