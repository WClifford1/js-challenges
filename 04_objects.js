/*

JSON Practice
-------------

JSON can be parsed and turned into a plain old JS object.
This makes it much easier to read from and write to.

Check out the shop JS object and run the tests.

Complete methods below, one by one.

TESTS: mocha 04_objects.js

*/

const shop = {
  title: "My Fancy Drink Shop",
  products: [
    { id: 1, title: 'Coca Cola', price: 4.32 },
    { id: 2, title: 'Fanta', price: 4.22 },
    { id: 3, title: 'Lift', price: 4.11 }
  ],
  customers: {
    'jane@doe.com': {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        streetNumber: 12,
        street: 'Main St',
        city: 'Brisbane',
        postcode: 4000
      },
      orders: [
        {
          id: 61721, status: 'delivered', items: [
            { productId: 1, qty: 2 },
            { productId: 3, qty: 1 },
            { productId: 2, qty: 3 }
          ],
          notes: 'Please leave on doorstep'
        },
        {
          id: 82721, status: 'delivered', items: [
            { productId: 4, qty: 100 }
          ],
          notes: 'Really enjoying coke ATM'
        }
      ]
    }
  }
}

const shopTitle = () => {
  return shop.title
  // Return the shop title (you have access to the shop object from here)
}

const upperCase = (string) => {
  return string.toUpperCase()
  // Return an uppercase version of string
}

const upperCaseShopTitle = () => {
  // Return an uppercase shop title.
  // Don't repeat yourself. Use the two functions you just built!
  return upperCase(shopTitle())
}

const productById = (productId) => {
  // Return a specific product object
  for (product of shop.products) {
    if (product.id === productId) {
      return product
  }
}}

const productCost = (productId) => {
  // given a product id, return its cost. DRY ;)
  return productById(productId).price
}

const formatAddress = (email) => {
  // return(shop.customers.'jane@doe.com'.address.(streetNumber, street, city, postcode))
  // Given a user's email, return their address in the format:
  // streetNumber street, city, postcode
  // E.g. 10 Amelia St, Sydney, 2000 // 
  // Hint: some destructuring might save you a few lines.
  let v = shop.customers[email].address
  return `${v.streetNumber} ${v.street}, ${v.city}, ${v.postcode}`
}



const addProduct = (id, title, price) => {
  // Add a product to the shop.
}

const updateProductPrice = (id, newPrice) => {
  // Update the price of a specific product
}


let assert = require('assert');

describe("shopTitle", () => {
  it("Should return the shop title", () => {
    assert.equal(shopTitle(), "My Fancy Drink Shop");
  });
});

describe("upperCase", () => {
  it("Should return an upper case string", () => {
    assert.equal(upperCase("heLLo"), "HELLO");
  });
});

describe("upperCaseShopTitle", () => {
  it("Should return an upper case shop title", () => {
    assert.equal(upperCaseShopTitle(), "MY FANCY DRINK SHOP");
  });
});

describe("productById", () => {
  it("Should return the correct product", () => {
    let product = productById(1)
    assert.equal(product.id, 1);
    assert.equal(product.title, 'Coca Cola');
  });
});

describe("productCost", () => {
  it("Should return the correct product price", () => {
    assert.equal(productCost(1), 4.32);
  });
});

describe("formatAddress", () => {
  it("Should format the given user's address", () => {
    assert.equal(formatAddress('jane@doe.com'), '12 Main St, Brisbane, 4000');
  });
});


describe("addProduct", () => {
  it("Should add a product", () => {
    assert.equal(addProduct(5, 'Example', 12.34));
    assert.equal(productCost(5), 12.34);
  });
});

describe("updateProductPrice", () => {
  it("Should update a specific product's price", () => {
    assert.equal(updateProductPrice(1, 33.44));
    assert.equal(productCost(1), 33.44);
  });
});