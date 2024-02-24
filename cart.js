function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
  function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const removeFromCartBtn = document.getElementById("removeFromCartBtn");
    removeFromCartBtn.addEventListener("click", function() {
        const mainDiv = document.getElementById("maindiv");
        mainDiv.style.display = "none";
        alert("Product removed from cart!");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const removeButtons = document.querySelectorAll(".removeCartItem");
    removeButtons.forEach(button => {
        button.addEventListener("click", function() {
            const productDiv = button.closest("#maindiv");
            if (productDiv) {
                productDiv.style.display = "none";
                alert("Product removed from cart!"); 
                updateTotalPrice();  
            }
        });
    });
    function updateTotalPrice() {
        const dellPrice = document.getElementById("dellPrice").innerText.replace('₹', '').replace(/,/g, '');
        const hpPrice = document.getElementById("hpPrice").innerText.replace('₹', '').replace(/,/g, '');
        const totalPrice = parseInt(dellPrice) + parseInt(hpPrice);
        document.getElementById("totalPriceDisplay").innerText = "Total: ₹" + formatNumber(totalPrice);
    }
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    updateTotalPrice();
});
