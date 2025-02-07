<template>
    <div class="other-services-container">
        <div class="other-services-content">
            <div class="restaurant-area">
                <section class="title-area">
                    <p class="small-title">BON APETIT</p>
                    <p class="big-title">Exquisite Cuisine</p>
                </section>
                <div class="main-restaurant-area">
                    <div class="effective-card">
                        <p class="title">
                            Elevating <br />
                            Flavors
                        </p>
                        <div class="line"></div>
                        <p class="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aliquam expedita nihil nobis, pariatur
                            praesentium quaerat quibusdam similique ullam?
                            Doloremque ipsa neque reiciendis similique! Commodi
                            consequuntur deserunt distinctio ducimus ea, eius
                            exercitationem. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Ullam, voluptates?
                        </p>
                        <a href="#" class="restaurant-button">LEARN MORE</a>
                    </div>
                    <div class="restaurant-picture"></div>
                </div>
            </div>
            <div class="spa-area"></div>
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
    }
}
</style>
