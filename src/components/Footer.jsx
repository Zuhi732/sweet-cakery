import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-cursive font-bold text-pink-500 mb-4">
            Sweet Cakery
          </h2>
          <p className="text-gray-400">
            সেরা স্বাদের হোমমেড কেক এবং বেকিং এর নির্ভরযোগ্য প্রতিষ্ঠান। <br />
            নোয়াখালী, বাংলাদেশ।
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <a href="/" className="hover:text-pink-500 transition">
            Home
          </a>
          <a href="/menu" className="hover:text-pink-500 transition">
            Menu
          </a>
          <a href="/course" className="hover:text-pink-500 transition">
            Course
          </a>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            {/* 👇 আপনার নতুন ফেসবুক লিংক এখানে বসানো হলো */}
            <a
              href="https://www.facebook.com/share/1BoaxYcTzR/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

            <a href="#" className="text-2xl hover:text-pink-600 transition">
              <FaInstagram />
            </a>

            {/* 👇 হোয়াটসঅ্যাপ লিংক */}
            <a
              href="https://wa.me/8801836885484"
              target="_blank"
              className="text-2xl hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
          <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt /> Noakhali Sadar, Bangladesh
          </p>
        </div>
      </div>

      <div className="text-center text-gray-600 mt-10 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Sweet Cakery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
