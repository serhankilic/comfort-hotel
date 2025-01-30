<script setup>
import Navbar from '~/components/Navbar.vue'
</script>
<template>
    <div class="main-menu-container">
        <header>
            <nav>
                <Navbar />
            </nav>
            <swiper
                :pagination="pagination"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide
                    ><div class="header-container-1">
                        <div class="header-content-section">
                            <div class="content-title">Suite Collection</div>
                            <div class="support-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. A est laboriosam praesentium
                                vero voluptates? Consectetur cupiditate ipsa
                                tenetur voluptatum. Aliquam! Lorem ipsum dolor
                                sit amet, consectetur adipisicing elit.
                            </div>
                        </div>
                    </div></swiper-slide
                >
                <swiper-slide>Slide 2</swiper-slide
                ><swiper-slide>Slide 3</swiper-slide>
            </swiper>
        </header>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

import './global/style.css'

// import required modules
import { Pagination } from 'swiper/modules'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            pagination: {
                clickable: true,
                renderBullet: function (index, className) {
                    return (
                        '<span class="' +
                        className +
                        '">' +
                        (index + 1) +
                        '</span>'
                    )
                },
            },
            modules: [Pagination],
        }
    },
}
</script>
<style>
.main-menu-container {
    width: 100%;
    height: 100%;
    header {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        nav {
            width: 100%;
            margin: 0 auto;
        }
        .header-container-1 {
            width: 100%;
            height: 100%;
            background-image: url('/gallery/header-bg-1.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            overflow: hidden;
            filter: contrast(105%);
        }

        .header-content-section {
            width: 100%;
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            .content-title {
                margin-bottom: 30px;
                font-family: 'Bona+Nova', serif;
                font-weight: 400;
                font-size: 82px;
                color: white;
                text-shadow:
                    0px 4px 3px rgba(0, 0, 0, 0.4),
                    0px 8px 13px rgba(0, 0, 0, 0.1),
                    0px 18px 23px rgba(0, 0, 0, 0.1);
            }
            .support-text {
                font-size: 18px;
                font-weight: 400;
                max-width: 700px;
                color: white;
                text-shadow:
                    0px 4px 3px rgba(0, 0, 0, 0.4),
                    0px 8px 13px rgba(0, 0, 0, 0.1),
                    0px 18px 23px rgba(0, 0, 0, 0.1);
            }
        }
    }
}
</style>
