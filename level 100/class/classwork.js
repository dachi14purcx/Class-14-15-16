fetch('https://fakestoreapi.com/products?limit=3') // პირველი სამი პროდუქტის წამოღება
    .then(response => response.json()) 
    .then(products => {
        console.log(products); // ყველა პროდუქტის დეტალები კონსოლში ლამაზად

        const container = document.createElement('div');
        container.style.display = "flex";
        container.style.gap = "20px";
        container.style.justifyContent = "center";
        container.style.flexWrap = "wrap";
        container.style.margin = "20px";

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.style.border = "1px solid #ddd";
            productCard.style.padding = "20px";
            productCard.style.width = "250px";
            productCard.style.textAlign = "center";
            productCard.style.borderRadius = "10px";
            productCard.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.1)";
            productCard.style.backgroundColor = "#fff";

            const title = document.createElement('h2');
            title.textContent = product.title;
            title.style.fontSize = "16px";
            title.style.height = "50px";
            title.style.overflow = "hidden";

            const image = document.createElement('img');
            image.src = product.image;
            image.style.width = "100px";
            image.style.height = "100px";
            image.style.objectFit = "contain";

            const price = document.createElement('p');
            price.textContent = `Price: $${product.price}`;
            price.style.fontWeight = "bold";

            productCard.appendChild(image);
            productCard.appendChild(title);
            productCard.appendChild(price);

            container.appendChild(productCard);
        });

        document.body.appendChild(container);
    })
    .catch(error => console.error('Error fetching products:', error));
