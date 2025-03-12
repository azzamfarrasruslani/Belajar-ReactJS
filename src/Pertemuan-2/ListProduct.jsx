import { useEffect } from "react";
import "./style.css";

export default function ListProduct() {
  const products = [
    {
      name: "Tent",
      image: "img/12.jpg",
      price: "IDR 30K",
      oldPrice: "IDR 55K",
      rating: 3,
    },
    {
      name: "Camping Kettle",
      image: "img/13.jpg",
      price: "IDR 30K",
      oldPrice: "IDR 55K",
      rating: 5,
    },
    {
      name: "Fire Wood",
      image: "img/14.jpg",
      price: "IDR 30K",
      oldPrice: "IDR 55K",
      rating: 5,
    },
  ];

 

  return (
    <div>
      <section id="shop" className="shop">
        <h2>Shop</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          minima non? Labore non provident ducimus a ratione unde tempore maxime?
        </h4>
        <div className="row">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-icons">
                <a href="#">
                  <i data-feather="shopping-cart"></i>
                </a>
                <a href="#" className="item-detail-button">
                  <i data-feather="eye"></i>
                </a>
              </div>
              <div className="product-image">
                <a href="#">
                  <img src={product.image} alt={product.name} />
                </a>
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <div className="product-stars">
                  {[...Array(product.rating)].map((_, i) => (
                    <i key={i} className="fa fa-star" style={{ color: "#FFD43B" }}></i>
                  ))}
                </div>
                <div className="product-price">
                  {product.price} <span>{product.oldPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
