<!-- cd7dc6f0-50ea-4ef9-aabb-c6b7eff41351 63e02479-0b56-47b3-a0a3-6224655c08f3 -->
# Redesign Checkout Page (Walmart Style)

I will redesign `checkout.html` to closely mimic the Walmart checkout experience, which focuses on a clean, step-by-step process within a unified layout.

## Design Changes

- **Layout**:
    - **Simplified Header**: Remove navigation links and search bar. Keep only the Logo and "Checkout" title for a distraction-free environment.
    - **3-Column Layout (Desktop)** or **2-Column with distinct separation**:
        - **Main Content (Left/Center)**:

            1. **Shipping Address**: Display as a clear, numbered step (e.g., "1. Shipping address"). Show selected address or form in a clean card.
            2. **Payment Method**: Display as "2. Payment method". Accordion-style or clearly separated section.

                - **Stripe**: Radio option.
                - **bKash**: Radio option.
        - **Order Summary (Right)**:
            - Floating/Sticky summary.
            - "Subtotal", "Shipping", "Taxes", "Total".
            - **Place Order** button prominent in the summary.
    - **Visuals**:
        - Use more whitespace.
        - Bold headings for steps.
        - clearer "Edit" links for saved information.

## Implementation Details

- **File**: `checkout.html`
- **Header**: Simplify to just Logo + "Checkout" text centered or left-aligned.
- **Main Content**:
    - Wrap sections in a container that creates a "Step" visual flow.
    - **Step 1: Shipping**:
        - Show "John Doe, 123 Maple St..." as default selected.
        - "Change" link to toggle other addresses.
    - **Step 2: Payment**:
        - "Credit/Debit Card" (Stripe) and "bKash" as distinct, large clickable areas.
    - **Right Sidebar**:
        - Compact item list (thumbnails).
        - Price breakdown.
        - "Place Order" button (blue, rounded).
- **Footer**: Minimal footer (Copyright, Privacy, Terms only).

## Todos

- [ ] Update `checkout.html` structure to "Walmart-style" layout
- [ ] Simplify Header (Logo only)
- [ ] Implement "Step 1: Shipping" design
- [ ] Implement "Step 2: Payment" design
- [ ] Refine Order Summary (Sticky right sidebar)
- [ ] Minimize Footer

### To-dos

- [ ] Update checkout.html structure to "Walmart-style" layout
- [ ] Simplify Header (Logo only)
- [ ] Implement "Step 1: Shipping" design
- [ ] Implement "Step 2: Payment" design
- [ ] Refine Order Summary (Sticky right sidebar)