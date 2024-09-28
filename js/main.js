let shop = document.getElementById("shop");

let cart = JSON.parse(localStorage.getItem("data")) || [];
let currentIndex = 0;
const itemsPerView = 30;
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = cart.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
        <img width="300" src=${img} alt="" onclick="viewProductDetails(${id})">
        <div class="details">
          <h3>${name}</h3>
          <p class ="desc">${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <img id="imgRate" src="/images/rating_img.png">
            <div class="buttons">
             <i onclick="increment(${id})" class="bi bi-plus-lg "></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="decrement(${id})" class="bi bi-dash-lg "></i>

            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));

};
let performSearch = () => {
  const searchTerm = document.getElementById('searchBar').value.toLowerCase();
  const filteredProducts = shopItemsData.filter(product => {
    return product.name.toLowerCase().includes(searchTerm) || product.desc.toLowerCase().includes(searchTerm);
  });
  localStorage.setItem('searchResults', JSON.stringify(filteredProducts));
  window.location.href = 'searchResults.html';
};
let viewProductDetails = (id) => {
  window.open(`product-details.html?id=${id}`)
};
generateShop();

let increment = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    cart.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.id=selectedItem.id;//{id:1,count:5}
    search.item += 1;
  }

  console.log(cart);
  localStorage.setItem("data", JSON.stringify(cart));
  update(selectedItem.id);
 
};
let decrement = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedItem.id);
  cart = cart.filter((x) => x.item !== 0);
  // console.log(cart);
  localStorage.setItem("data", JSON.stringify(cart));
};
let update = (id) => {
  let search = cart.find((x) => x.id === id);
  console.log(id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

function moveSlide(direction) {
  var totalSlides = Math.ceil(shopItemsData.length / itemsPerView);
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  shop.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

moveSlide(0);

calculation();

    function categoryClicked(e) {
    const categoryID = e.target.id;
    window.location.href = `category.html?categoryID=${categoryID}`;
}

