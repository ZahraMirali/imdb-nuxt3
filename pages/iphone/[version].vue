<template>
    <h1>iPhone {{ $route.params.version }} :) {{ version }}</h1>
    <button @click="addToCart">+</button>
</template>


<script setup>
    const route = useRoute();

    const version = computed(()=> {
        return route.params.version
    });

    const cart = useCart();
    function addToCart(){
        cart.value.push({
            name: `iPhone-${version}`
        })
    }
</script>