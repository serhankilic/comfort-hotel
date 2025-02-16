<template>
    <div class="rooms-description-content">
        <div class="text-area">
            <p
                class="small-room-text rooms-text"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                COMFORTABLE ROOMS & SPACE
            </p>

            <p
                class="big-room-text rooms-text"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                Explore our refined accommodation options and find the perfect
                space for your stay.
            </p>
            <p
                class="medium-room-text rooms-text"
                data-aos="fade-up"
                data-aos-delay="500"
            >
                All rooms have a bathroom with shower, smart television/radio,
                free WIFI and mini bar. In addition, all rooms are equipped with
                a Nespresso coffee machine. Most rooms are carpeted, and also
                all of them have parquet flooring.
            </p>
        </div>
        <div class="icon-descriptions">
            <p
                class="icon-description-title"
                data-aos="fade-down"
                data-aos-delay="700"
            >
                IN-ROOM AMENITIES
            </p>
            <div class="icon-description-content">
                <div
                    class="description-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="600"
                >
                    <div class="description-pic wifi"></div>
                    <p class="pic-description">AIR CONDITIONING</p>
                </div>
                <div
                    class="description-box"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="700"
                >
                    <div class="description-pic ac"></div>
                    <p class="pic-description">AIR CONDITIONING</p>
                </div>
                <div
                    class="description-box"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="800"
                >
                    <div class="description-pic bed"></div>
                    <p class="pic-description">PREMIUM BED</p>
                </div>
                <div
                    class="description-box"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="900"
                >
                    <div class="description-pic minibar"></div>
                    <p class="pic-description">MINI FRIDGE</p>
                </div>
                <div
                    class="description-box"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                >
                    <div class="description-pic smoke"></div>
                    <p class="pic-description">NO SMOKE</p>
                </div>
                <div
                    class="description-box"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    data-aos-duration="1100"
                >
                    <div class="description-pic shower"></div>
                    <p class="pic-description">SHOWER CABIN</p>
                </div>
            </div>
        </div>
        <div
            class="check-time"
            data-aos="zoom-in"
            data-aos-delay="700"
            data-aos-duration="900"
        >
            <div class="check-in check-content">
                <Icon name="ic:baseline-access-time" class="clock-icon" />
                <p class="check-in-time check-time">CHECK IN: 3:00 PM</p>
            </div>
            <div class="check-out check-content">
                <Icon name="ic:baseline-access-time" class="clock-icon" />
                <p class="check-out-time check-time">CHECK OUT: 12:00 PM</p>
            </div>
        </div>
    </div>
</template>
<style>
.rooms-description-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    .text-area {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        justify-content: center;
        align-items: center;

        .small-room-text {
            font-size: 16px;
            font-weight: 500;
            color: #ae0505;
        }
        .big-room-text {
            width: 50%;
            font-size: 34px;
            font-family: 'Bona+Nova', serif;
            font-weight: 500;
            text-align: center;
        }
        .medium-room-text {
            width: 50%;
            font-size: 18px;
            text-align: center;
            font-weight: 300;
        }
    }
    .icon-descriptions {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
        .icon-description-title {
            font-size: 16px;
            font-weight: 500;
            color: #ae0505;
            border-bottom: 1px solid #ae0505;
        }
        .icon-description-content {
            display: flex;
            flex-direction: row;
            column-gap: 60px;
            .description-box {
                display: flex;
                flex-direction: column;
                row-gap: 10px;
                justify-content: center;
                align-items: center;
                .description-pic {
                    width: 50px;
                    height: 50px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                }
                .pic-description {
                    font-size: 14px;
                    font-weight: 500;
                }
                .wifi {
                    background-image: url('../../public/gallery/icons/wi-fi-icon.svg');
                }
                .ac {
                    background-image: url('../../public/gallery/icons/air-conditioner.svg');
                }
                .bed {
                    background-image: url('../../public/gallery/icons/double-bed.svg');
                }
                .minibar {
                    background-image: url('../../public/gallery/icons/mini-bar.svg');
                }
                .smoke {
                    background-image: url('../../public/gallery/icons/no-smoking.svg');
                }
                .shower {
                    background-image: url('../../public/gallery/icons/shower.svg');
                }
            }
        }
    }
    .check-time {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        .check-content {
            display: flex;
            flex-direction: row;
            column-gap: 10px;
            align-items: center;
            padding: 0 15px;
            .clock-icon {
                font-size: 28px;
                color: #ae0505;
            }
            .check-time {
                font-size: 16px;
                font-weight: 400;
                color: #ae0505;
            }
        }
        .check-in {
            border-right: 1px solid #ae0505;
        }
    }
}
@media only screen and (max-width: 1536px) {
    .rooms-description-content {
        row-gap: 30px;
        .text-area {
            row-gap: 30px;
            .small-room-text {
                font-size: 16px;
                font-weight: 500;
            }
            .big-room-text {
                width: 60%;
                font-size: 34px;
                font-weight: 500;
            }
            .medium-room-text {
                width: 50%;
                font-size: 18px;
                font-weight: 300;
            }
        }
        .icon-descriptions {
            row-gap: 30px;
            padding: 1rem 0;
            .icon-description-title {
                font-size: 16px;
                font-weight: 500;
            }
            .icon-description-content {
                display: flex;
                flex-direction: row;
                column-gap: 60px;
                .description-box {
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    justify-content: center;
                    align-items: center;
                    .description-pic {
                        width: 40px;
                        height: 40px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                    .pic-description {
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }
        }
        .check-time {
            .check-content {
                column-gap: 10px;
                padding: 0 15px;
                .clock-icon {
                    font-size: 26px;
                }
                .check-time {
                    font-size: 16px;
                    font-weight: 400;
                }
            }
        }
    }
}
@media only screen and (max-width: 1020px) {
    .rooms-description-content {
        row-gap: 30px;
        .text-area {
            row-gap: 30px;
            .small-room-text {
                font-size: 14px;
                font-weight: 500;
            }
            .big-room-text {
                width: 65%;
                font-size: 32px;
                font-weight: 500;
            }
            .medium-room-text {
                width: 60%;
                font-size: 16px;
                font-weight: 300;
            }
        }
        .icon-descriptions {
            row-gap: 35px;
            padding: 1rem 0;
            .icon-description-title {
                font-size: 15px;
                font-weight: 500;
            }
            .icon-description-content {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                row-gap: 45px;
                column-gap: 100px;
                .description-box {
                    width: 100%;
                    flex-direction: column;
                    row-gap: 10px;
                    .description-pic {
                        width: 45px;
                        height: 45px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                    .pic-description {
                        font-size: 14px;
                        font-weight: 500;
                        white-space: nowrap;
                    }
                }
            }
        }
        .check-time {
            .check-content {
                column-gap: 10px;
                padding: 0 25px;
                .clock-icon {
                    font-size: 26px;
                }
                .check-time {
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }
    }
}
@media only screen and (max-width: 870px) {
    .rooms-description-content {
        row-gap: 30px;
        .text-area {
            row-gap: 30px;
            .small-room-text {
                font-size: 14px;
                font-weight: 500;
            }
            .big-room-text {
                width: 65%;
                font-size: 32px;
                font-weight: 500;
            }
            .medium-room-text {
                width: 65%;
                font-size: 16px;
                font-weight: 300;
            }
        }
        .icon-descriptions {
            row-gap: 35px;
            padding: 1rem 0;
            .icon-description-title {
                font-size: 15px;
                font-weight: 500;
            }
            .icon-description-content {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                row-gap: 45px;
                column-gap: 100px;
                .description-box {
                    width: 100%;
                    flex-direction: column;
                    row-gap: 10px;
                    .description-pic {
                        width: 45px;
                        height: 45px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                    .pic-description {
                        font-size: 14px;
                        font-weight: 500;
                        white-space: nowrap;
                    }
                }
            }
        }
        .check-time {
            .check-content {
                column-gap: 10px;
                padding: 0 25px;
                .clock-icon {
                    font-size: 26px;
                }
                .check-time {
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }
    }
}
@media only screen and (max-width: 770px) {
    .rooms-description-content {
        row-gap: 30px;
        .text-area {
            row-gap: 30px;
            .small-room-text {
                font-size: 14px;
                font-weight: 500;
            }
            .big-room-text {
                width: 65%;
                font-size: 32px;
                font-weight: 500;
            }
            .medium-room-text {
                width: 65%;
                font-size: 16px;
                font-weight: 300;
            }
        }
        .icon-descriptions {
            row-gap: 35px;
            padding: 1rem 0;
            .icon-description-title {
                font-size: 15px;
                font-weight: 500;
            }
            .icon-description-content {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                row-gap: 45px;
                column-gap: 80px;
                .description-box {
                    width: 100%;
                    flex-direction: column;
                    row-gap: 10px;
                    .description-pic {
                        width: 40px;
                        height: 40px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                    .pic-description {
                        font-size: 13px;
                        font-weight: 500;
                        white-space: nowrap;
                    }
                }
            }
        }
        .check-time {
            .check-content {
                column-gap: 10px;
                padding: 0 25px;
                .clock-icon {
                    font-size: 26px;
                }
                .check-time {
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }
    }
}
@media only screen and (max-width: 645px) {
    .rooms-description-content {
        row-gap: 30px;
        .text-area {
            row-gap: 30px;
            .small-room-text {
                font-size: 14px;
                font-weight: 500;
            }
            .big-room-text {
                width: 70%;
                font-size: 28px;
                font-weight: 500;
            }
            .medium-room-text {
                width: 70%;
                font-size: 14px;
                font-weight: 400;
            }
        }
        .icon-descriptions {
            row-gap: 45px;
            padding: 1rem 0;
            .icon-description-title {
                font-size: 15px;
                font-weight: 500;
            }
            .icon-description-content {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                row-gap: 45px;
                column-gap: 64px;
                .description-box {
                    width: 100%;
                    flex-direction: column;
                    row-gap: 10px;
                    .description-pic {
                        width: 40px;
                        height: 40px;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                    }
                    .pic-description {
                        font-size: 13px;
                        font-weight: 500;
                        white-space: nowrap;
                    }
                }
            }
        }
        .check-time {
            .check-content {
                column-gap: 10px;
                padding: 0 25px;
                .clock-icon {
                    font-size: 26px;
                }
                .check-time {
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }
    }
}
</style>
<script></script>
