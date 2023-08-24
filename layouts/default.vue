<template>
    <NuxtLink to="/">HOME</NuxtLink>
    <p class="bg-purple-700 text-3xl font-bold underline text-white">Default layout {{ cart.length }} - {{  auth.isAuthenticated }}</p>
    <slot></slot>
</template>

<script setup>
    const cart = useCart();
    console.log(cart.value.length);
    const auth = useAuth();
</script>