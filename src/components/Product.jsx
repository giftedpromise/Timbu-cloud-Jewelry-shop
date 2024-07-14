import React, { useState, useEffect, useContext } from "react";
import { getProducts } from "../data/data";
import Jewelry1 from "../assets/images/jewelry1.png";
import Jewelryframe from "../assets/images/jewelryFrame.png";
import CartIcon from "../assets/images/products/cart.png";
import Contact from "./Contact";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [notifications, setNotifications] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data.items);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found.</div>;
  }
  console.log(products);

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotifications((prev) => ({
      ...prev,
      [item.unique_id]: `${item.name} added to cart!`,
    }));
    setTimeout(() => {
      setNotifications((prev) => ({
        ...prev,
        [item.unique_id]: "",
      }));
    }, 3000);
  };

  return (
    <div className="my-0">
      <div className="flex flex-col justify-center items-center bg-[#FAF3E6] mt-0 p-4">
        <p className="bg-[#CEB483] text-[#22272F] text-[24px] font-medium rounded-full px-6 py-2 my-1 md:my-2">
          Welcome to our shop
        </p>
        <h1 className="text-4xl font-bold text-center font-playfair text-customColor-500 my-4 md:my-2 pb-2">
          Discover the Magic of Timeless Elegance
        </h1>
        <img src={Jewelry1} alt="Jewelry-one" className="mb-8 md:mb-0" />
      </div>

      <div className="m-9">
        <img src={Jewelryframe} alt="jewelry-frame" />
      </div>
      <div className="container mx-auto py-12 px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.unique_id}
              className="shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 relative"
            >
              <img
                src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="bg-[#FAF3E6] p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-bold font-playfair">
                    {item.name}
                  </h2>
                  <img
                    src={CartIcon}
                    alt="cart"
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => handleAddToCart(item)}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-700 font-playfair">
                    ${item.current_price[0].USD[0]}
                  </p>
                </div>
              </div>
              {notifications[item.unique_id] && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#3F001F] text-white text-center py-1 px-2 w-3/4 rounded-md">
                  {notifications[item.unique_id]}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Product;
