async function fetchProduct(productId) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        
        if (!response.ok) {
            if (response.status === 404) {
                displayError();
            } else {
                console.error("Error fetching product:", response.statusText);
            }
            return;
        }
        
        const product = await response.json();
        displayProduct(product);
    } catch (error) {
        console.error("Network or unexpected error:", error);
    }
}

function displayProduct(product) {
    const container = document.getElementById("product-container");
    container.innerHTML = `
        <div class="product">
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" />
            <p>${product.description}</p>
            <p><strong>Price:</strong> $${product.price}</p>
        </div>
    `;
}

function displayError() {
    const container = document.getElementById("product-container");
    container.innerHTML = `
        <div class="error">
            <h2>404 - Product Not Found</h2>
            <img src="error-image-url.jpg" alt="Error 404" />
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const productId = 1; // შეცვალეთ სასურველი ID-თ
    fetchProduct(productId);
});
