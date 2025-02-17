<template>
    <div class="room-cards-container">
        <div class="room-cards-slider">
            <swiper
                :slidesPerView="'auto'"
                :spaceBetween="30"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                    <div class="card-content-area">
                        <a class="room-picture picture-1"></a>
                        <div class="room-descriptions">
                            <div class="left-area">
                                <a href="#" class="left-up"> Standart Room </a>
                                <div class="left-down">
                                    <p class="room-size">27 m2</p>
                                    <p class="room-person">
                                        2 adults 1 children
                                    </p>
                                </div>
                            </div>
                            <div class="right-area">
                                <p class="right-up">from</p>
                                <p class="right-down">$59</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card-content-area">
                        <a class="room-picture picture-2"></a>
                        <div class="room-descriptions">
                            <div class="left-area">
                                <a href="#" class="left-up"> Elite Room </a>
                                <div class="left-down">
                                    <p class="room-size">27 m2</p>
                                    <p class="room-person">
                                        2 adults 1 children
                                    </p>
                                </div>
                            </div>
                            <div class="right-area">
                                <p class="right-up">from</p>
                                <p class="right-down">$79</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card-content-area">
                        <a class="room-picture picture-3"></a>
                        <div class="room-descriptions">
                            <div class="left-area">
                                <a href="#" class="left-up"> Premium Room </a>
                                <div class="left-down">
                                    <p class="room-size">27 m2</p>
                                    <p class="room-person">
                                        4 adults 2 children
                                    </p>
                                </div>
                            </div>
                            <div class="right-area">
                                <p class="right-up">from</p>
                                <p class="right-down">$99</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card-content-area">
                        <a class="room-picture picture-4"></a>
                        <div class="room-descriptions">
                            <div class="left-area">
                                <a href="#" class="left-up"> Basic Room </a>
                                <div class="left-down">
                                    <p class="room-size">27 m2</p>
                                    <p class="room-person">2 adults</p>
                                </div>
                            </div>
                            <div class="right-area">
                                <p class="right-up">from</p>
                                <p class="right-down">$69</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [],
        }
    },
}
</script>
<style>
.room-cards-container {
    padding-top: 30px;
    .room-cards-slider {
        .swiper {
            width: 100%;
            padding: 0 50px 0 150px;
            height: 620px;
        }

        .swiper-slide {
            width: 500px;
            height: 100%;
            font-size: 18px;
            background: transparent;
            /* Center slide text vertically */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .card-content-area {
                width: 100%;
                height: 95%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .room-picture {
                    width: 100%;
                    height: 500px;
                    background-color: red;
                    position: relative;
                    cursor: pointer;
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .picture-1 {
                    background-image: url('/gallery/rooms/room1.jpg');
                }
                .picture-2 {
                    background-image: url('/gallery/rooms/room2.jpg');
                }
                .picture-3 {
                    background-image: url('/gallery/rooms/room3.jpg');
                }
                .picture-4 {
                    background-image: url('/gallery/rooms/room4.jpg');
                }
                .room-descriptions {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 30px 5px 0;
                    .left-area {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        .left-up {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            text-decoration: none;
                            color: black;
                            font-size: 28px;
                            font-family: 'Bona+Nova', serif;
                            height: 30px;
                            transition: 0.3s ease;
                        }
                        .left-up:hover {
                            color: dimgray;
                        }
                        .left-down {
                            display: flex;
                            flex-direction: row;
                            height: 50px;
                            align-items: center;
                            font-size: 16px;
                            column-gap: 15px;
                        }
                    }
                    .right-area {
                        .right-up {
                            height: 30px;
                            display: flex;
                            align-items: center;
                            font-size: 16px;
                            color: dimgray;
                        }
                        .right-down {
                            display: flex;
                            align-items: center;
                            font-family: 'Bona+Nova', serif;
                            height: 50px;
                            font-size: 28px;
                        }
                    }
                }
            }
        }

        .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
@media only screen and (max-width: 1024px) {
    .room-cards-container {
        padding-top: 50px;
        .room-cards-slider {
            .swiper {
                width: 100%;
                padding-left: 120px;
                height: 520px;
            }

            .swiper-slide {
                width: 400px;
                height: 100%;
                font-size: 18px;
                background: #fff;
                /* Center slide text vertically */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .card-content-area {
                    width: 100%;
                    height: 95%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .room-picture {
                        width: 100%;
                        height: 400px;
                        background-color: red;
                        position: relative;
                        cursor: pointer;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    .picture-1 {
                        background-image: url('/gallery/rooms/room1.jpg');
                    }
                    .picture-2 {
                        background-image: url('/gallery/rooms/room2.jpg');
                    }
                    .picture-3 {
                        background-image: url('/gallery/rooms/room3.jpg');
                    }
                    .picture-4 {
                        background-image: url('/gallery/rooms/room4.jpg');
                    }
                    .room-descriptions {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 30px 30px 0;
                        .left-area {
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            .left-up {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                text-decoration: none;
                                color: black;
                                font-size: 28px;
                                font-family: 'Bona+Nova', serif;
                                height: 30px;
                                transition: 0.3s ease;
                            }
                            .left-up:hover {
                                color: dimgray;
                            }
                            .left-down {
                                display: flex;
                                flex-direction: row;
                                height: 50px;
                                align-items: center;
                                font-size: 16px;
                                column-gap: 15px;
                            }
                        }
                        .right-area {
                            .right-up {
                                height: 30px;
                                display: flex;
                                align-items: center;
                                font-size: 16px;
                                color: dimgray;
                            }
                            .right-down {
                                display: flex;
                                align-items: center;
                                font-family: 'Bona+Nova', serif;
                                height: 50px;
                                font-size: 28px;
                            }
                        }
                    }
                }
            }

            .swiper-slide img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
@media only screen and (max-width: 1024px) {
    .room-cards-container {
        padding-top: 30px;
        .room-cards-slider {
            .swiper {
                width: 100%;
                padding-left: 40px;
                height: 520px;
            }

            .swiper-slide {
                width: 400px;
                height: 100%;
                font-size: 18px;
                background: #fff;
                /* Center slide text vertically */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .card-content-area {
                    width: 100%;
                    height: 95%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .room-picture {
                        width: 100%;
                        height: 400px;
                        background-color: red;
                        position: relative;
                        cursor: pointer;
                        background-size: cover;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    .room-descriptions {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 30px 30px 0;
                        .left-area {
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-start;
                            .left-up {
                                display: flex;
                                justify-content: flex-start;
                                align-items: center;
                                text-decoration: none;
                                color: black;
                                font-size: 28px;
                                font-family: 'Bona+Nova', serif;
                                height: 30px;
                                transition: 0.3s ease;
                            }
                            .left-up:hover {
                                color: dimgray;
                            }
                            .left-down {
                                display: flex;
                                flex-direction: row;
                                height: 50px;
                                align-items: center;
                                font-size: 16px;
                                column-gap: 15px;
                            }
                        }
                        .right-area {
                            .right-up {
                                height: 30px;
                                display: flex;
                                align-items: center;
                                font-size: 16px;
                                color: dimgray;
                            }
                            .right-down {
                                display: flex;
                                align-items: center;
                                font-family: 'Bona+Nova', serif;
                                height: 50px;
                                font-size: 28px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
