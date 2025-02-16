<template>
    <div :id="galleryID" class="photoswipe-container">
        <a
            v-for="(image, key) in imagesData"
            :key="key"
            :href="image.largeURL"
            :data-pswp-width="image.width"
            :data-pswp-height="image.height"
            target="_blank"
            rel="noreferrer"
            class="photoswipe-item"
        >
            <img :src="image.thumbnailURL" alt="" />
        </a>
    </div>
</template>

<style>
.photoswipe-container {
    width: 100%;
    height: 100%;
    display: flex;
    column-gap: 30px;
    row-gap: 60px;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 5rem;
    .photoswipe-item {
        width: 500px;
        height: 300px;
        box-shadow:
            rgba(0, 0, 0, 0.19) 0 10px 20px,
            rgba(0, 0, 0, 0.23) 0 6px 6px;
    }
}
</style>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

export default {
    name: 'SimpleGallery',
    props: {
        galleryID: String,
        images: Array,
    },
    setup(props) {
        return {
            imagesData: props.images,
        }
    },
    mounted() {
        if (!this.lightbox) {
            this.lightbox = new PhotoSwipeLightbox({
                gallery: '#' + this.$props.galleryID,
                children: 'a',
                pswpModule: () => import('photoswipe'),
            })
            this.lightbox.init()
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy()
            this.lightbox = null
        }
    },
    methods: {},
}
</script>
