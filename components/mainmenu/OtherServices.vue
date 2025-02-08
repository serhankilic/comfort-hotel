<template>
    <div class="other-services-container">
        <div class="other-services-content">
            <div class="restaurant-area">
                <section
                    class="title-area"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    <p class="small-title">BON APETIT</p>
                    <p class="big-title">Exquisite Cuisine</p>
                </section>
                <div class="main-restaurant-area">
                    <div class="effective-card" data-aos="fade-right">
                        <p class="title" data-aos="fade-up">
                            Elevating <br />
                            Flavors
                        </p>
                        <div class="line"></div>
                        <p class="text" data-aos="fade-down">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam expedita nihil nobis, pariatur
                            praesentium quaerat quibusdam similique ullam?
                            Doloremque ipsa neque reiciendis similique! Commodi
                            consequuntur deserunt distinctio ducimus ea, eius
                            exercitationem. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Ullam, voluptates?
                        </p>
                        <a href="#" class="restaurant-button" data-aos="zoom-in"
                            >LEARN MORE</a
                        >
                    </div>
                    <div class="restaurant-picture" data-aos="fade-left"></div>
                </div>
            </div>
            <div class="spa-area">
                <div class="spa-text">
                    <div
                        class="spa-titles"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        <p class="small-title">A Variety of Treatments</p>
                        <p class="big-title">Spa & Wellness</p>
                    </div>
                    <div class="line"></div>
                    <div class="spa-content-text" data-aos="fade-right">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Architecto deleniti deserunt dignissimos dolorum
                        enim, eos, id, maiores nemo numquam perferendis quas
                        quidem ratione reprehenderit sequi! Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Officia,
                        repellat!
                    </div>
                </div>
                <div class="right-area">
                    <div class="spa-image" data-aos="fade-left"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.other-services-container {
    padding-top: 6rem;
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 1500px;
    padding-bottom: 4rem;
    .other-services-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 100px;
        .restaurant-area {
            width: 100%;
            .title-area {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: 5px;
                padding-bottom: 3rem;
                .small-title {
                    font-size: 16px;
                }
                .big-title {
                    font-size: 86px;
                    font-family: 'Bona+Nova', serif;
                }
            }
            .main-restaurant-area {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                position: relative;
                padding-top: 1rem;
                .effective-card {
                    padding: 15px 30px;
                    z-index: 2;
                    margin-right: 45rem;
                    top: -20px;
                    position: absolute;
                    width: 400px;
                    height: 600px;
                    background-color: #fff;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    .title {
                        font-size: 46px;
                        font-family: 'Bona+Nova', serif;
                        line-height: 45px;
                    }
                    .line {
                        width: 100px;
                        height: 1px;
                        background-color: red;
                    }
                    .text {
                        font-size: 16px;
                    }
                    .restaurant-button {
                        width: fit-content;
                        text-decoration: none;
                        color: red;
                        padding: 10px 15px;
                        border: 1px solid red;
                        font-size: 16px;
                        transition: 0.3s ease-in;
                    }
                    .restaurant-button:hover {
                        background-color: rgba(255, 0, 0, 0.05);
                    }
                }
                .restaurant-picture {
                    z-index: 1;
                    position: relative;
                    width: 850px;
                    height: 650px;
                    background-color: mediumaquamarine;
                    margin-left: 20rem;
                    background-image: url('/gallery/restaurant.jpg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    border-radius: 5px;
                }
            }
        }
        .spa-area {
            width: 100%;
            justify-content: space-between;
            display: flex;
            flex-direction: row;

            .spa-text {
                width: 50%;
                margin-right: 5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                padding-left: 50px;
                row-gap: 30px;
                .spa-titles {
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    .small-title {
                        font-size: 14px;
                    }
                    .big-title {
                        font-size: 84px;
                        max-width: 250px;
                        font-family: 'Bona+Nova', serif;
                        line-height: 95px;
                    }
                }
                .line {
                    width: 100px;
                    height: 1px;
                    background-color: red;
                }
                .spa-content-text {
                    max-width: 400px;
                    font-size: 16px;
                }
            }
            .right-area {
                width: 50%;
                .spa-image {
                    width: 850px;
                    height: 650px;
                    background-image: url('/gallery/spa-image.jpg');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }
        }
    }
}
</style>
<script setup lang="ts"></script>
