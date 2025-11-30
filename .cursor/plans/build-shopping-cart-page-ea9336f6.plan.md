<!-- ea9336f6-b0a7-4cef-ad29-7342b7f8fe88 e238300a-3672-43b1-b5f8-de4be6bfbe8c -->
# Build Shopping Cart Page

I will create a new `shopping-cart.html` page that follows the design system of the existing pages (Tailwind CSS, specific brand colors).

## Steps

1.  **Create `shopping-cart.html`**

    -   Initialize with the same `<head>` (Tailwind config, fonts) as `index.html`.
    -   Include the shared `<header>` and `<footer>` components.

2.  **Implement Cart Layout (Main Content)**

    -   Use a container with a responsive grid: `grid-cols-1 lg:grid-cols-3 gap-8`.
    -   **Left Column (2/3 width):** Cart Items List.
        -   Header: "Cart (2 items)".
        -   Item Cards: Flexbox layout with product image, details (title, stock status), quantity selector, and price.
        -   Actions: "Remove" and "Save for later" buttons.
    -   **Right Column (1/3 width):** Order Summary.
        -   Subtotal, Shipping (free), Estimated Tax.
        -   Total price (bold).
        -   Primary "Continue to Checkout" button (brand blue).

3.  **Mock Data**

    -   Use placeholder images or existing assets for 2-3 sample products in the cart.
    -   Example items: "55\" 4K UHD Smart TV" and "High Speed Blender".

4.  **Responsive Design**

    -   Ensure the layout stacks correctly on mobile (summary below items or fixed at bottom - I'll place it below for simplicity in this static version).