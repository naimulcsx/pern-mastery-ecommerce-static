<!-- 6ace0bb7-8aac-45be-ad73-4d8974843553 b37f08a7-63d0-4627-8b40-2c56b70a749b -->
# Create Express Server for Static E-Commerce Site

This plan sets up an Express server to serve the existing HTML files with clean URLs and moves the HTML files into a `templates` directory.

## Steps

1.  **Initialize Project Dependencies**

    -   Install `express` to handle server logic.

2.  **Restructure Project**

    -   Create a `templates/` directory.
    -   Move all `.html` files (`index.html`, `login.html`, `signup.html`, `shopping-cart.html`, `checkout.html`, `search-results.html`, `category-electronics.html`, `product-details.html`) into `templates/`.

3.  **Create Server**

    -   Create `server.js` (or `index.js` as per `package.json`) to configure the Express application.
    -   Configure static file serving for the `images/` directory.
    -   Define the following routes:
        -   `/` -> serves `templates/index.html`
        -   `/login` -> serves `templates/login.html`
        -   `/signup` -> serves `templates/signup.html`
        -   `/cart` -> serves `templates/shopping-cart.html`
        -   `/checkout` -> serves `templates/checkout.html`
        -   `/search` -> serves `templates/search-results.html`
        -   `/category/:categoryName` -> serves `templates/category-electronics.html` (Generic category template)
        -   `/product/:id` -> serves `templates/product-details.html` (Generic product template)

4.  **Update HTML Links**

    -   Update internal links in all HTML files to use the new clean URLs:
        -   `index.html` -> `/`
        -   `login.html` -> `/login`
        -   `signup.html` -> `/signup`
        -   `shopping-cart.html` -> `/cart`
        -   `checkout.html` -> `/checkout`
        -   `search-results.html` -> `/search`
        -   `category-electronics.html` -> `/category/electronics` (or generic `/category/...`)
        -   `product-details.html` -> `/product/sony-wh1000xm5` (example ID)

5.  **Verify**

    -   Start the server and check all routes.
    -   Ensure images load correctly.
    -   Ensure navigation between pages works with clean URLs.