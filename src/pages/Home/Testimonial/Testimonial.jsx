import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa6";
import "./Testimonial.css";

// import react rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="mb-16">
      <SectionTitle
        subheading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {reviews.map((rev) => (
            <SwiperSlide key={rev._id}>
              <div className="mx-36 text-center items-center flex flex-col gap-3">
                <Rating style={{ maxWidth: 180 }} value={rev.rating} readOnly />
                <FaQuoteLeft size={100} />
                <p>{rev.details}</p>
                <span className="text-3xl text-[#CD9003]">{rev.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimonial;
