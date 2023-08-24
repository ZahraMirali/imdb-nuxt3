<template>
    <h1>iPhones page</h1>
    <NuxtLink v-for="iphone in iphones" :key="iphone" :to="`/iphone/${iphone}`">
        <img width="200" src="/images/iphone14.webp" />
    </NuxtLink>
</template>

<script setup>
useHead({
    title: "My iPhones page",
});

const { data } = await useFetch("/api/iphone");
const iphones = data;
</script>
