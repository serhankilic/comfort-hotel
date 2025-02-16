<template>
    <div class="room-facilities-container">
        <div class="room-facilities-content">
            <div class="left-side">
                <p class="small-title">COMFORTABLE STAY EXPERIENCE</p>
                <p class="big-title">MOST POPULAR FACILITIES</p>
                <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cum exercitationem itaque laborum perferendis porro
                    voluptatum! Alias aperiam aspernatur aut consequuntur
                    dignissimos dolorem eos error
                </p>
                <a href="#" class="more">More About Services</a>
            </div>
            <div class="right-side">
                <div class="list-content">
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">High Quality Bed</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">Smart TV</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">Luxury Shower</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">Mini Fridge</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">Spa Flip Flops</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">Coffee Table</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">Bathrobes</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">Dishes</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">Laundry</p>
                    </div>
                    <div class="list-item">
                        <Icon name="material-symbols:add" class="more" />
                        <p class="list-text">24/7 Security</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.room-facilities-container {
    width: 100%;
    height: 100%;
    background-color: #252321;
    .room-facilities-content {
        width: 100%;
        height: 100%;
        max-width: 1500px;
        padding: 100px 50px;
        display: flex;
        flex-direction: row;
        column-gap: 120px;
        justify-content: center;
        align-items: center;
        .left-side {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            .small-title {
                font-size: 20px;
                color: #ae0505;
                font-weight: 500;
            }
            .big-title {
                font-family: 'Bona+Nova', serif;
                font-size: 42px;
                color: whitesmoke;
                padding-bottom: 30px;
            }
            .description {
                font-size: 18px;
                font-weight: 300;
                color: whitesmoke;
                max-width: 600px;
                padding-bottom: 30px;
            }
            .more {
                width: fit-content;
                padding-bottom: 5px;
                text-decoration: none;
                color: whitesmoke;
                font-family: 'Bona+Nova', serif;
                font-size: 20px;
                font-weight: 300;
                border-bottom: 1px solid #ae0505;
                transition: 0.3s all ease-in-out;
                opacity: 85%;
            }
            .more:hover {
                border-bottom: 1px solid dimgray;
                opacity: 1;
            }
        }
        .right-side {
            height: 100%;
            display: flex;
            justify-content: flex-start;
            .list-content {
                padding: 0 10px 20px;
                margin-top: 40px;
                display: grid;
                grid-template-rows: repeat(5, 1fr);
                grid-template-columns: repeat(2, 1fr);
                row-gap: 20px;
                column-gap: 80px;
                .list-item {
                    display: flex;
                    flex-direction: row;
                    column-gap: 10px;
                    justify-content: flex-start;
                    align-items: center;
                    .more {
                        font-size: 18px;
                        color: #ae0505;
                        margin: 0;
                    }
                    .list-text {
                        font-size: 18px;
                        color: whitesmoke;
                        font-weight: 400;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 1536px) {
    .room-facilities-container {
        width: 100%;
        height: 100%;
        .room-facilities-content {
            max-width: 1300px;
            padding: 100px 50px;
            display: flex;
            flex-direction: row;
            column-gap: 120px;
            justify-content: center;
            align-items: center;
            .left-side {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                .small-title {
                    font-size: 18px;
                    color: #ae0505;
                    font-weight: 500;
                }
                .big-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 38px;
                    color: whitesmoke;
                    padding-bottom: 30px;
                }
                .description {
                    font-size: 16px;
                    font-weight: 300;
                    color: whitesmoke;
                    max-width: 600px;
                    padding-bottom: 30px;
                }
                .more {
                    width: fit-content;
                    padding-bottom: 5px;
                    text-decoration: none;
                    color: whitesmoke;
                    font-family: 'Bona+Nova', serif;
                    font-size: 18px;
                    font-weight: 300;
                    border-bottom: 1px solid #ae0505;
                    transition: 0.3s all ease-in-out;
                    opacity: 85%;
                }
                .more:hover {
                    border-bottom: 1px solid dimgray;
                    opacity: 1;
                }
            }
            .right-side {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                .list-content {
                    padding: 0 0 20px;
                    margin-top: 40px;
                    display: grid;
                    grid-template-rows: repeat(5, 1fr);
                    grid-template-columns: repeat(2, 1fr);
                    row-gap: 20px;
                    column-gap: 50px;
                    .list-item {
                        display: flex;
                        flex-direction: row;
                        column-gap: 10px;
                        justify-content: flex-start;
                        align-items: center;
                        .more {
                            font-size: 16px;
                            color: #ae0505;
                        }
                        .list-text {
                            font-size: 16px;
                            color: whitesmoke;
                            font-weight: 400;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 1280px) {
    .room-facilities-container {
        width: 100%;
        height: 100%;
        .room-facilities-content {
            max-width: 1200px;
            padding: 80px 40px;
            display: flex;
            flex-direction: row;
            column-gap: 120px;
            justify-content: center;
            align-items: center;
            .left-side {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                .small-title {
                    font-size: 16px;
                    color: #ae0505;
                    font-weight: 500;
                }
                .big-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 36px;
                    color: whitesmoke;
                    padding-bottom: 30px;
                }
                .description {
                    font-size: 14px;
                    font-weight: 300;
                    color: whitesmoke;
                    max-width: 600px;
                    padding-bottom: 30px;
                }
                .more {
                    width: fit-content;
                    padding-bottom: 5px;
                    text-decoration: none;
                    color: whitesmoke;
                    font-family: 'Bona+Nova', serif;
                    font-size: 16px;
                    font-weight: 300;
                    border-bottom: 1px solid #ae0505;
                    transition: 0.3s all ease-in-out;
                    opacity: 85%;
                }
                .more:hover {
                    border-bottom: 1px solid dimgray;
                    opacity: 1;
                }
            }
            .right-side {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                .list-content {
                    padding: 0 0 20px;
                    margin-top: 40px;
                    display: grid;
                    grid-template-rows: repeat(5, 1fr);
                    grid-template-columns: repeat(2, 1fr);
                    row-gap: 20px;
                    column-gap: 50px;
                    .list-item {
                        display: flex;
                        flex-direction: row;
                        column-gap: 10px;
                        justify-content: flex-start;
                        align-items: center;
                        .more {
                            font-size: 16px;
                            color: #ae0505;
                        }
                        .list-text {
                            font-size: 14px;
                            color: whitesmoke;
                            font-weight: 400;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 1024px) {
    .room-facilities-container {
        width: 100%;
        height: 100%;
        .room-facilities-content {
            max-width: 1000px;
            padding: 80px 40px;
            display: flex;
            flex-direction: row;
            column-gap: 120px;
            justify-content: center;
            align-items: center;
            .left-side {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                .small-title {
                    font-size: 16px;
                    color: #ae0505;
                    font-weight: 500;
                }
                .big-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 36px;
                    color: whitesmoke;
                    padding-bottom: 30px;
                }
                .description {
                    font-size: 14px;
                    font-weight: 300;
                    color: whitesmoke;
                    max-width: 600px;
                    padding-bottom: 30px;
                }
                .more {
                    width: fit-content;
                    padding-bottom: 5px;
                    text-decoration: none;
                    color: whitesmoke;
                    font-family: 'Bona+Nova', serif;
                    font-size: 16px;
                    font-weight: 300;
                    border-bottom: 1px solid #ae0505;
                    transition: 0.3s all ease-in-out;
                    opacity: 85%;
                }
                .more:hover {
                    border-bottom: 1px solid dimgray;
                    opacity: 1;
                }
            }
            .right-side {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                .list-content {
                    padding: 0 0 20px;
                    margin-top: 40px;
                    display: grid;
                    grid-template-rows: repeat(5, 1fr);
                    grid-template-columns: repeat(2, 1fr);
                    row-gap: 15px;
                    column-gap: 50px;
                    .list-item {
                        display: flex;
                        flex-direction: row;
                        column-gap: 10px;
                        justify-content: flex-start;
                        align-items: center;
                        .more {
                            font-size: 16px;
                            color: #ae0505;
                        }
                        .list-text {
                            font-size: 14px;
                            color: whitesmoke;
                            font-weight: 400;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 920px) {
    .room-facilities-container {
        width: 100%;
        height: 100%;
        .room-facilities-content {
            max-width: 850px;
            padding: 80px 40px;
            display: flex;
            flex-direction: row;
            column-gap: 120px;
            justify-content: center;
            align-items: center;
            .left-side {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                .small-title {
                    font-size: 14px;
                    color: #ae0505;
                    font-weight: 500;
                    padding-bottom: 10px;
                }
                .big-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 28px;
                    color: whitesmoke;
                    padding-bottom: 30px;
                }
                .description {
                    font-size: 14px;
                    font-weight: 300;
                    color: whitesmoke;
                    max-width: 600px;
                    padding-bottom: 30px;
                }
                .more {
                    width: fit-content;
                    padding-bottom: 5px;
                    text-decoration: none;
                    color: whitesmoke;
                    font-family: 'Bona+Nova', serif;
                    font-size: 16px;
                    font-weight: 300;
                    border-bottom: 1px solid #ae0505;
                    transition: 0.3s all ease-in-out;
                    opacity: 85%;
                }
                .more:hover {
                    border-bottom: 1px solid dimgray;
                    opacity: 1;
                }
            }
            .right-side {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                .list-content {
                    padding: 0 0 20px;
                    margin-top: 40px;
                    display: grid;
                    grid-template-rows: repeat(5, 1fr);
                    grid-template-columns: repeat(2, 1fr);
                    row-gap: 15px;
                    column-gap: 50px;
                    .list-item {
                        display: flex;
                        flex-direction: row;
                        column-gap: 10px;
                        justify-content: flex-start;
                        align-items: center;
                        .more {
                            font-size: 16px;
                            color: #ae0505;
                        }
                        .list-text {
                            font-size: 14px;
                            color: whitesmoke;
                            font-weight: 400;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 788px) {
    .room-facilities-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        .room-facilities-content {
            max-width: 700px;
            padding: 60px 40px;
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            column-gap: 120px;
            justify-content: center;
            align-items: center;
            .left-side {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                padding-bottom: 20px;
                .small-title {
                    font-size: 14px;
                    color: #ae0505;
                    font-weight: 500;
                    padding-bottom: 10px;
                }
                .big-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 28px;
                    color: whitesmoke;
                    padding-bottom: 30px;
                }
                .description {
                    font-size: 14px;
                    font-weight: 300;
                    color: whitesmoke;
                    max-width: 700px;
                    padding-bottom: 30px;
                }
                .more {
                    width: fit-content;
                    padding-bottom: 5px;
                    text-decoration: none;
                    color: whitesmoke;
                    font-family: 'Bona+Nova', serif;
                    font-size: 16px;
                    font-weight: 300;
                    border-bottom: 1px solid #ae0505;
                    transition: 0.3s all ease-in-out;
                    opacity: 85%;
                    margin: 0 auto;
                }
                .more:hover {
                    border-bottom: 1px solid dimgray;
                    opacity: 1;
                }
            }
            .right-side {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                .list-content {
                    padding: 0;
                    margin-top: 0;
                    display: grid;
                    grid-template-rows: repeat(5, 1fr);
                    grid-template-columns: repeat(2, 1fr);
                    row-gap: 15px;
                    column-gap: 50px;
                    .list-item {
                        display: flex;
                        flex-direction: row;
                        column-gap: 10px;
                        justify-content: flex-start;
                        align-items: center;
                        .more {
                            font-size: 16px;
                            color: #ae0505;
                        }
                        .list-text {
                            font-size: 14px;
                            color: whitesmoke;
                            font-weight: 400;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }
}
</style>
<script setup lang="ts"></script>
