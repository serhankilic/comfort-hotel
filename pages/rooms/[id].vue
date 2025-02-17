<script setup>
const params = useRoute().params
import { useRoomsStore } from '~/stores/rooms.js'
const roomsStore = useRoomsStore()

onBeforeMount(() => {
    console.log(roomsStore.findRoom('classic_room'))
})
</script>

<template>
    <h1>{{ params }}</h1>
</template>
