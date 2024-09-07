"use client";

import Slider from "react-slick";

import bibson from "../assets/testimonials/bibson.jpg"
import captain from "../assets/testimonials/captain_levi.png"
import ahbey from "../assets/testimonials/ahbey.png"
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Usman Abeeb",
    feedback:
      "Working with Musa was a fantastic experience. His attention to detail is unparalleled!",
    image: bibson,
    role: "CEO, Century Tech",
  },
  {
    id: 2,
    name: "Captain Levi",
    feedback:
      "Musa delivered beyond my expectations. His expertise in web development is top-notch.",
    image: captain,
    role: "Team Lead, Dark Durov CTO",
  },
  {
    id: 3,
    name: "Jimoh Abdullah",
    feedback:
      "Professional, efficient, and creative. Musa brings great ideas to the table.",
    image: ahbey,
    role: "Community Manager, Startup",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-[1300px] mx-auto py-10">
      <div className="text-center mb-8">
        <h2 className="text-5xl lg:text-6xl font-bold">Testimonials</h2>
      </div>
      <div className="max-w-[750px] mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow border border-gray-500 max-w-[750px] mx-auto"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 text-lg italic mb-4">
              &quot;{testimonial.feedback}&quot;
              </p>
              <h3 className="text-xl font-semibold ">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
