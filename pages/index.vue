<template>
    <h1>Home page</h1>
    <NuxtLink to="/about">go to about page</NuxtLink>
    <button @click="moveToAbout">go to about page</button>
    <NuxtLink to="/profile">Profile</NuxtLink>
</template>

<script setup>
    function moveToAbout(){
        navigateTo('about')
    }
</script>