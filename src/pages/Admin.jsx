import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore"; // ডাটাবেস ফাংশন
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { auth, db } from "../firebase"; // db ইমপোর্ট করা হলো

const Admin = () => {
  const [user, setUser] = useState(null);

  // ফর্মের জন্য স্টেট
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("fresh"); // ডিফল্ট ক্যাটাগরি

  // লগইন চেক
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  // 🔥 আইটেম সেভ করার ফাংশন
  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!name || !price) return toast.error("নাম এবং দাম দিন!");

    try {
      await addDoc(collection(db, "cakes"), {
        name: name,
        price: Number(price),
        category: category,
        createdAt: new Date(),
      });
      toast.success("আইটেম মেনুতে যোগ হয়েছে!");
      setName("");
      setPrice("");
    } catch (error) {
      toast.error("ভুল হয়েছে: " + error.message);
    }
  };

  // লগইন ফর্ম (Login Form)
  if (!user) {
    /* ... (লগইন ফর্ম আগের মতোই থাকবে, শুধু কোড ছোট করার জন্য এখানে লিখলাম না) ... */
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(
          auth,
          e.target.email.value,
          e.target.password.value,
        );
        toast.success("Welcome Admin!");
      } catch {
        toast.error("Login Failed");
      }
    };
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
        <form
          onSubmit={handleLogin}
          className="glass-panel p-8 bg-white/10 space-y-4"
        >
          <h2 className="text-white text-2xl font-bold">Admin Login</h2>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded"
          />
          <button className="bg-pink-600 w-full py-2 text-white font-bold rounded">
            Login
          </button>
        </form>
      </div>
    );
  }

  // ✅ ড্যাশবোর্ড
  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700">Admin Dashboard</h2>
          <button
            onClick={() => signOut(auth)}
            className="bg-red-500 text-white px-4 py-2 rounded font-bold"
          >
            Logout
          </button>
        </div>

        <div className="glass-panel p-8 bg-white shadow-xl rounded-xl">
          <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">
            Add New Cake Item
          </h3>

          <form onSubmit={handleAddItem} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-bold mb-1">
                Cake Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="e.g. Vanilla Sponge"
                className="w-full p-3 border rounded-lg focus:outline-pink-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-bold mb-1">
                  Price (Tk)
                </label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="500"
                  className="w-full p-3 border rounded-lg focus:outline-pink-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:outline-pink-500"
                >
                  <option value="fresh">Fresh Cake (Noakhali)</option>
                  <option value="nationwide">Nationwide Delivery</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition shadow-md">
              Add Item to Menu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
