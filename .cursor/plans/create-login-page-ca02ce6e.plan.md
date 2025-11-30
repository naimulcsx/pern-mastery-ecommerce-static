<!-- ca02ce6e-0964-4eff-b344-cfcea8617fe1 174c61e4-e2e5-4703-a831-c3672571c795 -->
# Create Login Page

I will create a new `login.html` page that matches the existing design system of the e-commerce site.

## Steps

1.  **Create `login.html`**:

    -   Copy the document structure (DOCTYPE, html, head, body) from `index.html`.
    -   Include the same Tailwind CSS configuration and font imports.
    -   Reuse the existing Header and Footer components for consistency.
    -   Replace the `main` content with a login section.

2.  **Implement Login Form**:

    -   Create a centered container for the login form.
    -   Add a "Sign in" heading.
    -   Add an input field for "Email Address".
    -   Add a "Continue" button (following a common e-commerce pattern where you enter email first, or standard email/password at once. I will stick to a standard email + password form for simplicity unless specified otherwise).
    -   Add an input field for "Password".
    -   Add a "Sign In" button (styled with `bg-brand-blue`).
    -   Add a "Forgot password?" link.
    -   Add a "Create an account" button or link for new users.

3.  **Update Navigation**:

    -   Update the "Sign In" link in the header of `index.html` (and other pages if I see them) to point to `login.html`. (Currently it's just a button/placeholder).

## Technical Details

-   **File**: `login.html`
-   **Styles**: Tailwind CSS (reusing existing `brand` colors defined in script).
-   **Responsive**: Ensure the form looks good on mobile and desktop.