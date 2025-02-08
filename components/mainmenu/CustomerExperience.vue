<template>
    <div class="customer-experience-content">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide
            ><swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide
            ><swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide
            ><swiper-slide>Slide 7</swiper-slide>
            <swiper-slide>Slide 8</swiper-slide
            ><swiper-slide>Slide 9</swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './global/style.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        }
    },
}
</script>
<style>
.customer-experience-content {
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    flex-direction: row;
    .deneme {
        width: 100px;
        height: 100px;
    }
}
.swiper {
    width: 100%;
    height: 100%;
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.swiper-button-next {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: black;
    top: 85%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: 0.3s all ease-in-out;
}
.swiper-button-next:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
.swiper-button-next::after {
    content: url('/gallery/next.svg');
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}
.swiper-button-prev {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 85%;
    left: 80%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: 0.3s all ease-in-out;
}
.swiper-button-prev:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
.swiper-button-prev:after {
    content: url('/gallery/back.svg');
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
}
</style>
