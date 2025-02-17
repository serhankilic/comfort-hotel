<template>
    <div class="rooms-customer-experience-container">
        <div class="rooms-customer-experience-content">
            <img
                src="/public/gallery/icons/experience.svg"
                alt="star"
                class="experience-icon"
            />
            <p
                class="experience-text"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci alias aliquam, assumenda commodi dolorem, maiores nemo
                pariatur placeat quas quasi quos reprehenderit sit temporibus
                vel velit. Cupiditate ducimus sequi voluptates."
            </p>
            <p
                class="customer-id"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="400"
            >
                Anna Williams - TripAdvisor
            </p>
            <div
                class="stars"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="600"
            >
                <Icon name="ic:round-star" class="star-icon" />
                <Icon name="ic:round-star" class="star-icon" />
                <Icon name="ic:round-star" class="star-icon" />
                <Icon name="ic:round-star" class="star-icon" />
                <Icon name="ic:round-star" class="star-icon" />
            </div>
        </div>
    </div>
</template>
<style>
.rooms-customer-experience-container {
    width: 100vw;
    height: 650px;
    background-image: url('/public/gallery/customer-experience-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;

    .rooms-customer-experience-content {
        width: 100%;
        height: 100%;
        padding: 0 250px;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        z-index: 2;
        .experience-icon {
            width: 60px;
            height: 60px;
        }
        .experience-text {
            font-size: 24px;
            color: whitesmoke;
            font-weight: 400;
        }
        .customer-id {
            font-size: 20px;
            color: whitesmoke;
            font-weight: 300;
        }
        .stars {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .star-icon {
                font-size: 24px;
                color: orange;
                border: 1px solid black;
            }
        }
    }
}
.rooms-customer-experience-container:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 0;
}
@media only screen and (max-width: 1536px) {
    .rooms-customer-experience-container {
        width: 100vw;
        height: 650px;
        background-image: url('/public/gallery/customer-experience-bg.jpg');
        .rooms-customer-experience-content {
            width: 100%;
            height: 100%;
            padding: 0 250px;
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 2;
            .experience-icon {
                width: 60px;
                height: 60px;
            }
            .experience-text {
                font-size: 22px;
                color: whitesmoke;
                font-weight: 400;
            }
            .customer-id {
                font-size: 18px;
                color: whitesmoke;
                font-weight: 300;
            }
            .stars {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .star-icon {
                    font-size: 22px;
                    color: orange;
                    border: 1px solid black;
                }
            }
        }
    }
}
@media only screen and (max-width: 1280px) {
    .rooms-customer-experience-container {
        width: 100vw;
        height: 500px;
        background-image: url('/public/gallery/customer-experience-bg.jpg');
        .rooms-customer-experience-content {
            width: 100%;
            height: 100%;
            padding: 0 250px;
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 2;
            .experience-icon {
                width: 50px;
                height: 50px;
            }
            .experience-text {
                font-size: 22px;
                color: whitesmoke;
                font-weight: 400;
            }
            .customer-id {
                font-size: 18px;
                color: whitesmoke;
                font-weight: 300;
            }
            .stars {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .star-icon {
                    font-size: 22px;
                    color: orange;
                    border: 1px solid black;
                }
            }
        }
    }
}
@media only screen and (max-width: 1024px) {
    .rooms-customer-experience-container {
        width: 100vw;
        height: 500px;
        background-image: url('/public/gallery/customer-experience-bg.jpg');
        .rooms-customer-experience-content {
            width: 100%;
            height: 100%;
            padding: 0 120px;
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 2;
            .experience-icon {
                width: 50px;
                height: 50px;
            }
            .experience-text {
                font-size: 20px;
                color: whitesmoke;
                font-weight: 400;
            }
            .customer-id {
                font-size: 16px;
                color: whitesmoke;
                font-weight: 300;
            }
            .stars {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .star-icon {
                    font-size: 20px;
                    color: orange;
                    border: 1px solid black;
                }
            }
        }
    }
}
@media only screen and (max-width: 810px) {
    .rooms-customer-experience-container {
        width: 100vw;
        height: 450px;
        background-image: url('/public/gallery/customer-experience-bg.jpg');
        .rooms-customer-experience-content {
            width: 100%;
            height: 100%;
            padding: 0 120px;
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 2;
            .experience-icon {
                width: 40px;
                height: 40px;
            }
            .experience-text {
                font-size: 18px;
                color: whitesmoke;
                font-weight: 400;
            }
            .customer-id {
                font-size: 14px;
                color: whitesmoke;
                font-weight: 300;
            }
            .stars {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .star-icon {
                    font-size: 18px;
                    color: orange;
                    border: 1px solid black;
                }
            }
        }
    }
}
@media only screen and (max-width: 770px) {
    .rooms-customer-experience-container {
        width: 100vw;
        height: 400px;
        background-image: url('/public/gallery/customer-experience-bg.jpg');
        .rooms-customer-experience-content {
            width: 100%;
            height: 100%;
            padding: 0 100px;
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 2;
            .experience-icon {
                width: 40px;
                height: 40px;
            }
            .experience-text {
                font-size: 18px;
                color: whitesmoke;
                font-weight: 400;
            }
            .customer-id {
                font-size: 14px;
                color: whitesmoke;
                font-weight: 300;
            }
            .stars {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .star-icon {
                    font-size: 18px;
                    color: orange;
                    border: 1px solid black;
                }
            }
        }
    }
}
@media only screen and (max-width: 550px) {
    .rooms-customer-experience-container {
        width: 100vw;
        height: 400px;
        background-image: url('/public/gallery/customer-experience-bg.jpg');
        .rooms-customer-experience-content {
            width: 100%;
            height: 100%;
            padding: 0 50px;
            display: flex;
            flex-direction: column;
            row-gap: 25px;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            z-index: 2;
            .experience-icon {
                width: 40px;
                height: 40px;
            }
            .experience-text {
                font-size: 16px;
                color: whitesmoke;
                font-weight: 400;
            }
            .customer-id {
                font-size: 14px;
                color: whitesmoke;
                font-weight: 300;
            }
            .stars {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .star-icon {
                    font-size: 18px;
                    color: orange;
                    border: 1px solid black;
                }
            }
        }
    }
}
</style>
<script setup lang="ts"></script>
