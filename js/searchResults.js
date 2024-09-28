document.addEventListener('DOMContentLoaded', () => {
    const searchResultsContainer = document.getElementById('search-results-container');
    const searchResults = JSON.parse(localStorage.getItem('searchResults')) || [];
  
    if (searchResults.length > 0) {
      searchResultsContainer.innerHTML = searchResults.map(product => {
        return `
          <div class="productDiv">
              <img  class="imgCategory" width="220" src=${product.img} alt="" onclick="viewProductDetails(${product.id})">
              <h3 class="nameCategory">${product.name}</h3>
              <p class="descCategory">${product.desc}</p>
                <h2 class="priseCategory">$${product.price}</h2>
          </div>
        `;
      }).join('');
    } else {
      searchResultsContainer.innerHTML = '<p>No products found</p>';
    }
  });
  
  let viewProductDetails = (id) => {
    window.location.href = `product-details.html?id=${id}`;
  };
  