<!-- df3ac5c6-4505-427c-b979-397afd0544c8 0b1c347b-fd60-4a92-b806-f4decc50d35c -->
# Build Product Details Page

I will create a new `product-details.html` page that follows the existing design system (Walmart-like style) used in `index.html` and `category-electronics.html`.

## User Interface Elements

### 1. Header & Footer

- Reuse the exact **Header** (Logo, Search, Nav) and **Footer** from `index.html` for consistency.

### 2. Breadcrumbs

- Add a navigation trail: `Home > Electronics > [Product Name]`.

### 3. Product Overview Section (Top)

- **Left Column (Images):**
- Large main product image.
- Thumbnail gallery (3-4 small images) to select the view.
- **Right Column (Details):**
- **Brand/Series**: Small text above the title.
- **Title**: Large, bold product name (e.g., "Sony WH-1000XM5 Wireless Noise Cancelling Headphones").
- **Ratings**: Star rating component with review count (e.g., 4.8 stars, (1,240)).
- **Price**: Large price display (e.g., **$348.00**) with "Free shipping" badge.
- **Color/Options**: Selector for variants (e.g., Black, Silver).
- **Call to Action**:
  - Primary "Add to Cart" button (Blue, rounded).
  - Secondary "Buy Now" button (Light/Secondary style).
- **Fulfillment**: "Pickup" and "Shipping" availability status with icons.

### 4. Product Details (Middle)

- **About this item**: A section with bullet points highlighting key features.
- **Specifications**: A simple table or list for technical specs (Battery life, Weight, Connectivity).

### 5. Reviews & Recommendations (Bottom)

- **Customer Reviews**: Summary block with detailed breakdown.
- **Similar Items**: A horizontal scrollable list of related products (reusing the product card component from `index.html`).

## Implementation Steps

1.  Create `product-details.html`.
2.  Copy the **Header** and **Footer** structure from `index.html`.
3.  Implement the **Product Grid** layout (Gallery left, Info right).
4.  Add the **Details** and **Reviews** sections below.
5.  Verify responsive behavior (stacking columns on mobile).