<template>
    <div class="relax-area-container">
        <div class="relax-area-content">
            <div class="relax-area-title-box">
                <div class="title-description">RELAX IN COMFORT</div>
                <div class="title">Extraordinary Location</div>
            </div>
            <div class="relax-content-box">
                <div class="line-box"></div>
                <div class="relax-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    In, nulla, suscipit! Consectetur consequuntur corporis
                    dolorum eum nemo officia porro praesentium quibusdam quos,
                    voluptatem. Ab alias nobis quae, quis tempora voluptate.
                </div>
                <div class="relax-content-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate excepturi fugiat hic incidunt ipsa iure labore
                    libero soluta vero voluptates. Lorem ipsum dolor sit amet.
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.relax-area-container {
    width: 100%;
    height: 100%;
    .relax-area-content {
        width: 100%;
        margin: 6rem auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .relax-area-title-box {
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
            padding-bottom: 40px;
            .title-description {
                display: flex;
                padding-left: 15rem;
                font-size: 14px;
            }
            .title {
                display: flex;
                padding-left: 15rem;
                font-family: 'Bona+Nova', serif;
                font-size: 82px;
            }
        }
        .relax-content-box {
            width: 100%;
            display: flex;
            flex-direction: row;
            padding-left: 8rem;
            column-gap: 60px;
            .line-box {
                width: 200px;
                height: 1px;
                background-color: rgb(210, 23, 23);
            }
            .relax-content-text {
                width: 350px;
                font-size: 16px;
            }
        }
    }
}
</style>
<script setup lang="ts"></script>
