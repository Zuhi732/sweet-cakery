import { motion } from "framer-motion";
import { useState } from "react";
import { FaBookOpen, FaCheckCircle, FaStar, FaWhatsapp } from "react-icons/fa";

const Course = () => {
  // কোর্সের সিলেবাস
  const courseItems = [
    {
      id: 1,
      category: "Cakes (বেসিক ও স্পেশাল)",
      items: [
        "ভ্যানিলা স্পঞ্জ কেক",
        "চকলেট স্পঞ্জ কেক",
        "রেড ভেলভেট ময়েস্ট কেক",
        "লেমন কেক",
      ],
    },
    {
      id: 2,
      category: "Frosting & Creams (ক্রিম মেকিং)",
      items: [
        "আমেরিকান বাটারক্রিম",
        "চকলেট বাটারক্রিম",
        "হুইপড ক্রিম মেকিং",
        "ক্রিম চিজ ফ্রস্টিং",
        "লেমন ক্রিম",
        "চকলেট গানাস মেকিং",
        "সাউয়ার ক্রিম মেকিং",
        "ক্রিমচিজ মেকিং",
      ],
    },
    {
      id: 3,
      category: "Techniques (ডেকোরেশন)",
      items: [
        "কেক ক্রাম্ব কোটিং",
        "স্মুদিং ও ফ্রস্টিং টেকনিক",
        "গানাস ড্রিপিং টেকনিক",
        "বাটারক্রিমে কালার মিক্সিং",
        "নজেল পরিচিতি ও পাইপিং",
        "ফুল ও পাতা তৈরি",
        "মেল্টেড চকলেট টপার",
      ],
    },
    {
      id: 4,
      category: "Business (ম্যানেজমেন্ট)",
      items: ["সংরক্ষণ পদ্ধতি", "প্রাইসিং টেকনিক (দাম নির্ধারণ)"],
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelection = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  // 🔥 WhatsApp এ এনরোল রিকোয়েস্ট পাঠানোর ফাংশন
  const handleEnroll = () => {
    // 👇 নতুন নাম্বার আপডেট করা হলো
    const phoneNumber = "8801836885484";

    let message =
      "Hi Sweet Cakery! I want to enroll in your Baking Course.%0A-----------------------%0A";

    if (selectedItems.length > 0) {
      message += "I am specifically interested in:%0A";
      selectedItems.forEach((item) => {
        message += `✅ ${item}%0A`;
      });
    } else {
      message += "I want to join the full course.%0A";
    }

    message += "%0APlease let me know the class schedule and fees.";

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gradient-to-br from-purple-200 via-violet-200 to-fuchsia-200">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold text-purple-900 font-cursive drop-shadow-md">
          Course Curriculum
        </h2>
        <p className="text-purple-700 mt-3 font-medium text-lg">
          <FaBookOpen className="inline mr-2" />
          Master the Art of Baking
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
            <FaStar size={300} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {courseItems.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-purple-800 border-b-2 border-purple-400 pb-2 mb-4 inline-block">
                  {category.category}
                </h3>

                <ul className="space-y-3">
                  {category.items.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => toggleSelection(item)}
                      className={`
                        cursor-pointer flex items-center justify-between p-2 rounded-lg transition-all duration-300
                        ${selectedItems.includes(item) ? "bg-purple-600 text-white shadow-lg scale-105" : "hover:bg-purple-100 text-gray-800"}
                      `}
                    >
                      <span className="font-medium text-lg">{item}</span>
                      {selectedItems.includes(item) ? (
                        <FaCheckCircle className="text-white" />
                      ) : (
                        <span className="text-purple-300 text-sm">+ Add</span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-purple-300 flex flex-col md:flex-row justify-between items-center text-purple-900 font-bold">
            <div>
              <p>🕒 Time: 10:00 AM - 05:00 PM</p>
              <p>📅 Next Batch: Registration Open</p>
            </div>

            {/* 🔥 আপডেটেড বাটন */}
            <button
              onClick={handleEnroll}
              className="mt-4 md:mt-0 glass-button bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-bold text-xl shadow-xl transition flex items-center gap-2"
            >
              <FaWhatsapp className="text-2xl" />
              Enroll in Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
