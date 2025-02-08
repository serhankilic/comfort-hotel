<script setup>
import RoomCardsSwiper from '~/components/mainmenu/RoomCardsSwiper.vue'
</script>
<template>
    <div class="rooms-preview-container">
        <div class="rooms-text-content">
            <div
                class="area-subtext"
                data-aos="fade-up"
                data-aos-duration="1500"
            >
                <p class="subtext">Extraordinary Suites</p>
                <p class="main-subtext">
                    Discover Tranquility in Our Wonder Rooms
                </p>
            </div>
        </div>
        <div class="rooms-cards">
            <RoomCardsSwiper />
        </div>
    </div>
</template>
<style>
.rooms-preview-container {
    .rooms-text-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        .area-subtext {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 30px;
            justify-content: center;
            align-items: center;
            .subtext {
                font-size: 16px;
                text-transform: uppercase;
                font-weight: 700;
            }
            .main-subtext {
                font-size: 86px;
                font-family: 'Bona+Nova', serif;
                width: 50%;
                text-align: center;
                line-height: 95px;
                padding-bottom: 2rem;
            }
        }
    }
}
@media only screen and (max-width: 1280px) {
    .rooms-preview-container {
        .rooms-text-content {
            .area-subtext {
                .subtext {
                    font-size: 14px;
                }
                .main-subtext {
                    width: 70%;
                    font-size: 76px;
                }
            }
        }
    }
}
@media only screen and (max-width: 1024px) {
    .rooms-preview-container {
        .rooms-text-content {
            .area-subtext {
                .subtext {
                    font-size: 14px;
                }
                .main-subtext {
                    width: 70%;
                    font-size: 72px;
                }
            }
        }
    }
}
@media only screen and (max-width: 855px) {
    .rooms-preview-container {
        .rooms-text-content {
            .area-subtext {
                .subtext {
                    font-size: 14px;
                }
                .main-subtext {
                    width: 80%;
                    font-size: 68px;
                }
            }
        }
    }
}
@media only screen and (max-width: 780px) {
    .rooms-preview-container {
        .rooms-text-content {
            .area-subtext {
                .subtext {
                    font-size: 14px;
                }
                .main-subtext {
                    width: 90%;
                    font-size: 68px;
                }
            }
        }
    }
}
@media only screen and (max-width: 590px) {
    .rooms-preview-container {
        .rooms-text-content {
            .area-subtext {
                .subtext {
                    font-size: 14px;
                }
                .main-subtext {
                    width: 90%;
                    font-size: 54px;
                }
            }
        }
    }
}
</style>
