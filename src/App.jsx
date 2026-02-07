import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// কম্পোনেন্ট ইমপোর্ট
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// পেজ ইমপোর্ট
import Admin from "./pages/Admin";
import Album from "./pages/Album";
import Course from "./pages/Course";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans text-gray-900 flex flex-col">
        <Toaster position="top-center" />
        <Navbar />

        {/* মেইন কন্টেন্ট এরিয়া */}
        <div className="flex-grow">
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 min-h-screen">
                  <Home />
                </div>
              }
            />

            {/* অন্যান্য পেজ */}
            <Route path="/menu" element={<Menu />} />
            <Route path="/album" element={<Album />} />
            <Route path="/offer" element={<Course />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>

        {/* ফুটার */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
