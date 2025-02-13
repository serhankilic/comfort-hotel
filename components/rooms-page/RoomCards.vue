<template>
    <div class="room-cards-area">
        <div class="room-cards-content">
            <div class="room-card">
                <div class="room-card-image room-1">
                    <swiper
                        :slidesPerView="1"
                        :spaceBetween="30"
                        :loop="true"
                        :pagination="{
                            clickable: true,
                        }"
                        :navigation="true"
                        :modules="modules"
                        class="mySwiper"
                    >
                        <swiper-slide>Slide 1</swiper-slide>
                        <swiper-slide>Slide 2</swiper-slide
                        ><swiper-slide>Slide 3</swiper-slide>
                        <swiper-slide>Slide 4</swiper-slide
                        ><swiper-slide>Slide 5</swiper-slide>
                    </swiper>
                </div>
                <div class="room-card-texts">
                    <div class="room-card-title">
                        <p class="room-name">Classic Suite</p>
                        <p class="price">from $80</p>
                    </div>
                    <div class="room-card-title-support">
                        <p class="area-size">30m²</p>
                        <span class="spread">/</span>
                        <p class="view-type">City View</p>
                        <span class="spread">/</span>
                        <div class="guest-amount">2 Guests</div>
                    </div>
                    <div class="room-card-detail-icons">
                        <div class="icon-description room-size">
                            <img
                                src="/public/gallery/icons/alan.svg"
                                alt="size"
                                class="icon"
                            />
                            <p class="icon-text">30m²</p>
                        </div>
                        <div class="icon-description guest-amount">
                            <img
                                src="/public/gallery/icons/user.svg"
                                alt="size"
                                class="icon"
                            />
                            <p class="icon-text">2 Guests</p>
                        </div>
                        <div class="icon-description bed-amount">
                            <img
                                src="/public/gallery/icons/double-bed.svg"
                                alt="size"
                                class="icon"
                            />
                            <p class="icon-text">1 Bed</p>
                        </div>
                        <div class="icon-description shower-amount">
                            <img
                                src="/public/gallery/icons/shower.svg"
                                alt="size"
                                class="icon"
                            />
                            <p class="icon-text">1 Shower</p>
                        </div>
                    </div>
                    <div class="room-card-detail-description">
                        <p class="detail-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aspernatur consequatur deserunt eos explicabo
                            laborum nobis odit optio repudiandae sed. Rerum.
                        </p>
                    </div>
                    <button class="discover-more">
                        <span class="text">Discover More</span>
                        <Icon
                            name="material-symbols-light:chevron-right"
                            class="icon"
                        />
                    </button>
                </div>
            </div>
        </div>
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
.room-cards-area {
    display: flex;
    justify-content: center;
    align-items: center;
    .room-cards-content {
        width: 100%;
        height: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
        .room-card {
            width: 500px;
            height: 650px;
            background-color: transparent;
            display: flex;
            flex-direction: column;
            .room-card-image {
                width: 100%;
                height: 350px;
                .swiper {
                    width: 100%;
                    height: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    transition: 0.3s all ease-in-out;
                    --swiper-navigation-color: dimgray;
                    .swiper-slide {
                        text-align: center;
                        font-size: 18px;
                        background: #fff;

                        /* Center slide text vertically */
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        transition: 0.3s all ease-in-out;
                    }
                    .swiper-slide img {
                        display: block;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
                --swiper-navigation-size: 25px;
                --swiper-navigation-sides-offset: 15px;
                --swiper-theme-color: #ae0505;
                --swiper-pagination-bullet-opacity: 0.75;
                --swiper-pagination-bullet-inactive-color: dimgray;
                --swiper-pagination-bullet-inactive-opacity: 0.25;
                --swiper-pagination-bullet-horizontal-gap: 5px;
                --swiper-pagination-bullet-border-radius: 0px;
                --swiper-pagination-bullet-width: 20px;
                --swiper-pagination-bullet-height: 3px;
                --swiper-pagination-progressbar-size: 3px;
            }
            .swiper:hover {
                --swiper-navigation-color: #ae0505;
            }
            .room-card-texts {
                height: calc(100% - 350px);
                width: 100%;
                padding: 15px 0;
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                .room-card-title {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    justify-content: space-between;
                    align-items: center;
                    .room-name {
                        font-family: 'Bona+Nova', serif;
                        font-size: 32px;
                    }
                    .price {
                        font-size: 16px;
                        font-style: italic;
                    }
                }
                .room-card-title-support {
                    display: flex;
                    flex-direction: row;
                    column-gap: 5px;
                    color: #ae0505;
                    font-size: 14px;
                    font-weight: 400;
                }
                .room-card-detail-icons {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    column-gap: 20px;
                    padding: 10px 0;
                    .icon-description {
                        display: flex;
                        flex-direction: row;
                        column-gap: 10px;
                        align-items: center;
                        .icon {
                            width: 25px;
                            opacity: 0.6;
                        }
                        .icon-text {
                            font-size: 14px;
                            color: dimgray;
                        }
                    }
                }
                .room-card-detail-description {
                    padding-bottom: 10px;
                    .detail-text {
                        font-size: 14px;
                        font-weight: 400;
                    }
                }
                .discover-more {
                    width: fit-content;
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    transition: 0.3s all ease-in-out;

                    .text {
                        font-size: 16px;
                        border-bottom: 1px solid dimgray;
                        transition: 0.3s all ease-in-out;
                    }
                    .icon {
                        color: dimgray;
                        font-size: 25px;
                        transition: 0.3s all ease-in-out;
                    }
                    &:hover {
                        .text {
                            border: 1px solid transparent;
                            padding-right: 5px;
                        }
                        .icon {
                            color: #ae0505;
                        }
                    }
                }
            }
        }
    }
}
</style>
