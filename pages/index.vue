<script setup>
import Navbar from '~/components/mainmenu/Navbar.vue'
import RelaxArea from '~/components/mainmenu/RelaxArea.vue'
import MainMenuCards from '~/components/mainmenu/MainMenuCards.vue'
import RoomsPreview from '~/components/mainmenu/RoomsPreview.vue'
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
                <swiper-slide
                    ><div class="header-container-2">
                        <div class="header-content-section">
                            <div class="content-title">Istanbul Experience</div>
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
                <swiper-slide
                    ><div class="header-container-3">
                        <div class="header-content-section">
                            <div class="content-title">Feel The Culture</div>
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
            </swiper>
        </header>
        <main>
            <div class="main-support-area">
                <RelaxArea />
                <div class="cleaning-bg"></div>
            </div>
            <div class="main-menu-cards-container">
                <MainMenuCards />
            </div>
            <div class="main-menu-rooms-container">
                <RoomsPreview />
            </div>
        </main>
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
    display: flex;
    flex-direction: column;
    overflow: hidden;
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
        .header-container-2 {
            width: 100%;
            height: 100%;
            background-image: url('/gallery/header-bg-2.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            overflow: hidden;
        }
        .header-container-3 {
            width: 100%;
            height: 100%;
            background-image: url('/gallery/header-bg-3.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            overflow: hidden;
            filter: contrast(105%) saturate(80%) brightness(90%);
        }

        .header-content-section {
            width: 100%;
            height: 100%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-top: 10px;
            .content-title {
                padding-bottom: 30px;
                font-family: 'Bona+Nova', serif;
                font-weight: 400;
                font-size: 82px;
                color: white;
                text-shadow:
                    0 4px 3px rgba(0, 0, 0, 0.4),
                    0 8px 13px rgba(0, 0, 0, 0.1),
                    0 18px 23px rgba(0, 0, 0, 0.1);
            }
            .support-text {
                font-size: 18px;
                font-weight: 400;
                max-width: 700px;
                color: white;
                text-shadow:
                    0 4px 3px rgba(0, 0, 0, 0.4),
                    0 8px 13px rgba(0, 0, 0, 0.1),
                    0 18px 23px rgba(0, 0, 0, 0.1);
            }
        }
    }
    main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .main-support-area {
            width: 100%;
            height: 100%;
            .cleaning-bg {
                width: 100%;
                height: 500px;
                background-image: url('/gallery/cleaning-bg.jpg');
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                filter: contrast(105%) brightness(90%) saturate(90%);
                overflow: hidden;
                margin-bottom: 4rem;
                box-shadow:
                    rgba(17, 17, 26, 0.1) 0 8px 24px,
                    rgba(17, 17, 26, 0.1) 0 16px 56px,
                    rgba(17, 17, 26, 0.1) 0 24px 80px;
            }
        }
        .main-menu-cards-container {
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        .main-menu-rooms-container {
            width: 100%;
        }
    }
}

.swiper {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-pagination-bullet {
    position: relative;
    z-index: 10;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: red;
}

.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
    position: relative;
    z-index: 10;
}

@media only screen and (max-width: 768px) {
    .main-menu-container {
        width: 100%;
        height: 100%;
        header {
            .header-content-section {
                width: 100%;
                height: 100%;
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 10px;
                .content-title {
                    font-family: 'Bona+Nova', serif;
                    font-weight: 400;
                    font-size: 80px;
                    color: white;
                    text-shadow:
                        0 4px 3px rgba(0, 0, 0, 0.4),
                        0 8px 13px rgba(0, 0, 0, 0.1),
                        0 18px 23px rgba(0, 0, 0, 0.1);
                }
                .support-text {
                    font-size: 16px;
                    font-weight: 400;
                    max-width: 500px;
                    color: white;
                    text-shadow:
                        0 4px 3px rgba(0, 0, 0, 0.4),
                        0 8px 13px rgba(0, 0, 0, 0.1),
                        0 18px 23px rgba(0, 0, 0, 0.1);
                }
            }
        }
    }
}
@media only screen and (max-width: 648px) {
    .main-menu-container {
        width: 100%;
        height: 100%;
        header {
            .header-content-section {
                width: 100%;
                height: 100%;
                margin: auto;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 40px;
                .content-title {
                    font-family: 'Bona+Nova', serif;
                    font-weight: 400;
                    color: white;
                    text-shadow:
                        0 4px 3px rgba(0, 0, 0, 0.4),
                        0 8px 13px rgba(0, 0, 0, 0.1),
                        0 18px 23px rgba(0, 0, 0, 0.1);
                }
                .support-text {
                    font-size: 16px;
                    font-weight: 400;
                    max-width: 500px;
                    color: white;
                    text-shadow:
                        0 4px 3px rgba(0, 0, 0, 0.4),
                        0 8px 13px rgba(0, 0, 0, 0.1),
                        0 18px 23px rgba(0, 0, 0, 0.1);
                }
            }
        }
    }
}
</style>
