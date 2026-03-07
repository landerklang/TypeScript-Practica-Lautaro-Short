// Tipo fundamental
let productName: string = "1k de pan";

let productPrice: number = 2000;

// Tipo union

let productId: string | number = "id:1";
productId = 1;

// interfas basica

interface Product {
  name: string;
  price: number;
}

const myProduct: Product = {
  name: "agua",
  price: 18.9,
};
