<script setup>
import RoomCardsSwiper from '~/components/mainmenu/RoomCardsSwiper.vue'
</script>
<template>
    <div class="rooms-preview-container">
        <div class="rooms-text-content">
            <div class="area-subtext">
                <p class="subtext">Extraordinary Suites</p>
                <p class="main-subtext">
                    Discover Tranquility in Our Airport Rooms
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
            row-gap: 40px;
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
    .rooms-cards {
    }
}
</style>
