import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// import slider image
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FoodCategories = () => {
  return (
    <section>
      {/* section titile */}
      <SectionTitle
        subheading="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      />

      {/* swiper slider */}
      <Swiper
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="uppercase text-2xl text-white -mt-14 text-center">
            salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="uppercase text-2xl text-white -mt-14 text-center">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="uppercase text-2xl text-white -mt-14 text-center">
            soupes
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="uppercase text-2xl text-white -mt-14 text-center">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="uppercase text-2xl text-white -mt-14 text-center">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default FoodCategories;
