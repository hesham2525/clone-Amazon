let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");

let cart = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = cart.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
  if (cart.length !== 0) {
    return (ShoppingCart.innerHTML = cart
      .map((x) => {
        let { id, item } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];
        return `
      <div class="cart-item">
      <a href="/html/product-details.html?id=${id}"> <img width="100" src=${search.img} alt=""/></a>
       
        <div class="details">

          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">$ ${search.price}</p>

              </h4>
            

          </div>
          
           <div class="quantity">
            <p>Quantity: ${item}</p>
            </div>
          
          <h3>$ ${item * search.price}</h3>
        </div>
      </div>
      <br>
      `;
      })
      .join(""));
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="/html/main.html">
      <button class="HomeBtn">Back to home</button>
    </a>
    `;
  }
};

generateCartItems();

let increment = (id) => {
  let selectedItem = id;
  let search = cart.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    cart.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(cart));
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
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(cart));
};

let update = (id) => {
  let search = cart.find((x) => x.id === id);
  // console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
};

let removeItem = (id) => {
  let selectedItem = id;
  // console.log(selectedItem.id);
  cart = cart.filter((x) => x.id !== selectedItem.id);
  generateCartItems();
  TotalAmount();
  localStorage.setItem("data", JSON.stringify(cart));
};

let clearCart = () => {
  cart = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(cart));
};

let TotalAmount = () => {
  if (cart.length !== 0) {
    let amount = cart
      .map((x) => {
        let { item, id } = x;
        let search = shopItemsData.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    label.innerHTML = `
    <h2>Total Bill : $ ${amount.toFixed(2)}</h2>
    <a href="/html/payment.html"> <button class="checkout">Checkout</button></a>
   
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
    `;
  } else return;
};

TotalAmount();

