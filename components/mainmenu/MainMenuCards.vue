<template>
    <div class="main-menu-cards-area">
        <div class="cards-title">
            <span
                class="cards-title-text"
                data-aos="fade-up"
                data-aos-duration="1500"
                >THE BREATHTAKING BEAUTY OF OUR SUITES</span
            >
            <div class="title-line"></div>
        </div>
        <div class="double-card-content">
            <div class="card-picture card-1" data-aos="fade-right">
                <div class="card-description-box" data-aos="zoom-in-left">
                    <div class="description-box-title">
                        Exquisite Escape Awaits
                    </div>
                    <div class="description-box-line" data-aos="zoom-in"></div>
                    <div class="description-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nobis perspiciatis praesentium repellat saepe
                        sapiente! Adipisci consectetur nemo nostrum quia totam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Corporis dolorem eaque iusto labore laborum neque,
                        praesentium quibusdam repellat sapiente sunt.
                    </div>
                    <a href="#" class="description-box-button">VIEW ROOMS</a>
                </div>
            </div>
            <div class="card-picture card-2" data-aos="fade-left">
                <div class="card-description-box" data-aos="zoom-in-right">
                    <div class="description-box-title">
                        Exquisite Escape Awaits
                    </div>
                    <div class="description-box-line"></div>
                    <div class="description-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nobis perspiciatis praesentium repellat saepe
                        sapiente! Adipisci consectetur nemo nostrum quia totam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Architecto blanditiis eveniet id nisi sapiente
                        voluptates. Assumenda eos modi tempore unde?
                    </div>
                    <a href="#" class="description-box-button">VIEW ROOMS</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.main-menu-cards-area {
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 10px 100px;
    align-self: center;
    .cards-title {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 30px;
        padding-bottom: 4rem;
        .cards-title-text {
            font-size: 14px;
            padding-left: 4rem;
        }
        .title-line {
            width: 100px;
            height: 1px;
            background-color: rgb(210, 23, 23);
        }
    }
    .double-card-content {
        width: 100%;
        padding-bottom: 10rem;
        display: flex;
        flex-direction: column;
        row-gap: 10rem;
        justify-content: space-between;
        align-items: center;
        .card-1 {
            background-image: url('/gallery/card-1-1.jpg');
            .card-description-box {
                right: -240px;
                top: 30px;
            }
        }
        .card-2 {
            background-image: url('/gallery/card-1-2.jpg');
            .card-description-box {
                left: -240px;
                top: 30px;
            }
        }

        .card-picture {
            width: 800px;
            height: 900px;
            position: relative;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            .card-description-box {
                width: 350px;
                height: 700px;
                background-color: white;
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: 30px 30px;
                .description-box-title {
                    width: 100px;
                    font-size: 46px;
                    font-family: 'Bona+Nova', serif;
                    line-height: 50px;
                }
                .description-box-line {
                    width: 100px;
                    height: 1px;
                    background-color: rgb(210, 23, 23);
                    margin-bottom: 30px;
                }
                .description-box-text {
                    font-size: 16px;
                    padding-bottom: 50px;
                    color: dimgray;
                }
                .description-box-button {
                    width: 170px;
                    font-size: 20px;
                    text-decoration: none;
                    border: 1px solid rgb(210, 23, 23);
                    text-align: center;
                    color: rgb(210, 23, 23);
                    padding: 10px 15px;
                    transition: 0.3s;
                }
                .description-box-button:hover {
                    background-color: rgba(210, 23, 23, 0.05);
                }
            }
        }
    }
}
</style>
<script setup lang="ts"></script>
