// JavaScript code to handle the functionality of the web app?
const RE_VALIDATE_URL = /^[-:.&#+()[\]$'*;@~!,?%=\/\w]+$/;

// Attempt a function
function attempt(func) {
  try {
    return func();
  }
  catch (e) {
    return e;
  }
}

// Navigate to the specified absolute URL
function navigate(webview, url, silent) {
  let resp = attempt(() => webview.navigate(url));
  // ...
}

// Navigate to the specified location
this.navigateTo = loc => {
  // ...
  // Check if the input value contains illegal characters
  let isUrl = RE_VALIDATE_URL.test(loc);
  if (isUrl && navigate(this.webview, loc, true)) {
    return;
  }
  // ... Fallback logic (e.g. prepending http(s) to the URL, querying Bing.com, etc.)
};

// Listen for the Enter key in the address bar to navigate to the specified URL
this.urlInput.addEventListener("keypress", e => {
  if (e.keyCode === 13) {
    this.navigateTo(urlInput.value);
  }
});

// Define Product class
class Product {
  constructor(sku, name, price) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }
  
  display() {
    // Code to display the product in the list?
  }
  
  // Other methods common to all products
}

// Define DVD class that extends Product
class DVD extends Product {
  constructor(sku, name, price, size) {
    super(sku, name, price);
    this.size = size;
  }
  
  display() {
    // Code to display the DVD in the list
  }
  
  // Other methods specific to DVDs
}

// Define Book class that extends Product
class Book extends Product {
  constructor(sku, name, price, weight) {
    super(sku, name, price);
    this.weight = weight;
  }
  
  display() {
    // Code to display the book in the list
  }
  
  // Other methods specific to books
}

// Define Furniture class that extends Product
class Furniture extends Product {
  constructor(sku, name, price, height, width, length) {
    super(sku, name, price);
    this.height = height;
    this.width = width;
    this.length = length;
  }
  
  display() {
    // Code to display the furniture in the list
  }
  
  // Other methods specific to furniture
}

//
