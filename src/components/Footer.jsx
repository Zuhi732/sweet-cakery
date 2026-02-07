import {
  FaClock,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* কলাম ১: অর্ডার নিয়মাবলী (আপনার ছবি থেকে নেওয়া) */}
        <div>
          <h3 className="text-xl font-bold text-pink-500 mb-4 font-cursive">
            Order Rules
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>📌 সর্বনিম্ন অর্ডার ১ পাউন্ড থেকে শুরু।</li>
            <li>📌 কাস্টমাইজড কেক ২-৩ দিন আগে অর্ডার করতে হবে।</li>
            <li>📌 রেগুলার কেক অন্তত ১ দিন আগে জানাতে হবে।</li>
            <li>📌 অর্ডার কনফার্ম করার পরই ফ্রেশ কেক বানানো হয়।</li>
            <li>📌 ফনডেন্ট বা থিম কেকের জন্য এক্সট্রা চার্জ প্রযোজ্য।</li>
          </ul>
        </div>

        {/* কলাম ২: ডেলিভারি ও পরিমাপ */}
        <div>
          <h3 className="text-xl font-bold text-blue-400 mb-4 font-cursive">
            Delivery & Size
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🚚 শুধুমাত্র নোয়াখালীতে হোম ডেলিভারি পসিবল।</li>
            <li>⚖️ ১ পাউন্ড = ৪৫৪ গ্রাম (আমরা ১০০ গ্রাম বেশি দেই)।</li>
            <li>📦 বক্স কেক: ৩৫০ গ্রাম+ | জার কেক: ২৫০ গ্রাম+।</li>
            <li>💰 ডেলিভারি চার্জ দূরত্ব ও ডেলিভারি ম্যানের ওপর নির্ভর করে।</li>
            <li>❄️ ফ্রোজেন আইটেম, ব্রাউনি, পুডিং এভেলেবল।</li>
          </ul>
        </div>

        {/* কলাম ৩: যোগাযোগ */}
        <div>
          <h3 className="text-xl font-bold text-yellow-400 mb-4 font-cursive">
            Contact Us
          </h3>
          <div className="space-y-3 text-gray-300">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-pink-500" /> Noakhali, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" /> 01931030405, 01732074505
            </p>
            <p className="flex items-center gap-2">
              <FaClock className="text-yellow-500" /> Daily: 10:00 AM - 11:00 PM
            </p>

            {/* Social Link */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-blue-500 hover:text-blue-400 text-2xl"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>
          © 2026 Sweet Cakery. All rights reserved. | Made with ❤️ by Mamoni
        </p>
      </div>
    </footer>
  );
};

export default Footer;
