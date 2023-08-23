<template>
    <h1>iPhone {{ $route.params.version }} :) {{ version }}</h1>
</template>


<script setup>
    const route = useRoute();

    const version = computed(()=> {
        return route.params.version
    })
</script>