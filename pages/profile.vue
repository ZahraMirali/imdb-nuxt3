<template>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <h1>Profile page</h1>
</template>

<script setup>
    const title = 'My profile page';
    definePageMeta({
        layout: "sidebar"
    })
</script>