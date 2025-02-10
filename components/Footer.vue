<template>
    <div class="footer-container">
        <div class="footer-content">
            <div class="footer-top">
                <div class="hotel-footer-logo">
                    <p class="logo">White Wonder Suites</p>
                </div>
            </div>
            <div class="footer-middle">
                <div class="left-footer">
                    <div class="footer-form">
                        <div class="form-header">
                            <p class="form-header-text">Have a question?</p>
                        </div>
                        <div class="footer-form-boxes">
                            <div class="form-row">
                                <p class="row-description">Your name</p>
                                <input type="text" value="" class="text-box" />
                            </div>
                            <div class="form-row">
                                <p class="row-description">Your email</p>
                                <input type="text" value="" class="text-box" />
                            </div>
                            <div class="form-row">
                                <p class="row-description">Your message</p>
                                <input type="text" value="" class="text-box" />
                            </div>
                        </div>
                        <div class="footer-advertisements">
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
                        <a class="footer-link home" href="#">Home</a>
                        <a class="footer-link rooms" href="#">Rooms & Suites</a>
                        <a class="footer-link about-us" href="#">About Us</a>
                        <a class="footer-link restaurant" href="#"
                            >Restaurant</a
                        >
                        <a class="footer-link contact-us" href="#"
                            >Contact Us</a
                        >
                        <a class="footer-link book" href="#">Book Now</a>
                    </div>
                    <div class="contact-area">
                        <a
                            href="tel:+90-555-500-0261"
                            class="contact-link phone"
                            >+90 555 500 0261</a
                        >
                        <a
                            href="mailto:contact@whitewonder.com"
                            class="contact-link email"
                            >contact@whitewonder.com</a
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
                                transition: 0.3s all ease;
                            }
                            .text-box:focus-within {
                                outline: none;
                                border-bottom-color: #ae0505;
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
</style>
