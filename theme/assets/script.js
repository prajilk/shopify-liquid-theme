function openCartDrawer() {
    document.getElementById('cart').classList.add('open-cart');
    toggleOverlay();
}

function closeCartDrawer() {
    document.getElementById('cart').classList.remove('open-cart');
    toggleOverlay();
}

const overlay = document.getElementById("overlay");

function toggleOverlay() {
    overlay.classList.toggle("active");
}

// document.querySelectorAll("#cart-btn, #cart-icon-btn").forEach((el) => {
//     el.addEventListener('click', openCartDrawer);
// })

document.querySelectorAll("#cart-close-btn, #overlay").forEach((el) => {
    el.addEventListener("click", closeCartDrawer);
})

document.querySelectorAll('a[href="/cart]').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        openCartDrawer();
    });
})

document.querySelectorAll('form[action="/cart/add"]').forEach((form) => {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Submit form with ajax
        await fetch("/cart/add", {
        method: "post",
        body: new FormData(form),
        });

        // Open cart drawer
        openCartDrawer();
    })
});