import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ScaleIn, SlideUp } from "../../utility/animation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Computer Science Student",
    text: "The personalized approach helped me excel in my programming courses. Highly recommended!",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Engineering Student",
    text: "Learning at my own pace with quality instruction made all the difference in my studies.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Martinez",
    role: "Mathematics Student",
    text: "The tutors are incredibly patient and break down complex concepts effectively.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          {/* Added tag above heading */}
          <motion.span
            variants={SlideUp(0.2)}
            className="inline-block px-4 py-1.5 bg-secondary/10 rounded-full 
            text-secondary text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Testimonials
          </motion.span>

          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="text-secondary">Students</span> Say
          </h2>

          {/* Added decorative divider */}
          <div
            className="w-20 h-1 bg-gradient-to-r from-secondary to-primary 
          mx-auto rounded-full mb-4"
          />

          <p className="text-gray-600 text-lg">
            Join thousands of satisfied students on their learning journey
          </p>
        </motion.div>

        <Slider {...settings}>
          {TestimonialsData.map((item) => (
            <motion.div
              key={item.id}
              variants={ScaleIn(0.2)}
              whileHover={{ y: -5 }}
              className="px-3 py-2"
            >
              <div
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg 
                transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{item.text}</p>
                <div className="flex gap-1 text-yellow-400 mt-4">
                  {"★".repeat(item.rating)}
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
