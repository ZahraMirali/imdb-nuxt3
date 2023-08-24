<template>
    <form @submit.prevent="onsubmit">
        <input type="text" v-model="form.email"/>
        <input type="password" v-model="form.password" />
        <button :disabled="loading" type="submit">Login</button>
        <span v-if="loading">...</span>
    </form>
</template>

<script setup>
    const loading = ref(false);
    const url = "https://reqres.in/api/login";
    const form = reactive({
        email: "eve.holt@reqres.in",
        password: 'cityslicka'
    });

    async function onsubmit(){
        loading.value = true;
        const res = await useFetch(url, {
            method: 'post',
            body: form
        });
        loading.value = false;
        console.log(res)
    }
</script>