<script setup></script>
<template>
    <div class="gallery-container">
        <header>
            <Navbar />

            <div class="gallery-content-container">
                <div class="gallery-title">
                    <p class="title" data-aos="fade-up" data-aos-delay="600">
                        Gallery
                    </p>
                    <p
                        class="description"
                        data-aos="fade-up"
                        data-aos-delay="1200"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda consectetur consequatur mollitia
                        necessitatibus omnis voluptates? Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Fuga, natus.
                    </p>
                </div>
            </div>
        </header>
        <main>
            <div class="gallery-photos-container">
                <SimpleGallery galleryID="my-test-gallery" :images="images" />
            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
</template>
<style>
.gallery-container {
    width: 100%;
    height: 100%;
    header {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;

        .gallery-content-container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            background-image: url('/gallery/customer-experience-bg.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            .gallery-title {
                width: 100%;
                height: 100%;
                padding: 1rem 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: white;
                position: relative;
                z-index: 1;
                .title {
                    font-family: 'Bona+Nova', serif;
                    font-size: 82px;
                }
                .description {
                    font-size: 20px;
                    text-align: center;
                    max-width: 800px;
                }
            }
        }
        .gallery-content-container:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            z-index: 1;
        }
    }
    main {
        .gallery-photos-container {
            padding: 5rem 0 2rem;
        }
    }
}
</style>
<script>
import SimpleGallery from '~/components/gallery/SimpleGallery.vue'
export default {
    name: 'App',
    components: {
        SimpleGallery,
    },
    data() {
        return {
            images: [
                {
                    largeURL: '/gallery/rooms/room-gallery1.jpg',
                    thumbnailURL: '/gallery/rooms/room-gallery1.jpg',
                    width: 1920,
                    height: 1080,
                },
                {
                    largeURL: '/gallery/rooms/room-gallery2.jpg',
                    thumbnailURL: '/gallery/rooms/room-gallery2.jpg',
                    width: 1920,
                    height: 1080,
                },
                {
                    largeURL: '/gallery/rooms/room-gallery3.jpg',
                    thumbnailURL: '/gallery/rooms/room-gallery3.jpg',
                    width: 1920,
                    height: 1080,
                },
                {
                    largeURL: '/gallery/rooms/room-gallery4.jpg',
                    thumbnailURL: '/gallery/rooms/room-gallery4.jpg',
                    width: 1920,
                    height: 1080,
                },
                {
                    largeURL: '/gallery/rooms/room-gallery5.jpg',
                    thumbnailURL: '/gallery/rooms/room-gallery5.jpg',
                    width: 1920,
                    height: 1080,
                },
                {
                    largeURL: '/gallery/rooms/room-gallery6.jpg',
                    thumbnailURL: '/gallery/rooms/room-gallery6.jpg',
                    width: 1920,
                    height: 1080,
                },
            ],
        }
    },
}
</script>
