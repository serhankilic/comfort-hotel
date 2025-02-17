<template>
    <div class="contact-form-container">
        <div class="contact-form-content">
            <div
                class="contact-image-area"
                data-aos="fade-right"
                data-aos-duration="800"
            ></div>
            <div class="contact-form-area">
                <p
                    class="form-mini-title"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    Contact Us to Get More Details
                </p>
                <p
                    class="form-big-title"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    data-aos-delay="300"
                >
                    Let's start a conversation
                </p>
                <p
                    class="form-description"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut culpa id optio possimus quisquam, totam! Est
                    exercitationem hic quisquam vero! Lorem ipsum dolor sit
                    amet, consectetur.
                </p>
                <div class="form-area">
                    <input
                        type="text"
                        class="name-box form-input"
                        placeholder="Your Name"
                        data-aos="fade-left"
                        data-aos-duration="800"
                    />
                    <input
                        type="email"
                        class="email form-input"
                        placeholder="Your Email"
                        data-aos="fade-left"
                        data-aos-duration="800"
                    />
                    <input
                        type="text"
                        class="message form-input"
                        placeholder="Your Message"
                        data-aos="fade-left"
                        data-aos-duration="800"
                    />
                    <button
                        class="send-button"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="300"
                    >
                        Send Your Message
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.contact-form-container {
    width: 100%;
    height: 100%;
    padding: 5rem 0;
    .contact-form-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .contact-image-area {
            width: 750px;
            height: 650px;
            background-image: url('/gallery/contact/contact-mini.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: relative;
        }
        .contact-image-area:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.07);
        }
        .contact-form-area {
            width: 40%;
            height: 650px;
            padding: 0 50px;
            max-width: 800px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .form-mini-title {
                font-size: 16px;
                color: #ae0505;
                font-weight: 500;
            }
            .form-big-title {
                width: 100%;
                text-transform: uppercase;
                text-align: center;
                font-family: 'Bona+Nova', serif;
                font-size: 52px;
                font-weight: 500;
                line-height: 60px;
            }
            .form-description {
                font-size: 16px;
                font-weight: 300;
                text-align: center;
            }
            .form-area {
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 15px;
                padding: 10px 0;
                justify-content: center;
                align-items: center;
                .form-input {
                    width: 100%;
                    height: 40px;
                    padding-left: 10px;
                    font-size: 18px;
                    font-weight: 300;
                    color: dimgray;
                    border: 1px solid dimgray;
                    transition: 0.3s all ease-in-out;
                }
                .form-input:focus-within {
                    outline: none;
                    border-color: #ae0505;
                }
                .message {
                    height: 170px;
                    padding-bottom: 130px;
                }
                .send-button {
                    width: 100%;
                    height: 40px;
                    background-color: #ae0505;
                    color: whitesmoke;
                    font-size: 20px;
                    transition: 0.3s all ease-in-out;
                    outline: 1px solid transparent;
                }
                .send-button:hover {
                    color: white;
                    outline: 1px solid dimgray;
                }
            }
        }
    }
}
@media only screen and (max-width: 1280px) {
    .contact-form-container {
        width: 100%;
        height: 100%;
        padding: 5rem 0;
        .contact-form-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .contact-image-area {
                width: 700px;
                height: 600px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
            }
            .contact-form-area {
                width: 40%;
                height: 600px;
                padding: 0 50px;
                max-width: 600px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .form-mini-title {
                    font-size: 14px;
                    color: #ae0505;
                    font-weight: 500;
                }
                .form-big-title {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: center;
                    font-family: 'Bona+Nova', serif;
                    font-size: 48px;
                    font-weight: 500;
                    line-height: 50px;
                }
                .form-description {
                    font-size: 14px;
                    font-weight: 300;
                    text-align: center;
                }
                .form-area {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    padding: 0 0;
                    justify-content: center;
                    align-items: center;
                    .form-input {
                        width: 100%;
                        height: 40px;
                        padding-left: 10px;
                        font-size: 16px;
                        font-weight: 300;
                        color: dimgray;
                        border: 1px solid dimgray;
                        transition: 0.3s all ease-in-out;
                    }
                    .form-input:focus-within {
                        outline: none;
                        border-color: #ae0505;
                    }
                    .message {
                        height: 170px;
                        padding-bottom: 130px;
                    }
                    .send-button {
                        width: 100%;
                        height: 40px;
                        background-color: #ae0505;
                        color: whitesmoke;
                        font-size: 18px;
                        transition: 0.3s all ease-in-out;
                        outline: 1px solid transparent;
                    }
                    .send-button:hover {
                        color: white;
                        outline: 1px solid dimgray;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 1145px) {
    .contact-form-container {
        .contact-form-content {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .contact-image-area {
                width: 550px;
                height: 450px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
            }
            .contact-form-area {
                width: 40%;
                height: 450px;
                padding: 0 50px;
                max-width: 600px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .form-mini-title {
                    font-size: 14px;
                    color: #ae0505;
                    font-weight: 500;
                    line-height: 14px;
                }
                .form-big-title {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: center;
                    font-family: 'Bona+Nova', serif;
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 35px;
                }
                .form-description {
                    font-size: 14px;
                    font-weight: 300;
                    text-align: center;
                    line-height: 20px;
                }
                .form-area {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    padding: 0 0;
                    justify-content: center;
                    align-items: center;
                    .form-input {
                        width: 100%;
                        height: 30px;
                        padding-left: 10px;
                        font-size: 14px;
                        font-weight: 300;
                        color: dimgray;
                        border: 1px solid dimgray;
                        transition: 0.3s all ease-in-out;
                    }
                    .form-input:focus-within {
                        outline: none;
                        border-color: #ae0505;
                    }
                    .message {
                        height: 130px;
                        padding-bottom: 100px;
                    }
                    .send-button {
                        width: 100%;
                        height: 30px;
                        background-color: #ae0505;
                        color: whitesmoke;
                        font-size: 16px;
                        transition: 0.3s all ease-in-out;
                        outline: 1px solid transparent;
                    }
                    .send-button:hover {
                        color: white;
                        outline: 1px solid dimgray;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 880px) {
    .contact-form-container {
        .contact-form-content {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .contact-image-area {
                width: 500px;
                height: 450px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
            }
            .contact-form-area {
                width: 40%;
                height: 450px;
                padding: 0 50px;
                max-width: 400px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .form-mini-title {
                    font-size: 14px;
                    color: #ae0505;
                    font-weight: 500;
                    line-height: 14px;
                }
                .form-big-title {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: center;
                    font-family: 'Bona+Nova', serif;
                    font-size: 30px;
                    font-weight: 500;
                    line-height: 30px;
                }
                .form-description {
                    font-size: 14px;
                    font-weight: 300;
                    text-align: center;
                    line-height: 15px;
                }
                .form-area {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    padding: 0 0;
                    justify-content: center;
                    align-items: center;
                    .form-input {
                        width: 100%;
                        height: 30px;
                        padding-left: 10px;
                        font-size: 14px;
                        font-weight: 300;
                        color: dimgray;
                        border: 1px solid dimgray;
                        transition: 0.3s all ease-in-out;
                    }
                    .form-input:focus-within {
                        outline: none;
                        border-color: #ae0505;
                    }
                    .message {
                        height: 130px;
                        padding-bottom: 100px;
                    }
                    .send-button {
                        width: 100%;
                        height: 30px;
                        background-color: #ae0505;
                        color: whitesmoke;
                        font-size: 16px;
                        transition: 0.3s all ease-in-out;
                        outline: 1px solid transparent;
                    }
                    .send-button:hover {
                        color: white;
                        outline: 1px solid dimgray;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 840px) {
    .contact-form-container {
        .contact-form-content {
            flex-direction: column-reverse;
            row-gap: 20px;
            justify-content: center;
            align-items: center;
            .contact-image-area {
                width: 600px;
                height: 500px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
            }
            .contact-form-area {
                width: 70%;
                height: 500px;
                padding: 0 10px;
                max-width: 400px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .form-mini-title {
                    font-size: 16px;
                    color: #ae0505;
                    font-weight: 500;
                    line-height: 20px;
                }
                .form-big-title {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: center;
                    font-family: 'Bona+Nova', serif;
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 35px;
                }
                .form-description {
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    line-height: 20px;
                }
                .form-area {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    padding: 0 0;
                    justify-content: center;
                    align-items: center;
                    .form-input {
                        width: 100%;
                        height: 30px;
                        padding-left: 10px;
                        font-size: 14px;
                        font-weight: 300;
                        color: dimgray;
                        border: 1px solid dimgray;
                        transition: 0.3s all ease-in-out;
                    }
                    .form-input:focus-within {
                        outline: none;
                        border-color: #ae0505;
                    }
                    .message {
                        height: 130px;
                        padding-bottom: 100px;
                    }
                    .send-button {
                        width: 100%;
                        height: 30px;
                        background-color: #ae0505;
                        color: whitesmoke;
                        font-size: 16px;
                        transition: 0.3s all ease-in-out;
                        outline: 1px solid transparent;
                    }
                    .send-button:hover {
                        color: white;
                        outline: 1px solid dimgray;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 608px) {
    .contact-form-container {
        .contact-form-content {
            flex-direction: column-reverse;
            row-gap: 20px;
            justify-content: center;
            align-items: center;
            .contact-image-area {
                width: 500px;
                height: 400px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
            }
            .contact-form-area {
                width: 70%;
                height: 500px;
                padding: 0 10px;
                max-width: 400px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .form-mini-title {
                    font-size: 16px;
                    color: #ae0505;
                    font-weight: 500;
                    line-height: 20px;
                }
                .form-big-title {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: center;
                    font-family: 'Bona+Nova', serif;
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 35px;
                }
                .form-description {
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    line-height: 20px;
                }
                .form-area {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    padding: 0 0;
                    justify-content: center;
                    align-items: center;
                    .form-input {
                        width: 100%;
                        height: 30px;
                        padding-left: 10px;
                        font-size: 14px;
                        font-weight: 300;
                        color: dimgray;
                        border: 1px solid dimgray;
                        transition: 0.3s all ease-in-out;
                    }
                    .form-input:focus-within {
                        outline: none;
                        border-color: #ae0505;
                    }
                    .message {
                        height: 130px;
                        padding-bottom: 100px;
                    }
                    .send-button {
                        width: 100%;
                        height: 30px;
                        background-color: #ae0505;
                        color: whitesmoke;
                        font-size: 16px;
                        transition: 0.3s all ease-in-out;
                        outline: 1px solid transparent;
                    }
                    .send-button:hover {
                        color: white;
                        outline: 1px solid dimgray;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 517px) {
    .contact-form-container {
        .contact-form-content {
            flex-direction: column-reverse;
            row-gap: 20px;
            justify-content: center;
            align-items: center;
            .contact-image-area {
                width: 400px;
                height: 300px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
            }
            .contact-form-area {
                width: 80%;
                height: 500px;
                padding: 0 10px;
                max-width: 400px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .form-mini-title {
                    font-size: 16px;
                    color: #ae0505;
                    font-weight: 500;
                    line-height: 20px;
                }
                .form-big-title {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: center;
                    font-family: 'Bona+Nova', serif;
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 35px;
                }
                .form-description {
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    line-height: 20px;
                }
                .form-area {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    padding: 0 0;
                    justify-content: center;
                    align-items: center;
                    .form-input {
                        width: 100%;
                        height: 30px;
                        padding-left: 10px;
                        font-size: 14px;
                        font-weight: 300;
                        color: dimgray;
                        border: 1px solid dimgray;
                        transition: 0.3s all ease-in-out;
                    }
                    .form-input:focus-within {
                        outline: none;
                        border-color: #ae0505;
                    }
                    .message {
                        height: 130px;
                        padding-bottom: 100px;
                    }
                    .send-button {
                        width: 100%;
                        height: 30px;
                        background-color: #ae0505;
                        color: whitesmoke;
                        font-size: 16px;
                        transition: 0.3s all ease-in-out;
                        outline: 1px solid transparent;
                    }
                    .send-button:hover {
                        color: white;
                        outline: 1px solid dimgray;
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 400px) {
    .contact-form-container {
        .contact-form-content {
            flex-direction: column-reverse;
            row-gap: 20px;
            justify-content: center;
            align-items: center;
            .contact-image-area {
                width: 300px;
                height: 200px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                position: relative;
            }
            .contact-form-area {
                width: 80%;
                height: 500px;
                padding: 0 10px;
                max-width: 400px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                .form-mini-title {
                    font-size: 16px;
                    color: #ae0505;
                    font-weight: 500;
                    line-height: 20px;
                }
                .form-big-title {
                    width: 100%;
                    text-transform: uppercase;
                    text-align: center;
                    font-family: 'Bona+Nova', serif;
                    font-size: 32px;
                    font-weight: 500;
                    line-height: 35px;
                }
                .form-description {
                    font-size: 16px;
                    font-weight: 300;
                    text-align: center;
                    line-height: 20px;
                }
                .form-area {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    row-gap: 10px;
                    padding: 0 0;
                    justify-content: center;
                    align-items: center;
                    .form-input {
                        width: 100%;
                        height: 30px;
                        padding-left: 10px;
                        font-size: 14px;
                        font-weight: 300;
                        color: dimgray;
                        border: 1px solid dimgray;
                        transition: 0.3s all ease-in-out;
                    }
                    .form-input:focus-within {
                        outline: none;
                        border-color: #ae0505;
                    }
                    .message {
                        height: 130px;
                        padding-bottom: 100px;
                    }
                    .send-button {
                        width: 100%;
                        height: 30px;
                        background-color: #ae0505;
                        color: whitesmoke;
                        font-size: 16px;
                        transition: 0.3s all ease-in-out;
                        outline: 1px solid transparent;
                    }
                    .send-button:hover {
                        color: white;
                        outline: 1px solid dimgray;
                    }
                }
            }
        }
    }
}
</style>
<script setup lang="ts"></script>
