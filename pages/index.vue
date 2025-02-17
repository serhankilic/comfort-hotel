<script setup>
import Navbar from '~/components/Navbar.vue'
import RelaxArea from '~/components/mainmenu/RelaxArea.vue'
import MainMenuCards from '~/components/mainmenu/MainMenuCards.vue'
import RoomsPreview from '~/components/mainmenu/RoomsPreview.vue'
import OtherServices from '~/components/mainmenu/OtherServices.vue'
import CustomerExperience from '~/components/mainmenu/CustomerExperience.vue'
import Footer from '~/components/Footer.vue'
</script>
<template>
    <div class="main-menu-container" id="main-menu">
        <header class="main-menu-header">
            <nav class="main-menu-nav">
                <Navbar />
            </nav>
            <swiper
                :pagination="pagination"
                :modules="modules"
                loop="true"
                class="mySwiper"
            >
                <swiper-slide
                    ><div class="header-container-1">
                        <div class="header-content-section">
                            <div
                                class="content-title"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                Suite Collection
                            </div>
                            <div
                                class="support-text"
                                data-aos="fade-up"
                                data-aos-delay="1200"
                            >
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
        <main class="main-container">
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
            <div class="other-services-container">
                <OtherServices />
            </div>
            <div class="main-customer-experience-container">
                <div class="customer-experience-area" data-aos="fade-up">
                    <CustomerExperience />
                </div>
            </div>
        </main>
        <footer>
            <div class="main-menu-footer-container">
                <Footer />
            </div>
        </footer>
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
    .main-menu-header {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        .main-menu-nav {
            width: 100%;
            margin: 0 auto;
        }
        .swiper-slide {
            height: 100vh;
            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
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
    .main-container {
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
        .main-customer-experience-container {
            width: 100%;
            height: 80vh;
            background-image: url('/gallery/customer-experience.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            margin-bottom: 15rem;
            position: relative;
            z-index: 1;
            .customer-experience-area {
                z-index: 3;
                position: absolute;
                width: 950px;
                height: 300px;
                background-color: white;
                bottom: -100px;
            }
        }
        .main-customer-experience-container:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            z-index: -1;
        }
    }
}
@media only screen and (max-width: 970px) {
    .main-menu-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .main-container {
            .main-customer-experience-container {
                width: 100%;
                height: 80vh;
                justify-content: center;
                align-items: flex-end;
                margin-bottom: 15rem;
                position: relative;
                z-index: 1;
                .customer-experience-area {
                    z-index: 3;
                    position: absolute;
                    width: 850px;
                    height: 300px;
                    background-color: white;
                    bottom: -100px;
                }
            }
            .main-customer-experience-container:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.2);
                z-index: -1;
            }
        }
    }
}
@media only screen and (max-width: 840px) {
    .main-menu-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        .main-container {
            .main-customer-experience-container {
                width: 100%;
                height: 80vh;
                justify-content: center;
                align-items: flex-end;
                margin-bottom: 15rem;
                position: relative;
                z-index: 1;
                .customer-experience-area {
                    z-index: 3;
                    position: absolute;
                    width: 650px;
                    height: 300px;
                    background-color: white;
                    bottom: -100px;
                }
            }
            .main-customer-experience-container:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.2);
                z-index: -1;
            }
        }
    }
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
