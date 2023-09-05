import data from "./data.json" assert { type: "json" };
const { products } = data;

const productBox = document.querySelector("#product__box");
const productCart = document.querySelector("#product__cart");
const totalPriceText = document.querySelector("#total__price");
const cartEmpty = document.querySelector("#cart__empty");

const showProducts = function (products) {
  productBox.innerHTML = "";
  products.forEach((product) => {
    const html = `
    <div class="col-xl-4 pb-5 product__item" id="${product.id}">
              <a href="#">
                <img src="${product.img}" alt="${product.name}" />
              </a>
              <p class="pt-3">Frill mini dress in yellow polka dot</p>
              <div class="row justify-content-between align-content-center">
                <div class="col-3 pt-2">
                  <p class="m-0">$${product.price}</p>
                </div>
                <div class="col-5">
                  <button class="btn btn-warning text-dark py-2 px-4">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
    `;
    productBox.insertAdjacentHTML("beforeend", html);
  });
};
showProducts(products);

let productBag = [];

productBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const parentEl = e.target.closest(".product__item");
    const ElementID = +parentEl.id;

    const currentProduct = products.find((product) => product.id === ElementID);
    currentProduct.count++;
    productBag.push(currentProduct);

    const newProductBag = new Set(productBag);
    showBagProducts(newProductBag);
    calcBagPrice(productBag);

    if (productBag.length > 0) {
      cartEmpty.textContent = "Your Cart is Ready";
    } else {
      cartEmpty.textContent = "Cart is empty now";
    }
  }
});

const showBagProducts = function (arr) {
  productCart.innerHTML = "";
  arr.forEach((product) => {
    const html = `
    <div class="col-xl-10 pb-4 product__bag--item" id="${product.id}">
              <div class="row justify-content-end align-items-center ps-4">
                <div class="col-xl-3">
                  <img src="${product.img}" alt="dress" />
                </div>
                <div class="col-xl-8">
                  <p class="fs-5">Midi sundress with ruched front</p>
                  <div class="row justify-content-between pt-3">
                    <div class="col-6 pt-1">
                      <p class="fs-5">$ ${product.price}<span> x ${product.count}</span></p>
                    </div>
                    <div class="col-4">
                      <button id="delete" class="btn btn-secondary py-2 px-3">
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;
    productCart.insertAdjacentHTML("beforeend", html);
  });
};

productCart.addEventListener("click", (e) => {
  if (e.target.id === "delete") {
    const parentEl = e.target.closest(".product__bag--item");
    const ElementID = +parentEl.id;

    const currentProduct = productBag.find(
      (product) => product.id === ElementID
    );

    if (currentProduct.count > 1) {
      currentProduct.count--;
    } else {
      productBag = productBag.filter((product) => product.id !== ElementID);
    }
    const newProductBag = new Set(productBag);
    showBagProducts(newProductBag);

    if (productBag.length > 0) {
      cartEmpty.textContent = "Your Cart is Ready";
    } else {
      cartEmpty.textContent = "Cart is empty now";
    }
  }
});

const calcBagPrice = function (arr) {
  const newPorductsBag = new Set(arr);
  let totalPrice = 0;

  newPorductsBag.forEach((product) => {
    totalPrice += product.price * product.count;
  });

  totalPriceText.textContent = `Total: $ ${totalPrice}`;
};
