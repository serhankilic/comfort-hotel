<script setup>
const params = useRoute().params
</script>

<template>
    <h1>{{ params.id }}</h1>
</template>
