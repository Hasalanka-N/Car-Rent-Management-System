// components/VehicleSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Navigation, Grid } from 'swiper/modules';
import VehicleCard from '../components/VehicleCard';

function VehicleSlider({ vehicles }) {
  return (
    <div className="vehicle-slider">
      <Swiper
        modules={[Grid, Navigation]}
        grid={{ rows: 2 }}
        slidesPerView={2}
        spaceBetween={20}
        navigation
      >
        {vehicles.map((vehicle, index) => (
          <SwiperSlide key={index}>
            <VehicleCard vehicle={vehicle} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VehicleSlider;
