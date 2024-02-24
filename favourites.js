document.addEventListener("DOMContentLoaded", function() {
    // Get the "Add to Cart" button and add an event listener
    const addToCartButton = document.querySelector(".CartBtn");
    addToCartButton.addEventListener("click", function() {
        alert("Product added to cart!");
    });

    // Get the "remove from favourites" button and add an event listener
    const removeFromFavouritesButton = document.querySelector(".tooltip");
    removeFromFavouritesButton.addEventListener("click", function() {
        // Get the parent element of the button and remove it from the DOM
        const productDiv = removeFromFavouritesButton.closest("#maindiv");
        productDiv.remove();
        alert("Product removed from favourites!");
    });
});
