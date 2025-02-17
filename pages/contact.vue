<template>
    <div class="contact-main-container">
        <div class="contact-page-content">
            <header>
                <div class="contact-header-container">
                    <nav>
                        <Navbar />
                    </nav>
                    <div class="header-text-area">
                        <p
                            class="contact-title"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            CONTACT US
                        </p>
                        <p
                            class="description-title"
                            data-aos="fade-up"
                            data-aos-delay="1200"
                        >
                            For bookings and enquiries, please call us or write
                            to us.
                        </p>
                    </div>
                </div>
            </header>
            <main>
                <div class="contact-page-main-container">
                    <ContactForm />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </div>
</template>
<style>
.contact-main-container {
    .contact-page-content {
        .contact-header-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            background-image: url('/gallery/contact/contact-header-bg.jpg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;

            .header-text-area {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                color: whitesmoke;
                position: relative;
                z-index: 2;
                .contact-title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 82px;
                    letter-spacing: 3px;
                }
                .description-title {
                    font-size: 18px;
                    font-weight: 400;
                }
            }
        }
        .contact-header-container:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            z-index: 0;
        }
        .contact-main-container {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
