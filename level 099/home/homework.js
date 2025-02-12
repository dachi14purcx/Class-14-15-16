fetch('https://fakestoreapi.com/products/1') // პირველი პროდუქტის წამოღება
    .then(response => response.json()) 
    .then(product => {
        console.log(product); // კონსოლში გამოტანა

        // ვქმნით ელემენტებს საიტისთვის
        const container = document.createElement('div');
        container.style.border = "1px solid #ddd";
        container.style.padding = "20px";
        container.style.margin = "20px";
        container.style.width = "300px";
        container.style.textAlign = "center";
        container.style.borderRadius = "10px";
        container.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.1)";

        const title = document.createElement('h2');
        title.textContent = product.title;
        title.style.fontSize = "18px";

        const image = document.createElement('img');
        image.src = product.image;
        image.style.width = "100px";
        image.style.height = "100px";

        const price = document.createElement('p');
        price.textContent = `Price: $${product.price}`;

        container.appendChild(image);
        container.appendChild(title);
        container.appendChild(price);

        document.body.appendChild(container);
    })
    .catch(error => console.error('Error fetching product:', error));
