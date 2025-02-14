<template>
    <div class="rooms-customer-experience-container">
        <div class="rooms-customer-experience-content">
            <img
                src="/public/gallery/icons/experience.svg"
                alt="star"
                class="experience-icon"
            />
            <p class="experience-text">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Adipisci alias aliquam, assumenda commodi dolorem, maiores nemo
                pariatur placeat quas quasi quos reprehenderit sit temporibus
                vel velit. Cupiditate ducimus sequi voluptates."
            </p>
            <p class="customer-id">Anna Williams - TripAdvisor</p>
            <div class="stars">
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
</style>
