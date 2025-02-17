<template>
    <div class="contact-informations-container">
        <div class="contact-informations-boxes">
            <div class="left-box info-box">
                <p class="small-title">General Inquiries</p>
                <p class="main-title">Hotel Info Center</p>
                <div class="contacts-details">
                    <p class="contact-detail-row hours">
                        Business Hours: Monday – Sunday, 9 am – 5 pm
                    </p>
                    <p class="contact-detail-row">
                        Telephone:
                        <NuxtLink
                            href="tel:+90 555 555 5555"
                            class="detail-link"
                            >+90 555 555 5555</NuxtLink
                        >
                    </p>
                    <p class="contact-detail-row">
                        Email:
                        <NuxtLink
                            href="mailto:contact@whitewonder.com"
                            class="detail-link"
                            >contact@whitewonder.com</NuxtLink
                        >
                    </p>
                </div>
                <NuxtLink
                    href="https://maps.app.goo.gl/nHUKRBk4Lb6SsZsXA"
                    class="map-button"
                    target="_blank"
                    >Get Directions</NuxtLink
                >
            </div>
            <div class="right-box info-box">
                <p class="small-title">General Inquiries</p>
                <p class="main-title">Hotel Info Center</p>
                <div class="contacts-details">
                    <p class="contact-detail-row">
                        Business Hours: Monday – Sunday, 9 am – 5 pm
                    </p>
                    <p class="contact-detail-row">
                        Telephone:
                        <NuxtLink
                            href="tel:+90 555 555 5555"
                            class="detail-link"
                            >+90 555 555 5555</NuxtLink
                        >
                    </p>
                    <p class="contact-detail-row">
                        Email:
                        <NuxtLink
                            href="mailto:contact@whitewonder.com"
                            class="detail-link"
                            >contact@whitewonder.com</NuxtLink
                        >
                    </p>
                </div>
                <NuxtLink
                    href="https://maps.app.goo.gl/nHUKRBk4Lb6SsZsXA"
                    class="map-button"
                    target="_blank"
                    >Get Directions</NuxtLink
                >
            </div>
        </div>
    </div>
</template>
<style>
.contact-informations-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 5rem 0;

    .contact-informations-boxes {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .left-box {
            border-right: 1px solid #ae0505;
        }
        .info-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            row-gap: 10px;
            padding: 0 75px;
            .small-title {
                font-size: 16px;
                color: #ae0505;
                text-transform: uppercase;
                font-weight: 500;
                padding-bottom: 20px;
            }
            .main-title {
                font-family: 'Bona+Nova', serif;
                font-size: 38px;
                line-height: 40px;
                padding-bottom: 30px;
            }
            .contacts-details {
                display: flex;
                flex-direction: column;
                align-items: center;
                row-gap: 10px;
                padding-bottom: 30px;
                .contact-detail-row {
                    font-size: 16px;
                    font-weight: 400;
                    .detail-link {
                        font-weight: 500;
                        color: black;
                        text-decoration: none;
                        transition: 0.3s all ease-in-out;
                        &:hover {
                            color: #ae0505;
                        }
                    }
                }
                .hours {
                    white-space: nowrap;
                }
            }
            .map-button {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                font-size: 16px;
                padding-bottom: 5px;
                font-weight: 600;
                color: black;
                border-bottom: 1px solid #ae0505;
                transition: 0.3s all ease-in-out;
                &:hover {
                    color: #ae0505;
                }
            }
        }
    }
}
@media only screen and (max-width: 1100px) {
    .contact-informations-container {
        flex-direction: column;
        .contact-informations-boxes {
            flex-direction: row;
            .left-box {
                border-right: 1px solid #ae0505;
            }
            .info-box {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: 10px;
                padding: 0 55px;
                .small-title {
                    font-size: 16px;
                    color: #ae0505;
                    text-transform: uppercase;
                    font-weight: 500;
                    padding-bottom: 20px;
                }
                .main-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 34px;
                    line-height: 35px;
                    padding-bottom: 20px;
                }
                .contacts-details {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    row-gap: 10px;
                    padding-bottom: 20px;
                    .contact-detail-row {
                        font-size: 16px;
                        font-weight: 400;
                        .detail-link {
                            font-weight: 500;
                            color: black;
                            text-decoration: none;
                            transition: 0.3s all ease-in-out;
                            &:hover {
                                color: #ae0505;
                            }
                        }
                    }
                }
                .map-button {
                    font-size: 16px;
                    padding-bottom: 5px;
                    font-weight: 600;
                    border-bottom: 1px solid #ae0505;
                }
            }
        }
    }
}
@media only screen and (max-width: 1000px) {
    .contact-informations-container {
        flex-direction: column;
        .contact-informations-boxes {
            flex-direction: column;
            .left-box {
                border-bottom: 1px solid #ae0505;
                border-right: none;
            }
            .info-box {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: 10px;
                padding: 20px 55px;
                .small-title {
                    font-size: 16px;
                    color: #ae0505;
                    text-transform: uppercase;
                    font-weight: 500;
                    padding-bottom: 20px;
                }
                .main-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 34px;
                    line-height: 35px;
                    padding-bottom: 20px;
                }
                .contacts-details {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    row-gap: 10px;
                    padding-bottom: 20px;
                    .contact-detail-row {
                        font-size: 16px;
                        font-weight: 400;
                        .detail-link {
                            font-weight: 500;
                            color: black;
                            text-decoration: none;
                            transition: 0.3s all ease-in-out;
                            &:hover {
                                color: #ae0505;
                            }
                        }
                    }
                }
                .map-button {
                    font-size: 16px;
                    padding-bottom: 5px;
                    font-weight: 600;
                    border-bottom: 1px solid #ae0505;
                }
            }
        }
    }
}
@media only screen and (max-width: 490px) {
    .contact-informations-container {
        flex-direction: column;
        .contact-informations-boxes {
            flex-direction: column;
            .left-box {
                border-bottom: 1px solid #ae0505;
                border-right: none;
            }
            .info-box {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                row-gap: 10px;
                padding: 20px 55px;
                .small-title {
                    font-size: 14px;
                    color: #ae0505;
                    text-transform: uppercase;
                    font-weight: 500;
                    padding-bottom: 20px;
                }
                .main-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 30px;
                    line-height: 30px;
                    padding-bottom: 20px;
                }
                .contacts-details {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    row-gap: 10px;
                    padding-bottom: 20px;
                    .contact-detail-row {
                        font-size: 14px;
                        font-weight: 400;
                        .detail-link {
                            font-size: 14px;
                            font-weight: 500;
                            color: black;
                            text-decoration: none;
                            transition: 0.3s all ease-in-out;
                            &:hover {
                                color: #ae0505;
                            }
                        }
                    }
                }
                .map-button {
                    font-size: 16px;
                    padding-bottom: 5px;
                    font-weight: 600;
                    border-bottom: 1px solid #ae0505;
                }
            }
        }
    }
}
</style>
