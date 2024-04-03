import { useRef } from "react";
import "./Body.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import React from "react";

const Body = () => {
  const progressCircle = useRef<HTMLDivElement | null>(null);
  const progressContent = useRef<HTMLDivElement | null>(null);

  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
    }

    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  // Use return statement to render JSX
  return (
    <div>
      <div>
        <div className="case">
          <div className="inner-case">
            <Swiper
              modules={[Navigation, A11y, Autoplay]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              spaceBetween={30}
              style={{ padding: 30 }}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              {" "}
              <SwiperSlide>
                <img src="image1.jpg" alt="woman" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="image2.jpg" alt="woman" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="image3.jpg" alt="woman" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
