<template>
    <div class="main-menu-cards-area">
        <div class="cards-title">
            <span class="cards-title-text"
                >THE BREATHTAKING BEAUTY OF OUR SUITES</span
            >
            <div class="title-line"></div>
        </div>
        <div class="double-card-content">
            <div class="card-picture card-1">
                <div class="card-description-box">
                    <div class="description-box-title">
                        Exquisite Escape Awaits
                    </div>
                    <div class="description-box-line"></div>
                    <div class="description-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nobis perspiciatis praesentium repellat saepe
                        sapiente! Adipisci consectetur nemo nostrum quia totam.
                    </div>
                    <a href="#" class="description-box-button">VIEW ROOMS</a>
                </div>
            </div>
            <div class="card-picture card-2">
                <div class="card-description-box">
                    <div class="description-box-title">
                        Exquisite Escape Awaits
                    </div>
                    <div class="description-box-line"></div>
                    <div class="description-box-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nobis perspiciatis praesentium repellat saepe
                        sapiente! Adipisci consectetur nemo nostrum quia totam.
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
                }
                .description-box-line {
                    width: 100px;
                    height: 1px;
                    background-color: rgb(210, 23, 23);
                    margin-bottom: 30px;
                }
                .description-box-text {
                    font-size: 24px;
                    padding-bottom: 50px;
                    line-height: 34px;
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
