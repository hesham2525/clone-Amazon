document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryID = urlParams.get('categoryID');
    const container = document.getElementById('products-container');

    if (categoryID) {
        shopItemsData.forEach(item => {
            //   console.log(item);
            if (item.categoryID === categoryID) {
                let productDiv = document.createElement('div');
                productDiv.classList.add('productDiv');

                productDiv.innerHTML = `
                        <img class="imgCategory" src="${item.img}" alt="${item.name} ">
                        <h3 class="nameCategory">${item.name}</h3>
                        <p class="descCategory">${item.desc}</p>
                        <p class="priseCategory">Price: $${item.price}</p>
                `;

                productDiv.addEventListener('click', () => {
                    window.location.href = `product-details.html?id=${item.id}`;
                });

                container.appendChild(productDiv);
            }
        });
    } else {
        container.innerHTML = '<p>No category selected.</p>';
    }
});
