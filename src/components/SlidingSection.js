import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Jane Doe',
    title: 'CEO, Company A',
    content: 'This product has significantly improved our workflow and productivity.',
  },
  {
    name: 'John Smith',
    title: 'CTO, Company B',
    content: 'An essential tool for our daily operations. Highly recommended!',
  },
  {
    name: 'Emily Johnson',
    title: 'Marketing Director, Company C',
    content: 'A game-changer in the industry. Exceptional quality and support.',
  },
];

const SlidingSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000, // 10 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    adaptiveHeight: true, // Adjusts slider height based on content
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-2xl mx-auto px-4">
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8">
              <p className="text-lg italic mb-4 text-center">"{testimonial.content}"</p>
              <h3 className="text-xl font-bold text-center">{testimonial.name}</h3>
              <p className="text-gray-600 text-center">{testimonial.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlidingSection;
