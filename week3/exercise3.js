
let products = ["Rice", "Soya", "Maize", "Gnuts", "Beans"];

function createProduct() {
    const productName = prompt("Enter product name:");
    if (productName) {
        const product = { id: Date.now(), name: productName };
        products.push(product);
        alert("New Product created!");
        readProducts(); // Refresh the product list
    }
}

function readProducts() {
    const productListDiv = document.getElementById("productList");
    productListDiv.innerHTML = ''; // Clear the list
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            ${product.name} 
            <button onclick="editProduct(${product.id})">Edit</button>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;
        productListDiv.appendChild(productDiv);
    });
}