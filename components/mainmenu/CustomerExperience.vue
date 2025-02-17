<template>
    <div class="customer-experience-content">
        <div class="customer-experience-bg"></div>
        <swiper :navigation="true" :modules="modules" class="mySwiper">
            <swiper-slide
                ><p class="textbox">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusamus assumenda doloribus ducimus error, ex harum
                    impedit laboriosam minus natus nesciunt quidem reiciendis
                    repellat rerum saepe. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Consequuntur esse explicabo
                    odio quos sit ullam?"
                </p>
                <div class="customer-info">
                    <p class="customer-name">John D</p>
                    <p class="customer-job">BUSINESS TRAVALER</p>
                </div>
            </swiper-slide>
            <swiper-slide
                ><p class="textbox">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio dolor dolorem ipsa reprehenderit vero. Amet
                    explicabo itaque nulla repudiandae tenetur? Ex expedita
                    fugit illo minus nulla quasi quidem quisquam, voluptatum?"
                </p>
                <div class="customer-info">
                    <p class="customer-name">Han K</p>
                    <p class="customer-job">SOFTWARE DEVELOPER</p>
                </div>
            </swiper-slide>
            <swiper-slide
                ><p class="textbox">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Assumenda deserunt excepturi illo impedit ipsam, magni nam
                    perspiciatis sed. Animi architecto culpa inventore odio
                    sapiente voluptas!"
                </p>
                <div class="customer-info">
                    <p class="customer-name">EREN B</p>
                    <p class="customer-job">SALE EXPERT</p>
                </div>
            </swiper-slide>
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
    display: flex;
    flex-direction: row;
    .customer-experience-bg {
        width: 500px;
        height: 300px;
        background-image: url('/gallery/customer-bg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .swiper {
        width: 100%;
        height: 100%;
        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 30px 20px;
            width: 100%;

            .textbox {
                text-align: start;
                font-size: 17px;
            }
            .customer-info {
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                flex-direction: column;
                .customer-name {
                    font-size: 24px;
                    font-family: 'Bona+Nova', serif;
                }
                .customer-job {
                    font-size: 14px;
                    letter-spacing: 2px;
                    color: dimgray;
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
}
@media only screen and (max-width: 970px) {
    .customer-experience-content {
        width: 100%;
        height: 100%;
        background-color: red;
        display: flex;
        flex-direction: row;
        .customer-experience-bg {
            width: 400px;
            height: 300px;
            background-image: url('/gallery/customer-bg.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .swiper {
            width: 100%;
            height: 100%;
            .swiper-slide {
                font-size: 18px;
                .textbox {
                    text-align: start;
                    font-size: 16px;
                }
                .customer-info {
                    .customer-name {
                        font-size: 24px;
                        font-family: 'Bona+Nova', serif;
                    }
                    .customer-job {
                        font-size: 14px;
                        letter-spacing: 2px;
                        color: dimgray;
                    }
                }
            }
        }
        .swiper-button-next {
            display: flex;
            width: 40px;
            height: 40px;
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
            --swiper-navigation-size: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .swiper-button-prev {
            width: 40px;
            height: 40px;
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
    }
}
@media only screen and (max-width: 840px) {
    .customer-experience-content {
        width: 100%;
        height: 100%;
        background-color: red;
        display: flex;
        flex-direction: row;
        .customer-experience-bg {
            width: 300px;
            height: 300px;
            background-image: url('/gallery/customer-bg.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .swiper {
            width: 100%;
            height: 100%;
            .swiper-slide {
                font-size: 16px;
                .textbox {
                    text-align: start;
                    font-size: 14px;
                }
                .customer-info {
                    .customer-name {
                        font-size: 24px;
                        font-family: 'Bona+Nova', serif;
                    }
                    .customer-job {
                        font-size: 14px;
                        letter-spacing: 2px;
                        color: dimgray;
                    }
                }
            }
        }
        .swiper-button-next {
            display: flex;
            width: 40px;
            height: 40px;
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
        }
        .swiper-button-prev {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 85%;
            left: 75%;
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
    }
}
</style>
