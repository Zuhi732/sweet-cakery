import { collection, onSnapshot } from "firebase/firestore"; // ডাটা আনার ফাংশন
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import {
  FaCartPlus,
  FaMinus,
  FaPlus,
  FaTruck,
  FaWhatsapp,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { db } from "../firebase"; // Firebase Import

const Menu = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [menuItems, setMenuItems] = useState([]); // ডাটাবেস থেকে আসা আইটেম রাখার জন্য

  // 🔥 পেজ লোড হলে ডাটাবেস থেকে আইটেম আনবে
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "cakes"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setMenuItems(list);
    });
    return () => unsub();
  }, []);

  // হার্ডকোড করা আইটেম এবং ডাটাবেসের আইটেম আলাদা করা
  const freshCakes = [
    { name: "Vanilla Sponge Cake", price: 500 },
    { name: "Chocolate Premium Cake", price: 850 },
    { name: "Red Velvet with Cream Cheese", price: 950 },
    { name: "Blueberry Burst Cake", price: 1050 },
    { name: "Jar Cake (Set of 2)", price: 400 },
    { name: "Customized Cupcakes", price: 80 },
    ...menuItems.filter((item) => item.category === "fresh"), // 🔥 নতুন আইটেম এখানে যুক্ত হবে
  ];

  const nationwideItems = [
    { name: "Homemade Dark Chocolate Bar", price: 350 },
    { name: "Chocolate Truffles Box (6pc)", price: 450 },
    { name: "White Chocolate Bar with Nuts", price: 380 },
    { name: "Brownie Bites (Dry)", price: 600 },
    ...menuItems.filter((item) => item.category === "nationwide"), // 🔥 নতুন আইটেম এখানে যুক্ত হবে
  ];

  const categories = [
    {
      id: 1,
      title: "Fresh Cakes (Noakhali Only 🏠)",
      items: freshCakes,
      desc: "Home delivery available only in Noakhali Sadar.",
    },
    {
      id: 2,
      title: "Nationwide Delivery (All BD 🚚)",
      items: nationwideItems,
      desc: "Courier delivery available all over Bangladesh.",
    },
  ];

  const getItemQty = (itemName) => {
    const item = cart.find((i) => i.name === itemName);
    return item ? item.qty : 0;
  };

  const handleWhatsAppOrder = () => {
    // 👇 আপনার নতুন নাম্বার এখানে আপডেট করা হলো
    const phoneNumber = "8801836885484";
    let message =
      "Hi Sweet Cakery! I want to order:%0A-----------------------%0A";
    let total = 0;
    cart.forEach((item) => {
      message += `${item.name} x ${item.qty} = ${item.price * item.qty} Tk%0A`;
      total += item.price * item.qty;
    });
    message += `-----------------------%0ATotal Price: ${total} Tk%0A`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-blue-900 font-cursive drop-shadow-md">
          Menu Card
        </h2>
        <p className="text-blue-600 mt-2 font-medium">
          Select items to add to cart
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {categories.map((category) => (
          <div key={category.id} className="glass-panel p-6 md:p-8 h-full">
            <h3 className="text-2xl font-bold text-blue-800 border-b-2 border-blue-300 pb-2 mb-2">
              {category.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
              <FaTruck /> {category.desc}
            </p>
            <ul className="space-y-4">
              {category.items.map((item, idx) => {
                const qty = getItemQty(item.name);
                return (
                  <motion.li
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-lg border border-blue-200 bg-white/40 hover:bg-white/80 transition-all"
                  >
                    <div>
                      <span className="font-bold text-lg block text-gray-800">
                        {item.name}
                      </span>
                      <span className="text-blue-700 font-mono font-bold">
                        ৳{item.price}
                      </span>
                    </div>
                    {qty > 0 ? (
                      <div className="flex items-center gap-3 bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg">
                        <button
                          onClick={() => removeFromCart(item)}
                          className="hover:text-yellow-300 font-bold"
                        >
                          <FaMinus />
                        </button>
                        <span className="font-bold w-4 text-center">{qty}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="hover:text-yellow-300 font-bold"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          addToCart(item);
                          toast.success(`Added ${item.name}`);
                        }}
                        className="bg-white border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-blue-600 hover:text-white transition font-bold"
                      >
                        <FaCartPlus /> Add
                      </button>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="fixed bottom-8 right-8 z-50 animate-bounce">
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-3 transform transition hover:scale-110"
          >
            <FaWhatsapp className="text-2xl" /> Order Now (
            {cart.reduce((a, b) => a + b.qty, 0)} items)
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
