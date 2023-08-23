<template>
  <button @click="toggle">Show Welcome</button>
  <component :is="MyComponent1" />

  <hr />

  <LazyHomeWelcome v-if="MyComponent2 === 'welcome'"/>
  <Counter v-else />

  <hr />

  <a href="#" @click="view('welcome')">Welcome </a>
  <a href="#" @click="view('counter')">Counter</a>
</template>

<script setup>
  const MyComponent1 = shallowRef(resolveComponent("Counter"));
  const MyComponent2 = ref("counter");

  function toggle(){
    MyComponent1.value = resolveComponent("HomeWelcome")
    MyComponent2.value = 'welcome';
  }

  function view(name){
    MyComponent2.value = name;
  }
</script>