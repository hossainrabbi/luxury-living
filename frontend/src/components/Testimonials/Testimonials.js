import React from 'react';
import { Container } from 'react-bootstrap';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { reviewsData } from '../../data';
import Testimonial from './Testimonial';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={`${styles.testimonials} py-5`}>
      <Container>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper py-5"
        >
          {reviewsData.map((item) => (
            <SwiperSlide key={item._id}>
              <Testimonial {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
