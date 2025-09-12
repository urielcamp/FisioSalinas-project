import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Autoplay,Pagination } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';
import CardReview from './CardReview';


import "swiper/css"
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Carroucel = () => {
    
    const[reviews,setReviews] = useState([])
    
    const getReviews = async () => {
        const url = '/src/reviews.json';

        return await axios.get(url)
        .then(({data}) => setReviews(data))
        .catch((error) => console.error(error));
        
    }
    
    useEffect(() => {
        getReviews();
    }, [])

    console.log({reviews})
    
    return (
        <div className="carrousel-container">
            <div className="swiper-container">
              <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
                   {reviews?.map((r) => (
                    <SwiperSlide key={r?.id}>
                        <CardReview review={r} /> 
                    </SwiperSlide>
          ))}
                </Swiper>
            </div>
            <div className="pagination" />
        </div>
    );
};

export default Carroucel;
