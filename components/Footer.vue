<template>
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-top">
                <div class="hotel-footer-logo">
                    <p class="logo" data-aos="zoom-in-up">
                        White Wonder Suites
                    </p>
                </div>
            </div>
            <div class="footer-middle">
                <div class="left-footer">
                    <div class="footer-form">
                        <div class="form-header">
                            <p
                                class="form-header-text"
                                data-aos="zoom-in-up"
                                data-aos-delay="300"
                            >
                                Have a question?
                            </p>
                        </div>
                        <div class="footer-form-boxes">
                            <div
                                class="form-row"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <p class="row-description">Your name</p>
                                <input type="text" value="" class="text-box" />
                            </div>
                            <div
                                class="form-row"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <p class="row-description">Your email</p>
                                <input type="text" value="" class="text-box" />
                            </div>
                            <div
                                class="form-row"
                                data-aos="fade-right"
                                data-aos-delay="200"
                            >
                                <p class="row-description">Your message</p>
                                <input type="text" value="" class="text-box" />
                            </div>
                        </div>
                        <div
                            class="footer-advertisements"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <p class="advertisements-text">
                                Yes, I would like to recieve emails with
                                exclusive specials and offers.
                            </p>
                            <button class="submit-button">SUBMIT</button>
                        </div>
                    </div>
                </div>
                <div class="right-footer">
                    <div class="footer-links">
                        <NuxtLink
                            class="footer-link home"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            to="/"
                            >Home</NuxtLink
                        >
                        <NuxtLink
                            class="footer-link rooms"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            to="/rooms"
                            >Rooms & Suites</NuxtLink
                        >

                        <NuxtLink
                            class="footer-link about-us"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            to="#"
                            >About Us</NuxtLink
                        >
                        <NuxtLink
                            class="footer-link restaurant"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            href="#restaurant"
                            >Restaurant</NuxtLink
                        >
                        <a
                            class="footer-link contact-us"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            href="/contact"
                            >Contact Us</a
                        >
                        <a
                            class="footer-link book"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            href="#"
                            >Book Now</a
                        >
                    </div>
                    <div class="contact-area">
                        <NuxtLink
                            to="tel:+90-555-500-0261"
                            class="contact-link phone"
                            data-aos="zoom-in-up"
                            >+90 555 500 0261</NuxtLink
                        >
                        <NuxtLink
                            to="mailto:contact@whitewonder.com"
                            class="contact-link email"
                            data-aos="zoom-in-up"
                            >contact@whitewonder.com</NuxtLink
                        >
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <a href="" class="copywrite-link">
                    © White Wonder Suites All Rights Reserved
                </a>
                <div class="social-media-links">
                    <a href="#" class="social-media-link"
                        ><Icon name="tabler:brand-instagram" class="icon"
                    /></a>
                    <a href="#" class="social-media-link"
                        ><Icon name="tabler:brand-facebook" class="icon"
                    /></a>
                    <a href="#" class="social-media-link"
                        ><Icon name="tabler:brand-booking" class="icon"
                    /></a>
                    <a href="#" class="social-media-link"
                        ><Icon name="tabler:brand-tripadvisor" class="icon"
                    /></a>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.footer-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: black;
    padding: 50px 200px 0;
    .footer-content {
        width: 100%;
        color: whitesmoke;
        .footer-top {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid dimgray;
            margin-bottom: 30px;
            .hotel-footer-logo {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 2rem;

                .logo {
                    font-family: 'Bona+Nova', serif;
                    font-size: 46px;
                }
            }
        }
        .footer-middle {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            padding-bottom: 15px;
            border-bottom: 1px solid dimgray;
            .left-footer {
                width: 45%;
                .footer-form {
                    display: flex;
                    justify-content: flex-start;
                    flex-direction: column;
                    .form-header {
                        padding-bottom: 30px;
                        .form-header-text {
                            font-family: 'Bona+Nova', serif;
                            font-size: 36px;
                        }
                    }
                    .footer-form-boxes {
                        display: flex;
                        flex-direction: column;
                        row-gap: 50px;
                        .form-row {
                            display: flex;
                            flex-direction: column;
                            .row-description {
                                font-size: 16px;
                                color: lightgray;
                            }
                            .text-box {
                                width: 100%;
                                height: 40px;
                                background-color: transparent;
                                border-bottom: 1px solid dimgray;
                                position: relative;
                            }
                            .text-box:focus-within {
                                outline: none;
                                animation: borderAnimation 1s ease-in-out
                                    forwards;
                            }
                            @keyframes borderAnimation {
                                0% {
                                    border-bottom-color: dimgray;
                                    border-image-source: linear-gradient(
                                        to right,
                                        #ae0505 -200%,
                                        dimgray 100%
                                    );
                                    border-image-slice: 1;
                                }
                                50% {
                                    border-image-source: linear-gradient(
                                        to right,
                                        #ae0505 5%,
                                        dimgray 100%
                                    );
                                }
                                100% {
                                    border-bottom-color: dimgray;
                                    border-image-source: linear-gradient(
                                        to right,
                                        #ae0505 100%,
                                        #ae0505 100%
                                    );
                                    border-image-slice: 1;
                                }
                            }
                        }
                    }
                    .footer-advertisements {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        row-gap: 25px;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding: 30px 0;
                        .advertisements-text {
                            font-size: 14px;
                            color: dimgray;
                        }
                        .submit-button {
                            border: 1px solid whitesmoke;
                            color: whitesmoke;
                            padding: 10px 25px;
                            transition: 0.3s all ease;
                        }
                        .submit-button:hover {
                            color: #ae0505;
                            border-color: #ae0505;
                        }
                    }
                }
            }
            .right-footer {
                width: 45%;
                display: flex;
                flex-direction: column;
                .footer-links {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    justify-content: flex-start;
                    align-items: flex-start;
                    padding-bottom: 50px;
                    .footer-link {
                        text-decoration: none;
                        color: whitesmoke;
                        font-size: 32px;
                        transition: 0.3s all ease;
                    }
                    .footer-link:hover {
                        color: #ae0505;
                    }
                }
                .contact-area {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    .contact-link {
                        text-decoration: none;
                        color: whitesmoke;
                        font-size: 16px;
                        transition: 0.3s all ease;
                        padding: 10px 0;
                    }
                    .contact-link:hover {
                        color: #ae0505;
                    }
                }
            }
        }
        .footer-bottom {
            width: 100%;
            padding: 30px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .copywrite-link {
                font-size: 14px;
            }
            .copywrite-link:hover {
                color: #ae0505;
            }
            .social-media-links {
                display: flex;
                flex-direction: row;
                column-gap: 5px;
                .social-media-link {
                    transition: 0.3s all ease;
                    .icon {
                        font-size: 36px;
                    }
                }
                .social-media-link:hover {
                    color: #ae0505;
                }
            }
        }
    }
}
@media only screen and (max-width: 1292px) {
    .footer-container {
        flex-direction: column;
        background-color: black;
        padding: 50px 150px 0;
        .footer-content {
            .footer-top {
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid dimgray;
                margin-bottom: 30px;
                .hotel-footer-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 1.5rem;

                    .logo {
                        font-size: 43px;
                    }
                }
            }
            .footer-middle {
                width: 100%;
                justify-content: space-between;
                flex-direction: row;
                padding-bottom: 15px;
                border-bottom: 1px solid dimgray;
                .left-footer {
                    width: 45%;
                    .footer-form {
                        display: flex;
                        justify-content: flex-start;
                        flex-direction: column;
                        .form-header {
                            padding-bottom: 30px;
                            .form-header-text {
                                font-family: 'Bona+Nova', serif;
                                font-size: 33px;
                            }
                        }
                        .footer-form-boxes {
                            display: flex;
                            flex-direction: column;
                            row-gap: 50px;
                            .form-row {
                                display: flex;
                                flex-direction: column;
                                .row-description {
                                    font-size: 16px;
                                    color: lightgray;
                                }
                                .text-box {
                                    width: 100%;
                                    height: 35px;
                                    background-color: transparent;
                                    border-bottom: 1px solid dimgray;
                                    position: relative;
                                }
                                .text-box:focus-within {
                                    outline: none;
                                    animation: borderAnimation 1s ease-in-out
                                        forwards;
                                }
                                @keyframes borderAnimation {
                                    0% {
                                        border-bottom-color: dimgray;
                                        border-image-source: linear-gradient(
                                            to right,
                                            #ae0505 -200%,
                                            dimgray 100%
                                        );
                                        border-image-slice: 1;
                                    }
                                    50% {
                                        border-image-source: linear-gradient(
                                            to right,
                                            #ae0505 5%,
                                            dimgray 100%
                                        );
                                    }
                                    100% {
                                        border-bottom-color: dimgray;
                                        border-image-source: linear-gradient(
                                            to right,
                                            #ae0505 100%,
                                            #ae0505 100%
                                        );
                                        border-image-slice: 1;
                                    }
                                }
                            }
                        }
                        .footer-advertisements {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            row-gap: 25px;
                            justify-content: flex-start;
                            align-items: flex-start;
                            padding: 30px 0;
                            .advertisements-text {
                                font-size: 14px;
                                color: dimgray;
                            }
                            .submit-button {
                                border: 1px solid whitesmoke;
                                color: whitesmoke;
                                padding: 10px 25px;
                                transition: 0.3s all ease;
                            }
                            .submit-button:hover {
                                color: #ae0505;
                                border-color: #ae0505;
                            }
                        }
                    }
                }
                .right-footer {
                    width: 45%;
                    display: flex;
                    flex-direction: column;
                    .footer-links {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding-bottom: 50px;
                        .footer-link {
                            text-decoration: none;
                            color: whitesmoke;
                            font-size: 32px;
                            transition: 0.3s all ease;
                        }
                        .footer-link:hover {
                            color: #ae0505;
                        }
                    }
                    .contact-area {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        .contact-link {
                            text-decoration: none;
                            color: whitesmoke;
                            font-size: 16px;
                            transition: 0.3s all ease;
                            padding: 10px 0;
                        }
                        .contact-link:hover {
                            color: #ae0505;
                        }
                    }
                }
            }
            .footer-bottom {
                width: 100%;
                padding: 30px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .copywrite-link {
                    font-size: 14px;
                }
                .copywrite-link:hover {
                    color: #ae0505;
                }
                .social-media-links {
                    display: flex;
                    flex-direction: row;
                    column-gap: 5px;
                    .social-media-link {
                        transition: 0.3s all ease;
                        .icon {
                            font-size: 36px;
                        }
                    }
                    .social-media-link:hover {
                        color: #ae0505;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 1117px) {
    .footer-container {
        flex-direction: column;
        padding: 50px 150px 0;
        .footer-content {
            .footer-top {
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid dimgray;
                margin-bottom: 30px;
                .hotel-footer-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 1rem;

                    .logo {
                        font-size: 40px;
                    }
                }
            }
            .footer-middle {
                justify-content: space-between;
                flex-direction: row;
                padding-bottom: 15px;
                border-bottom: 1px solid dimgray;
                .left-footer {
                    width: 45%;
                    .footer-form {
                        display: flex;
                        justify-content: flex-start;
                        flex-direction: column;
                        .form-header {
                            padding-bottom: 30px;
                            .form-header-text {
                                font-size: 30px;
                            }
                        }
                        .footer-form-boxes {
                            display: flex;
                            flex-direction: column;
                            row-gap: 30px;
                            .form-row {
                                display: flex;
                                flex-direction: column;
                                .row-description {
                                    font-size: 16px;
                                    color: lightgray;
                                }
                                .text-box {
                                    width: 100%;
                                    height: 30px;
                                    background-color: transparent;
                                    border-bottom: 1px solid dimgray;
                                    position: relative;
                                }
                            }
                        }
                        .footer-advertisements {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            row-gap: 25px;
                            justify-content: flex-start;
                            align-items: flex-start;
                            padding: 30px 0;
                            .advertisements-text {
                                font-size: 14px;
                                color: dimgray;
                            }
                            .submit-button {
                                border: 1px solid whitesmoke;
                                color: whitesmoke;
                                padding: 8px 20px;
                                transition: 0.3s all ease;
                            }
                            .submit-button:hover {
                                color: #ae0505;
                                border-color: #ae0505;
                            }
                        }
                    }
                }
                .right-footer {
                    width: 45%;
                    display: flex;
                    flex-direction: column;
                    .footer-links {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding-bottom: 50px;
                        .footer-link {
                            color: whitesmoke;
                            font-size: 26px;
                            transition: 0.3s all ease;
                        }
                    }
                    .contact-area {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        .contact-link {
                            color: whitesmoke;
                            font-size: 14px;
                            padding: 10px 0;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .footer-bottom {
                width: 100%;
                padding: 20px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .copywrite-link {
                    font-size: 14px;
                }
                .copywrite-link:hover {
                    color: #ae0505;
                }
                .social-media-links {
                    display: flex;
                    flex-direction: row;
                    column-gap: 5px;
                    .social-media-link {
                        transition: 0.3s all ease;
                        .icon {
                            font-size: 30px;
                        }
                    }
                    .social-media-link:hover {
                        color: #ae0505;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 1000px) {
    .footer-container {
        flex-direction: column;
        padding: 50px 100px 0;
        .footer-content {
            .footer-top {
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid dimgray;
                margin-bottom: 30px;
                .hotel-footer-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 1rem;

                    .logo {
                        font-size: 40px;
                    }
                }
            }
            .footer-middle {
                justify-content: space-between;
                flex-direction: row;
                padding-bottom: 15px;
                border-bottom: 1px solid dimgray;
                .left-footer {
                    width: 45%;
                    .footer-form {
                        display: flex;
                        justify-content: flex-start;
                        flex-direction: column;
                        .form-header {
                            padding-bottom: 30px;
                            .form-header-text {
                                font-size: 30px;
                            }
                        }
                        .footer-form-boxes {
                            display: flex;
                            flex-direction: column;
                            row-gap: 30px;
                            .form-row {
                                display: flex;
                                flex-direction: column;
                                .row-description {
                                    font-size: 16px;
                                    color: lightgray;
                                }
                                .text-box {
                                    width: 100%;
                                    height: 30px;
                                    background-color: transparent;
                                    border-bottom: 1px solid dimgray;
                                    position: relative;
                                }
                            }
                        }
                        .footer-advertisements {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            row-gap: 25px;
                            justify-content: flex-start;
                            align-items: flex-start;
                            padding: 30px 0;
                            .advertisements-text {
                                font-size: 14px;
                                color: dimgray;
                            }
                            .submit-button {
                                border: 1px solid whitesmoke;
                                color: whitesmoke;
                                padding: 8px 20px;
                                transition: 0.3s all ease;
                            }
                            .submit-button:hover {
                                color: #ae0505;
                                border-color: #ae0505;
                            }
                        }
                    }
                }
                .right-footer {
                    width: 45%;
                    display: flex;
                    flex-direction: column;
                    .footer-links {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding-bottom: 90px;
                        .footer-link {
                            color: whitesmoke;
                            font-size: 26px;
                            transition: 0.3s all ease;
                        }
                    }
                    .contact-area {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: flex-start;
                        .contact-link {
                            color: whitesmoke;
                            font-size: 14px;
                            padding: 5px 0;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .footer-bottom {
                width: 100%;
                padding: 20px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .copywrite-link {
                    font-size: 14px;
                }
                .copywrite-link:hover {
                    color: #ae0505;
                }
                .social-media-links {
                    display: flex;
                    flex-direction: row;
                    column-gap: 5px;
                    .social-media-link {
                        transition: 0.3s all ease;
                        .icon {
                            font-size: 30px;
                        }
                    }
                    .social-media-link:hover {
                        color: #ae0505;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 720px) {
    .footer-container {
        flex-direction: column;
        padding: 30px 70px 0;
        .footer-content {
            .footer-top {
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid dimgray;
                margin-bottom: 30px;
                .hotel-footer-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 1rem;

                    .logo {
                        font-size: 34px;
                    }
                }
            }
            .footer-middle {
                justify-content: space-between;
                flex-direction: column;
                row-gap: 15px;
                padding-bottom: 15px;
                border-bottom: 1px solid dimgray;
                .left-footer {
                    width: 100%;
                    .footer-form {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        .form-header {
                            padding-bottom: 30px;
                            .form-header-text {
                                font-size: 30px;
                            }
                        }
                        .footer-form-boxes {
                            display: flex;
                            flex-direction: column;
                            row-gap: 30px;
                            .form-row {
                                display: flex;
                                flex-direction: column;
                                .row-description {
                                    font-size: 16px;
                                    color: lightgray;
                                }
                                .text-box {
                                    width: 100%;
                                    height: 30px;
                                    background-color: transparent;
                                    border-bottom: 1px solid dimgray;
                                    position: relative;
                                }
                            }
                        }
                        .footer-advertisements {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            row-gap: 25px;
                            justify-content: flex-start;
                            align-items: flex-start;
                            padding: 30px 0;
                            .advertisements-text {
                                font-size: 14px;
                                color: dimgray;
                            }
                            .submit-button {
                                border: 1px solid whitesmoke;
                                color: whitesmoke;
                                padding: 8px 20px;
                                transition: 0.3s all ease;
                            }
                            .submit-button:hover {
                                color: #ae0505;
                                border-color: #ae0505;
                            }
                        }
                    }
                }
                .right-footer {
                    width: 100%;
                    display: flex;
                    justify-items: center;
                    flex-direction: column;
                    .footer-links {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;
                        justify-content: center;
                        align-items: center;
                        padding-bottom: 25px;
                        .footer-link {
                            color: whitesmoke;
                            font-size: 26px;
                            transition: 0.3s all ease;
                        }
                    }
                    .contact-area {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        .contact-link {
                            color: whitesmoke;
                            font-size: 14px;
                            padding: 5px 0;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .footer-bottom {
                width: 100%;
                padding: 20px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                .copywrite-link {
                    font-size: 14px;
                }
                .copywrite-link:hover {
                    color: #ae0505;
                }
                .social-media-links {
                    display: flex;
                    flex-direction: row;
                    column-gap: 10px;
                    .social-media-link {
                        transition: 0.3s all ease;
                        .icon {
                            font-size: 28px;
                        }
                    }
                    .social-media-link:hover {
                        color: #ae0505;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 440px) {
    .footer-container {
        flex-direction: column;
        padding: 30px 30px 0;
        .footer-content {
            .footer-top {
                justify-content: center;
                align-items: center;
                border-bottom: 1px solid dimgray;
                margin-bottom: 30px;
                .hotel-footer-logo {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-bottom: 1rem;

                    .logo {
                        font-size: 30px;
                    }
                }
            }
            .footer-middle {
                justify-content: space-between;
                flex-direction: column;
                row-gap: 15px;
                padding-bottom: 15px;
                border-bottom: 1px solid dimgray;
                .left-footer {
                    width: 100%;
                    .footer-form {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        .form-header {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            padding-bottom: 30px;
                            .form-header-text {
                                font-size: 26px;
                            }
                        }
                        .footer-form-boxes {
                            display: flex;
                            flex-direction: column;
                            row-gap: 30px;
                            .form-row {
                                display: flex;
                                flex-direction: column;
                                .row-description {
                                    font-size: 16px;
                                    color: lightgray;
                                }
                                .text-box {
                                    width: 100%;
                                    height: 30px;
                                    background-color: transparent;
                                    border-bottom: 1px solid dimgray;
                                    position: relative;
                                }
                            }
                        }
                        .footer-advertisements {
                            width: 100%;
                            display: flex;
                            flex-direction: column;
                            row-gap: 25px;
                            justify-content: flex-start;
                            align-items: flex-start;
                            padding: 30px 0;
                            .advertisements-text {
                                font-size: 14px;
                                color: dimgray;
                            }
                            .submit-button {
                                border: 1px solid whitesmoke;
                                color: whitesmoke;
                                padding: 8px 20px;
                                transition: 0.3s all ease;
                            }
                            .submit-button:hover {
                                color: #ae0505;
                                border-color: #ae0505;
                            }
                        }
                    }
                }
                .right-footer {
                    width: 100%;
                    display: flex;
                    justify-items: center;
                    flex-direction: column;
                    .footer-links {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;
                        justify-content: center;
                        align-items: center;
                        padding-bottom: 25px;
                        .footer-link {
                            color: whitesmoke;
                            font-size: 26px;
                            transition: 0.3s all ease;
                        }
                    }
                    .contact-area {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        .contact-link {
                            color: whitesmoke;
                            font-size: 14px;
                            padding: 5px 0;
                            white-space: nowrap;
                        }
                    }
                }
            }
            .footer-bottom {
                width: 100%;
                padding: 20px 0;
                display: flex;
                flex-direction: column-reverse;
                row-gap: 10px;
                justify-content: space-between;
                align-items: center;
                .copywrite-link {
                    font-size: 12px;
                }
                .copywrite-link:hover {
                    color: #ae0505;
                }
                .social-media-links {
                    display: flex;
                    flex-direction: row;
                    column-gap: 5px;
                    .social-media-link {
                        transition: 0.3s all ease;
                        .icon {
                            font-size: 30px;
                        }
                    }
                    .social-media-link:hover {
                        color: #ae0505;
                    }
                }
            }
        }
    }
}
</style>
<script setup lang="ts"></script>
