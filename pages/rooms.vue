<script setup>
import Navbar from '~/components/Navbar.vue'
import RoomsDescription from '~/components/rooms-page/RoomsDescription.vue'
import RoomCards from '~/components/rooms-page/RoomCards.vue'
import PopularRoomFacilites from '~/components/rooms-page/PopularRoomFacilities.vue'
import RoomsCustomerExperience from '~/components/rooms-page/RoomsCustomerExperience.vue'
import Footer from '~/components/Footer.vue'
</script>
<template>
    <div class="rooms-page-container">
        <Navbar />
        <header>
            <div class="rooms-header-container">
                <div class="rooms-header-content">
                    <div
                        class="center-header-text"
                        style="scroll-behavior: smooth"
                    >
                        <p
                            class="big-title"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            Rooms & Suites
                        </p>
                        <p
                            class="small-title"
                            data-aos="fade-up"
                            data-aos-delay="1200"
                        >
                            Warmth. Care. Peace.
                        </p>
                        <NuxtLink
                            class="down-button"
                            to="#rooms-description-content"
                            ><Icon
                                name="material-symbols:keyboard-double-arrow-down-rounded"
                                class="down-button-icon"
                        /></NuxtLink>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="rooms-main-container" id="rooms-description-content">
                <RoomsDescription />
                <div class="room-cards-container">
                    <RoomCards />
                </div>
                <div class="popular-room-facilities-area">
                    <PopularRoomFacilites />
                    <RoomsCustomerExperience />
                </div>
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
<style>
.rooms-page-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .rooms-header-container {
        width: 100vw;
        height: 100vh;
        background-image: url('.././public/gallery/rooms-page/rooms-header-bg.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        z-index: 1;
        .rooms-header-content {
            width: 100%;
            height: 100%;
            .center-header-text {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
                position: relative;
                .big-title {
                    color: whitesmoke;
                    font-family: 'Bona+Nova', serif;
                    font-size: 86px;
                }
                .small-title {
                    color: whitesmoke;
                    font-size: 26px;
                    font-weight: 300;
                }
                .down-button {
                    position: absolute;
                    z-index: 4;
                    left: 50%;
                    right: 50%;
                    bottom: 45px;
                    cursor: pointer;
                    transition: 0.4s all ease-in-out;

                    .down-button-icon {
                        font-size: 42px;
                        color: whitesmoke;
                        text-shadow: 0 0 10px rgba(255, 255, 255, 1);
                        transition: 0.4s all ease-in-out;
                    }
                }
                .down-button:hover {
                    bottom: 50px;
                    .down-button-icon {
                        color: #ae0505;
                    }
                }
            }
        }
    }
    .rooms-header-container:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: contrast(110%) saturate(120%) brightness(90%);
        z-index: -1;
    }
    .rooms-main-container {
        width: 100%;
        height: 100%;
        margin: 5rem 0 0;
        display: flex;
        flex-direction: column;
        row-gap: 5rem;
        .popular-room-facilities-area {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
